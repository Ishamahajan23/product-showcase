import React from 'react'
import StarBorder from  "../../reactbits/StarBorder/StarBorder.jsx";



const ProductCard = ({product}) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-2xl flex flex-col items-center justify-between h-full">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-100 h-100 object-full rounded-t-lg "
        />
        <h2 className="text-lg font-semibold mt-2 text-wrap font-sans text-center">
          {product.title}
        </h2>
        <p className="text-center"> {product.rating.rate}</p>
      </div>

      <div className="flex items-center justify-between mt-2 gap-4">
        <p className="text-lg font-bold mt-2">${product.price}</p>

        <button className="mt-4 bg-[#6787E3] text-white px-4 py-2 rounded-lg hover:bg-gradient-to-r from-[#a3a3a3] to-[#7d7d7d] transition duration-300">
          Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard