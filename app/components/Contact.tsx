"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Env variables
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceID || !templateID || !publicKey) {
      console.error("❌ EmailJS env missing");
      alert("Email service is not configured properly.");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        e.currentTarget,
        publicKey
      );
      

      console.log("EmailJS Result:", result);

      // Success হলে form reset এবং success state দেখান
      if (e.currentTarget) e.currentTarget.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (error: any) {
      console.error("❌ EmailJS Error:", error);

     
      alert(
        "Failed to send message: " +
          (error?.text || error?.message || "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Background stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          className="flex-1 bg-gray-900/70 backdrop-blur-md rounded-3xl p-10 flex flex-col gap-6 border border-pink-600/40 shadow-2xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Contact Me
          </h2>

          {/* Name input */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none"
          />

          {/* Email input */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none"
          />

          {/* Message textarea */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 outline-none resize-none h-40"
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-700 py-3 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success message */}
          {success && (
            <p className="text-green-400 font-medium text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </motion.form>

        {/* Image */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXwlplTd4OJoifmruNfJIx_eaVyCeQgnx-A&s"
            alt="Contact"
            className="rounded-3xl shadow-2xl max-w-md"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
