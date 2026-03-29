"use client";
import { m } from "framer-motion";
import type { ParticleProps } from "../../types/particle";

export default function Particle({ x, y, size, color, delay, duration }: ParticleProps) {
  return (
    <m.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, background: color, left: x, top: y, willChange: "transform, opacity" }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}