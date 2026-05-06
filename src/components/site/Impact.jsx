import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Globe2, Users, Activity } from "lucide-react";
import { SectionHeader, Reveal } from "./Reveal";

const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Globe2,
    value: 430,
    suffix: "M+",
    label: "people globally with hearing loss",
  },
  { icon: Users, value: 20, suffix: "M+", label: "affected in Pakistan alone" },
  {
    icon: Activity,
    value: 95,
    suffix: "%",
    label: "of users want a non-stigmatising solution",
  },
];

export const Impact = () => (
  <section id="impact" className="py-24 relative bg-black">
    <div className="container-pad">
      <SectionHeader
        eyebrow="Market & impact"
        title={
          <>
            A movement, <span className="gradient-text">not a product</span>
          </>
        }
        description="The numbers behind the silence — and our chance to change them."
      />

      <ul className="grid md:grid-cols-3 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="glass-card p-8 hover:shadow-glow transition-shadow"
          >
            <s.icon className="w-7 h-7 text-primary" aria-hidden />
            <p className="mt-5 font-display font-bold text-5xl gradient-text">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-muted-foreground">{s.label}</p>
          </motion.li>
        ))}
      </ul>

      <Reveal>
        <div className="glass-card p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold">
            Our target users
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Students, professionals, parents, and elders — anyone who deserves
            to follow every word in a noisy, fast-moving world.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
