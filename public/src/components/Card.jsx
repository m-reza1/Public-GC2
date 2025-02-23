import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Card({ product }) { // terima props product dari homepage [33]
  const navigate = useNavigate();

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto flex flex-col h-full cursor-pointer hover:shadow-lg transition transform hover:scale-105"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="w-full h-64 object-contain rounded-lg bg-gray-100"
        />
      </div>

      {/* Product info */}
      <div className="flex flex-col flex-grow text-gray-700 mt-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-base mt-2 flex-grow leading-relaxed text-gray-600">
          {product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </p>
        <p className="text-sm mt-2 font-light text-gray-500">
          Rp {product.price?.toLocaleString("id-ID") || "0"}
        </p>
      </div>
    </div>
  );
}