import { m, useInView } from "framer-motion";
import { useRef } from "react";

export function MisiItem({ text, index }: { text: string; index: number }) {
    const ref = useRef<HTMLLIElement>(null);
    const inView = useInView(ref, { once: true, margin: "-30px" });
    return (
        <m.li ref={ref}
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 + index * 0.13 }}
            style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
        >
            <m.div
                initial={{ scale: 0, rotate: -90 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 + index * 0.13 }}
                style={{ marginTop: 3, width: 22, height: 22, borderRadius: 7, border: "1px solid rgba(33,138,187,0.4)", background: "rgba(33,138,187,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M2 5.5h7M6 2.5l3 3-3 3" stroke="#218ABB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </m.div>
            <span style={{ color: "rgba(175,210,235,0.72)", lineHeight: 1.8, fontSize: "0.92rem" }}>{text}</span>
        </m.li>
    );
}