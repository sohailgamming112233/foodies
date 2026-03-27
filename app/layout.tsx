"use client";

import "./globals.css";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./context/Authentication";
import { ApiProvider } from "./context/Api";
import Header from "../Components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <AuthProvider>
          <ApiProvider>
            <CartProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ToastContainer />
            </CartProvider>
          </ApiProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
