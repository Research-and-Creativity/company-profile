import { useState, useMemo } from "react";
import { Products } from "../constants/products";

export const useSearch = (itemsPerPage: number = 4) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return Products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const activePage = query !== "" && currentPage > totalPages ? 1 : currentPage;

  const currentItems = useMemo(() => {
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredProducts, activePage, itemsPerPage]);

  return {
    query,
    setQuery,
    currentItems,
    currentPage: activePage,
    setCurrentPage,
    totalPages,
    totalItems,
  };
};
