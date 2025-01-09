import { IProductDetail } from "@/types";

const Detail = async ({ params }: { params: any }) => {
  const id = (await params).id;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product: IProductDetail = await response.json();

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={product.images[1] || product.images[0]}
          alt={product.title}
          className="rounded-lg shadow-lg object-contain  w-full"
        />
      </div>

      <div className="md:w-1/2 container flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-2">
          Price:{" "}
          <span className="text-green-500">${product.price.toFixed(2)} </span>
          <span className="text-sm text-gray-500 line-through ml-2">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {product.discountPercentage}% off | {product.availabilityStatus}
        </p>
        <p className="text-gray-800 mb-4">Brand: {product.brand}</p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Product Dimensions</h3>
          <p>
            Width: {product.dimensions.width}cm | Height:{" "}
            {product.dimensions.height}cm | Depth: {product.dimensions.depth}cm
          </p>
          <p>Weight: {product.weight}kg</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Warranty</h3>
          <p>{product.warrantyInformation}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Add to Cart
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
