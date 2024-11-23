import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { IoReturnUpBackSharp } from "react-icons/io5";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, fetchProductDetails, error, loading } = useProductContext();
  const url = import.meta.env.VITE_BASE_URL;

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  useEffect(() => {
    if (product && product.pictures && product.pictures.length > 0) {
      // Set the first image as the default selected image
      setSelectedImage(product.pictures[0]);
    }
    if (product && product.sizes && product.sizes.length > 0) {
      // Set the first size as the default selected size
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  // Ensure product is available before rendering details
  if (!product || !product.pictures || product.pictures.length === 0) {
    return <p>Product details not available.</p>;
  }

  return (
    <main className="mt-[10rem]">
      <section className="custom-width">
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="flex items-center gap-2 mb-4 text-blue-500 hover:text-blue-700">
          <IoReturnUpBackSharp className="text-xl" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="flex flex-col items-center">
            {/* Display selected image */}
            <img
              src={`${url}/${selectedImage?.image_path}`}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
            {/* Thumbnail images */}
            <div className="mt-4 flex flex-wrap gap-4">
              {product.pictures.map((image) => (
                <img
                  key={image.id}
                  src={`${url}/${image.image_path}`}
                  alt={product.name}
                  className="w-[80px] h-[80px] object-cover cursor-pointer border-2 border-gray-300 rounded"
                  onClick={() => setSelectedImage(image)} // Set clicked image as the selected one
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl lg:text-3xl">{product.name}</h1>
            <p>{product.description}</p>

            {/* Size and Price Tabs */}
            <div className="mt-6 ">
              <div className="flex flex-wrap space-x-4 border-b">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    className={`py-2 px-4 border-b-2 ${
                      selectedSize?.id === size.id
                        ? "border-red-600 text-blue-500"
                        : "border-transparent text-gray-700"
                    } hover:text-red-600`}
                    onClick={() => setSelectedSize(size)}>
                    {size.name}
                  </button>
                ))}
              </div>

              {/* Display price for the selected size */}
              {selectedSize && (
                <div className="mt-4">
                  <h2 className="text-lg">Price for {selectedSize.name}:</h2>
                  <p className="text-xl font-bold">
                    GH₵ {selectedSize.pivot.price}
                  </p>
                </div>
              )}
            </div>

            {/* Buy Button */}
            <button className="inline-block mt-6 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
              Buy Mattress
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
