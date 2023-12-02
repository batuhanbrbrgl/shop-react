import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <Hero />
      <div className="container py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0">
          {products.map((product) => {
            return (
              <Product product={product} key={product.id} />
            ); 
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

