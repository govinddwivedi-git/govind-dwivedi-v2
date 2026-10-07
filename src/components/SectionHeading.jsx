import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, children, align = "left", tone = "light" }) {
  const dark = tone === "dark";
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className={`eyebrow ${dark ? "text-accent-soft" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-display text-5xl font-semibold leading-[0.92] tracking-tight text-balance sm:text-6xl ${dark ? "text-night-ink" : "text-ink"}`}>{title}</h2>
      {children ? <p className={`mt-6 max-w-xl text-base leading-7 ${dark ? "text-night-ink/68" : "text-ink-soft"}`}>{children}</p> : null}
    </motion.div>
  );
}
