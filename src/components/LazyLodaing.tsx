import React from "react";

const LazyComponent = () => {
  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700">
        Lazy Loaded Component
      </h2>
      <p className="text-gray-700 mt-2">
        This component is loaded only when needed.
      </p>
    </div>
  );
};

export default LazyComponent;
