import React from "react";
import ProductWrapper from "../../components/ProductWrapper";
import { IProduct } from "../../types";

const Products = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const { products }: { products: IProduct[] } = await response.json();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Our Products
      </h1>
      <ProductWrapper products={products} />
    </div>
  );
};

export default Products;
