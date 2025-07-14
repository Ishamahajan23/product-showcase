import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import SplitText from "../../reactbits/SplitText/SplitText";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const gridRef = useRef(null);

  async function fetchProduct() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    setProducts(
      Object.entries(data).map(([key, value]) => ({ ...value, id: key }))
    );
  }

  useEffect(() => {
    fetchProduct();
  }, []);


  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <Navbar />
      <div className="pt-25 px-4 flex flex-col items-center justify-center bg-[#202B3D]">
        <SplitText
          text="Products"
          className="md:text-5xl text-xl font-semibold font-serif text-center text-white mb-8"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 background-gray-100 py-10 "
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex justify-center "
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
