"use client";

import { useState } from "react";
import { FaBirthdayCake, FaCoffee, FaCookie, FaLeaf, FaMugHot, FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Menu Items
const menuItems = [
  // Pastry (6 items)

  {
    id: 1,
    name: "Chocolate Croissant",
    category: "Pastry",
    icon: <FaCookie className="text-6xl text-yellow-500 mx-auto" />,
    description: "Flaky croissant filled with rich chocolate.",
    price: "$3.50",
    special: true,
  },
  {
    id: 2,
    name: "Almond Croissant",
    category: "Pastry",
    icon: <FaCookie className="text-6xl text-yellow-400 mx-auto" />,
    description: "Buttery croissant topped with almonds.",
    price: "$3.75",
    special: false,
  },
  {
    id: 3,
    name: "Cinnamon Roll",
    category: "Pastry",
    icon: <FaCookie className="text-6xl text-orange-500 mx-auto" />,
    description: "Sweet cinnamon swirls with glaze.",
    price: "$3.00",
    special: true,
  },
  {
    id: 4,
    name: "Chocolate Danish",
    category: "Pastry",
    icon: <FaCookie className="text-6xl text-brown-500 mx-auto" />,
    description: "Flaky pastry with chocolate filling.",
    price: "$3.50",
    special: false,
  },
  {
    id: 5,
    name: "Cheese Croissant",
    category: "Pastry",
    icon: <FaCookie className="text-6xl text-yellow-600 mx-auto" />,
    description: "Croissant with creamy cheese inside.",
    price: "$3.80",
    special: true,
  },
  {
    id: 6,
    name: "Fruit Danish",
    category: "Pastry",
    icon: <FaCookie className="text-6xl text-red-400 mx-auto" />,
    description: "Pastry topped with fresh fruits.",
    price: "$3.90",
    special: false,
  },
  {
    id: 7,
    name: "Vanilla Cake",
    category: "Cake",
    icon: <FaBirthdayCake className="text-6xl text-pink-500 mx-auto" />,
    description: "Soft and creamy vanilla cake with buttercream frosting.",
    price: "$5.00",
    special: false,
  },
  {
    id: 8,
    name: "Chocolate Cake",
    category: "Cake",
    icon: <FaBirthdayCake className="text-6xl text-brown-600 mx-auto" />,
    description: "Rich chocolate cake with ganache.",
    price: "$5.50",
    special: true,
  },
  {
    id: 9,
    name: "Red Velvet Cake",
    category: "Cake",
    icon: <FaBirthdayCake className="text-6xl text-red-600 mx-auto" />,
    description: "Classic red velvet with cream cheese frosting.",
    price: "$5.75",
    special: true,
  },
  {
    id: 10,
    name: "Lemon Cake",
    category: "Cake",
    icon: <FaBirthdayCake className="text-6xl text-yellow-400 mx-auto" />,
    description: "Zesty lemon cake with frosting.",
    price: "$5.25",
    special: false,
  },
  {
    id: 11,
    name: "Carrot Cake",
    category: "Cake",
    icon: <FaBirthdayCake className="text-6xl text-orange-500 mx-auto" />,
    description: "Moist carrot cake with nuts.",
    price: "$5.50",
    special: true,
  },
  {
    id: 12,
    name: "Coffee Cake",
    category: "Cake",
    icon: <FaBirthdayCake className="text-6xl text-brown-400 mx-auto" />,
    description: "Soft cake with coffee flavor.",
    price: "$5.00",
    special: false,
  },
  {
    id: 13,
    name: "Strawberry Tart",
    category: "Tart",
    icon: <FaLeaf className="text-6xl text-red-500 mx-auto" />,
    description: "Fresh strawberries on a crispy tart base.",
    price: "$4.00",
    special: true,
  },
  {
    id: 14,
    name: "Lemon Tart",
    category: "Tart",
    icon: <FaLeaf className="text-6xl text-yellow-300 mx-auto" />,
    description: "Tangy lemon filling with buttery crust.",
    price: "$4.50",
    special: true,
  },
  {
    id: 15,
    name: "Blueberry Tart",
    category: "Tart",
    icon: <FaLeaf className="text-6xl text-blue-500 mx-auto" />,
    description: "Sweet blueberries on a crispy tart.",
    price: "$4.25",
    special: false,
  },
  {
    id: 16,
    name: "Chocolate Tart",
    category: "Tart",
    icon: <FaLeaf className="text-6xl text-brown-500 mx-auto" />,
    description: "Rich chocolate tart with ganache.",
    price: "$4.75",
    special: true,
  },
  {
    id: 17,
    name: "Apple Tart",
    category: "Tart",
    icon: <FaLeaf className="text-6xl text-red-400 mx-auto" />,
    description: "Baked apple slices on crispy crust.",
    price: "$4.50",
    special: false,
  },
  {
    id: 18,
    name: "Pear Tart",
    category: "Tart",
    icon: <FaLeaf className="text-6xl text-green-500 mx-auto" />,
    description: "Juicy pear on buttery tart.",
    price: "$4.75",
    special: false,
  },
  {
    id: 19,
    name: "Blueberry Muffin",
    category: "Muffin",
    icon: <FaCookie className="text-6xl text-blue-500 mx-auto" />,
    description: "Moist muffin loaded with fresh blueberries.",
    price: "$2.50",
    special: false,
  },
  {
    id: 20,
    name: "Chocolate Muffin",
    category: "Muffin",
    icon: <FaCookie className="text-6xl text-brown-500 mx-auto" />,
    description: "Chocolatey muffin with chips.",
    price: "$2.75",
    special: true,
  },
  {
    id: 21,
    name: "Banana Muffin",
    category: "Muffin",
    icon: <FaCookie className="text-6xl text-yellow-500 mx-auto" />,
    description: "Moist banana muffin with walnuts.",
    price: "$2.50",
    special: false,
  },
  {
    id: 22,
    name: "Carrot Muffin",
    category: "Muffin",
    icon: <FaCookie className="text-6xl text-orange-500 mx-auto" />,
    description: "Healthy carrot muffin with spice.",
    price: "$2.75",
    special: false,
  },
  {
    id: 23,
    name: "Lemon Muffin",
    category: "Muffin",
    icon: <FaCookie className="text-6xl text-yellow-300 mx-auto" />,
    description: "Tangy lemon muffin.",
    price: "$2.50",
    special: true,
  },
  {
    id: 24,
    name: "Cinnamon Muffin",
    category: "Muffin",
    icon: <FaCookie className="text-6xl text-orange-400 mx-auto" />,
    description: "Spicy cinnamon muffin.",
    price: "$2.75",
    special: false,
  },
  {
    id: 25,
    name: "Caramel Latte",
    category: "Drink",
    icon: <FaCoffee className="text-6xl text-yellow-600 mx-auto" />,
    description: "Rich espresso with caramel flavor and creamy foam.",
    price: "$3.00",
    special: false,
  },
  {
    id: 26,
    name: "Cappuccino",
    category: "Drink",
    icon: <FaMugHot className="text-6xl text-brown-500 mx-auto" />,
    description: "Espresso with steamed milk and foam.",
    price: "$3.25",
    special: false,
  },
  {
    id: 27,
    name: "Hot Chocolate",
    category: "Drink",
    icon: <FaCoffee className="text-6xl text-brown-400 mx-auto" />,
    description: "Creamy chocolate hot drink.",
    price: "$3.00",
    special: true,
  },
  {
    id: 28,
    name: "Tea Latte",
    category: "Drink",
    icon: <FaMugHot className="text-6xl text-green-500 mx-auto" />,
    description: "Flavored tea with steamed milk.",
    price: "$3.00",
    special: false,
  },
  {
    id: 29,
    name: "Espresso",
    category: "Drink",
    icon: <FaCoffee className="text-6xl text-black mx-auto" />,
    description: "Strong espresso shot.",
    price: "$2.50",
    special: false,
  },
  {
    id: 30,
    name: "Mocha",
    category: "Drink",
    icon: <FaCoffee className="text-6xl text-brown-600 mx-auto" />,
    description: "Coffee with chocolate flavor.",
    price: "$3.50",
    special: true,
  },
];
const categories = ["All", "Pastry", "Cake", "Tart", "Muffin", "Drink"];
const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    const exists = cart.find((c) => c.id === item.id);

    if (exists) {
      toast.warning("Item already added to cart 🛒");
    } else {
      setCart([...cart, item]);
      toast.success("Item added to cart successfully 🎉");
    }
  };

  return (
    <main className="bg-zinc-50 dark:bg-black text-black dark:text-white min-h-screen px-6 py-16">
      <ToastContainer position="top-right" autoClose={2000} />

      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-yellow-500">Menu</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-4">
          Explore our delicious pastries, cakes, drinks and more.
        </p>
      </section>

      <section className="max-w-6xl mx-auto text-center mb-10 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold border transition ${
              selectedCategory === cat
                ? "bg-yellow-500 text-black border-yellow-500"
                : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:bg-yellow-500 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 relative"
          >
            {item.special && (
              <span className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold text-sm flex items-center gap-1">
                <FaStar /> Special
              </span>
            )}

            <div className="text-4xl my-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              {item.description}
            </p>
            <span className="font-bold text-yellow-500 mt-2 block">
              {item.price}
            </span>

            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition"
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

