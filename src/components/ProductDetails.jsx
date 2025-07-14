import React, { useEffect, useState } from "react";

import Loader from "../components/Loader";

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchProduct() {
    try {
      setLoading(true);
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);
  

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <>
        <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-700">Product not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className=" w-full flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-gray-100 h-screen">
        <div className=" bg-white h-full flex items-center justify-center p-6 rounded-lg shadow-lg md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-100 h-100"
          />
        </div>

        <div className="w-full h-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg  flex flex-col items-start justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            {product.description}
          </p>
          <p className="text-lg md:text-xl font-bold text-green-600 mb-4">
            ${product.price}
          </p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-lg font-semibold">
              {product.rating?.rate} ★
            </span>
            <span className="text-gray-600 text-sm">
              ({product.rating?.count} reviews)
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
