const timeoutMs = 9000;

async function getJson(url) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

export async function fetchCodeChef(username) {
  const data = await getJson(`https://codechef-unofficial-api.vercel.app/${username}`);
  if (!data?.success) {
    throw new Error("CodeChef response did not include a successful profile payload.");
  }

  return {
    platform: "CodeChef",
    status: "live",
    profileImage: data.profile,
    headline: data.stars,
    metrics: [
      { label: "Rating", value: data.highestRating },
      { label: "Global rank", value: data.globalRank ? `#${data.globalRank}` : null },
      { label: "Country rank", value: data.countryRank ? `#${data.countryRank}` : null },
    ].filter((metric) => metric.value !== null && metric.value !== undefined),
    meta: [data.name, data.countryName].filter(Boolean),
    trend: data.ratingData
      ?.filter((entry) => Number.isFinite(Number(entry.rating)))
      .sort((a, b) => new Date(a.end_date) - new Date(b.end_date))
      .slice(-8)
      .map((entry) => Number(entry.rating)) ?? [],
  };
}

export async function fetchCodeforces(username) {
  const [profileResult, ratingResult] = await Promise.allSettled([
    getJson(`https://codeforces.com/api/user.info?handles=${encodeURIComponent(username)}`),
    getJson(`https://codeforces.com/api/user.rating?handle=${encodeURIComponent(username)}`),
  ]);
  if (profileResult.status === "rejected") {
    throw profileResult.reason;
  }

  const data = profileResult.value;
  const user = data?.result?.[0];
  if (data?.status !== "OK" || !user) {
    throw new Error("Codeforces response did not include a profile.");
  }
  const ratingHistory = ratingResult.status === "fulfilled" && ratingResult.value?.status === "OK"
    ? ratingResult.value.result
      ?.filter((contest) => Number.isFinite(Number(contest.newRating)) && Number.isFinite(Number(contest.ratingUpdateTimeSeconds)))
      .sort((a, b) => a.ratingUpdateTimeSeconds - b.ratingUpdateTimeSeconds)
      .slice(-8)
      .map((contest) => Number(contest.newRating))
    : [];

  return {
    platform: "Codeforces",
    status: "live",
    profileImage: user.titlePhoto,
    headline: user.rank || user.maxRank || "Profile",
    metrics: [
      { label: "Current rating", value: user.rating },
      { label: "Max rating", value: user.maxRating },
      { label: "Rank", value: user.rank || user.maxRank },
    ].filter((metric) => metric.value !== null && metric.value !== undefined),
    meta: [user.country, user.organization].filter(Boolean),
    trend: ratingHistory,
  };
}
