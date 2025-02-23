import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar({ setter, setFilter }) {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `https://h8-phase2-gc.vercel.app/apis/pub/branded-things/categories`
      );

      // console.log(data.data,'<<');
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    // console.log(setCategories,'<<');
  });

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center p-5 border-b border-gray-300">
      {/* Logo */}
      <Link to="/" className="text-lg font-semibold">
        Hickstiv
      </Link>
      {/* Navigation */}
      <div className="flex-grow max-w-2xl">
        {/* Search and Filter */}
        <div className="flex w-full">
          <select
            name=""
            id=""
            className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((c) => {
              return (
                <option key= {c.id}>
                  {c.name}
                </option>
              );
            })}
          </select>

          <div className="relative flex-grow">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full text-sm bg-gray-50 border border-gray-300 rounded-e-lg focus:ring focus:border"
              placeholder="Search Product Here"
              onChange={(e) => setter(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm h-full bg-gray-500 text-white rounded-e-lg border border-blue-500 hover:bg-gray-600"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
