import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-glasses.jpg";

const subtitleWords = ["Hello", ",", " how", " are", " you", " today", "?"];

export const Hero = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const full = subtitleWords.join("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setTimeout(() => setTyped(""), 1800);
      }
    }, 80);
    return () => clearInterval(id);
  }, [typed === ""]);

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-20 overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 bg-grid opacity-20 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 aura-bg opacity-40 pointer-events-none"
        aria-hidden
      />

      <div className="container-pad grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          {/* <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium text-primary"
          >
            <Sparkles className="w-3.5 h-3.5" /> AR-Powered Subtitles
          </motion.span> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance"
          >
            See What You <span className="gradient-text">Cannot Hear</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-balance"
          >
            The next generation of Smart Glasses. Transcribing the world in
            real-time with AR-inspired precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#preorder">
                Pre-Order Now <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href="#product">Learn More</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              Live demo below
            </div>
            <div>10–12h battery</div>
            <div className="hidden sm:block">20+ languages</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden glass-card shadow-glow">
            <img
              src={heroImg}
              alt="EchoSee smart glasses with holographic real-time subtitles"
              width={1536}
              height={1152}
              className="w-full h-auto float-slow"
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[88%] max-w-md">
              <div className="glass-card px-4 py-3 border border-primary/40 shadow-glow">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary mb-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />{" "}
                  Live caption
                </div>
                <p className="font-mono text-sm md:text-base text-foreground min-h-[1.5em]">
                  {typed}
                  <span className="caret">|</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
