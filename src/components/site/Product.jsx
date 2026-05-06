import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { Cpu, Mic, Camera, BatteryCharging, Eye, Sparkles } from "lucide-react";
import glassesSide from "@/assets/glasses-side.jpg";

const features = [
  {
    title: "Real-time transcription",
    desc: "Sub-200ms latency from speech to lens.",
  },
  {
    title: "Adjustable font size",
    desc: "Three comfort presets in a quick gesture.",
  },
  { title: "Emoji subtitles", desc: "Tone and emotion at a glance." },
  {
    title: "20+ languages",
    desc: "Live translation across Urdu, English & more.",
  },
  { title: "Offline AI", desc: "Private, fast, network-free processing." },
  { title: "Noise cancelling", desc: "Focus on the speaker, drop the crowd." },
];

const specs = [
  { icon: Eye, label: "AR lens + micro projector" },
  { icon: Cpu, label: "Custom on-device AI chip" },
  { icon: Mic, label: "Beamforming noise-cancel mic" },
  { icon: BatteryCharging, label: "10–12h battery, USB-C fast charge" },
  { icon: Camera, label: "Optional 5MP context camera" },
];

const demoLines = [
  { text: "How was your weekend?", emoji: "🙂" },
  { text: "It was amazing, thanks!", emoji: "✨" },
  { text: "Want to grab coffee later?", emoji: "☕" },
  { text: "Absolutely — see you at 5.", emoji: "👍" },
];

export const Product = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % demoLines.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="product" className="py-24 relative bg-black">
      <div className="container-pad">
        <SectionHeader
          eyebrow="The product"
          title={
            <>
              Engineered for <span className="gradient-text">clarity</span>
            </>
          }
          description="Every component handpicked for comfort, speed, and beautiful, accessible communication."
        />

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {features.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group glass-card p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 text-primary">
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  Feature
                </span>
              </div>
              <h3 className="mt-3 font-display font-semibold text-xl">
                {f.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">{f.desc}</p>
            </motion.li>
          ))}
        </ul>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden glass-card aspect-[4/3]">
              <img
                src={glassesSide}
                alt="Side profile of EchoSee smart glasses with cyan accent"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-full object-cover float-slow"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="font-display text-3xl font-bold">
                Live subtitle demo
              </h3>
              <p className="mt-3 text-muted-foreground">
                A glimpse of what wearers see, in real time.
              </p>
            </Reveal>

            <div className="mt-8 glass-card p-6 border-primary/30">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />{" "}
                Lens preview
              </div>
              <div className="mt-4 min-h-[120px] grid">
                {demoLines.map((l, i) => (
                  <motion.div
                    key={l.text}
                    initial={false}
                    animate={{
                      opacity: i === idx ? 1 : 0,
                      y: i === idx ? 0 : 10,
                    }}
                    transition={{ duration: 0.5 }}
                    className="row-start-1 col-start-1"
                  >
                    <p className="font-mono text-2xl md:text-3xl text-balance">
                      {l.text}{" "}
                      <motion.span
                        key={l.emoji + i + idx}
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: i === idx ? 1 : 0, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                        className="inline-block"
                        aria-hidden
                      >
                        {l.emoji}
                      </motion.span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scaleX: 0.7 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-5 origin-left"
            >
              <s.icon className="w-6 h-6 text-primary" aria-hidden />
              <p className="mt-3 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
