import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export const SectionHeader = ({ eyebrow, title, description, align = "center" }) => (
  <div className={`max-w-3xl mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <Reveal>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/5">
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.1}>
      <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl tracking-tight text-balance">
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={0.2}>
        <p className="mt-4 text-lg text-muted-foreground text-balance">{description}</p>
      </Reveal>
    )}
  </div>
);
