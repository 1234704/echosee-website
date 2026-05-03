import { motion } from "framer-motion";
import { Subtitles, Type, Smile, Languages, Cpu, BatteryFull } from "lucide-react";
import { SectionHeader } from "./Reveal";

const items = [
  { icon: Subtitles, title: "Real-time subtitles", desc: "Lens-projected captions appear as people speak.", emoji: "💬" },
  { icon: Type, title: "Adjustable font size", desc: "Comfort-first typography from compact to large.", emoji: "🔤" },
  { icon: Smile, title: "Emoji emotion display", desc: "AI senses tone and adds emotion cues.", emoji: "😊" },
  { icon: Languages, title: "Multilingual", desc: "Urdu, English & 20+ premium languages.", emoji: "🌍" },
  { icon: Cpu, title: "Offline AI chip", desc: "On-device processing — no internet required.", emoji: "⚡" },
  { icon: BatteryFull, title: "10–12h battery", desc: "All-day comfort, ready when you are.", emoji: "🔋" },
];

export const Highlights = () => (
  <section className="py-24 relative" id="highlights">
    <div className="container-pad">
      <SectionHeader
        eyebrow="Highlights"
        title={<>Designed for <span className="gradient-text">every moment</span></>}
        description="A futuristic toolkit for connection — packed into a frame as light as your favourite glasses."
      />

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group glass-card p-6 hover:border-primary/40 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform">
                <it.icon className="w-6 h-6" aria-hidden />
              </div>
              <span className="text-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" aria-hidden>
                {it.emoji}
              </span>
            </div>
            <h3 className="mt-5 font-display font-semibold text-xl">{it.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);
