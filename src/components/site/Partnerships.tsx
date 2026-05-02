import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, Building2 } from "lucide-react";
import { SectionHeader } from "./Reveal";

const partners = [
  { icon: GraduationCap, title: "Schools & Universities", desc: "Inclusive classrooms with live captions for every lecture." },
  { icon: HeartHandshake, title: "NGOs & Healthcare", desc: "Subsidised access for underserved communities." },
  { icon: Building2, title: "Corporate CSR", desc: "Workplace inclusion programs and bulk partnerships." },
];

const logos = ["NeuroLab", "HearWell", "InclusiveEd", "AuralAI", "VoiceBridge", "CarePath", "EduPlus", "OpenEar"];

export const Partnerships = () => (
  <section id="partnerships" className="py-24 relative">
    <div className="container-pad">
      <SectionHeader
        eyebrow="Partnerships"
        title={<>Building <span className="gradient-text">together</span></>}
      />

      <ul className="grid md:grid-cols-3 gap-6 mb-16">
        {partners.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ rotateY: 0, opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ rotateY: 8, rotateX: -4 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="glass-card p-8 hover:border-primary/40 hover:shadow-glow transition-shadow"
          >
            <div className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <p.icon className="w-7 h-7" aria-hidden />
            </div>
            <h3 className="mt-5 font-display font-semibold text-xl">{p.title}</h3>
            <p className="mt-2 text-muted-foreground">{p.desc}</p>
          </motion.li>
        ))}
      </ul>

      {/* Logo carousel */}
      <div className="relative overflow-hidden glass-card py-6">
        <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="font-display text-2xl text-muted-foreground/70 tracking-wide">
              {l}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>
    </div>
  </section>
);
