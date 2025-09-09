function ProductCard({ ApisData }) {
  return (
    <article
      className={`max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl flex ">
        <img
          src={ApisData.image}
          alt={ApisData.title}
          className={`w-full object-cover`}
        />
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className={`text-lg font-semibold text-slate-900`}>
          {ApisData.title}
        </h3>
        <p className={`text-sm text-slate-500`}>
          {ApisData.brand} • {ApisData.material}
        </p>

        {/* Price */}
        <div className="flex items-end gap-2 mt-2">
          <p className={`text-xl font-bold text-slate-900`}>
            ₹{ApisData.actual_price}
          </p>
          <p className={`text-sm text-slate-500 line-through`}>
            ₹{ApisData.price}
          </p>
          <span className={`text-xs font-semibold text-pink-600`}>
            {ApisData.discount}
          </span>
        </div>

        {/* Rating */}
        <p
          className={`mt-1 text-sm ${
            ApisData.rating >= 4.5
              ? "text-green-600"
              : ApisData.rating >= 3.5
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          ⭐ {ApisData.rating} ({ApisData.number_of_ratings} ratings)
        </p>

        {/* Description */}
        <p className={`mt-2 text-sm text-slate-700`}>{ApisData.description}</p>

        {/* Sizes */}
        <div className="flex gap-2 mt-3">
          {ApisData.sizes.map((sz) => (
            <span
              key={sz}
              className={`rounded-md border px-2 py-1 text-sm ${
                sz === 9 ? "bg-blue-600 text-white" : "bg-white text-slate-700"
              }`}
            >
              {sz}
            </span>
          ))}
        </div>

        {/* Purchase Count */}
        <p className={`mt-3 text-xs text-slate-500`}>
          {ApisData.purchase_count} bought
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
