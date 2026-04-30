import { useEffect, useRef } from 'react';
import { Shield, Zap, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Animation
      gsap.fromTo(".features-header", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none", 
          }
        }
      );

      // Cards Initial Load Animation
      gsap.fromTo(cardsRef.current, 
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
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featureList = [
    {
      title: "Neural Audio Mapping",
      desc: "Experience 360-degree spatial awareness with AI-driven directional sound visualization.",
      icon: <Target className="text-purple-400" size={28} />,
      gradient: "from-purple-600/30 to-transparent"
    },
    {
      title: "Ultra-Low Latency",
      desc: "Optimized processing pipeline ensuring less than 5ms delay in speech-to-text conversion.",
      icon: <Zap className="text-blue-400" size={28} />,
      gradient: "from-blue-600/30 to-transparent"
    },
    {
      title: "Adaptive Noise Shield",
      desc: "Smart isolation technology that filters background chaos to prioritize human conversation.",
      icon: <Shield className="text-purple-400" size={28} />,
      gradient: "from-purple-600/30 to-transparent"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-[#050505] overflow-hidden" 
      id="features"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="features-header text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
            Superior <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Intelligence</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Breaking barriers with precision-engineered accessibility tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div 
              key={i} 
              ref={el => cardsRef.current[i] = el}
              className="group relative"
            >
              {/* Animated Glow Border */}
              <div className={`absolute -inset-[1px] bg-gradient-to-b ${f.gradient} rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card Body */}
              <div className="relative h-full p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 group-hover:bg-[#0f0f0f] flex flex-col justify-center overflow-hidden">
                
                {/* Icon Container - Minimalist */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 mb-8 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                  {f.icon}
                </div>
                
                {/* Title - Bold & Professional */}
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase group-hover:text-purple-400 transition-colors">
                  {f.title}
                </h3>
                
                {/* POP-UP DESCRIPTION EFFECT[cite: 1] */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-base leading-relaxed pt-4 font-light border-t border-white/5 mt-4">
                      {f.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Arrow Indicator - Bottom Right[cite: 1] */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                  <Target size={40} className="rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Accent Glow[cite: 1] */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default Features;