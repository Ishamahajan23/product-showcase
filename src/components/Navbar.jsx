import React from 'react'
import { Link } from 'react-router-dom';
import CircularText from "../../reactbits/CircularText/CircularText";
import TextPressure from "../../reactbits/TextPressure/TextPressure"
import GradientText from "../../reactbits/GradientText/GradientText"

const Navbar = () => {
  return (
    <>
      <header className="fixed w-full z-50 bg-black shadow px-6  py-4 flex items-center justify-between ">
        <div>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={1}
            showBorder={false}
            className="custom-class  text-3xl px-5"
          >
            My Store
          </GradientText>
        </div>

        <div className="flex space-x-6 text-gray-100 font-lg px-5 font-sans" >
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
