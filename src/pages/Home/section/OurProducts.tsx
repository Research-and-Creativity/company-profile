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
    <div className="container mx-auto px-20">
      <div className="mb-10">
        <h2 className="text-slate-900 uppercase text-3xl font-bold mb-2">
          Our Product
        </h2>
        <p className="text-slate-600 text-xl">
          Zetech menciptakan website yang cepat dan ramah SEO, dirancang
          untuk...
        </p>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      {currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentItems.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="text-center py-20">
          Produk "{query}" tidak ditemukan
        </div>
      )}
    </div>
  );
}
