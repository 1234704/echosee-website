import { motion } from "framer-motion";
import {
  Subtitles,
  Type,
  Smile,
  Languages,
  Cpu,
  BatteryFull,
} from "lucide-react";
import { SectionHeader } from "./Reveal";

const items = [
  {
    icon: Subtitles,
    title: "Real-time subtitles",
    desc: "Lens-projected captions appear as people speak.",
    emoji: "💬",
    gradient: "from-purple-600/30 to-transparent",
  },
  {
    icon: Type,
    title: "Adjustable font size",
    desc: "Comfort-first typography from compact to large.",
    emoji: "🔤",
    gradient: "from-blue-600/30 to-transparent",
  },
  {
    icon: Smile,
    title: "Emoji emotion display",
    desc: "AI senses tone and adds emotion cues.",
    emoji: "😊",
    gradient: "from-purple-600/30 to-transparent",
  },
  {
    icon: Languages,
    title: "Multilingual",
    desc: "Urdu, English & 20+ premium languages.",
    emoji: "🌍",
    gradient: "from-blue-600/30 to-transparent",
  },
  {
    icon: Cpu,
    title: "Offline AI chip",
    desc: "On-device processing — no internet required.",
    emoji: "⚡",
    gradient: "from-purple-600/30 to-transparent",
  },
  {
    icon: BatteryFull,
    title: "10–12h battery",
    desc: "All-day comfort, ready when you are.",
    emoji: "🔋",
    gradient: "from-blue-600/30 to-transparent",
  },
];

export const Highlights = () => (
  <section className="py-24 relative bg-black" id="highlights">
    <div className="container-pad">
      <SectionHeader
        eyebrow="Highlights"
        title={
          <>
            Designed for <span className="gradient-text">every moment</span>
          </>
        }
        description="A futuristic toolkit for connection — packed into a frame as light as your favourite glasses."
      />

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
          >
            <div
              className={`absolute -inset-[1px] bg-gradient-to-b ${it.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative glass-card p-6 rounded-[2.5rem] border border-white/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-glow flex flex-col overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                  <it.icon className="w-6 h-6" aria-hidden />
                </div>
                <span
                  className="text-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"
                  aria-hidden
                >
                  {it.emoji}
                </span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl text-white group-hover:text-purple-400 transition-colors">
                {it.title}
              </h3>

              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-sm leading-relaxed pt-4 font-light border-t border-white/5 mt-4">
                    {it.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);
