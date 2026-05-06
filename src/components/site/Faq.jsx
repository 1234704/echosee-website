import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import { SectionHeader } from "./Reveal";

const faqs = [
  {
    q: "How does EchoSee differ from a hearing aid?",
    a: "EchoSee shows captions and emotion on an AR lens instead of amplifying noise. It's discreet, contextual, and works in loud environments.",
  },
  {
    q: "Does it require an internet connection?",
    a: "No. The on-device AI chip processes speech locally for speed and privacy. Premium cloud features are optional.",
  },
  {
    q: "Which languages are supported?",
    a: "Urdu and English ship with every device. The Premium plan unlocks 20+ live translation languages.",
  },
  {
    q: "How long does the battery last?",
    a: "10–12 hours of continuous captioning. USB-C fast charging tops you up in about 45 minutes.",
  },
  {
    q: "Can I wear EchoSee with prescription lenses?",
    a: "Yes. Custom prescription inserts are available as an accessory.",
  },
  {
    q: "Is my conversation data stored?",
    a: "All transcription happens on-device and is discarded by default. You stay in control.",
  },
];

export const Faq = () => (
  <section id="faq" className="py-24 relative bg-black">
    <div className="container-pad max-w-3xl">
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Frequently <span className="gradient-text">asked</span>
          </>
        }
      />
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className={`glass-card border-border px-5 ${i === faqs.length - 1 ? "border-b-0" : ""} data-[state=open]:border-primary/40 data-[state=open]:shadow-glow transition-all`}
          >
            <AccordionTrigger className="text-left hover:no-underline font-medium">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
