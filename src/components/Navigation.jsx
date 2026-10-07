import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets, navigation } from "../data/portfolio.js";

const HEADER_OFFSET = 88;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navigation[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      const readingLine = Math.min(window.innerHeight * 0.35, HEADER_OFFSET + 120);
      const current = sections.reduce((candidate, section) => {
        return section.getBoundingClientRect().top <= readingLine ? section.id : candidate;
      }, navigation[0].id);
      setActive(atPageEnd ? navigation[navigation.length - 1].id : current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNav = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        className={`mx-auto flex min-h-14 max-w-[1280px] items-center justify-between border px-3 backdrop-blur-md transition-colors duration-300 sm:px-5 ${
          scrolled ? "border-ink/20 bg-paper/[.92]" : "border-ink/15 bg-paper/[.92]"
        }`}
        aria-label="Primary navigation"
      >
        <a href="#" className="flex min-h-11 items-center gap-3 pr-3" aria-label="Go to top">
          <img src={assets.logo} alt="Govind Dwivedi" width="590" height="110" className="h-auto w-24 object-contain invert sm:w-32" />
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative flex min-h-11 items-center gap-2 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span className="mono text-[0.6rem] text-accent">{item.number}</span>
                {item.label}
                {isActive ? (
                  <motion.span layoutId="active-nav-underline" className="absolute bottom-1 left-0 h-px w-full bg-accent" aria-hidden="true" />
                ) : null}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden min-h-11 items-center gap-2 border border-ink/20 px-4 text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:bg-ink hover:text-paper md:inline-flex"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-signal" aria-hidden="true" />
          Open to work
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink/20 text-ink md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="mono text-xs">{open ? "CLOSE" : "MENU"}</span>
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-[1280px] border border-ink/15 bg-paper p-2 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNav}
              aria-current={active === item.id ? "location" : undefined}
              className="flex min-h-11 items-center gap-3 border-b border-ink/10 px-3 py-3 text-sm font-semibold last:border-0 hover:bg-ink/5"
            >
              <span className="mono text-xs text-accent">{item.number}</span>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export { HEADER_OFFSET };
