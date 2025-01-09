"use client";

import React, { FC } from "react";
import { IProduct } from "../types";
import { useRouter } from "next/navigation";

const ProductWrapper: FC<{ products: IProduct[] }> = ({ products }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
        >
          <img
            onClick={() => router.push(`/products/${product.id}`)}
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-1">
            Price: <strong>${product.price}</strong>
          </p>
          <p className="text-gray-600">
            Rating: <strong>{product.rating}</strong> ⭐
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductWrapper;
