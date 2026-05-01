import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center", 
          toggleActions: "play reverse play reverse", 
        }
      });

      
      tl.from(".hero-element", {
        opacity: 0,
        y: 50,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.15,
        ease: "expo.out",
        clearProps: "transform"
      })
      
      .fromTo(taglineRef.current, 
        { width: "0%" }, 
        { 
          width: "100%", 
          duration: 1.5, 
          ease: "steps(40)",
        }, "-=0.4"
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden font-sans">
      
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/90 to-[#050505] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000" 
          alt="EchoSee Smart Glasses" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-7xl">
        <h1 className="hero-element text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 uppercase">
          Echo<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">See</span>
        </h1>

        <div className="hero-element inline-block mb-8">
          <div className="overflow-hidden border-r-4 border-purple-500 pr-3" ref={taglineRef} style={{ whiteSpace: 'nowrap' }}>
            <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight py-1">
              “See What You Cannot Hear”
            </h2>
          </div>
        </div>

        <p className="hero-element text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light tracking-wide leading-relaxed">
          The next generation of Smart Glasses. Transcribing the world in 
          real-time with AR-inspired precision.
        </p>

        <div className="hero-element flex flex-col sm:flex-row gap-0 justify-center items-center mt-4">
          <button className="group relative px-14 py-5 bg-white text-black text-base font-black rounded-full overflow-hidden transition-all duration-500 hover:text-white active:scale-95 z-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10">Pre-Order Now</span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_50px_rgba(147,51,234,0.4)] transition-all duration-700"></div>
          </button>
          
          <div className="hidden sm:block w-[1px] h-14 bg-white/10 mx-10"></div>
          
          <button className="px-14 py-5 border-2 border-white/10 text-white text-base font-bold rounded-full hover:bg-white/10 backdrop-blur-xl transition-all active:scale-95 z-30">
            Learn More
          </button>
        </div>
      </div>

   
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;