import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { TechItem, TechMarqueeProps } from "../../types/techMarquee";

const MARQUEE_STYLE = `
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-run   { animation: marquee-scroll var(--mdur) linear infinite; }
.marquee-pause { animation: marquee-scroll var(--mdur) linear infinite; animation-play-state: paused; }
`;

function TechLogo({ item }: { item: TechItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      title={item.name}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 32px", flexShrink: 0, cursor: "default",
        height: 72,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.icon}
        alt={item.name}
        style={{
          height: 32, width: "auto", objectFit: "contain",
          filter: hovered ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.4)",
          opacity: hovered ? 1 : 0.6,
          transform: hovered ? "scale(1.15)" : "scale(1)",
          transition: "filter 0.3s, opacity 0.3s, transform 0.3s",
        }}
      />
    </div>
  );
}

export function TechMarquee({
  items,
  speed = 30,
  bgColor = "#f0f5fa",
}: TechMarqueeProps) {
  const prefersReduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const duration = (items.length * 120) / speed;

  return (
    <>
      <style>{MARQUEE_STYLE}</style>
      <div
        style={{ position: "relative", overflow: "hidden", width: "100%" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 900, zIndex: 2,
          background: `linear-gradient(90deg, ${bgColor} 0%, transparent 100%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 900, zIndex: 2,
          background: `linear-gradient(-90deg, ${bgColor} 0%, transparent 100%)`,
          pointerEvents: "none",
        }} />

        <div
          className={prefersReduced ? "" : paused ? "marquee-pause" : "marquee-run"}
          style={{
            display: "flex", alignItems: "center",
            width: "max-content",
            ["--mdur" as string]: `${duration}s`,
          }}
        >
          {[...items, ...items].map((item, i) => (
            <TechLogo key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}