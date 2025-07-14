import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const gridRef = useRef(null);

  async function fetchProduct() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    setProducts(data);
  }
  console.log(products);
  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    }
  }, [products]);

  return (
    <>
      <div className=" pyt-8">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#1E2938] py-30 px-15"
        >
          {products.map((product) => (
            <div key={product.id} className="flex justify-center product-card ">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
