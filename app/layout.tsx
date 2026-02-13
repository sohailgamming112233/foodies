import "./globals.css";
import { CartProvider } from "./Context/CartContext";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <ToastContainer position="top-right" autoClose={2000} />
        </CartProvider>
      </body>
    </html>
  );
}
