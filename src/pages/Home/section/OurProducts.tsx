import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../../../components/ui/Pagination";
import ProductCard from "../../../components/ui/ProductCard";
import SearchBar from "../../../components/ui/SearchForm";
import { useSearch } from "../../../hooks/useSearch";

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
        <h2 className="text-slate-900 uppercase text-3xl font-bold mb-2">
          Our Product
        </h2>
        <p className="text-slate-600 md:text-xl max-w-2xl">
          Zetech menciptakan website yang cepat dan ramah SEO, dirancang
          untuk menarik pengunjung dan membangun kepercayaan.
        </p>
      </motion.div>

      <SearchBar value={query} onChange={setQuery} />

      <AnimatePresence mode="wait">
        {currentItems.length > 0 ? (
          <motion.div
            key={currentPage + query}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentItems.map((product) => (
                <ProductCard key={product.id} {...product} />
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
            <p className="text-slate-500 text-lg">Produk "{query}" tidak ditemukan</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}