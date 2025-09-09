import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ ApisData }) {
  const [showMore, setShowMore] = useState(false);
  const Navigation = useNavigate();

  const goToPDPpage = (id) => {
    Navigation(`/product/${id}`, { state: ApisData });
  };

  return (
    <div
      className="max-w-sm p-5 transition bg-white shadow-md rounded-2xl hover:shadow-lg"
      onClick={() => goToPDPpage(ApisData.id)}
    >
      {/* Product Image */}
      <div className="overflow-hidden rounded-xl aspect-[1/1] mb-4">
        <img
          src={ApisData.image}
          alt={ApisData.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Info */}
      <div>
        {/* Title */}
        <h2 className="mb-1 text-lg font-bold text-gray-900">
          {ApisData.title}
        </h2>

        {/* Brand & Material */}
        <p className="mb-2 text-sm text-gray-500">
          {ApisData.brand} • {ApisData.material}
        </p>

        {/* Price & Discount */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-bold text-blue-600">
            ₹{ApisData.actual_price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹{ApisData.price.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-pink-600">
            {ApisData.discount}
          </span>
        </div>

        {/* Rating */}
        <p
          className={`text-sm mb-2 ${
            ApisData.rating >= 4.5
              ? "text-green-600"
              : ApisData.rating >= 3.5
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          ⭐ {ApisData.rating} ({ApisData.number_of_ratings} ratings)
        </p>

        {/* Description with Show More */}
        <p className="mb-3 text-sm text-gray-700">
          {showMore
            ? ApisData.description
            : `${ApisData.description.slice(0, 60)}...`}
          {ApisData.description.length > 60 && (
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent navigation when clicking
                setShowMore(!showMore);
              }}
              className="ml-2 text-sm font-medium text-blue-600 hover:underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2 mb-3">
          {ApisData.sizes.map((sz) => (
            <span
              key={sz}
              className="px-2 py-1 text-sm text-gray-700 bg-white border rounded-md"
            >
              {sz}
            </span>
          ))}
        </div>

        {/* Purchase Count */}
        <p className="mb-3 text-xs text-gray-500">
          {ApisData.purchase_count} bought
        </p>

        {/* Add to Cart Button */}
        <button className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
