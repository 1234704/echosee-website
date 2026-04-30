import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">Choose the hardware and software package that fits your daily needs.</p>
          
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white font-bold' : 'text-slate-500'}`}>Monthly Billing</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-slate-800 rounded-full p-1 flex items-center transition-colors focus:outline-none"
            >
              <motion.div 
                animate={{ x: isAnnual ? 32 : 0 }}
                className="w-6 h-6 bg-cyan-500 rounded-full shadow-md"
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white font-bold' : 'text-slate-500'}`}>
              Annual Billing <span className="text-cyan-400 text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, transition: { duration: 0.2 } }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-700 transition-colors"
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
                  <Check className="text-slate-600 w-5 h-5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition-colors font-semibold">
              Pre-Order Hardware
            </button>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, transition: { duration: 0.2 } }}
            className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.25)] transition-shadow"
          >
            
            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Recommended
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Premium AI Plan</h3>
            <p className="text-slate-400 mb-6">Unlock the full potential of your EchoSee glasses.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">{isAnnual ? 'PKR 12,000' : 'PKR 1,200'}</span>
              <span className="text-slate-500">{isAnnual ? '/year' : '/month'}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["20+ Premium Languages", "Advanced AI Accuracy Updates", "Future Cloud Sync", "Priority 24/7 Customer Support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="text-cyan-500 w-5 h-5" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors font-bold shadow-lg">
              Subscribe to Premium
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;