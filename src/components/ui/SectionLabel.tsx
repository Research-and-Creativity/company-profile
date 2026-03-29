import { m, useInView } from "framer-motion";
import { useRef } from "react";

export function SectionLabel({ text }: { text: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <div ref={ref} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 52 }}>
            <m.div
                initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{ transformOrigin: "left", height: 1, width: 40, background: "linear-gradient(90deg, #218ABB, transparent)" }}
            />
            <m.span
                initial={{ opacity: 0, x: 12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
                style={{ color: "#218ABB", fontSize: "10.5px", letterSpacing: "0.26em", textTransform: "uppercase", fontWeight: 700 }}
            >
                {text}
            </m.span>
        </div>
    );
}