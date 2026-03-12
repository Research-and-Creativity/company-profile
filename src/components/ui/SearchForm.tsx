import { motion } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-5xl mx-auto mb-12"
    >
      {/* Glow behind input */}
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", inset: -2, borderRadius: 100,
          background: "linear-gradient(90deg, rgba(33,138,187,0.15), rgba(4,8,80,0.06), rgba(33,138,187,0.1))",
          filter: "blur(10px)",
        }}
      />

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
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            color: "#040850",
            fontSize: "0.95rem",
            outline: "none",
            boxShadow: "0 4px 20px rgba(4,8,80,0.07), 0 1px 4px rgba(33,138,187,0.06)",
            transition: "border-color 0.25s, box-shadow 0.25s",
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = "rgba(33,138,187,0.5)";
            e.currentTarget.style.boxShadow = "0 0 0 4px rgba(33,138,187,0.08), 0 4px 20px rgba(4,8,80,0.08)";
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = "rgba(33,138,187,0.18)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(4,8,80,0.07), 0 1px 4px rgba(33,138,187,0.06)";
          }}
        />

        {/* Search icon */}
        <div style={{
          position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
          width: 32, height: 32, borderRadius: 100,
          border: "1px solid rgba(33,138,187,0.25)",
          background: "rgba(33,138,187,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#218ABB",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}