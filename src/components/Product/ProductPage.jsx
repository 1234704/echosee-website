import React from 'react';
import { motion } from 'framer-motion';
import { Type, Smile, Globe2, WifiOff, MicOff, Glasses, Cpu, Battery } from 'lucide-react';

const features = [
  { icon: <Type className="w-6 h-6" />, title: "Real-time Transcription", desc: "Instant speech-to-text displayed directly on your AR lens." },
  { icon: <Smile className="w-6 h-6" />, title: "Emoji Subtitles", desc: "Visual emotion cues using emojis for better context." },
  { icon: <Globe2 className="w-6 h-6" />, title: "Multilingual", desc: "Supports Urdu, English, and 20+ premium languages." },
  { icon: <WifiOff className="w-6 h-6" />, title: "Offline AI Processing", desc: "On-board AI chip ensures privacy and works without internet." }
];

const ProductPage = () => {
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

        
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8 border-b border-slate-800 pb-4 text-cyan-400">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group"
              >
                <div className="bg-slate-950 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:text-cyan-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8 border-b border-slate-800 pb-4 text-cyan-400">Hardware Specifications</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/2 aspect-square bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center">
              <span className="text-slate-500">[ 360° Product Model Render ]</span>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              {[
                { icon: <Glasses />, text: "AR Lens + Micro Projector" },
                { icon: <Cpu />, text: "Dedicated AI Processor Chip" },
                { icon: <MicOff />, text: "Noise-Cancelling Microphone" },
                { icon: <Battery />, text: "10-12 Hours Battery Life" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="text-blue-500">{spec.icon}</div>
                  <span className="text-lg text-slate-300">{spec.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductPage;