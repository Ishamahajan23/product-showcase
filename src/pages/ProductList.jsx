import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    async function fetchProduct(){
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log(data);
        setProducts(Object.entries(data).map(([key, value]) => ({ ...value, id: key })));
    }
    useEffect(()=>{
       fetchProduct();
    },[])
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="m-3 ">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList