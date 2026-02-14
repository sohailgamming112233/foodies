"use client";

import "./globals.css";
import { CartProvider } from "../app/Context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-black text-black dark:text-white">
        <CartProvider>
          <Header />
          <main>{children}</main>
          
          <Footer />
          <ToastContainer position="top-right" autoClose={2000} />
        </CartProvider>
      </body>
    </html>
  );
}
