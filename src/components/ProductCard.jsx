import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { categories } = useProductContext();
  const url = import.meta.env.VITE_BASE_URL;

  // Find the category name based on category_id
  const category = categories.find((cat) => cat.id === product.category_id);

  return (
    <div className="relative max-w-[350px] grid gap-2">
      <div className="font-semibold absolute top-0 right-0 bg-red-500 text-white py-2 px-4">
        {category ? category.name : ""}
      </div>
      <div className="h-[200px]">
        <img
          src={`${url}/${product.pictures[0].image_path}`}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-2">{product.name}</h2>
      <Link
        to={`/product/${product.id}`}
        className="inline-block py-2 px-4 w-max bg-red-600 text-white rounded hover:bg-red-700">
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
