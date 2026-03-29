import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "../../hooks/useCounter";

export function StatItem({ n, suffix, label, delay }: { n: number; suffix: string; label: string; delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const count = useCounter(n, 1.6, inView);
    return (
        <m.div ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
            style={{ textAlign: "center", minWidth: 80 }}
        >
            <div style={{ fontSize: "2.6rem", fontWeight: 900, color: "#218ABB", letterSpacing: "-0.04em", lineHeight: 1, textShadow: "0 0 40px rgba(33,138,187,0.7)" }}>
                {count}{suffix}
            </div>
            <div style={{ fontSize: "0.68rem", color: "rgba(150,200,230,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 8, fontWeight: 600 }}>
                {label}
            </div>
        </m.div>
    );
}