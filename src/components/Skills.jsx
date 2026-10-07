import { motion } from "framer-motion";
import { experiences, projects, skillGroups } from "../data/portfolio.js";
import { getTech } from "../data/techCatalog.js";
import { SectionHeading } from "./SectionHeading.jsx";

const normalizeTech = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
const techAliases = {
  react: ["reactjs"],
  reactjs: ["react"],
  nextjs: ["next.js"],
  "next.js": ["nextjs"],
  nodejs: ["node.js"],
  "node.js": ["nodejs"],
  tailwindcss: ["tailwind"],
  tailwind: ["tailwind css"],
  github: ["github"],
};

function TechChip({ name, groupLabel }) {
  const { icon: Icon, color } = getTech(name);
  const names = [name, ...(techAliases[normalizeTech(name)] || [])].map(normalizeTech);
  const usedBy = [
    ...(groupLabel === "Data Engineering" ? ["Coinbase"] : []),
    ...projects.filter((project) => project.tech.some((tech) => names.includes(normalizeTech(tech)))).map((project) => project.name),
    ...experiences.filter((experience) => experience.tags.some((tag) => names.includes(normalizeTech(tag)))).map((experience) => experience.company),
  ].filter((item, index, items) => items.indexOf(item) === index);
  return (
    <span
      className="group relative inline-flex min-h-10 items-center gap-2 border border-ink/20 px-3 text-sm text-ink-soft transition-colors hover:border-[var(--tech-color)] hover:text-ink focus-within:border-[var(--tech-color)] focus-within:text-ink"
      style={{ "--tech-color": color }}
      tabIndex="0"
    >
      <Icon size={18} aria-hidden="true" className="text-ink transition-colors group-hover:text-[var(--tech-color)] group-focus:text-[var(--tech-color)]" />
      <span>{name}</span>
      {usedBy.length ? (
        <span className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 hidden w-max max-w-64 border border-ink/20 bg-paper-strong px-3 py-2 text-xs leading-5 text-ink shadow-soft group-hover:block group-focus:block">
          Used in: {usedBy.join(", ")}
        </span>
      ) : null}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-paper-strong py-[var(--section-space)]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <SectionHeading eyebrow="04 / Engineering stack" title="Tools are context, not identity.">
            A grouped view of the technologies I have actually used across product interfaces, services, data workflows, and infrastructure.
          </SectionHeading>
          <div className="border-t border-ink/20">
            {skillGroups.map((group, index) => (
              <motion.div key={group.label} className="grid gap-4 border-b border-ink/15 py-6 sm:grid-cols-[0.3fr_0.7fr] sm:gap-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }}>
                <div className="flex items-start gap-3">
                  <span className="mono text-xs text-accent">0{index + 1}</span>
                  <h3 className="text-sm font-semibold">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => <TechChip key={skill} name={skill} groupLabel={group.label} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
