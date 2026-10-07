export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const username = typeof req.query?.username === "string" ? req.query.username : "govinddwivedi";

  try {
    const response = await fetch(`https://geeks-for-geeks-api.vercel.app/${encodeURIComponent(username)}`);
    if (!response.ok) {
      throw new Error(`GFG API responded with status ${response.status}`);
    }

    const data = await response.json();
    if (!data?.info || !data?.solvedStats) {
      throw new Error("GFG API response did not include profile data.");
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: error.message || "GFG profile unavailable" });
  }
}