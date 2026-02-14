"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Components/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });

      toast.success("Message Sent Successfully ✅");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col gap-5 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>

          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            className="w-full p-3 rounded-lg bg-white text-black"
            required
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            className="w-full p-3 rounded-lg bg-white text-black"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white text-black"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white text-black"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <span className="text-lg">(+40) 342 645 876</span>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span className="text-lg">example@email.com</span>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <span className="text-lg">Bucharest, Romania</span>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}
