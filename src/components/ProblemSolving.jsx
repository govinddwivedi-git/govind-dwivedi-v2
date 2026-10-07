import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { codingProfiles } from "../data/portfolio.js";
import { useCodingStats } from "../hooks/useCodingStats.js";
import { SectionHeading } from "./SectionHeading.jsx";

const icons = { CodeChef: SiCodechef, Codeforces: SiCodeforces, GeeksForGeeks: SiGeeksforgeeks, LeetCode: SiLeetcode };
const formatNumber = (value) => (typeof value === "number" ? value.toLocaleString() : value);

function Distribution({ distribution }) {
  if (!distribution) return null;
  const entries = Object.entries(distribution)
    .map(([key, value]) => [key, typeof value === "number" ? value : value?.count])
    .filter(([, value]) => Number.isFinite(value) && value > 0);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  if (!total) return null;
  return (
    <div className="mt-5" aria-label="Problem difficulty distribution">
      <div className="flex h-3 overflow-hidden border border-ink/15">
        {entries.map(([label, value], index) => <span key={label} className="h-full" style={{ width: `${(value / total) * 100}%`, backgroundColor: `color-mix(in srgb, var(--accent) ${45 + index * 14}%, var(--paper-strong))` }} />)}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {entries.map(([label, value], index) => <span key={label} className="mono text-[0.62rem] uppercase text-ink-soft"><i className="mr-1 inline-block h-2 w-2" style={{ backgroundColor: `color-mix(in srgb, var(--accent) ${45 + index * 14}%, var(--paper-strong))` }} aria-hidden="true" />{label} {value}</span>)}
      </div>
    </div>
  );
}

function Skeleton() {
  return <div className="animate-pulse" role="status" aria-label="Stats loading"><div className="h-4 w-24 bg-ink/10" /><div className="mt-4 h-10 w-32 bg-ink/10" /><div className="mt-4 h-3 w-2/3 bg-ink/10" /></div>;
}

function Metric({ metric, large = false }) {
  return <div><p className="mono text-[0.62rem] uppercase tracking-[0.08em] text-ink-soft">{metric.label}</p><p className={`${large ? "mt-2 text-4xl" : "mt-1 text-lg"} metric-number font-medium`}>{formatNumber(metric.value)}</p></div>;
}

function Sparkline({ values }) {
  if (!values?.length || values.length < 2) return null;
  const min = Math.min(...values);
  const range = Math.max(...values) - min || 1;
  const points = values.map((value, index) => `${(index / (values.length - 1)) * 100},${28 - ((value - min) / range) * 24}`).join(" ");
  return <div className="mt-5 border-t border-ink/15 pt-3"><p className="kicker">Rating trend</p><svg viewBox="0 0 100 30" className="mt-2 h-8 w-full text-accent" role="img" aria-label="Recent rating trend"><polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg></div>;
}

function PlatformCard({ profile, stat, loading, flagship = false }) {
  const Icon = icons[profile.platform];
  const primary = stat?.metrics?.[0];
  const secondary = stat?.metrics?.slice(1) || [];
  const hasEmbeddedCard = profile.platform === "LeetCode" && profile.endpoint;
  return (
    <motion.a href={profile.href} target="_blank" rel="noreferrer" className={`group relative flex min-h-[290px] flex-col border border-ink/15 bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-accent focus-visible:border-accent ${flagship ? "md:col-span-3 lg:col-span-3 lg:w-2/3 lg:justify-self-center" : ""}`} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3"><Icon size={24} style={{ color: profile.accent }} aria-hidden="true" /><div>{profile.platform !== "GeeksForGeeks" ? <h3 className="font-semibold">{profile.platform}</h3> : null}<p className={`mono text-[0.65rem] text-ink-soft ${profile.platform !== "GeeksForGeeks" ? "mt-1" : ""}`}>@{profile.username}</p></div></div>
        <ArrowUpRight size={18} className="text-ink-soft transition group-hover:text-accent" aria-hidden="true" />
      </div>
      {loading ? <div className="mt-10"><Skeleton /></div> : hasEmbeddedCard ? <div className="mt-6 flex flex-1 items-center justify-center overflow-hidden border border-ink/10 bg-paper-strong p-2"><img src={profile.endpoint} alt={`${profile.platform} statistics for ${profile.username}`} width="500" height="400" loading="lazy" className="h-auto w-full max-w-[500px]" /></div> : !stat ? <div className="mt-10 text-sm text-ink-soft"><p className="font-semibold text-ink">Profile available</p><p className="mt-2">Open the profile for current contest details.</p></div> : stat.status === "unavailable" ? <div className="mt-10 text-sm text-ink-soft"><p className="font-semibold text-ink">Stats unavailable</p><p className="mt-2">{stat.error}</p></div> : (
        <div className="mt-8 flex flex-1 flex-col">
          <div className="flex flex-wrap items-end justify-between gap-4"><div>{primary ? <Metric metric={{ ...primary, label: profile.platform === "CodeChef" || profile.platform === "Codeforces" ? "Rating" : primary.label }} large /> : <p className="text-sm text-ink-soft">Profile available</p>}<p className="mt-2 inline-flex border border-accent/30 px-2 py-1 text-xs text-accent">{stat.headline || "Profile"}</p></div><span className="mono text-[0.62rem] text-ink-soft">Current</span></div>
          <div className="mt-auto grid grid-cols-2 gap-4 border-t border-ink/15 pt-4">{secondary.map((metric) => <Metric key={metric.label} metric={metric} />)}</div>
          <Sparkline values={stat.trend} />
          <Distribution distribution={stat.distribution} />
        </div>
      )}
    </motion.a>
  );
}

export function ProblemSolving() {
  const { status, stats } = useCodingStats();
  const loading = status === "loading";

  return (
    <section id="problem-solving" className="scroll-mt-24 bg-paper-strong py-[var(--section-space)]" aria-busy={loading}>
      <div className="section-shell">
        <SectionHeading eyebrow="02 / Problem solving" title="A practice, not a scoreboard.">
          A concise view of the platforms where I practice: ratings, ranks, streaks, and difficulty distributions.
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {codingProfiles.map((profile) => <PlatformCard key={profile.platform} profile={profile} stat={stats[profile.platform]} loading={loading} flagship={profile.platform === "LeetCode"} />)}
        </div>
      </div>
    </section>
  );
}
