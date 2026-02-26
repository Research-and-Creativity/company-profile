import { useMemo, useState } from "react";
import { Products } from "../constants/products";

export const useSearch = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return Products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return { query, setQuery, filteredProducts };
};
