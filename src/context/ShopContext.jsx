import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

// const getDefaultCart = (PRODUCTS) => {
//   let cart = {};
//   for (let i = 1; i < PRODUCTS.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

export const ShopContextProvider = (props) => {
  const [PRODUCTS, setPRODUCTS] = useState([]);
  useEffect(() => {
    const callAxios = async () => {
      try {
        const url = "https://test-drib.onrender.com/listrecord";
        const { data } = await axios.get(url);
        const dataUpdate = data.map((item) => item.fields);
        console.log("ShopContext.jsx useEffect dataUpdate: ", dataUpdate);
        setPRODUCTS(dataUpdate);
      } catch (error) {
        console.log("ShopList.jsx useEffect error");
      }
    };
    callAxios();
  }, []);

  const [cartItems, setCartItems] = useState({});
  const [filteredProducts,setFilterProducts] = useState([]);
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      const itemInfo = PRODUCTS.find((product) => product.id == key);
      totalAmount += Number(itemInfo.price);
      // Move the console.log statement inside the loop
      console.log("ShopContext.jsx getTotalCartAmount totalAmount: ", itemInfo);
    }
    return totalAmount;
  };

  useEffect(() => {
    const newFilter = PRODUCTS.filter(
      (product) => cartItems[product.id] == 1
    );
    setFilterProducts(newFilter);
  }, [cartItems,PRODUCTS]);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
  };

  const removeFromCart = (itemId) => {
    const newCartItems = {...cartItems};
    delete newCartItems[itemId];
    console.log("ShopContext.js removeFromCart newCartItems: ",newCartItems)
    setCartItems(newCartItems);
  };

  //   const updateCartItemCount = (newAmount, itemId) => {
  //     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  //   };

  //   const checkout = () => {
  //     setCartItems(getDefaultCart());
  //   };

  const contextValue = {
    cartItems,
    addToCart,
    // updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    // checkout,
    PRODUCTS,
    filteredProducts,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
