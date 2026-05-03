import { motion } from "framer-motion";
import { Mic, Brain, Glasses, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Reveal";

const steps = [
  { icon: Mic, title: "Capture", desc: "Beamforming mics isolate the speaker's voice." },
  { icon: Brain, title: "Understand", desc: "On-device AI converts speech to text & emotion." },
  { icon: Glasses, title: "See", desc: "Subtitles + emojis project on the AR lens." },
];

export const HowItWorks = () => (
  <section id="how" className="py-24 relative">
    <div className="container-pad">
      <SectionHeader
        eyebrow="How it works"
        title={<>From sound to <span className="gradient-text">sight</span> in milliseconds</>}
      />

      <div className="grid md:grid-cols-3 gap-6 relative">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative glass-card p-8 text-center"
          >
            <div className="mx-auto grid place-items-center w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
              <s.icon className="w-7 h-7" aria-hidden />
            </div>
            <span className="font-mono text-xs text-primary tracking-widest">STEP 0{i + 1}</span>
            <h3 className="mt-2 font-display font-semibold text-2xl">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.desc}</p>

            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10"
              >
                <ArrowRight className="w-8 h-8 text-primary" aria-hidden />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 mx-auto max-w-2xl glass-card border-primary/40 p-6 text-center shadow-glow"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-primary">Live preview</span>
        <p className="mt-3 font-display text-2xl md:text-3xl">
          "You're amazing." <span aria-hidden>💙</span>
        </p>
      </motion.div>
    </div>
  </section>
);
