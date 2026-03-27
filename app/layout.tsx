"use client";

import "./globals.css";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/Authentication";
import { ApiProvider } from "./Context/Api";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
