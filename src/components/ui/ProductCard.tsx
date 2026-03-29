import { m, type TargetAndTransition } from "framer-motion";
import type { Product } from "../../types/product";

interface ProductCardProps extends Product {
  noAnim?: boolean;
}

export default function ProductCard({ title, category, description, image, noAnim = false }: ProductCardProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: noAnim ? 0 : 20 },
        visible: { opacity: 1, y: 0 },
      }}
      {...(!noAnim ? { whileHover: { y: -8 } as TargetAndTransition } : {})}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative h-full"
      style={{
        borderRadius: 20,
        background: "white",
        border: "1.5px solid rgba(33,138,187,0.1)",
        boxShadow: noAnim
          ? "0 2px 12px rgba(4,8,80,0.05)"
          : "0 4px 24px rgba(4,8,80,0.07), 0 1px 4px rgba(4,8,80,0.04)",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={noAnim ? undefined : e => {
        e.currentTarget.style.borderColor = "rgba(33,138,187,0.35)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(4,8,80,0.12), 0 0 0 1px rgba(33,138,187,0.1)";
      }}
      onMouseLeave={noAnim ? undefined : e => {
        e.currentTarget.style.borderColor = "rgba(33,138,187,0.1)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(4,8,80,0.07), 0 1px 4px rgba(4,8,80,0.04)";
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent 10%, rgba(33,138,187,0.3) 50%, transparent 90%)",
      }} />

      {!noAnim && (
        <m.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute", inset: -2, borderRadius: 22, zIndex: 0,
            background: "linear-gradient(135deg, rgba(33,138,187,0.12), rgba(4,8,80,0.04))",
            filter: "blur(10px)",
          }}
        />
      )}

      <div className="p-6 relative z-10">
        <div className="flex items-start gap-3 mb-4">
          <div style={{
            width: 42, height: 42, borderRadius: 12, flexShrink: 0,
            border: "1px solid rgba(33,138,187,0.25)",
            background: "rgba(33,138,187,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 className="text-xl font-bold leading-tight"
              style={{ color: "#040850", fontWeight: 800, letterSpacing: "-0.02em" }}>
              {title}
            </h3>
            <span style={{
              display: "inline-block", marginTop: 4,
              padding: "2px 9px", borderRadius: 100,
              border: "1px solid rgba(33,138,187,0.25)",
              background: "rgba(33,138,187,0.07)",
              fontSize: "9px", fontWeight: 700,
              color: "#218ABB", letterSpacing: "0.14em", textTransform: "uppercase",
            }}>
              {category}
            </span>
          </div>
        </div>

        <div style={{ height: 1, marginBottom: 14, background: "linear-gradient(90deg, rgba(33,138,187,0.15), transparent)" }} />

        <p className="mb-5 line-clamp-2" style={{ color: "rgba(50,70,100,0.65)", lineHeight: 1.75, fontSize: "0.92rem" }}>
          {description}
        </p>

        <div className="relative aspect-video w-full overflow-hidden"
          style={{ borderRadius: 12, border: "1px solid rgba(33,138,187,0.08)" }}>
          <m.img
            {...(!noAnim ? { whileHover: { scale: 1.07 } } : {})}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(4,8,80,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>
    </m.div>
  );
}