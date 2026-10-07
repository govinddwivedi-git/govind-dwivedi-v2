import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/portfolio.js";
import { getTech } from "../data/techCatalog.js";
import { SectionHeading } from "./SectionHeading.jsx";

function BrowserFrame({ project, featured = false }) {
  return (
    <div className={`group/preview overflow-hidden border border-ink/20 bg-night ${featured ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
      <div className="flex h-7 items-center gap-1 border-b border-white/10 bg-night-soft px-3" aria-hidden="true"><i className="h-2 w-2 rounded-full bg-accent-soft/70" /><i className="h-2 w-2 rounded-full bg-paper/40" /><i className="h-2 w-2 rounded-full bg-paper/20" /><span className="ml-3 h-4 flex-1 border border-white/10 px-2 text-[0.55rem] leading-3 text-paper/50">preview / {project.name}</span></div>
      <img src={project.image} alt={`${project.name} interface preview`} className="h-[calc(100%-1.75rem)] w-full object-contain object-top grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-within:grayscale-0" width="1280" height="800" loading={featured ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 border border-ink/20 px-3 text-xs font-semibold transition-colors hover:border-accent hover:text-accent">Live <ArrowUpRight size={14} aria-hidden="true" /></a> : null}
      {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 border border-ink/20 px-3 text-xs font-semibold transition-colors hover:border-accent hover:text-accent">Source <SiGithub size={14} aria-hidden="true" /></a> : null}
    </div>
  );
}

function TechRow({ project }) {
  return <div className="flex flex-wrap gap-2">{project.tech.map((tech) => { const { icon: Icon, color } = getTech(tech); return <span key={tech} className="inline-flex items-center gap-1.5 text-xs text-ink-soft" title={tech}><Icon size={15} style={{ color }} aria-hidden="true" />{tech}</span>; })}</div>;
}

function ProjectCard({ project, index }) {
  return (
    <motion.article className="group flex h-full flex-col border border-ink/15 bg-paper-strong p-4 transition duration-300 hover:-translate-y-1 hover:border-accent sm:p-5" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.35, delay: index * 0.04 }}>
      <BrowserFrame project={project} />
      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow">{project.status} / {String(index + 2).padStart(2, "0")}</p>
        <h3 className="mt-2 text-2xl font-semibold leading-tight">{project.name}</h3>
        <p className="mt-2 text-sm leading-6 text-ink-soft">{project.short}</p>
        <div className="mt-auto space-y-5 pt-6"><TechRow project={project} /><ProjectLinks project={project} /></div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.find((project) => project.featured) || projects[0];
  const supporting = projects.filter((project) => project !== featured);
  return (
    <section id="projects" className="scroll-mt-24 section-shell py-[var(--section-space)]">
      <SectionHeading eyebrow="03 / Projects" title="Systems with a point of view.">
        A focused selection of interfaces, infrastructure, and experiments with the original project links intact.
      </SectionHeading>
      <motion.article className="group mt-12 grid gap-0 border-y border-ink/20 lg:grid-cols-[1.15fr_0.85fr]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }}>
        <BrowserFrame project={featured} featured />
        <div className="flex flex-col justify-between border-l border-ink/15 bg-paper-strong p-7 sm:p-10">
          <div><p className="eyebrow">{featured.status} / featured project</p><h3 className="mt-5 max-w-md font-display text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl">{featured.name}</h3><p className="mt-6 max-w-md text-base leading-7 text-ink-soft">{featured.description}</p></div>
          <div className="mt-10 space-y-5"><TechRow project={featured} /><ProjectLinks project={featured} /></div>
        </div>
      </motion.article>
      <div className="mt-14 grid gap-5 md:grid-cols-2">{supporting.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
    </section>
  );
}
