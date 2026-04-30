import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, Smile, Globe2, WifiOff, MicOff, Glasses, Cpu, Battery, Play, X } from 'lucide-react';

const features = [
  { icon: <Type className="w-6 h-6" />, title: "Real-time Transcription", desc: "Instant speech-to-text displayed directly on your AR lens." },
  { icon: <Smile className="w-6 h-6" />, title: "Emoji Subtitles", desc: "Visual emotion cues using emojis for better context.", isEmoji: true },
  { icon: <Globe2 className="w-6 h-6" />, title: "Multilingual", desc: "Supports Urdu, English, and 20+ premium languages." },
  { icon: <WifiOff className="w-6 h-6" />, title: "Offline AI Processing", desc: "On-board AI chip ensures privacy and works without internet." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ProductPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="min-h-screen bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            EchoSee Smart Glasses
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Experience the world with cutting-edge AR lenses, real-time transcription, and offline AI processing.
          </p>
        </div>

        
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-8 border-b border-slate-800 pb-4 text-cyan-400">Core Features</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group cursor-pointer"
              >
                <motion.div 
                  whileHover={feature.isEmoji ? { scale: 1.5, rotate: [0, 10, -10, 0] } : { scale: 1.1 }}
                  className="bg-slate-950 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:text-cyan-300"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-8 border-b border-slate-800 pb-4 text-cyan-400">Hardware Specifications</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row gap-12 items-center overflow-hidden">
            
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full md:w-1/2 aspect-square max-w-sm bg-gradient-to-tr from-slate-950 to-slate-800 rounded-full border border-slate-700 flex items-center justify-center relative shadow-[0_0_50px_rgba(6,182,212,0.1)]"
            >
              <Glasses className="w-24 h-24 text-slate-600 absolute" />
              <div className="absolute inset-0 rounded-full border-t-2 border-cyan-500/50 animate-pulse"></div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-8"
            >
              {[
                { icon: <Glasses />, text: "AR Lens + Micro Projector" },
                { icon: <Cpu />, text: "Dedicated AI Processor Chip" },
                { icon: <MicOff />, text: "Noise-Cancelling Microphone" },
                { icon: <Battery />, text: "10-12 Hours Battery Life" }
              ].map((spec, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-center gap-6 group">
                  <div className="bg-slate-950 p-4 rounded-full text-cyan-500 border border-slate-800 group-hover:border-cyan-500 transition-colors">
                    {spec.icon}
                  </div>
                  <span className="text-xl font-medium text-slate-300 group-hover:text-white transition-colors">{spec.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        
        <div className="mb-12 relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">See EchoSee in Action</h2>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center text-slate-950 mx-auto shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:bg-cyan-400 transition-colors"
            >
              <Play className="w-8 h-8 ml-1" />
            </motion.button>
            <p className="mt-4 text-slate-400">Watch the live AR subtitle demo</p>
          </div>
        </div>

        
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm px-4"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video border border-slate-800"
              >
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 z-10 bg-slate-900/80 p-2 rounded-full text-white hover:text-cyan-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="w-full h-full flex items-center justify-center text-slate-500">
                  [ Video Player Placeholder ]
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProductPage;