import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const FeaturedProducts = () => {
  const { LimitProducts, loading, error } = useProductContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(LimitProducts);

  const url = "https://ecommerce-api.event-pulse.com";

  return (
    <section>
      <div className="custom-width bg-white mt-4 py-8">
        <h1>Our featured products</h1>
        <p>
          Take a look at our trending products. Browse through and see what
          other people are buying
        </p>
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          {LimitProducts.map((product) => (
            <div key={product.id} className="relative">
              <div>
                {product.pictures && product.pictures.length > 0 ? (
                  <img
                    src={`${url}/${product.pictures[0].image_path}`}
                    alt={product.name}
                    className="h-[250px] w-full block object-cover"
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div className="absolute top-0 left-0 bg-yellow-300">
                <p>Hot</p>
              </div>
              <Link to={`/product/${product.id}`}>
                <p>{product.name}</p>
                <p>GH₵ {product.prices[0].price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
