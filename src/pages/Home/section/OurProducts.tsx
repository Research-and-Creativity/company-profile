import ProductCard from "../../../components/ui/ProductCard";
import SearchBar from "../../../components/ui/SearchForm";
import { useSearch } from "../../../hooks/useSearch";

export default function OurProducts() {
  const { query, setQuery, filteredProducts } = useSearch();
  return (
    <div className="container mx-auto px-20">
      <div className="mb-10">
        <h2 className="uppercase text-3xl font-bold mb-2">Our Product</h2>
        <p className="text-gray-400 text-xl">
          Zectech menciptakan website yang cepat dan ramah SEO, dirancang untuk
          menarik pengunjung, membangun kepercayaan, dan mengonversi pelanggan
          tanpa biaya setara agensi.
        </p>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          Produk "{query}" tidak ditemukan
        </div>
      )}
    </div>
  );
}
