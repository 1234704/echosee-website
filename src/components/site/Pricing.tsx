import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Sparkles, Shield, RefreshCw, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./Reveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const plans = {
  basic: {
    name: "Basic",
    price: "PKR 35,000",
    note: "One-time purchase",
    features: ["Real-time English & Urdu subtitles", "Adjustable font size", "Emoji emotion display", "Offline AI", "12-month warranty"],
  },
  premium: {
    name: "Premium",
    price: "PKR 40,000",
    note: "+ subscription",
    features: ["Everything in Basic", "20+ language live translation", "Continuous AI updates", "Future cloud sync", "Priority support"],
  },
};

const services = [
  { icon: Shield, title: "Warranty", text: "12-month standard warranty with extended options." },
  { icon: RefreshCw, title: "Software updates", text: "Continuous improvements to translation & accuracy." },
  { icon: Package, title: "Accessories", text: "Cases, replacement nose pads, USB-C cables." },
];

export const Pricing = () => {
  const [active, setActive] = useState<"basic" | "premium">("premium");

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Simple, <span className="gradient-text">honest</span> pricing</>}
          description="Choose the plan that fits your world. Upgrade any time."
        />

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass-card p-1 inline-flex">
            {(["basic", "premium"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setActive(p)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                  active === p ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p === "basic" ? "Basic" : "Premium ⭐"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {(["basic", "premium"] as const).map((key, i) => {
            const plan = plans[key];
            const isActive = active === key;
            const isRecommended = key === "premium";
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                animate={{ scale: isActive ? 1.02 : 1 }}
                className={`relative glass-card p-8 transition-all duration-300 hover:-translate-y-2 ${
                  isActive ? "border-primary/60 shadow-glow" : ""
                }`}
              >
                {isRecommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Recommended
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold gradient-text">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.note}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={isActive ? "hero" : "outlineGlow"}
                  size="lg"
                  className="w-full mt-8"
                  asChild
                >
                  <a href="#preorder">Choose {plan.name}</a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* After-sales accordion */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-center font-display text-2xl font-bold mb-6">After-sales services</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {services.map((s) => (
              <AccordionItem key={s.title} value={s.title} className="glass-card border-border px-5">
                <AccordionTrigger className="hover:no-underline group">
                  <span className="flex items-center gap-3">
                    <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden />
                    <span className="font-medium">{s.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{s.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
