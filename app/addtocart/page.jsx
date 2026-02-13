"use client";

import { useCart } from "../Context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart
    .reduce((acc, item) => acc + Number(item.price.replace("$", "")), 0)
    .toFixed(2);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-4 border p-4 rounded"
            >
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-6">Total: ${total}</h2>
        </>
      )}
    </main>
  );
}
