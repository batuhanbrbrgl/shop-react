import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();
const CartProvider = ({children}) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : [];
  });
const [itemAmount, setItemAmount] = useState(0);
const [favoriteAmount, setFavoriteAmount] = useState(0);
const [total, setTotal] = useState(0);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);


useEffect(() => {
  let newTotal = cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);
  setTotal(newTotal.toFixed(2));
}, [cart]);


useEffect(() => {
  let newAmount = cart.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  setItemAmount(newAmount);
}, [cart]);

useEffect(() => {
  let newAmount = favorites.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  setFavoriteAmount(newAmount);
}, [favorites]);

  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
   const cartItem = cart.find((item) => item.id === id);
   if (cartItem) {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return {...item, amount: cartItem.amount + 1 };
      }
      else {
        return item;
      }
   });
   console.log(newCart);
   setCart(newCart);
   }
   else {
     setCart([...cart, newItem]);
   }
  };

  const addToFavorite = (product, id) => {
    const favoriteItem = favorites.find((item) => item.id === id);
    if (favoriteItem) {
      const newFavorites = favorites.filter((item) => item.id !== id);
      setFavorites(newFavorites);
    } else {
      const newFavoriteItem = {...product, amount: 1};
      setFavorites([...favorites, newFavoriteItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart= cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return {...item, amount: item.amount + 1};
      }
      else {
        return item;
      }
    });
    setCart(newCart);
  };
  const decreaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return {...item, amount: item.amount - 1};
      }
      else {
        return item;
      }
    }).filter((item) => item.amount !== 0);
    setCart(newCart);
  };

  return( <CartContext.Provider value={{cart,favorites, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, addToFavorite, itemAmount, total, favoriteAmount }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
