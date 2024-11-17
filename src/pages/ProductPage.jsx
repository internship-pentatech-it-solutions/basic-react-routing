import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useEffect } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const { product, fetchProductDetails, error, loading } = useProductContext();
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="mt-[10rem]">
      <section className="custom-width">
        <div>
          <div>
            <img
              src={`${url}/${product.pictures[0].image_path}`}
              alt={product.name}
            />
          </div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
