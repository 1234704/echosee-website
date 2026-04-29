import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pricing & Plans</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Choose the hardware and software package that fits your daily needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Hardware Base Model */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-2">Smart Glasses</h3>
            <p className="text-slate-400 mb-6">The essential hardware with built-in offline processing.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">PKR 35,000</span>
              <span className="text-slate-500"> - 40,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["EchoSee AR Glasses", "Urdu & English Subtitles", "1 Year Hardware Warranty", "Basic Software Updates"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="text-cyan-500 w-5 h-5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors font-semibold">
              Pre-Order Hardware
            </button>
          </motion.div>

          {/* Premium Software Plan (Highlighted) */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-500/50 rounded-3xl p-8 flex flex-col relative overflow-hidden"
          >
            {/* Highlight Banner */}
            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
              Recommended
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Premium Plan</h3>
            <p className="text-slate-400 mb-6">Unlock the full potential of your EchoSee glasses.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">Subscription</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["20+ Premium Languages", "Advanced AI Accuracy Updates", "Future Cloud Sync", "Priority Customer Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="text-cyan-500 w-5 h-5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Add Premium
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;