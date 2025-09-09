import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Product Card/Product Card";

function Products() {
  const [ApiData, setApiData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [expanded, setExpanded] = useState({}); // track expanded state for each product

  

  // useEffect(() => {
  //   const api = async () => {
  //     try {
  //       setLoader(true);
  //       const response = await axios.get(
  //         "https://footwear-api-products.onrender.com/footwear"
  //       );
  //       setApiData(response.data);
  //     } catch (error) {
  //       console.log(error, "error occurred during api call");
  //     } finally {
  //       setLoader(false);
  //       console.log("api call is completed");
  //     }
  //   };

  //   api();
  // }, []);

  // const toggleExpand = (id) => {
  //   setExpanded((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };

  const api = async () => {
    const data = await axios.get(
      "https://footwear-api-products.onrender.com/footwear"
    );
    setApiData(data.data);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    // <div className="min-h-screen py-10 mt-10 bg-gray-100">
    //   {loader ? (
    //     <p className="flex justify-center text-lg font-semibold">Loading...</p>
    //   ) : (
    //     <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //       {ApiData.map((product) => (
    //         <div
    //           key={product.id}
    //           className="overflow-hidden bg-white shadow-lg rounded-2xl"
    //         >
    //           {/* Image Container - Square */}
    //           <div className="w-full aspect-[1/1] overflow-hidden">
    //             <img
    //               src={product.image}
    //               alt={product.title}
    //               className="object-cover w-full h-full"
    //             />
    //           </div>

    //           {/* Card Content */}
    //           <div className="p-5">
    //             <h2 className="text-lg font-bold text-gray-900">
    //               {product.title}
    //             </h2>
    //             <p className="mb-2 text-sm text-gray-500">
    //               {product.brand} • {product.material}
    //             </p>

    //             {/* Description with More/Less */}
    //             <p className="mb-2 text-sm text-gray-700">
    //               {expanded[product.id]
    //                 ? product.description
    //                 : `${product.description.substring(0, 60)}...`}
    //             </p>
    //             <button
    //               onClick={() => toggleExpand(product.id)}
    //               className="mb-3 text-sm font-medium text-blue-600 hover:underline"
    //             >
    //               {expanded[product.id] ? "Show Less" : "Show More"}
    //             </button>

    //             {/* Price Section */}
    //             <div className="flex items-center justify-between mb-3">
    //               <div className="flex items-center space-x-2">
    //                 <span className="text-xl font-semibold text-blue-600">
    //                   ₹{product.actual_price.toFixed(2)}
    //                 </span>
    //                 <span className="text-sm text-gray-400 line-through">
    //                   ₹{product.price.toFixed(2)}
    //                 </span>
    //               </div>
    //               <span className="text-sm font-semibold text-green-600">
    //                 {product.discount}
    //               </span>
    //             </div>

    //             {/* Rating + Sizes */}
    //             <p className="mb-1 text-sm text-yellow-500">
    //               ⭐ {product.rating} ({product.number_of_ratings} ratings,{" "}
    //               {product.rating_category})
    //             </p>
    //             <p className="mb-4 text-sm text-gray-600">
    //               <b>Sizes:</b> {product.sizes.join(", ")}
    //             </p>

    //             {/* Button */}
    //             <button className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-800">
    //               Add to Cart
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>

    <>
       <div className="min-h-screen px-6 py-10 mt-10 bg-gray-100">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ApiData.map((eachproduct) => (
          <ProductCard ApisData={eachproduct} key={eachproduct.id} />
        ))}
      </div>
    </div>
    
    </>
  );
}

export default Products;
