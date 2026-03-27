"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ ADD
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    const exist = cart.find((i) => i.id === item.id);

    if (exist) {
      setCart((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
      toast.success("Quantity Updated 🛒");
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
      toast.success("Added To Cart 🛒");
    }
  };

  // ✅ REMOVE SINGLE
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item Removed ❌");
  };

  // ✅ INCREASE
  const increaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // ✅ DECREASE
  const decreaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // ✅ CLEAR CART
  const removeAllFromCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.success("Cart Cleared ✅");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartProvider missing");
  return context;
};
