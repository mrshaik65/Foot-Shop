import { useLocation } from "react-router-dom";

function ProductDetails() {
  const { state: productData } = useLocation();

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">No product data available</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="grid w-full max-w-4xl gap-6 p-6 bg-white shadow-lg md:grid-cols-2 rounded-2xl">
        {/* Image Section */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={productData.image}
            alt={productData.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Details Section */}
        <div>
          {/* Title */}
          <h1 className="mb-2 text-2xl font-bold">{productData.title}</h1>

          {/* Brand */}
          <p className="mb-2 text-gray-600">
            Brand: <span className="font-medium">{productData.brand}</span>
          </p>

          {/* Price */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl font-bold text-blue-600">
              ₹{productData.actual_price.toFixed(2)}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ₹{productData.price.toFixed(2)}
            </span>
            <span className="text-lg text-red-500">{productData.discount}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500">⭐ {productData.rating}</span>
            <span className="text-sm text-gray-500">
              ({productData.number_of_ratings} ratings)
            </span>
          </div>

          {/* Description */}
          <p className="mb-4 text-gray-700">{productData.description}</p>

          {/* Sizes */}
          <div className="flex gap-2 mb-4">
            {productData.sizes.map((size, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm border rounded-md cursor-pointer hover:bg-gray-100"
              >
                {size}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-xl hover:bg-blue-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
