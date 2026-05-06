import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  Check,
} from "lucide-react";
import { Button } from "./Button";
import { SectionHeader } from "./Reveal";
import { toast } from "./toast";

const ContactRow = ({ icon: Icon, label, value }) => (
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
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
        {label}
      </p>
      <p className="font-medium">{value}</p>
    </div>
  </motion.div>
);

const FloatField = ({
  label,
  name,
  type = "text",
  textarea = false,
  value,
  onChange,
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState("");
  const [focused, setFocused] = useState(false);
  const val = value !== undefined ? value : uncontrolledValue;
  const float = focused || val.length > 0;
  const Comp = textarea ? "textarea" : "input";

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      setUncontrolledValue(e.target.value);
    }
  };

  return (
    <div className="relative">
      <Comp
        id={name}
        name={name}
        type={type}
        value={val}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={textarea ? 4 : undefined}
        className="w-full bg-input border border-border rounded-lg px-4 pt-6 pb-2 text-foreground focus:border-primary focus:outline-none focus:shadow-glow transition-all resize-none"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all pointer-events-none ${
          float
            ? "top-1.5 text-xs text-primary"
            : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm(initialFormState);
      toast({
        title: "Message sent!",
        description: "We’ll get back to you within 24 hours.",
      });
      setTimeout(() => setSent(false), 3500);
    }, 2400);
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's <span className="gradient-text">talk</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <ContactRow icon={Mail} label="Email" value="hello@echosee.io" />
            <ContactRow icon={Phone} label="Phone" value="+92 300 1234567" />
            <ContactRow icon={MapPin} label="HQ" value="Islamabad, Pakistan" />

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
            <FloatField
              label="Name"
              name="cname"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <FloatField
              label="Email"
              name="cemail"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <FloatField
              label="Message"
              name="cmsg"
              textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              <motion.span
                key={sent ? "ok" : loading ? "loading" : "send"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                {sent ? (
                  <>
                    <Check className="w-5 h-5" /> Sent!
                  </>
                ) : loading ? (
                  <>
                    <Send className="w-5 h-5 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send message
                  </>
                )}
              </motion.span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
