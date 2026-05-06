import { useState } from "react";
import {
  Glasses,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import { Button } from "./Button";
import { toast } from "./toast";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed!",
      description: "Thanks for joining the EchoSee newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="relative pt-20 pb-10 bg-black">
      <div className="container-pad grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-primary shadow-glow">
              <Glasses
                className="w-5 h-5 text-primary-foreground"
                aria-hidden
              />
            </span>
            <span className="font-display font-bold text-xl">
              Echo<span className="gradient-text">See</span>
            </span>
          </a>
          <p className="mt-4 text-muted-foreground max-w-sm">
            See what you cannot hear. Real-time AR subtitles for everyone.
          </p>
          <form onSubmit={subscribe} className="mt-6 max-w-md">
            <label
              htmlFor="newsletter"
              className="text-sm font-medium mb-2 block"
            >
              Join the newsletter
            </label>
            <div
              className={`flex items-center gap-2 glass-card p-1 transition-all ${focus ? "border-primary shadow-glow" : ""}`}
            >
              <input
                id="newsletter"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder="you@email.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <Button
                type="submit"
                variant="hero"
                size="sm"
                className="rounded-md"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#product" className="hover:text-primary transition">
                Features
              </a>
            </li>
            <li>
              <a href="#how" className="hover:text-primary transition">
                How it works
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-primary transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#preorder" className="hover:text-primary transition">
                Pre-order
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a href="#partnerships" className="hover:text-primary transition">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:text-primary transition">
                Impact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-pad mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} EchoSee. All rights reserved.</p>
        <div className="flex gap-2">
          {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social"
              className="grid place-items-center w-10 h-10 rounded-lg hover:text-primary hover:shadow-glow transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
