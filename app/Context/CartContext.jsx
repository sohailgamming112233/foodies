"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    const exists = cart.find((c) => c.id === item.id);
    if (exists) {
      toast.info("Increased quantity");
    } else {
      toast.success("Item added to cart");
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      toast.error("Item removed");
      return prev.filter((item) => item.id !== id);
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
