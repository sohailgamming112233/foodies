import Image from "next/image";
import Link from "next/link";
import { FaUtensils, FaTruck, FaStar, FaShoppingCart, FaThumbsUp } from "react-icons/fa";

const dishes = [
  {
    id: 1,
    name: "Zinger Burger",
    desc: "Crispy and juicy chicken patty, fresh lettuce, tomato, and our special signature sauce sandwiched in a soft bun. Perfect for burger lovers who crave crunch and flavor in every bite.",
    image: "/burger.png",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    desc: "Hot oven-baked pizza loaded with creamy mozzarella, fresh vegetables, and premium toppings for the ultimate cheesy experience. Ideal for sharing with family or friends.",
    image: "/pizza.png",
  },
  {
    id: 3,
    name: "Italian Pasta",
    desc: "Creamy white sauce pasta tossed with fresh herbs, garlic, and parmesan for a rich and satisfying meal. A classic dish for pasta enthusiasts craving authenticity.",
    image: "/pasta.png",
  },
];

export default function Home() {
  return (
    <main className="bg-zinc-50 dark:bg-black text-black dark:text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12">
        <div className="space-y-6 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Taste The Best <br />
            <span className="text-yellow-500">Delicious Food in Town</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Experience mouth-watering dishes freshly prepared every day by our expert chefs. 
            From sizzling burgers to creamy pastas and cheesy pizzas, enjoy hot meals delivered straight to your doorstep quickly and safely.
          </p>

          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <Link
              href="/menu"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Explore Menu
            </Link>

            <Link
              href="/contact"
              className="border border-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              Reserve Table
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image.png"
            alt="Delicious Fresh Food"
            width={500}
            height={500}
            priority
            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Our Popular Dishes
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {dishes.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <Image
                  src={item.image}
                  alt={`${item.name} image`}
                  width={220}
                  height={220}
                  className="mx-auto mb-4 rounded-2xl"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-zinc-500 mb-4">{item.desc}</p>
                <button 
                  aria-label={`Order ${item.name}`}
                  className="bg-yellow-500 px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-yellow-400 transition"
                >
                  <FaShoppingCart /> Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Why People Love Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-md">
              <FaUtensils className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-zinc-500">
                We use daily fresh vegetables, premium quality meats, and handpicked ingredients for every dish. Quality you can taste!
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-md">
              <FaTruck className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-zinc-500">
                Lightning-fast 30-minute express delivery ensures your meals arrive hot and ready to enjoy. Hot food, happy mood!
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-md">
              <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5 Star Rating</h3>
              <p className="text-zinc-500">
                Loved by thousands, our dishes consistently earn 4.9+ ratings for taste and quality. Join our happy customers today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-md">
              <FaThumbsUp className="text-3xl text-yellow-500 mx-auto mb-4" />
              <p className="text-zinc-500 mb-4">
                "Absolutely loved the Zinger Burger! Crispy, juicy, and full of flavor. Delivery was super fast too!" 
              </p>
              <span className="font-semibold">- Sarah K.</span>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-md">
              <FaThumbsUp className="text-3xl text-yellow-500 mx-auto mb-4" />
              <p className="text-zinc-500 mb-4">
                "Best pasta I've had in ages. Creamy, perfectly cooked, and fresh ingredients. Highly recommend!" 
              </p>
              <span className="font-semibold">- Ahmed R.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-black py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Hungry? Order Now & Enjoy!
        </h2>
        <Link
          href="/menu"
          className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-zinc-800 transition"
        >
          Order Food
        </Link>
      </section>
    </main>
  );
}
