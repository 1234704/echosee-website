import { useEffect, useState, useRef } from "react";

export default function SmoothCounter({ target, label, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    const startAnimation = () => {
      let startTime;
      const duration = 2000;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(percentage * target));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={countRef} className="text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 tracking-tight">
        {count}
        {suffix}
      </h2>
      <p className="text-gray-400 mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
}
