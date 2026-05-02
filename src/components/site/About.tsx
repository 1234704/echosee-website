import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Lightbulb, Rocket, Users } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import lifestyleImg from "@/assets/lifestyle.jpg";

const timeline = [
  { year: "2022", icon: Heart, title: "The spark", text: "A founder watched a friend miss a child's first words. The mission began." },
  { year: "2023", icon: Lightbulb, title: "Research", text: "Engineers, audiologists & the deaf community shaped the AR-subtitle vision." },
  { year: "2024", icon: Rocket, title: "Prototype", text: "On-device AI achieves real-time captions with zero network dependency." },
  { year: "2025", icon: Users, title: "Community", text: "Pilots with schools and NGOs across Pakistan and beyond." },
];

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="py-24 relative">
      <div className="container-pad">
        <SectionHeader
          eyebrow="About us"
          title={<>Built for <span className="gradient-text">connection</span></>}
          description="EchoSee exists to remove the silence between people. We replace bulky hearing aids with a graceful AR experience that restores conversation, dignity, and joy."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div ref={ref} className="relative rounded-3xl overflow-hidden glass-card aspect-[4/3]">
            <motion.img
              style={{ y }}
              src={lifestyleImg}
              alt="A young woman wearing EchoSee glasses smiling during a conversation"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <Reveal>
              <h3 className="font-display text-3xl font-bold">Our mission</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                Empower the 430M+ people worldwide living with hearing loss to participate fully in
                every conversation — at school, at work, and at home.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="font-display text-3xl font-bold">Why not hearing aids?</h3>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed">
                Traditional hearing aids amplify noise indiscriminately, are expensive, and carry
                stigma. EchoSee uses AI to <span className="text-foreground">show</span> language,
                not just amplify sound — giving wearers context, tone, and emotion.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-secondary/0" aria-hidden />
          <ul className="space-y-12">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <span className="font-mono text-xs text-primary tracking-widest">{t.year}</span>
                  <h4 className="mt-1 font-display font-semibold text-2xl">{t.title}</h4>
                  <p className="mt-2 text-muted-foreground">{t.text}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 grid place-items-center w-10 h-10 rounded-full bg-background border border-primary/40 shadow-glow">
                  <t.icon className="w-4 h-4 text-primary" aria-hidden />
                </div>
                <div />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
