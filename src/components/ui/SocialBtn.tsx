"use client";
import { m } from "framer-motion";

export function SocialBtn({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <m.a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 380, damping: 18 }}
            style={{
                width: 34, height: 34, borderRadius: 10,
                border: "1px solid rgba(33,138,187,0.4)",
                background: "rgba(33,138,187,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#7ecfed", textDecoration: "none", flexShrink: 0,
                transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
                contain: "layout paint", 
            }}
        >
            {children}
        </m.a>
    );
}