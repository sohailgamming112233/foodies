"use client";

import { useCart } from "../Context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [showForm, setShowForm] = useState(false);

  const total = cart
    .reduce(
      (acc, item) => acc + Number(item.price.replace("$", "")) * item.quantity,
      0
    )
    .toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setShowForm(false);
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white p-6 md:p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Your <span className="text-yellow-500">Cart</span>
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-zinc-500">Cart is empty</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6"
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="w-full md:w-48 h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="flex-1 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    {item.description}
                  </p>
                  <p className="text-yellow-500 font-bold mt-1">{item.price}</p>
                </div>
              </div>

              {/* Quantity + / - */}
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 p-2 rounded"
                >
                  <FaMinus />
                </button>
                <span className="px-3 text-lg">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 p-2 rounded"
                >
                  <FaPlus />
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full ml-4"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold">
              Total: <span className="text-yellow-500">${total}</span>
            </h2>
            <div className="mt-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl w-full max-w-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">
              Order Details
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg text-white border border-white"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg text-white border border-white"
                required
              />
              <input
                type="text"
                placeholder="Delivery Address"
                className="w-full p-3 rounded-lg text-white border border-white"
                required
              />
              <select className="w-full p-3 rounded-lg text-white border border-white" required>
                <option className="text-black" value="">Select Payment Method</option>
                <option className="text-black" value="cash">Cash on Delivery</option>
                <option className="text-black" value="card">Credit / Debit Card</option>
              </select>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-semibold"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
