import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { About } from "@/components/site/About";
import { Product } from "@/components/site/Product";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { Partnerships } from "@/components/site/Partnerships";
import { Impact } from "@/components/site/Impact";
import { PreOrder } from "@/components/site/PreOrder";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "EchoSee — See What You Cannot Hear | AR Smart Glasses";
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "EchoSee Smart Glasses turn speech into real-time AR subtitles — empowering the deaf and hard-of-hearing community with elegant, accessible design.",
    );
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-3 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="home">
        <Hero />
        <Highlights />
        <About />
        <Product />
        <HowItWorks />
        <Pricing />
        <Partnerships />
        <Impact />
        <PreOrder />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
