import { useProductContext } from "../context/ProductContext";

const FeaturedProducts = () => {
  const { LimitProducts, loading, error } = useProductContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(LimitProducts);

  const url = "https://ecommerce-api.event-pulse.com";

  return (
    <section>
      <div className="custom-width">
        <h1>Our featured products</h1>
        <p>
          Take a look at our trending products. Browse through and see what
          other people are buying
        </p>
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
          {LimitProducts.map((product) => (
            <div key={product.id}>
              <div>
                {product.pictures && product.pictures.length > 0 ? (
                  <img
                    src={`${url}/${product.pictures[0].image_path}`}
                    alt={product.name}
                    style={{ width: "200px", height: "auto" }}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
