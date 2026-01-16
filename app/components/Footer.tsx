"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,

} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 py-14 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-52 h-52 bg-indigo-500/10 blur-3xl top-0 left-0 rounded-full animate-pulse" />
        <div className="absolute w-52 h-52 bg-pink-500/10 blur-3xl bottom-0 right-0 rounded-full animate-pulse" />
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto px-4 flex flex-col items-center gap-5 text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Sneara Parvin
        </h2>

        {/* Role */}
        <p className="text-sm md:text-base text-gray-400 tracking-wide">
          Full Stack Web Developer • React • Next.js • Node.js
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 pt-2">
          {[
            { icon: <FaGithub />, link: "https://github.com/Sneara0" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sneara-parvin-aa0a4b285/" },
            { icon: <FaFacebook />, link: "https://wa.me/8801832346270" },
         
            { icon: <FaEnvelope />, link: "mailto:snearaparvin.cse@gmail.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xl p-3 rounded-2xl 
                bg-gray-800/50 border border-gray-700 
                backdrop-blur-md
                hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-indigo-500/20
                transition-all duration-300
                hover:scale-125
                hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]
              "
              whileHover={{ rotate: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent my-3" />

        {/* Copyright */}
        <p className="text-gray-500 text-xs tracking-wide">
          © {new Date().getFullYear()} Sneara Parvin — All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
