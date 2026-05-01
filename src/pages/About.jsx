import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// Reusable animated section wrapper
const AnimatedSection = ({ children, variants = fadeUp, style }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={style}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const timelineItems = [
    { year: "2021", title: "The Problem Identified", desc: "Our founders witnessed firsthand how hearing-impaired individuals struggle in daily conversations — missing out on life's most important moments.", icon: "👁️" },
    { year: "2022", title: "Research & Development", desc: "A team of AI engineers, audiologists, and designers came together to build an AR-powered solution that could change lives forever.", icon: "🔬" },
    { year: "2023", title: "First Prototype", desc: "EchoSee glasses displayed real-time subtitles on an AR lens for the first time — the moment that proved it was possible.", icon: "🥽" },
    { year: "2024", title: "AI Integration", desc: "Offline AI chip integrated for instant speech-to-text conversion, emoji emotion display, and multilingual support in 20+ languages.", icon: "🤖" },
    { year: "2026", title: "EchoSee Launches", desc: "EchoSee officially launches — empowering 430 million hearing-impaired people worldwide to See What They Cannot Hear.", icon: "🚀" },
  ];

  const howItWorksSteps = [
    { step: "01", title: "Mic Captures Speech", desc: "The built-in noise-cancelling microphone picks up surrounding speech with precision, filtering background noise in real time.", icon: "🎙️", color: "#00f5d4" },
    { step: "02", title: "AI Converts to Text", desc: "The onboard AI chip processes speech instantly — no internet needed. Text is generated in milliseconds with high accuracy.", icon: "⚡", color: "#7b2ff7" },
    { step: "03", title: "Subtitles on AR Lens", desc: "Words and emoji reactions appear directly on the AR lens — seamlessly overlaid on the real world, right in your line of sight.", icon: "✨", color: "#00f5d4" },
  ];

  const missionCards = [
    { icon: "🎯", title: "Our Mission", text: "To empower the 430 million people worldwide living with hearing loss by giving them seamless access to conversations — through cutting-edge AI and AR technology.", gradient: "linear-gradient(135deg, #00f5d4, #00b4d8)" },
    { icon: "🌍", title: "Our Vision", text: "A world where hearing loss is no longer a barrier to connection, education, or opportunity — where everyone can participate fully in the conversations that shape their lives.", gradient: "linear-gradient(135deg, #7b2ff7, #c77dff)" },
    { icon: "💡", title: "The Problem", text: "Traditional hearing aids amplify sound but don't help in noisy environments or for those with severe hearing loss. EchoSee's AI solution goes beyond sound — delivering text directly to your vision.", gradient: "linear-gradient(135deg, #f72585, #b5179e)" },
  ];

  const stats = [
    { number: "430M+", label: "People with Hearing Loss Worldwide" },
    { number: "20M+", label: "Hearing Impaired in Pakistan" },
    { number: "20+", label: "Languages Supported" },
    { number: "10-12h", label: "Battery Life" },
  ];

  return (
    <div style={styles.page}>
      <style>{css}</style>

      {/* Hero Banner */}
      <section style={styles.heroBanner}>
        <div style={styles.heroBannerBg} />
        <div style={styles.heroBannerContent}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.heroTag}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.heroTitle}
          >
            Empowering Those Who <br />
            <span style={styles.heroAccent}>Cannot Hear</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={styles.heroSubtitle}
          >
            EchoSee was born from a simple belief — that technology should break barriers, not build them.
          </motion.p>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={styles.scrollIndicator}
        >
          <div style={styles.scrollDot} />
        </motion.div>
      </section>

      {/* Mission Cards */}
      <section style={styles.missionSection}>
        <motion.div
          style={styles.missionGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {missionCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ translateY: -8, borderColor: "rgba(0,245,212,0.4)" }}
              style={styles.missionCard}
            >
              <div style={{ ...styles.missionIcon, background: card.gradient }}>{card.icon}</div>
              <h3 style={styles.missionTitle}>{card.title}</h3>
              <p style={styles.missionText}>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 40px", maxWidth: "1000px", margin: "0 auto" }}>
        <AnimatedSection style={styles.sectionHeader}>
          <p style={styles.sectionTag}>Our Journey</p>
          <h2 style={styles.sectionTitle}>The EchoSee Story</h2>
        </AnimatedSection>

        <div style={styles.timeline}>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              style={{
                ...styles.timelineItem,
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div style={styles.timelineContent}>
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "rgba(0,245,212,0.5)" }}
                  style={styles.timelineCard}
                >
                  <span style={styles.timelineEmoji}>{item.icon}</span>
                  <span style={styles.timelineYear}>{item.year}</span>
                  <h4 style={styles.timelineCardTitle}>{item.title}</h4>
                  <p style={styles.timelineCardDesc}>{item.desc}</p>
                </motion.div>
              </div>
              <div style={styles.timelineCenter}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={styles.timelineDot}
                />
                <div style={styles.timelineLine} />
              </div>
              <div style={styles.timelineSpacer} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "100px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection style={styles.sectionHeader}>
          <p style={styles.sectionTag}>The Technology</p>
          <h2 style={styles.sectionTitle}>How It Works</h2>
          <p style={styles.sectionDesc}>Three seamless steps — from sound to sight.</p>
        </AnimatedSection>

        <motion.div
          style={styles.stepsContainer}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {howItWorksSteps.map((item, index) => (
            <div key={index} style={styles.stepWrapper}>
              <motion.div
                variants={fadeUp}
                whileHover={{ translateY: -10, borderColor: "rgba(0,245,212,0.4)" }}
                style={styles.stepCard}
              >
                <div style={{ ...styles.stepNumber, color: item.color }}>{item.step}</div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  style={styles.stepEmoji}
                >
                  {item.icon}
                </motion.div>
                <h3 style={styles.stepTitle}>{item.title}</h3>
                <p style={styles.stepDesc}>{item.desc}</p>
                <div style={{ ...styles.stepGlow, background: item.color }} />
              </motion.div>
              {index < howItWorksSteps.length - 1 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={styles.stepArrow}
                >
                  →
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Subtitle Demo */}
        <AnimatedSection>
          <div style={styles.subtitleDemo}>
            <div style={styles.demoGlasses}>
              <div style={styles.demoLens}>
                <div style={styles.demoSubtitle}>
                  <span style={styles.demoText} className="typing-demo">
                    "Hello, how are you today?" 😊
                  </span>
                </div>
              </div>
            </div>
            <p style={styles.demoCaption}>Live AR Subtitle Preview</p>
          </div>
        </AnimatedSection>
      </section>

      {/* Stats */}
      <motion.section
        style={styles.statsSection}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={fadeUp} style={styles.statCard}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

const styles = {
  page: { fontFamily: "'Segoe UI', sans-serif", background: "#0a0a0f", color: "#ffffff", overflowX: "hidden" },
  heroBanner: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", padding: "80px 20px", overflow: "hidden" },
  heroBannerBg: { position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, #1a0533 0%, #0a0a0f 70%)", zIndex: 0 },
  heroBannerContent: { position: "relative", zIndex: 1, maxWidth: "800px" },
  heroTag: { color: "#00f5d4", fontSize: "0.9rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px", color: "#ffffff" },
  heroAccent: { background: "linear-gradient(90deg, #00f5d4, #7b2ff7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSubtitle: { fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" },
  scrollIndicator: { position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)" },
  scrollDot: { width: "8px", height: "8px", borderRadius: "50%", background: "#00f5d4" },
  missionSection: { padding: "100px 40px", maxWidth: "1200px", margin: "0 auto" },
  missionGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" },
  missionCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "40px 30px", textAlign: "center", cursor: "default" },
  missionIcon: { width: "70px", height: "70px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 20px" },
  missionTitle: { fontSize: "1.3rem", fontWeight: "700", marginBottom: "15px", color: "#ffffff" },
  missionText: { color: "rgba(255,255,255,0.6)", lineHeight: "1.7", fontSize: "0.95rem" },
  sectionHeader: { textAlign: "center", marginBottom: "60px" },
  sectionTag: { color: "#00f5d4", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" },
  sectionTitle: { fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "800", color: "#ffffff", marginBottom: "16px" },
  sectionDesc: { color: "rgba(255,255,255,0.5)", fontSize: "1rem" },
  timeline: { display: "flex", flexDirection: "column", gap: "0" },
  timelineItem: { display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "10px" },
  timelineContent: { flex: 1 },
  timelineCard: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,245,212,0.2)", borderRadius: "16px", padding: "24px", cursor: "default" },
  timelineEmoji: { fontSize: "1.5rem", marginBottom: "8px", display: "block" },
  timelineYear: { color: "#00f5d4", fontSize: "0.8rem", fontWeight: "700", letterSpacing: "2px", marginBottom: "8px", display: "block" },
  timelineCardTitle: { fontSize: "1.1rem", fontWeight: "700", color: "#ffffff", marginBottom: "8px" },
  timelineCardDesc: { color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: "1.6" },
  timelineCenter: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "24px" },
  timelineDot: { width: "16px", height: "16px", borderRadius: "50%", background: "#00f5d4", border: "3px solid #0a0a0f", boxShadow: "0 0 15px #00f5d4", flexShrink: 0 },
  timelineLine: { width: "2px", flex: 1, background: "linear-gradient(180deg, #00f5d4, transparent)", minHeight: "60px" },
  timelineSpacer: { flex: 1 },
  stepsContainer: { display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "60px" },
  stepWrapper: { display: "flex", alignItems: "center", gap: "20px" },
  stepCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "40px 30px", textAlign: "center", width: "280px", position: "relative", overflow: "hidden", cursor: "default" },
  stepNumber: { fontSize: "3rem", fontWeight: "900", opacity: "0.15", position: "absolute", top: "10px", right: "20px" },
  stepEmoji: { fontSize: "3rem", marginBottom: "16px", display: "block" },
  stepTitle: { fontSize: "1.1rem", fontWeight: "700", color: "#ffffff", marginBottom: "12px" },
  stepDesc: { color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: "1.6" },
  stepGlow: { position: "absolute", bottom: "0", left: "0", right: "0", height: "3px", opacity: "0.6" },
  stepArrow: { fontSize: "2rem", color: "#00f5d4", opacity: "0.5" },
  subtitleDemo: { textAlign: "center", marginTop: "40px" },
  demoGlasses: { display: "inline-block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,245,212,0.3)", borderRadius: "20px", padding: "30px 50px", marginBottom: "16px" },
  demoLens: { background: "rgba(0,245,212,0.05)", border: "1px solid rgba(0,245,212,0.4)", borderRadius: "12px", padding: "20px 40px", minWidth: "300px" },
  demoSubtitle: { textAlign: "center" },
  demoText: { color: "#00f5d4", fontSize: "1rem", fontWeight: "500" },
  demoCaption: { color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", letterSpacing: "1px" },
  statsSection: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" },
  statCard: { padding: "50px 30px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.06)" },
  statNumber: { fontSize: "2.5rem", fontWeight: "800", background: "linear-gradient(90deg, #00f5d4, #7b2ff7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "8px" },
  statLabel: { color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: "1.4" },
};

const css = `
  .typing-demo {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(40) infinite alternate;
  }
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  @media (max-width: 768px) {
    .steps-container { flex-direction: column; }
  }
`;

export default About;
