import { motion, AnimatePresence, type Variants } from "framer-motion";
import Pagination from "../../../components/ui/Pagination";
import ProductCard from "../../../components/ui/ProductCard";
import SearchBar from "../../../components/ui/SearchForm";
import { useSearch } from "../../../hooks/useSearch";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function OurProducts() {
  const {
    query,
    setQuery,
    currentItems,
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
  } = useSearch(4);

  return (
    <div className="container mx-auto px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-slate-900 uppercase text-3xl md:text-5xl font-bold mb-2">
          Our Product
        </h2>
        <p className="text-slate-600 md:text-xl max-w-2xl">
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
            <p className="text-slate-500 text-lg">
              Produk "{query}" tidak ditemukan
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
