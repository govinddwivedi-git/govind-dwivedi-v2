import { useEffect, useMemo, useState } from "react";
import { codingProfiles } from "../data/portfolio.js";
import { fetchCodeChef, fetchCodeforces } from "../services/codingStats.js";

const fetchers = {
  CodeChef: fetchCodeChef,
  Codeforces: fetchCodeforces,
};

const resultStore = new Map();

function buildUnavailable(profile, error) {
  return {
    platform: profile.platform,
    status: "unavailable",
    error: error?.message || "Live stats unavailable",
    metrics: [],
  };
}

function buildKnownGfg(profile) {
  const lastKnown = profile.lastKnown;
  return {
    platform: profile.platform,
    status: "known",
    headline: "4★",
    metrics: [
      { label: "Coding score", value: lastKnown.codingScore },
      { label: "Solved", value: lastKnown.totalProblemsSolved },
      { label: "Institute rank", value: lastKnown.instituteRank },
      { label: "Max streak", value: `${lastKnown.maxStreak} days` },
      { label: "POTDs solved", value: lastKnown.potdsSolved },
    ],
    distribution: lastKnown.solvedStats,
    meta: ["Hardcoded profile snapshot"],
    asOf: "June 2025",
  };
}

export function useCodingStats() {
  const [state, setState] = useState({
    status: "loading",
    stats: {},
  });

  const fetchableProfiles = useMemo(
    () => codingProfiles,
    [],
  );

  useEffect(() => {
    let mounted = true;

    async function load() {
      const entries = await Promise.all(
        fetchableProfiles.map(async (profile) => {
          const key = `${profile.platform}:${profile.username}`;
          if (profile.platform === "GeeksForGeeks" && profile.lastKnown) {
            const knownResult = buildKnownGfg(profile);
            resultStore.set(key, knownResult);
            return [profile.platform, knownResult];
          }
          if (resultStore.has(key)) {
            return [profile.platform, resultStore.get(key)];
          }

          try {
            const result = await fetchers[profile.platform](profile.username);
            resultStore.set(key, result);
            return [profile.platform, result];
          } catch (error) {
            const knownResult = buildUnavailable(profile, error);
            resultStore.set(key, knownResult);
            return [profile.platform, knownResult];
          }
        }),
      );

      if (mounted) {
        setState({
          status: "ready",
          stats: Object.fromEntries(entries),
        });
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [fetchableProfiles]);

  return state;
}
