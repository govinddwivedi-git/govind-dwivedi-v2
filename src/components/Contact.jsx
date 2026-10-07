import { FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { identity } from "../data/portfolio.js";

const icons = { LinkedIn: FaLinkedin, GitHub: SiGithub, X: SiX, Email: Mail };

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24 night-section py-[var(--section-space)]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-24">
          <div>
            <p className="eyebrow text-accent-soft">06 / Contact</p>
            <h2 className="mt-5 max-w-4xl font-display text-6xl font-semibold leading-[0.88] tracking-tight text-night-ink sm:text-8xl">Let&apos;s build something that holds up.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-md text-base leading-7 text-night-ink/68">For software engineering roles, internships, or a thoughtful engineering conversation, LinkedIn and email are the fastest paths. Project history is open on GitHub.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[...identity.socials.filter((social) => social.label !== "Discord"), { label: "Email", href: "mailto:workwithgovind325@gmail.com" }].map((social) => {
                const Icon = icons[social.label];
                return <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="flex min-h-14 items-center justify-between border border-night-ink/20 px-4 text-sm font-semibold text-night-ink transition-colors hover:bg-night-ink hover:text-night">{social.label}{Icon ? <Icon size={16} aria-hidden="true" /> : null}</a>;
              })}
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-night-ink/15 pt-5 text-xs text-night-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span className="mono">GOVIND DWIVEDI / SOFTWARE ENGINEER</span>
          <span>© {new Date().getFullYear()} — built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
