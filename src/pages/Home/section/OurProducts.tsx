import { motion, AnimatePresence, type Variants } from "framer-motion";
import Pagination from "../../../components/ui/Pagination";
import ProductCard from "../../../components/ui/ProductCard";
import SearchBar from "../../../components/ui/SearchForm";
import { useSearch } from "../../../hooks/useSearch";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurProducts() {
  const {
    query, setQuery,
    currentItems, currentPage, setCurrentPage,
    totalPages, totalItems,
  } = useSearch(4);

  return (
    <div
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none select-none" style={{ opacity: 0.55 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="prod-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(33,138,187,0.14)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prod-dots)" />
        </svg>
      </div>

      <motion.div
        className="absolute pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          left: "-8%", top: "-5%",
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,138,187,0.1) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{
          right: "-6%", bottom: "-5%",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(4,8,80,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="absolute pointer-events-none" style={{
        right: "4%", top: "8%",
        width: 280, height: 280, borderRadius: "50%",
        border: "1px solid rgba(33,138,187,0.1)",
      }} />
      <div className="absolute pointer-events-none" style={{
        right: "8%", top: "12%",
        width: 180, height: 180, borderRadius: "50%",
        border: "1px solid rgba(33,138,187,0.07)",
      }} />

      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.2), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(33,138,187,0.15), transparent)" }} />

      <div className="container mx-auto px-6 md:px-20 py-20 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{
                transformOrigin: "left", height: 1, width: 36,
                background: "linear-gradient(90deg, #218ABB, transparent)",
              }}
            />
            <span style={{
              color: "#218ABB", fontSize: "10.5px", fontWeight: 700,
              letterSpacing: "0.26em", textTransform: "uppercase",
            }}>
              What We Built
            </span>
          </div>

          <h2
            className="uppercase font-bold mb-3"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.05,
              color: "#040850",
            }}
          >
            Our{" "}
            <span style={{ color: "#218ABB", textShadow: "0 0 30px rgba(33,138,187,0.2)" }}>
              Product
            </span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            style={{
              transformOrigin: "left", height: 1, width: 72, marginBottom: 16,
              background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))",
            }}
          />

          <p className="md:text-xl max-w-2xl" style={{ color: "rgba(50,70,100,0.65)", lineHeight: 1.8 }}>
            Zetech menciptakan website yang cepat dan ramah SEO, dirancang untuk
            menarik pengunjung dan membangun kepercayaan.
          </p>
        </motion.div>

        <SearchBar value={query} onChange={setQuery} />

        <AnimatePresence mode="wait">
          {currentItems.length > 0 ? (
            <motion.div
              key={currentPage + query}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentItems.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    {product.link ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full transition-transform duration-300 hover:-translate-y-2"
                      >
                        <ProductCard {...product} />
                      </a>
                    ) : (
                      <div className="h-full">
                        <ProductCard {...product} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={totalItems}
                  onPageChange={setCurrentPage}
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div style={{
                display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 12,
                padding: "32px 48px", borderRadius: 20,
                border: "1px solid rgba(33,138,187,0.15)",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(4,8,80,0.06)",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  border: "1px solid rgba(33,138,187,0.3)",
                  background: "rgba(33,138,187,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#218ABB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <p style={{ color: "rgba(50,70,100,0.6)", fontSize: "1rem" }}>
                  Produk{" "}
                  <span style={{ fontWeight: 700, color: "#218ABB" }}>"{query}"</span>{" "}
                  tidak ditemukan
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}