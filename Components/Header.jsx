"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaInfoCircle,
  FaUtensils,
  FaServicestack,
  FaBoxOpen,
  FaPhoneAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../app/Context/CartContext";

const links = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Menu", path: "/menu", icon: <FaUtensils /> },
  { name: "Cart", path: "/addtocart", icon: <FaShoppingCart /> },
  { name: "Services", path: "/services", icon: <FaServicestack /> },
  { name: "All Products", path: "/allproducts", icon: <FaBoxOpen /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-yellow-400"
        >
          <FaUtensils />
          Foodies
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-2 relative ${
                pathname === link.path
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              <div className="relative flex items-center gap-2">
                {link.icon}
                {link.name}
                {link.path === "/addtocart" && cart.length > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
