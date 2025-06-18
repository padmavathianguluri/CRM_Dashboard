import React from "react";

const products = [
  { name: "Shirt", price: "$25", img: "https://via.placeholder.com/100" },
  { name: "Shoes", price: "$50", img: "https://via.placeholder.com/100" },
  { name: "Watch", price: "$75", img: "https://via.placeholder.com/100" },
];

const Products = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto mb-2 w-24 h-24 object-cover"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-blue-600 dark:text-blue-400">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
