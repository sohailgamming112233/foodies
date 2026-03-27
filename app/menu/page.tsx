"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/firebase";
import { useCart } from "../Context/CartContext";
import Image from "next/image";

const categories = [
  { id: "all", label: "All" },
  { id: "pastry", label: "Pastry" },
  { id: "cake", label: "Cake" },
  { id: "tart", label: "Tart" },
  { id: "muffin", label: "Muffin" },
  { id: "drink", label: "Drink" },
];

export default function MenuPage() {
  const [menu, setMenu] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const snapshot = await getDocs(collection(db, "Menu"));

        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMenu(items);
      } catch (error) {
        console.error("Firestore Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading)
    return <p className="text-center mt-20">Loading menu...</p>;

  const filteredItems =
    selectedCategory === "all"
      ? menu
      : menu.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory
        );

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our <span className="text-yellow-500">Menu</span>
      </h1>

      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat.id
                ? "bg-yellow-500 text-black"
                : "bg-zinc-300 dark:bg-zinc-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.length === 0 ? (
          <p className="col-span-full text-center">No Items Found</p>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow"
            >
              <div className="relative w-full h-40">
                <Image
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4">
                {item.name}
              </h3>

              <p className="text-sm text-zinc-500 mt-2">
                {item.description}
              </p>

              <p className="text-yellow-500 font-bold mt-2">
                ${item.price}
              </p>

              {item.special && (
                <p className="text-red-500 font-bold mt-1">
                  ⭐ Special
                </p>
              )}

              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-yellow-500 w-full py-2 rounded-lg"
              >
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}