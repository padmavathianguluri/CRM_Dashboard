import React, { useState } from "react";

const sampleProducts = [
  { name: "iPhone 14", category: "Electronics", price: "₹79,999", stock: 15 },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: "₹74,999",
    stock: 8,
  },
  { name: "Dell XPS 15", category: "Laptops", price: "₹1,39,999", stock: 5 },
  { name: "AirPods Pro", category: "Accessories", price: "₹24,999", stock: 20 },
  { name: "Coffee Mug", category: "Home", price: "₹499", stock: 50 },
];

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = sampleProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <input
        type="text"
        placeholder="Search by name or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-sm"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left text-sm">
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">{product.stock}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
