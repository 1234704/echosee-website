import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Loader2, ShoppingBag } from "lucide-react";
import { Button } from "./Button";
import { SectionHeader } from "./Reveal";
import { toast } from "./toast";

const Field = ({ label, value: controlledValue, onChange, ...props }) => {
  const [focused, setFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState("");
  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const float = focused || value.length > 0;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    } else {
      setUncontrolledValue(e.target.value);
    }
  };

  return (
    <div className="relative">
      <input
        {...props}
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-input border border-border rounded-lg px-4 pt-6 pb-2 text-foreground focus:border-primary focus:outline-none focus:shadow-glow transition-all"
        placeholder=" "
        id={props.name}
      />
      <label
        htmlFor={props.name}
        className={`absolute left-4 transition-all pointer-events-none ${
          float
            ? "top-1.5 text-xs text-primary"
            : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
        {props.required && " *"}
      </label>
    </div>
  );
};

export const PreOrder = () => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    plan: "Basic — PKR 35,000",
  };

  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setForm(initialFormState);
      toast({
        title: "Pre-order received",
        description: "We’ll email your confirmation shortly.",
      });
    }, 2400);
  };

  return (
    <section id="preorder" className="py-24 relative bg-black">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Pre-order"
          title={
            <>
              Reserve your <span className="gradient-text">EchoSee</span>
            </>
          }
          description="Limited first batch. Secure yours with a small refundable deposit."
        />

        <form
          onSubmit={onSubmit}
          className="max-w-xl mx-auto glass-card p-8 space-y-5"
        >
          <Field
            label="Full name"
            type="text"
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Field
            label="Email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Field
            label="Phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <div>
            <label className="block text-sm font-medium mb-2">Plan</label>
            <select
              name="plan"
              value={form.plan}
              onChange={(e) => setForm({ ...form, plan: e.target.value })}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition"
            >
              <option>Basic — PKR 35,000</option>
              <option>Premium — PKR 40,000</option>
            </select>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={loading || done}
          >
            <AnimatePresence mode="wait" initial={false}>
              {done ? (
                <motion.span
                  key="done"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" /> Reserved!
                </motion.span>
              ) : loading ? (
                <motion.span key="load" className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing…
                </motion.span>
              ) : (
                <motion.span key="cta" className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" /> Pre-Order Now
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Mock checkout — no payment will be processed.
          </p>
        </form>
      </div>
    </section>
  );
};
