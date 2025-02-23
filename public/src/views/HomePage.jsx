import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("asc");

  async function fetchProduct() {
    try {
      const { data } = await axios.get(
        `https://h8-phase2-gc.vercel.app/apis/pub/branded-things/products?q=${search}&i=${filter}&limit=12&page=${currentPage}&sort=${sort}`
      );

      setTotalPage(data.data.pagination.totalPage);
      setProducts(data.data.query);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  useEffect(() => {
    fetchProduct();
    // console.log("Filter:", filter);
  }, [search, currentPage, filter, sort]);

  return (
    <>
      <Navbar setter={setSearch} setFilter={setFilter} />
      <Hero />
      <div className="flex justify-end px-6">
        <select
          className="px-4 py-2 text-black rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="asc">Sort Asc</option>
          <option value="desc">Sort Desc</option>
        </select>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-4">
        {products.length > 0 ? (
          products.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <p>No products available.</p>
        )}
      </section>
      
      <div className="flex justify-center items-center space-x-2 py-4">
        <button
          className={`px-4 py-2 bg-white rounded hover:bg-gray-300 cursor-pointer ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 mx-2 bg-gray-600 text-white rounded disabled:bg-gray-400"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
