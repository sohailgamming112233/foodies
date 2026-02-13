"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      if (prev.find((c) => c.id === item.id)) {
        toast.info("Item already in cart");
        return prev;
      }
      toast.success("Item added to cart");
      return [...prev, item];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      toast.error("Item removed");
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
