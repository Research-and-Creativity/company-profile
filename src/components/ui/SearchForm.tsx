interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-5xl mx-auto mb-12">
      <input
        type="text"
        placeholder="Search templates...."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-4 shadow-lg shadow-blue-500/10 border-black/5 rounded-full text-black focus:outline-none focus:border-zetech-primary transition-all"
      />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  );
}
