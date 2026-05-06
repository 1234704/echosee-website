import { useEffect, useRef } from "react";
import { Shield, Zap, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".features-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featureList = [
    {
      title: "Neural Audio Mapping",
      desc: "Experience 360-degree spatial awareness with AI-driven directional sound visualization.",
      icon: <Target className="text-purple-400" size={28} />,
      gradient: "from-purple-600/30 to-transparent",
    },
    {
      title: "Ultra-Low Latency",
      desc: "Optimized processing pipeline ensuring less than 5ms delay in speech-to-text conversion.",
      icon: <Zap className="text-blue-400" size={28} />,
      gradient: "from-blue-600/30 to-transparent",
    },
    {
      title: "Adaptive Noise Shield",
      desc: "Smart isolation technology that filters background chaos to prioritize human conversation.",
      icon: <Shield className="text-purple-400" size={28} />,
      gradient: "from-purple-600/30 to-transparent",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
      id="features"
    >
      <div className="container-pad relative z-10">
        <div className="features-header mb-24">
          <SectionHeader
            eyebrow="Features"
            title={
              <>
                Superior <span className="gradient-text">Intelligence</span>
              </>
            }
            description="Breaking barriers with precision-engineered accessibility tools."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative"
            >
              <div
                className={`absolute -inset-[1px] bg-gradient-to-b ${f.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative h-full p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 group-hover:bg-[#0f0f0f] group-hover:-translate-y-1 group-hover:shadow-glow flex flex-col justify-center overflow-hidden">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 mb-8 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                  {f.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase group-hover:text-purple-400 transition-colors">
                  {f.title}
                </h3>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-base leading-relaxed pt-4 font-light border-t border-white/5 mt-4">
                      {f.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                  <Target size={40} className="rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default Features;
