import { useState, useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Shop = () => {
  const { products, fetchProducts, categories, error, loading } =
    useProductContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const productsPerPage = 8;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category_id === selectedCategory.id)
    : products;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="custom-width">
        <p>{error}</p>
      </div>
    );

  return (
    <section className="mt-[10rem]">
      <div className="custom-width flex flex-col items-center">
        {/* Category Filter */}
        <div className="w-full mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 ${
                selectedCategory?.id === category.id
                  ? "bg-[#f40000] text-white"
                  : "bg-gray-200"
              } rounded`}>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="inline-block px-4 py-2 bg-gray-300 text-black rounded-l">
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`inline-block px-4 py-2 mx-1 rounded-full ${
                  currentPage === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                }`}>
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="inline-block px-4 py-2 bg-gray-300 text-black rounded-r">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
