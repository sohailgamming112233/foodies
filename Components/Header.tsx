"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCart } from "../app/Context/CartContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Components/firebase";
import { toast } from "react-toastify";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged Out Successfully 👋");
    router.replace("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "All Products", path: "/allproducts" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-yellow-400 text-2xl font-bold">
          Foodies
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={pathname === link.path ? "text-yellow-400" : ""}
            >
              {link.name}
            </Link>
          ))}

          {/* Cart */}
          <Link href="/addtocart" className="relative">
            <FaShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth Buttons */}
          {user ? (
            <>
              <span className="text-sm text-gray-300">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-yellow-400">
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Cart */}
          <Link href="/addtocart" onClick={() => setMobileOpen(false)}>
            Cart ({cartCount})
          </Link>

          {/* Auth Mobile */}
          {user ? (
            <>
              <span className="text-sm text-gray-300">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-400 text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-yellow-400"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}