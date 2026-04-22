import { m } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  noAnim?: boolean;
}

export default function SearchBar({ value, onChange, noAnim = false }: SearchBarProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: noAnim ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: noAnim ? 0.35 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-5xl mx-auto mb-12"
    >
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search templates...."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%",
            padding: "16px 52px 16px 22px",
            borderRadius: 100,
            border: "1.5px solid rgba(33,138,187,0.18)",
            background: "rgba(255,255,255,0.92)",
            color: "#040850",
            fontSize: "0.95rem",
            outline: "none",
            boxShadow: "0 2px 12px rgba(4,8,80,0.07)",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)";
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(33,138,187,0.1), 0 2px 12px rgba(4,8,80,0.08)";
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = "rgba(33,138,187,0.18)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(4,8,80,0.07)";
          }}
        />

        <div style={{
          position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
          width: 32, height: 32, borderRadius: 100,
          border: "1px solid rgba(33,138,187,0.25)",
          background: "rgba(33,138,187,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#218ABB",
          pointerEvents: "none",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    </m.div>
  );
}