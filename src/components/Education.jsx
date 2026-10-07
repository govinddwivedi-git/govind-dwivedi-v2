import { motion } from "framer-motion";
import { achievements, education } from "../data/portfolio.js";
import { SectionHeading } from "./SectionHeading.jsx";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 section-shell py-[var(--section-space)]">
      <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
        <SectionHeading eyebrow="05 / Education" title="Evidence compounds.">
          Education and achievements stay concise here: enough context to understand the signal without turning the page into a full resume.
        </SectionHeading>
        <div>
          <div className="border-t border-ink/20">
            {education.map((item) => (
              <motion.article key={item.degree} className="grid gap-4 border-b border-ink/15 py-7 sm:grid-cols-[0.27fr_0.73fr] sm:gap-8" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="eyebrow">{item.period}</p>
                <div>
                  <h3 className="text-xl font-semibold leading-tight">{item.degree}</h3>
                  <p className="mt-2 text-sm font-medium text-ink-soft">{item.institution}</p>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-ink-soft">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 border-t-2 border-ink pt-5">
            <p className="kicker">Verified signals</p>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {achievements.map((achievement, index) => (
                <li key={achievement} className="flex gap-3 text-sm leading-6 text-ink-soft">
                  <span className="mono shrink-0 text-xs text-accent">0{index + 1}</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
