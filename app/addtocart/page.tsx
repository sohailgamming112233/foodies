"use client";

import { useCart } from "../Context/CartContext"; 
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cart = [],
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    removeAllFromCart,
  } = useCart();

  const router = useRouter();

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false); // ✅ NEW
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const total = cart
    .reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handlePlaceOrder = () => {
    if (!name || !phone || !address) {
      toast.error("Please fill all details!");
      return;
    }

    const orderDetails = {
      customer: { name, phone, address },
      paymentMethod,
      items: cart,
      total,
    };

    console.log("Order Placed:", orderDetails);

    removeAllFromCart();

    toast.success("Order Placed Successfully ✅");

    // ✅ UI update
    setOrderPlaced(true);

    setName("");
    setPhone("");
    setAddress("");
    setPaymentMethod("Cash");
    setShowOrderForm(false);

    // ✅ optional redirect
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  // ✅ Order success screen
  if (orderPlaced) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-green-500">
          ✅ Order Confirmed!
        </h2>
      </div>
    );
  }

  return (
    <main className="p-6 md:p-10 min-h-screen bg-zinc-50 dark:bg-gray-900">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Your <span className="text-yellow-500">Cart</span>
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Cart is empty</p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
              >
                <div className="flex items-center gap-4 w-full md:w-1/2">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={item.image || "/placeholder.png"}
                      alt={item.name || "Food item"}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-sm mt-1">{item.description}</p>
                    <p className="mt-2 font-bold">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-900 rounded"
                  >
                    -
                  </button>

                  <span className="px-3">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-900 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold">Total: ${total}</h2>

            {!showOrderForm && (
              <button
                onClick={() => setShowOrderForm(true)}
                className="mt-4 md:mt-0 bg-yellow-500 text-black px-6 py-2 rounded font-bold"
              >
                Place Order
              </button>
            )}
          </div>

          {showOrderForm && (
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Order Details</h3>

              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 border rounded-lg"
                />

                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-3 border rounded-lg"
                />

                <textarea
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="p-3 border rounded-lg"
                  rows={3}
                ></textarea>

                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="p-3 border rounded-lg bg-gray-700"
                >
                  <option value="Cash">Cash on Delivery</option>
                  <option value="JazzCash">JazzCash</option>
                  <option value="BankTransfer">Bank Transfer</option>
                  <option value="EasyPaisa">EasyPaisa</option>
                </select>

                <button
                  onClick={handlePlaceOrder}
                  className="mt-4 bg-green-500 text-white px-6 py-2 rounded font-bold"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
}
