import type { Product } from "../../types/product";

export default function ProductCard({
  title,
  category,
  description,
  image,
}: Product) {
  return (
    <div className="glass-effect rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.25 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-zetech-primary/20 p-2 rounded-lg text-zetech-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-black leading-tight">
            {title}
          </h3>
          <span className="text-xs font-semibold text-zetech-primary uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <p className="text-slate-600">{description}</p>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover-scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
