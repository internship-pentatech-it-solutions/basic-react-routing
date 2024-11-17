import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null); // Updated: Default is null
  const [LimitProducts, setLimitProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products");
      setProducts(response.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch product details by ID
  const fetchProductDetails = async (id) => {
    try {
      setLoading(true);
      const response = await api.get(`/products/${id}`); // Dynamic ID
      setProduct(response.data.product);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products with a limit
  const fetchProductsByLimit = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products/limit/8");
      setLimitProducts(response.data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data.categories);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch initial data
  useEffect(() => {
    fetchProducts();
    fetchProductsByLimit();
    fetchCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        categories,
        LimitProducts,
        loading,
        error,
        fetchProductDetails,
        fetchProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
