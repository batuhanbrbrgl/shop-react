import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductDetails = () => {

const { id } = useParams();
const { products } = useContext(ProductContext);
const { addToCart } = useContext(CartContext);
console.log(id);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }
  , []);


const product = products.find((item) => item.id === parseInt(id));

if(!product) {
  return <div className='h-screen flex justify-center items-center'>Loading...</div>;
} 

const { title, price, image, description } = product;
  return <div className='pt-32 pb-12 lg:py-32 h-screen flex items-center' data-aos="fade-up" >
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center'>
      <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
         <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
      </div>
      <div className='flex-1 text-center lg:text-left'> 
        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
      <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
      <p className='mb-8'>{description}</p>
      <button onClick={()=>addToCart(product, product.id)} className='bg-primary hover:shadow-2xl hover:shadow-black duration-300 py-4 px-8 text-white rounded-lg'>Add to cart</button>
      </div>
      </div>
      
    </div>
    </div>;
};


export default ProductDetails;

