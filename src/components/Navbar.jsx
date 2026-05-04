import { User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ease-in-out bg-transparent border-b border-transparent hover:bg-[#050505]/80 hover:backdrop-blur-xl hover:border-white/5">
      
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform">
          <span className="text-white font-black text-xl tracking-tighter">E</span>
        </div>
        <span className="text-2xl font-black text-white tracking-tighter uppercase">
          Echo<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">See</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-[12px] font-bold text-white uppercase tracking-[0.2em] hover:text-purple-400 transition-colors">Home</a>
        <div className="flex items-center gap-1.5 cursor-pointer group">
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Platform</span>
          <ChevronDown size={14} className="text-gray-500 group-hover:text-white" />
        </div>
        <a href="#" className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-white transition-colors">About Us</a>
        
        <div className="flex items-center gap-8 ml-4 border-l border-white/10 pl-10">
          <button className="text-gray-400 hover:text-white transition-colors">
            <User size={20} strokeWidth={2.5} />
          </button>
          <button className="px-7 py-2.5 bg-white text-black text-[11px] font-black rounded-full hover:bg-purple-600 hover:text-white transition-all shadow-xl shadow-white/5">
            REQUEST DEMO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;