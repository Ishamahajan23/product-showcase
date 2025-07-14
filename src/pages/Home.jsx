import React from "react";
import Navbar from "../components/Navbar";
import CardSwap, { Card } from "../../reactbits/CardSwap/CardSwap";
import ScrollVelocity from "../../reactbits/ScrollVelocity/ScrollVelocity";
import image2 from "../assets/image2.png";
import Footer from "../components/Footer";
const Home = () => {
    const velocity = 30; 
  return (
    <>
      <div className="relative min-h-screen w-full bg-gray-800">
        <Navbar />

        <div
          style={{
            height: "700px",
            position: "relative",
            width: "100%",
            overflow: "hidden",
            background: "linear-gradient(to right, #4990F6, #37F5B9)",
            color: "#fff",
          }}
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

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
