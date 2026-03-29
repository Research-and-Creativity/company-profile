import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBlob({ style, color = "rgba(33,138,187,0.07)" }: { style: React.CSSProperties; color?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const rawY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const y = useSpring(rawY, { stiffness: 50, damping: 18 });
    return (
        <m.div ref={ref} className="absolute pointer-events-none" style={{ y, ...style }}>
            <div style={{ width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, filter: "blur(80px)" }} />
        </m.div>
    );
}