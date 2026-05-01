import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';

const ArLensDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  
  const demoSentence = "Hey! It is great to finally meet you in person. 😊";

 
  useEffect(() => {
    let timeout;
    if (isListening) {
      setText("");
      let i = 0;
      const typeWriter = () => {
        if (i < demoSentence.length) {
          setText(demoSentence.slice(0, i + 1));
          i++;
          timeout = setTimeout(typeWriter, 50); 
        }
      };
      typeWriter();
    } else {
      setText("System standby. Click mic to begin transcription.");
    }
    return () => clearTimeout(timeout);
  }, [isListening]);

  return (
    <div className="my-24 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">Live AR Lens Simulation</h2>
        <p className="text-slate-400">Experience how real-time transcription appears in your field of view.</p>
      </div>

     
      <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.1)] flex items-end p-8 md:p-16">
        
       
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-sm mix-blend-luminosity"></div>
        
      
        <div className="absolute top-6 right-6 flex items-center gap-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-900">
            {isListening ? "Live Transcribing" : "Offline Mode"}
          </span>
          <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}></div>
        </div>

       
        <div className="relative z-10 w-full">
          <motion.div 
            layout
            className="bg-black/60 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl max-w-2xl"
          >
            <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed font-sans shadow-black drop-shadow-lg">
              {text}
              {isListening && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-3 h-8 bg-cyan-400 ml-2 align-middle"></motion.span>}
            </p>
          </motion.div>
        </div>
      </div>

    
      <div className="mt-8 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsListening(!isListening)}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-colors ${
            isListening ? 'bg-red-500/10 text-red-500 border border-red-500/50 hover:bg-red-500/20' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
          }`}
        >
          {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          {isListening ? "Stop Simulation" : "Start Speaking"}
        </motion.button>
      </div>
    </div>
  );
};

export default ArLensDemo;