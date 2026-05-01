import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const scrollRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(statsRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 85%",
            toggleActions: "restart none none none"
          }
        }
      );
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Real-time Latency", value: "<5ms", color: "text-blue-400" },
    { label: "Speech Accuracy", value: "99.9%", color: "text-purple-400" },
    { label: "Battery Life", value: "12 Hours", color: "text-blue-400" }
  ];

  return (
    <section 
      ref={scrollRef} 
      className="py-24 bg-[#020617] border-t border-white/5 relative overflow-hidden"
    >
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div 
              key={i} 
              ref={el => statsRef.current[i] = el}
              className="highlight-card text-center p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-colors duration-500"
            >
              <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-semibold">
                {s.label}
              </h4>
              <div className={`text-5xl md:text-6xl font-black tracking-tighter ${s.color}`}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;