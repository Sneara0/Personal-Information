"use client";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiGoland } from "react-icons/si";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Sneara",
      "Full Stack Developer 💻",
      "Next.js | React | Tailwind CSS",
      "I Build Stunning Web Experiences",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "GoLang", icon: <SiGoland className="text-teal-600 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
    { name: "Database", icon: <FaDatabase className="text-gray-500 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" /> },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28 py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">

      {/* Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-4 sm:space-y-5 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-white to-pink-600 animate-pulse">
            {text}
          </span>
          <Cursor cursorStyle="|" />
        </h1>

        

        <p className="text-xs sm:text-sm md:text-base sm:text-sm text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
          I'm <span className=" text-indigo-400">Sneara Parvin</span>, a Full Stack developer creating modern, responsive, and elegant web experiences with React, Next.js, and Tailwind CSS. I focus on building clean interfaces and smooth user interactions that feel natural and delightful.
        </p>

        <div className="flex justify-center md:justify-start flex-wrap gap-3 mt-4">
          <Link
            href="/Sneara_Parvin_Frontend_Resume.pdf"
            target="_blank"
            className="px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-black text-white font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          >
            ⬇️ Download Resume
          </Link>
        </div>
      </motion.div>

      {/* Skills Circle */}
      <motion.div
        className="flex-1 relative flex items-center justify-center pointer-events-none w-full md:w-auto mt-10 md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
          {/* Circular Border */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-700/30"></div>

          {/* Rotating Icons */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {skills.map((skill, i) => {
              const angle = (i / skills.length) * 2 * Math.PI;
              const radius = 100; // Adjust radius for smaller screens
              return (
                <div
                  key={i}
                  className="absolute flex items-center justify-center transform-gpu hover:scale-125 transition-transform duration-300"
                  style={{
                    left: `calc(50% + ${radius * Math.cos(angle)}px)`,
                    top: `calc(50% + ${radius * Math.sin(angle)}px)`,
                  }}
                >
                  <div className="bg-gray-900 p-3 sm:p-4 md:p-5 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-shadow duration-300">
                    {skill.icon}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
