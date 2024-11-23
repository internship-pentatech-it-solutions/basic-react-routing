import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const FeaturedProducts = () => {
  const { LimitProducts, loading, error } = useProductContext();

  if (loading)
    return (
      <div className="custom-width flex items-center justify-center mt-8">
        <div className="w-[100px] h-[100px] border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  const url = import.meta.env.VITE_BASE_URL;

  return (
    <section>
      <div className="custom-width bg-white mt-4 py-8">
        <h1 className="text-3xl text-center">Our featured products</h1>
        <p className="text-center">
          Take a look at our trending products. Browse through and see what
          other people are buying
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4">
          {LimitProducts.map((product) => (
            <div key={product.id} className="relative rounded shadow">
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
              <div className="absolute top-0 left-0 bg-yellow-300 py-2 px-4">
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
