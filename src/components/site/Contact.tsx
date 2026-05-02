import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./Reveal";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Message sent!", description: "We’ll get back to you within 24 hours." });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="gradient-text">talk</span></>}
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <ContactRow icon={Mail} label="Email" value="hello@echosee.io" />
            <ContactRow icon={Phone} label="Phone" value="+92 300 1234567" />
            <ContactRow icon={MapPin} label="HQ" value="Lahore, Pakistan" />

            <div className="flex gap-3 pt-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid place-items-center w-11 h-11 rounded-xl glass-card text-muted-foreground hover:text-primary hover:shadow-glow hover:border-primary/40 transition-all hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="glass-card p-8 space-y-5">
            <FloatField label="Name" name="cname" />
            <FloatField label="Email" name="cemail" type="email" />
            <FloatField label="Message" name="cmsg" textarea />
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <motion.span
                key={sent ? "ok" : "send"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                {sent ? <><Check className="w-5 h-5" /> Sent!</> : <><Send className="w-5 h-5" /> Send message</>}
              </motion.span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 glass-card p-5"
  >
    <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </motion.div>
);

const FloatField = ({ label, name, type = "text", textarea = false }: { label: string; name: string; type?: string; textarea?: boolean }) => {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const float = focused || val.length > 0;
  const Comp: any = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Comp
        id={name}
        name={name}
        type={type}
        value={val}
        onChange={(e: any) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={textarea ? 4 : undefined}
        className="w-full bg-input border border-border rounded-lg px-4 pt-6 pb-2 text-foreground focus:border-primary focus:outline-none focus:shadow-glow transition-all resize-none"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all pointer-events-none ${
          float ? "top-1.5 text-xs text-primary" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
};
