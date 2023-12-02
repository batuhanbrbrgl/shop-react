import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Jew from '../img/jewelery.png';

const Accessory = () => {
  const { products } = useContext(ProductContext);
  const mensClothing = products.filter(product => product.category === "jewelery");

  return (
    <div className="min-h-screen">
        <div className='  bg-no-repeat bg-cover bg-center'>
        <img className=' max-h-[265px] mt-36 lg:mt-[128px] w-full' src={Jew} alt='hero' />
        </div>
       
      <div className="container py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0">
          {mensClothing.map((product) => {
            return (
              <Product product={product} key={product.id} />
            ); 
          })}
        </div>
      </div>
    </div>
  );
};
export default Accessory;
