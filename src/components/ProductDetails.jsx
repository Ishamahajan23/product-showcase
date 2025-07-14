import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const detailsRef = useRef(null);

  async function fetchProduct() {
    try {
      setLoading(true);
      let res = await fetch(`https://fakestoreapi.com/products/${id+1}`);
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
  useEffect(() => {
    if (product && detailsRef.current) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [product]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-700">Product not found</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div
        ref={detailsRef}
        className=" w-full container mx-auto p-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 bg-gray-100 min-h-screen"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg p-5 shadow-lg max-w-200 h-200 md:max-w-300 md:h-300 object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
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
      <Footer />
    </>
  );
};

export default ProductDetails;
