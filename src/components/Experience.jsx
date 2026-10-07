import { motion } from "framer-motion";
import { FaAmazon } from "react-icons/fa";
import { SiCoinbase } from "react-icons/si";
import { experiences } from "../data/portfolio.js";
import { SectionHeading } from "./SectionHeading.jsx";

const companyLogos = {
  Coinbase: SiCoinbase,
  "Amazon ML Summer School": FaAmazon,
};

const companyLogoColors = {
  Coinbase: "#0052ff",
  "Amazon ML Summer School": "#232f3e",
};

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 night-section py-[var(--section-space)]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
          <SectionHeading eyebrow="01 / Experience" title="The work is the proof." tone="dark">
            A compact record of the problems I was trusted with, the systems I built, and the outcomes that followed.
          </SectionHeading>
          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/15" aria-hidden="true" />
            <div className="space-y-0">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  className="relative grid gap-7 border-t border-white/15 py-8 pl-8 first:pt-0 md:grid-cols-[0.34fr_0.66fr] md:gap-10 md:pl-9"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                >
                  <span className="absolute left-0 top-8 h-4 w-4 border-4 border-night bg-accent first:top-0" aria-hidden="true" />
                  <div>
                    <p className="eyebrow text-accent-soft">{experience.period}</p>
                    <div className="mt-3 flex flex-col items-start gap-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border border-white/15 bg-white">
                        {(() => {
                          const Logo = companyLogos[experience.company];
                          return Logo ? <Logo size={48} color={companyLogoColors[experience.company]} aria-label={`${experience.company} logo`} /> : <img src={experience.logo} alt={`${experience.company} logo`} className="h-full w-full object-contain scale-[1.65]" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-semibold text-night-ink">{experience.company}</h3>
                    </div>
                    <p className="mt-1 text-sm text-night-ink/60">{experience.role}</p>
                  </div>
                  <div>
                    <p className="mono text-xs uppercase tracking-[0.1em] text-accent-soft">{experience.category}</p>
                    <p className="mt-3 max-w-xl font-display text-3xl font-semibold leading-[0.98] text-night-ink md:text-4xl">{experience.impact}</p>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-night-ink/68">{experience.description}</p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {experience.tags.map((tag) => <span key={tag} className="mono text-[0.65rem] uppercase tracking-[0.08em] text-night-ink/55">{tag}</span>)}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
