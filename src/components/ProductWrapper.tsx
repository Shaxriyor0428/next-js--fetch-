"use client";

import React, { useEffect, useState, useRef } from "react";
import { IProduct } from "../types";
import { useRouter } from "next/navigation";
import axios from "axios";

const ProductWrapper = () => {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const limit = 12;

  const seeMoreButtonRef = useRef<HTMLDivElement>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products", {
        params: {
          skip: (page - 1) * limit,
          limit,
        },
      });
      const newProducts = res.data.products;

      setProducts((prev) => [...prev, ...newProducts]);
      if (newProducts.length < limit) setHasMore(false);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    if (seeMoreButtonRef.current) {
      seeMoreButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [page]);

  return (
    <>
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
              className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
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

      {hasMore && (
        <div className="text-center my-4" ref={seeMoreButtonRef}>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="py-2 px-6 rounded-md text-lg text-white bg-green-500 hover:bg-green-600 transition"
            >
              See More
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ProductWrapper;
