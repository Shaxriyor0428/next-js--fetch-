import React from "react";
import ProductWrapper from "../../components/ProductWrapper";
import { IProduct } from "../../types";

const Products = async () => {

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Our Products
      </h1>
      <ProductWrapper />
    </div>
  );
};

export default Products;
