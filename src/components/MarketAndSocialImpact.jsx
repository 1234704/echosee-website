import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Accessibility, Users, Briefcase } from "lucide-react";
import SmoothCounter from "./SmoothCounter";

const impactCards = [
  {
    icon: Accessibility,
    title: "Accessibility",
    desc: "Real-time subtitles for seamless face-to-face interaction.",
  },
  {
    icon: Users,
    title: "Empowerment",
    desc: "Fostering independence and confidence in daily communication.",
  },
  {
    icon: Globe,
    title: "Inclusion",
    desc: "Bridges the gap between hearing and non-hearing communities.",
  },
  {
    icon: Briefcase,
    title: "Economic Impact",
    desc: "Unlocking new career and higher education opportunities.",
  },
];

export default function ImpactSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-black overflow-hidden font-sans"
    >
      {/* AR GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{ visible: { opacity: 1 } }}
            className="text-blue-400 font-mono tracking-widest uppercase text-sm"
          >
            // Market Analysis & Social Value
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
          >
            The EchoSee Mission
          </motion.h2>
        </div>

        {/* STATS HUD - The "Market Impact" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-y border-white/10 py-12 bg-white/[0.02] backdrop-blur-sm">
          <SmoothCounter target={430} label="Global Hearing Loss" suffix="M+" />
          <SmoothCounter target={20} label="Users in Pakistan" suffix="M+" />
          <SmoothCounter target={100} label="Inclusion Target" suffix="%" />
        </div>

        {/* SOCIAL IMPACT CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: idx * 0.1 },
                  },
                }}
                initial="hidden"
                animate={controls}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
