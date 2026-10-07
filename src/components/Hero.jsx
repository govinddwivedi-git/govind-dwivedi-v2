import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { MapPin } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { assets, identity, proofPoints } from "../data/portfolio.js";

const socialIcons = { GitHub: SiGithub, LinkedIn: FaLinkedin, X: SiX };

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 section-shell min-h-dvh pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <p className="eyebrow">Software engineer / systems thinker</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(4.2rem,10.5vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-balance">
            Govind
            <br />
            <span className="text-accent">Dwivedi.</span>
          </h1>
          <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-lg leading-8 text-ink-soft">
              {identity.intro} I care about the seam between a reliable system and the person who has to use it.
            </p>
            <p className="mono text-xs leading-6 text-ink-soft sm:text-right">
              BASED IN
              <br />
              <span className="font-medium text-ink">{identity.location}</span>
            </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex min-h-12 items-center bg-ink px-5 text-sm font-bold text-paper transition-colors hover:bg-accent">
              Explore selected work <span className="ml-4 text-accent-soft" aria-hidden="true">↘</span>
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="relative border-t border-ink/30 pt-5 lg:mb-2"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          aria-label="Profile overview"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="kicker">A visible system</p>
              <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight">
                Product thinking, backend discipline, frontend care.
              </p>
            </div>
            <span className="mono text-xs text-signal">01 / 07</span>
          </div>
          <div className="mt-8 grid grid-cols-[112px_1fr] gap-5 border-y border-ink/15 py-5">
            <div className="group/portrait relative aspect-[4/5] overflow-hidden rounded-md bg-night">
              <img src={assets.govindPortrait} alt="Govind Dwivedi" className="h-full w-full object-cover object-top grayscale transition duration-500 group-hover/portrait:grayscale-0" width="700" height="700" decoding="async" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="mono text-xs text-ink-soft">CURRENT FOCUS</p>
                <p className="mt-2 text-sm font-medium leading-6">Software engineering across backend systems, data infrastructure, and applied AI.</p>
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-ink-soft"><MapPin size={14} aria-hidden="true" /> {identity.educationSummary}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-ink/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {proofPoints.map((point, index) => (
              <div key={point.label} className={`border-b border-ink/15 px-3 py-5 text-center last:border-b-0 sm:border-b-0 ${index >= 2 ? "sm:border-t sm:border-ink/15" : ""}`}>
                <p className="metric-number text-xl font-medium sm:text-2xl">{point.value}</p>
                <p className="mt-2 text-[0.65rem] font-semibold uppercase leading-4 text-ink-soft">{point.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4">
            {identity.socials.filter((social) => social.label !== "Discord").map((social) => {
              const Icon = socialIcons[social.label];
              return <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="mono inline-flex min-h-10 items-center gap-2 text-xs text-ink-soft transition-colors hover:text-accent">{Icon ? <Icon size={14} aria-hidden="true" /> : null}{social.label}</a>;
            })}
          </div>
        </motion.aside>
      </div>
      <div className="mt-16 flex items-center gap-4 border-t border-ink/15 pt-4">
        <span className="mono text-[0.65rem] text-ink-soft">SCROLL TO EXPLORE</span>
        <span className="h-px max-w-24 flex-1 bg-ink/25" />
        <span className="mono text-[0.65rem] text-ink-soft">01 — 07</span>
      </div>
    </section>
  );
}
