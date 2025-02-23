import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  async function fetchProduct() {
    try {
      const { data } = await axios.get(
        `https://h8-phase2-gc.vercel.app/apis/pub/branded-things/products/${id}`
      );

      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-30 max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center">
        {/* Image  */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-80 h-80 object-contain bg-gray-100"
          />
        </div>

        {/* Product info */}
        <div className="mt-6 md:mt-0 md:ml-12 text-gray-700 w-full md:w-1/2">
          <h2 className="text-xl font-semibold underline">{product.name}</h2>
          <p className="text-base mt-2 leading-normal">{product.description}</p>
          <p className="text-sm mt-2 font-light text-gray-600">
            Rp {product.price}
          </p>

          {/* Button back*/}
          <div className="mt-6">
            <Link to="/" className="text-base text-gray-700 hover:underline">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
