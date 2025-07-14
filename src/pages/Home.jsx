import React from "react";
import { useEffect, useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import CardSwap, { Card } from "../../reactbits/CardSwap/CardSwap";
import ScrollVelocity from "../../reactbits/ScrollVelocity/ScrollVelocity";
import image2 from "../assets/image2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CurvedLoop from "../../reactbits/CurvedLoop/CurvedLoop";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const velocity = 30; 
    const [products, setProducts] = useState([]);
    const gridRef = useRef(null);



    async function fetchProduct() {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        let Data = data.filter((product) => product.rating.rate >= 4.5);

        setProducts(
          Object.entries(Data.slice(0,4)).map(([key, value]) => ({ ...value, id: key }))
        );
      }

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
      <div className="relative min-h-screen w-full bg-gray-800">

        <div
          style={{
            height: "800px",
            position: "relative",
            width: "100%",
            overflow: "hidden",
            background: "linear-gradient(to right, #4990F6, #37F5B9)",
            color: "#fff",
          }}
          className="md:h-[800px] h-screen w-full relative flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <ScrollVelocity
              texts={["New Collection", "Shop Now"]}
              velocity={velocity}
              className="custom-scroll-text"
            />
          </div>
          <img
            src={image2}
            alt="image2"
            className=" w-150 h-200 object-cover rounded-2xl absolute inset-2 top-4/5 left-1/5  transform -translate-x-1/2 -translate-y-1/2"
          />
          <CardSwap
            cardDistance={60}
            verticalDistance={80}
            delay={5000}
            pauseOnHover={false}
          >
            <Card customClass="p-4 shadow-lg flex flex-col gap-2 cursor-pointer">
              <h3 className="text-xl font-bold text-white font-sans ">
                Men's Clothing
              </h3>
              <p className="text-white">Explore the latest trends</p>
              <img
                src="https://i.pinimg.com/736x/ca/58/9c/ca589c7cd207aeb24c2365f79b293948.jpg"
                alt="Mens Clothing"
                className=" w-300 h-90 object-center rounded-2xl "
              />
            </Card>
            <Card customClass="p-6 shadow-lg flex flex-col gap-2 cursor-pointer">
              <h3 className="text-xl font-bold text-white font-sans ">
                Women's Clothing
              </h3>
              <p className="text-white ">Discover your style</p>
              <img
                src="https://i.pinimg.com/736x/a7/22/48/a722483df29d4f1607e55dc97c09e6e2.jpg"
                alt="Womens Clothing"
                className=" w-300 h-90 object-bottom rounded-2xl"
              />
            </Card>
            <Card customClass="p-6 shadow-lg flex flex-col gap-2 cursor-pointer">
              <h3 className="text-xl font-bold text-white font-sans ">
                Accessories
              </h3>
              <p className="text-white">Complete your look</p>
              <img
                src="https://i.pinimg.com/1200x/de/e0/95/dee095e51001fecffee4aa859e73bfd8.jpg"
                alt="Accessories"
                className=" w-300 h-90 object-top-right rounded-2xl"
              />
            </Card>
          </CardSwap>
        </div>
        <CurvedLoop
          marqueeText="Top ✦ Collections ✦ With ✦ Top ✦ Brands ✦"
          speed={3}
          curveAmount={100}
          direction="right"
          interactive={true}
          className="custom-text-style text-5xl md:text-3xl text-white "
        />
        <div className=" pyt-2">
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#1E2938] py-10 px-15"
          >
            {products.map((product, index) => (
              <div key={index} className="flex justify-center product-card ">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
