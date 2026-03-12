import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function GlassCard({ children, index, gradient, blobPos }: {
    children: React.ReactNode; index: number;
    gradient: string;
    blobPos: { top?: number | string; bottom?: number | string; left?: number | string; right?: number | string };
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 64, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.2 }}
            whileHover={{ y: -8, scale: 1.015 }}
            style={{ borderRadius: 22, border: "1px solid rgba(33,138,187,0.22)", background: gradient, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", padding: "38px 36px", position: "relative", overflow: "hidden", cursor: "default", boxShadow: "0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)" }}
        >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 5%, rgba(33,138,187,0.65) 50%, transparent 95%)" }} />
            <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(33,138,187,0.18) 0%, transparent 70%)", filter: "blur(28px)", pointerEvents: "none", ...blobPos }} />
            {children}
        </motion.div>
    );
}