"use client";

import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const categories = ["All", "Pastry", "Cake", "Tart", "Muffin", "Drink"];

const menuItems = [
  {
    id: 1,
    name: "Chocolate Croissant",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    description: "Flaky croissant filled with rich chocolate.",
    price: "$3.50",
    special: true,
    link: "/menu/chocolate-croissant",
  },
  {
    id: 2,
    name: "Almond Croissant",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5",
    description: "Buttery croissant topped with almonds.",
    price: "$3.75",
    special: false,
  },
  {
    id: 3,
    name: "Cinnamon Roll",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812",
    description: "Sweet cinnamon swirls with glaze.",
    price: "$3.00",
    special: true,
    link: "/menu/cinnamon-roll",
  },
  {
    id: 4,
    name: "Chocolate Danish",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    description: "Flaky pastry with chocolate filling.",
    price: "$3.50",
    special: false,
    link: "/menu/chocolate-danish",
  },
  {
    id: 5,
    name: "Cheese Croissant",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    description: "Croissant with creamy cheese inside.",
    price: "$3.80",
    special: true,
    link: "/menu/cheese-croissant",
  },
  {
    id: 6,
    name: "Fruit Danish",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5",
    description: "Pastry topped with fresh fruits.",
    price: "$3.90",
    special: false,
    link: "/menu/fruit-danish",
  },
  {
    id: 7,
    name: "Vanilla Cake",
    category: "Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description: "Soft vanilla cake with buttercream frosting.",
    price: "$5.00",
    special: false,
    link: "/menu/vanilla-cake",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    category: "Cake",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31",
    description: "Rich chocolate cake with ganache.",
    price: "$5.50",
    special: true,
    link: "/menu/chocolate-cake",
  },
  {
    id: 9,
    name: "Red Velvet Cake",
    category: "Cake",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
    description: "Classic red velvet with cream cheese frosting.",
    price: "$5.75",
    special: true,
    link: "/menu/red-velvet-cake",
  },
  {
    id: 10,
    name: "Lemon Cake",
    category: "Cake",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    description: "Zesty lemon cake with frosting.",
    price: "$5.25",
    special: false,
    link: "/menu/lemon-cake",
  },
  {
    id: 11,
    name: "Carrot Cake",
    category: "Cake",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5",
    description: "Moist carrot cake with nuts.",
    price: "$5.50",
    special: true,
    link: "/menu/carrot-cake",
  },
  {
    id: 12,
    name: "Coffee Cake",
    category: "Cake",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b",
    description: "Soft cake with coffee flavor.",
    price: "$5.00",
    special: false,
    link: "/menu/coffee-cake",
  },
  {
    id: 13,
    name: "Strawberry Tart",
    category: "Tart",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    description: "Fresh strawberries on crispy tart base.",
    price: "$4.00",
    special: true,
    link: "/menu/strawberry-tart",
  },
  {
    id: 14,
    name: "Lemon Tart",
    category: "Tart",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5",
    description: "Tangy lemon filling with buttery crust.",
    price: "$4.50",
    special: true,
    link: "/menu/lemon-tart",
  },
  {
    id: 15,
    name: "Blueberry Tart",
    category: "Tart",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5",
    description: "Sweet blueberries on crispy tart.",
    price: "$4.25",
    special: false,
    link: "/menu/blueberry-tart",
  },
  {
    id: 16,
    name: "Chocolate Tart",
    category: "Tart",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Rich chocolate tart with ganache.",
    price: "$4.75",
    special: true,
    link: "/menu/chocolate-tart",
  },
  {
    id: 17,
    name: "Apple Tart",
    category: "Tart",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    description: "Baked apple slices on crispy crust.",
    price: "$4.50",
    special: false,
    link: "/menu/apple-tart",
  },
  {
    id: 18,
    name: "Pear Tart",
    category: "Tart",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5",
    description: "Juicy pear on buttery tart.",
    price: "$4.75",
    special: false,
    link: "/menu/pear-tart",
  },
  {
    id: 19,
    name: "Blueberry Muffin",
    category: "Muffin",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713",
    description: "Moist muffin loaded with blueberries.",
    price: "$2.50",
    special: false,
    link: "/menu/blueberry-muffin",
  },
  {
    id: 20,
    name: "Chocolate Muffin",
    category: "Muffin",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Chocolate muffin with chips.",
    price: "$2.75",
    special: true,
    link: "/menu/chocolate-muffin",
  },
  {
    id: 21,
    name: "Banana Muffin",
    category: "Muffin",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Banana muffin with walnuts.",
    price: "$2.50",
    special: false,
    link: "/menu/banana-muffin",
  },
  {
    id: 22,
    name: "Carrot Muffin",
    category: "Muffin",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Healthy carrot muffin.",
    price: "$2.75",
    special: false,
    link: "/menu/carrot-muffin",
  },
  {
    id: 23,
    name: "Lemon Muffin",
    category: "Muffin",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
    description: "Tangy lemon muffin.",
    price: "$2.50",
    special: true,
    link: "/menu/lemon-muffin",
  },
  {
    id: 24,
    name: "Cinnamon Muffin",
    category: "Muffin",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef",
    description: "Spicy cinnamon muffin.",
    price: "$2.75",
    special: false,
    link: "/menu/cinnamon-muffin",
  },
  {
    id: 25,
    name: "Caramel Latte",
    category: "Drink",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Rich espresso with caramel.",
    price: "$3.00",
    special: false,
    link: "/menu/caramel-latte",
  },
  {
    id: 26,
    name: "Cappuccino",
    category: "Drink",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Espresso with steamed milk.",
    price: "$3.25",
    special: false,
    link: "/menu/cappuccino",
  },
  {
    id: 27,
    name: "Hot Chocolate",
    category: "Drink",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Creamy hot chocolate.",
    price: "$3.00",
    special: true,
    link: "/menu/hot-chocolate",
  },
  {
    id: 28,
    name: "Tea Latte",
    category: "Drink",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Flavored tea with milk.",
    price: "$3.00",
    special: false,
    link: "/menu/tea-latte",
  },
  {
    id: 29,
    name: "Espresso",
    category: "Drink",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description: "Strong espresso shot.",
    price: "$2.50",
    special: false,
    link: "/menu/espresso",
  },
  {
    id: 30,
    name: "Mocha",
    category: "Drink",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    description: "Coffee with chocolate flavor.",
    price: "$3.50",
    special: true,
  },
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="bg-zinc-50 dark:bg-black text-black dark:text-white min-h-screen px-6 py-16">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-yellow-500">Menu</span>
        </h1>
        <div className="mt-4 flex justify-center flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-6 text-center relative"
          >
            {item.special && (
              <span className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <FaStar /> Special
              </span>
            )}

            <div className="my-4">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              {item.description}
            </p>
            <span className="font-bold text-yellow-500 mt-2 block">
              {item.price}
            </span>

            <button
              onClick={() => addToCart(item)}
              className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MenuPage;
