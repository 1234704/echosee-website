import { Activity, Eye, Cpu, Share2 } from 'lucide-react';

const AnalyticsGrid = () => {
  const stats = [
    { title: "Object Detection", value: "99.2%", icon: <Eye size={24} />, desc: "Real-time traffic object classification." },
    { title: "Processing Power", value: "4.2 TFLOPS", icon: <Cpu size={24} />, desc: "Edge-computed neural processing." },
    { title: "Data Latency", value: "1.2ms", icon: <Activity size={24} />, desc: "Ultra-fast response for critical safety." },
    { title: "API Integration", value: "REST/WS", icon: <Share2 size={24} />, desc: "Seamless connectivity with existing infra." }
  ];

  return (
    <section className="w-full bg-[#050505] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">at the Edge</span>
          </h2>
          <p className="mt-4 text-purple-300/50 text-[10px] md:text-xs uppercase tracking-[0.5em] font-black">
            Real-time analytics for smart infrastructure
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="group relative p-8 rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 
                         flex flex-col items-center text-center cursor-pointer
                         h-[150px] hover:h-[320px] w-full
                         transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:scale-105 hover:border-purple-500/30 hover:bg-[#121212]
                         hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden"
            >
              
              <div className="text-purple-400 mb-4 transition-all duration-500 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {stat.icon}
              </div>


              <h3 className="text-gray-500 text-[11px] font-black uppercase tracking-widest mb-6 transition-colors group-hover:text-white">
                {stat.title}
              </h3>

              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                
                
                <div className="text-5xl font-black mb-3 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-blue-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                  {stat.value}
                </div>

                
                <p className="text-purple-100/40 text-[11px] leading-tight px-2 group-hover:text-purple-100/80 transition-colors duration-500">
                  {stat.desc}
                </p>
              </div>
              
              
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsGrid;