# EchoSee Smart Glasses - UI/UX Architecture

A modern, accessibility-first frontend build for EchoSee Smart Glasses. Designed with a futuristic, AR-inspired aesthetic to clearly explain the product, create an emotional connection, and drive pre-orders.

##  Tech Stack
* **Frontend:** React.js, Vite
* **Styling:** Tailwind CSS (Dark Mode / High Contrast for Accessibility)
* **Animations:** Framer Motion
* **Icons:** Lucide React

##  Core Features Developed (Product & Pricing Domains)
1. **Dynamic Features Grid:** Scalable mapping of hardware capabilities.
2. **AR Lens Simulator (Mock Demo):** A custom-engineered React component simulating real-time speech-to-text with a dynamic typing effect and blinking cursor.
3. **Interactive Pricing Engine:** Toggle between Monthly/Annual billing with instant state-driven price updates.
4. **After-Sales Support Accordion:** Accessible, space-saving FAQ layout.

##  Animation & Micro-Interaction List
As per the project brief, the following GSAP/Framer Motion interactions were successfully implemented:
* **Staggered Reveal:** Hardware specifications slide in sequentially (`staggerChildren`) upon scrolling into view.
* **Micro-Bounce & Emoji Pop:** Feature cards scale up on hover (`scale: 1.05`), with a specific rotational "pop" animation triggered specifically for the Emoji feature card.
* **Infinite 360° Rotation:** Smooth, continuous motion on the hardware model placeholder.
* **Modal Scale-Up:** `AnimatePresence` utilized for smooth scaling and fading of the Prototype Video Demo modal.
* **Hover Lifts & Glow:** Pricing cards lift (`y: -12`) on hover, with a custom CSS box-shadow glow applied to the Premium tier.
* **Accordion Expand:** Smooth height transitions (`height: "auto"`) combined with a 45-degree icon rotation upon opening support details.

## 👨 Primary Contributor
**Shahar Yar** - Frontend Engineering (Product & Pricing Sections)
*Branch:* `feature/shahar-product-pricing`