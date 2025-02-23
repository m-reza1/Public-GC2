import Navbar from "./Navbar";

export default function ProductCard({ product, setPage }) {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div className="border border-gray-300 p-4">
          <div className="w-full">
            {/* Image */}
            <img src={product.image} alt={product.name} className="w-full h-auto" /> 
          </div>
          <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          {/* button  */}
          <a
            href="#" 
            className="block text-center px-4 py-2 border border-black hover:bg-black hover:text-white transition"
          >
            View Details
          </a>
        </div>
      </section>
      <div className="text-center py-6">
        <button
          onClick={() => setPage("home")}
          className="text-gray-700 hover:underline"
        >
          ← Back to Shop
        </button>
      </div>
    </>
  );
}