"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-10 md:py-16 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Branding */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Bakery Bliss</h3>
          <p className="text-zinc-400 mb-4 text-sm md:text-base">
            We bake with love! Delicious cakes, pastries, muffins, and drinks
            made fresh daily for you.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-yellow-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-yellow-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-yellow-500 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="mailto:info@bakerybliss.com"
              className="text-zinc-400 hover:text-yellow-500 transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-zinc-400 text-sm md:text-base">
            <li>
              <a href="/" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-yellow-500 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-500 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-zinc-400 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Bakery Street, Sweet City
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@bakerybliss.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Newsletter</h3>
          <p className="text-zinc-400 mb-4 text-sm md:text-base">
            Subscribe to get latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-lg text-black flex-1 text-sm md:text-base"
            />
            <button className="bg-yellow-500 text-black px-4 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold text-sm md:text-base">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-zinc-500 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Bakery Bliss. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
