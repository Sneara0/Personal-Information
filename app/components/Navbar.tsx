"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import snearaLogo from "@/public/images/sneara1-logo.png"; // আপনার লোগো

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Project", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const socialLinks = [
    { Icon: FaInstagram, href: "#" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sneara-parvin-aa0a4b285/" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaFacebookF, href: "https://www.facebook.com/sneyara.parabhina" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/80 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-6 py-2 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side: Your Logo */}
        <Link href="/" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-16 h-16 md:w-20 md:h-20"
          >
            <Image
              src={snearaLogo}
              alt="Sneara Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
       
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-[13px] font-bold text-white uppercase tracking-widest hover:text-red-600 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Social Icons + Theme Toggle + Hamburger */}
        <div className="flex items-center gap-4">
          
          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex gap-3">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-red-600 hover:text-white transition-all"
            >
              {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          )}

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="w-11 h-11 flex items-center justify-center bg-red-600 rounded-full text-white hover:scale-110 transition-transform"
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-[#0a0a0a] z-[120] p-10 flex flex-col shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-red-600 transition-colors"
              >
                <IoClose size={32} />
              </button>

              <div className="flex flex-col gap-8 mt-16">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-black text-white hover:text-red-600 transition-colors uppercase italic"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map(({ Icon, href }, i) => (
                    <a key={i} href={href} className="text-white/70 hover:text-red-600 transition-colors">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}