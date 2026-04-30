"use client";
import { useRef } from "react";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiGoland } from "react-icons/si";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Next.js Specialist",
      "UI/UX Designer",
      "Web Architect",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 w-8 h-8" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-8 h-8" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-8 h-8" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-6 lg:px-24">
      
      {/* 🌪️ Background Stroke Text (image_f03b5c.png স্টাইল) */}
      <div className="absolute inset-0 flex items-center justify-center whitespace-nowrap pointer-events-none select-none z-0">
        <motion.h2 
          initial={{ x: "10%" }}
          animate={{ x: "-10%" }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 20, ease: "linear" }}
          className="text-[18vw] font-black uppercase leading-none text-transparent opacity-10"
          style={{ WebkitTextStroke: "2px #ffffff" }}
        >
          WEB DESIGN WEB DESIGN
        </motion.h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Side: Information */}
        <motion.div 
          className="md:col-span-5 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm">Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Sneara <br /> Parvin
          </h1>
          <div className="text-xl md:text-2xl font-bold text-gray-400 h-10">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#dc2626" />
          </div>
          
          <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
            I build modern, responsive, and elegant web experiences. Specializing in creating clean interfaces and smooth user interactions.
          </p>

          <div className="pt-4">
            <Link
              href="Sneara_Parvin_Full Stack.pdf"
              className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/20"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>

        {/* Center: Image & Rotating Skills */}
        <motion.div 
          className="md:col-span-4 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Rotating Skills Ring */}
          <motion.div
            className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {skills.map((skill, i) => {
              const angle = (i / skills.length) * 2 * Math.PI;
              const radius = 150; // Desktop radius
              return (
                <div
                  key={i}
                  className="absolute flex items-center justify-center"
                  style={{
                    left: `calc(50% + ${radius * Math.cos(angle)}px - 20px)`,
                    top: `calc(50% + ${radius * Math.sin(angle)}px - 20px)`,
                  }}
                >
                  <div className="bg-[#111] p-3 rounded-full border border-white/10 shadow-xl">
                    {skill.icon}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Profile Image (Replace with your actual image path) */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 z-20">
            <div className="absolute inset-0 bg-red-600/20 blur-[80px] rounded-full"></div>
            <img 
              src="c:\Users\USER\Desktop\sneara..jfif" 
              alt="Sneara" 
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Right Side: Social Icons & Contact Info */}
        <motion.div 
          className="md:col-span-3 flex flex-col items-center md:items-end space-y-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-lg mb-2">About Me</h3>
            <p className="text-gray-500 text-sm">Focused on building scalable web apps with Next.js and GoLang.</p>
          </div>

          <div className="flex md:flex-col gap-4">
            {[FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;