"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBarsStaggered, FaFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import snearaLogo from "@/public/images/sneara1-logo.png"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-20  bg-gradient-to-r from-gray-400 via-pink-400 to-black dark:from-pink-800 dark:via-pink-900 dark:to-black text-white border-b-2 border-pink-200 dark:border-green-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex z-0 justify-between items-center py-0 px-0">

        {/* 🦋 Butterfly + Dev Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{
              y: [0, -3, 0, 3, 0],
              rotate: [0, 2, -2, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.6, repeat: Infinity },
            }}
            className="flex items-center"
          >
            <Image
              src={snearaLogo}
              alt="Dev Logo"
              width={95}
              height={95}
              className="object-contain"
            />
          </motion.div>

          <motion.span
            className="text-xl font-bold  text-green tracking-wide"
            animate={{
              scale: [1, 1.1, 1, 1.1, 1],
              rotate: [0, 3, -3, 3, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.2, 
              background: "linear-gradient(90deg, #ec4899, #000000)", 
              
           
            }}
          >
            Developer
    
          </motion.span>
        </Link>

        {/* 🌸 Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="relative group text-gray font-medium transition"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* 🍃 Mobile Menu Button */}
        <motion.button
          className={`md:hidden cursor-pointer p-2 rounded-full border-2 ${
            open
              ? "border-pink-400 bg-pink-200 text-pink-900"
              : "border-pink-400 bg-pink-500 text-white hover:border-pink-700 transition-all duration-300"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <FaTimes size={20} /> : <FaBarsStaggered size={20} />}
        </motion.button>
      </div>

      {/* 📱 Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-30 right-0 w-4/5  bg-gradient-to-b from-gray-500 via-black-700 to-black dark:from-pink-800 dark:via-pink-900 dark:to-black text-gray 
            border-2 border-pink-700 dark:border-pink-900 shadow-sm flex flex-col items-center py-2 space-y-4"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold text-white hover:text-black-300 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Social Icons */}
            <div className="flex gap-6 pt-6 border-t border-pink-700 dark:border-pink-900 w-3/4 justify-center">
              <Link
                href="https://www.facebook.com/sneyara.parabhina"
                target="_blank"
                className="text-pink-300 hover:scale-125 transition-transform duration-300"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://wa.me/01832346270"
                target="_blank"
                className="text-pink-300 hover:scale-125 transition-transform duration-300"
              >
                <FaSquareWhatsapp size={26} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
