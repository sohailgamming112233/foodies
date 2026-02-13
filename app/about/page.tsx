import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import React from "react";
import { FaStar, FaUsers, FaSmile } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6"; // ya FaBirthdayCake agar fa6 issue ho

const AboutPage = () => {
  return (
    <main className="bg-zinc-50 dark:bg-black text-black dark:text-white min-h-screen px-6 py-16">

      {/* HERO & ABOUT */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-yellow-500">Our Pastry House</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
          Welcome to our Pastry House! We craft fresh, delicious pastries and
          desserts every day using high-quality ingredients. From creamy cakes
          to crispy croissants, every bite is baked with love and perfection.
        </p>

        <p className="text-zinc-600 dark:text-zinc-400">
          Founded in 2015, our mission is to bring joy to your taste buds. We
          combine traditional recipes with modern flavors to create a unique
          culinary experience. Our team of expert bakers ensures that every
          pastry leaving our kitchen is fresh, flavorful, and visually
          delightful.
        </p>

        <p className="text-zinc-600 dark:text-zinc-400">
          Whether you're celebrating a special occasion or simply craving
          something sweet, we are here to make your day a little sweeter. Visit
          us or order online to enjoy freshly baked delights at your doorstep.
        </p>

        <div className="mt-8">
          <a
            href="/menu"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/pastry.jpg"
          alt="Fresh Pastries"
          className="rounded-3xl shadow-2xl w-full object-cover h-96"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <ul className="text-zinc-600 dark:text-zinc-400 list-none space-y-4">
            <li className="flex items-center gap-3">
              <FaCakeCandles className="text-yellow-500 text-2xl" />
              Freshly baked every day using premium ingredients.
            </li>
            <li className="flex items-center gap-3">
              <FaSmile className="text-yellow-500 text-2xl" />
              Wide variety of pastries, cakes, and desserts.
            </li>
            <li className="flex items-center gap-3">
              <FaUsers className="text-yellow-500 text-2xl" />
              Fast delivery and friendly service.
            </li>
            <li className="flex items-center gap-3">
              <FaStar className="text-yellow-500 text-2xl" />
              Beautifully crafted desserts for all occasions.
            </li>
          </ul>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="mt-20 max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-md flex flex-col items-center">
            <FaSmile className="text-yellow-500 text-4xl mb-4" />
            <p className="text-zinc-500 mb-4">
              "Absolutely loved the croissants! So fresh and buttery. Delivery
              was super fast too!"
            </p>
            <span className="font-semibold">- Sarah K.</span>
          </div>
          <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-md flex flex-col items-center">
            <FaSmile className="text-yellow-500 text-4xl mb-4" />
            <p className="text-zinc-500 mb-4">
              "The cakes are amazing. Perfectly sweet and beautifully decorated.
              Highly recommend!"
            </p>
            <span className="font-semibold">- Ahmed R.</span>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mt-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Chef 1 */}
          <div className="space-y-2">
            <img
              src="/chief1.png"
              alt="Chef 1"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold">Chef Ali</h3>
            <p className="text-zinc-500 text-sm">Head Pastry Chef</p>
            <div className="flex justify-center gap-4 mt-2 text-yellow-500">
              <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 transition cursor-pointer" />
            </div>
          </div>

          {/* Chef 2 */}
          <div className="space-y-2">
            <img
              src="/chief2.png"
              alt="Chef 2"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold">Chef Sara</h3>
            <p className="text-zinc-500 text-sm">Cake Specialist</p>
            <div className="flex justify-center gap-4 mt-2 text-yellow-500">
              <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 transition cursor-pointer" />
            </div>
          </div>

          {/* Chef 3 */}
          <div className="space-y-2">
            <img
              src="/chef3.jpg"
              alt="Chef 3"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold">Chef Ahmed</h3>
            <p className="text-zinc-500 text-sm">Dessert Innovator</p>
            <div className="flex justify-center gap-4 mt-2 text-yellow-500">
              <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 transition cursor-pointer" />
            </div>
          </div>

          {/* Chef 4 */}
          <div className="space-y-2">
            <img
              src="/chef4.jpg"
              alt="Chef 4"
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold">Chef Lina</h3>
            <p className="text-zinc-500 text-sm">Baking Expert</p>
            <div className="flex justify-center gap-4 mt-2 text-yellow-500">
              <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 transition cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* FUN FACTS / STATS */}
      <section className="mt-20 bg-yellow-500 text-black py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Fun Facts About Us
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <FaCakeCandles className="text-4xl mb-2" />
            <h3 className="text-4xl font-bold">5000+</h3>
            <p className="text-lg">Pastries Baked</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-4xl mb-2" />
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSmile className="text-4xl mb-2" />
            <h3 className="text-4xl font-bold">2000+</h3>
            <p className="text-lg">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-4xl mb-2" />
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-lg">Unique Recipes</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
