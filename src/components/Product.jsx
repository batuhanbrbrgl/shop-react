import React, {useContext,useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsHeart  } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = ({product}) => {
  const {addToCart, addToFavorite, favorites} = useContext(CartContext);
  const {id, title, price, image, category} = product;
  const isFavorite = favorites.some((item) => item.id === id)
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }
  , []);

  return <div className='group' data-aos="fade-up">
    <div className='border border-[#e4e4e4] rounded-lg  h-[300px] mb-4 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-black  group-hover:scale-110 transition shadow-xl shadow-gray-800'>
    <div className='w-full h-full flex justify-center'>
    <div className='w-[200px] mx-auto flex justify-center items-center'>
        <img className='max-h-[160px] group-hover:scale-110 duration-300 transition' src={image} alt={title} />
      </div>
      </div>  
      <div className='absolute -right-11 flex flex-col items-center justify-center top-1 rounded-lg group-hover:right-1 gap-y-2  group-hover:opacity-100 opacity-0 p-2 transition-all duration-300'>
        <button onClick={()=> addToCart(product, id) }>
          <div className='flex justify-center bg-green-400 rounded-lg items-center text-white w-12 h-12'>
          <BsPlus className='text-white' />

          </div>
        </button>
        <button onClick={()=> addToFavorite(product, id) }>
        <div className={`flex justify-center duration-300 ${isFavorite ? ' bg-red-500' : 'bg-gray-500'} rounded-lg items-center text-white w-12 h-12`}>
  <BsHeart />
</div>

    </button>
        <Link className='w-12 h-12 bg-white shadow-black shadow-2xl rounded-lg flex justify-center items-center text-primary drop-shadow-xl' to={`/product/${id}`}><BsEyeFill/></Link>
      </div>
    </div>

    <div>
      <div className='text-sm capitalize text-gray-500'>{category}</div>
      <Link to={`/product/${id}`} >
      <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
   
      <div className='font-semibold'>$ {price}</div>

    </div>

  </div>;
};

export default Product;
