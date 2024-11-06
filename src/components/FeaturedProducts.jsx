import { div } from "framer-motion/client";
import { useProductContext } from "../context/ProductContext";

const FeaturedProducts = () => {
  const { products, loading, error } = useProductContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <div className="custom-width">
        <h1>Our featured products</h1>
        <p>
          Take a look at our trending products. Browse through and see what
          other people are buying
        </p>
        <div>
          {/* {products.map((product) => (
            <p>{product.name}</p>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
