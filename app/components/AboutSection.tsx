"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]"></div>

      <div className="relative z-10">
        <SectionTitle title="About Me" />

        <motion.div
          className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* 🖼 Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500">
              <div className="rounded-3xl overflow-hidden bg-black">
                <img
                  src="/images/sneara.jfif"
                  alt="Sneara Parvin"
                  className="w-80 h-80 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* 📝 Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-gray-300"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
              I’m Sneara Parvin ✨
            </h3>

            <p>
              Hi! I’m <span className="text-cyan-400 font-semibold">Sneara Parvin</span>, a passionate  
              <span className="text-pink-400 font-semibold"> Full Stack Developer</span> from Bangladesh 🇧🇩.
              I love building scalable, modern web applications with clean architecture.
            </p>

            <p>
              I completed my <span className="text-cyan-400 font-semibold">B.Sc. in CSE</span> from  
              <span className="text-pink-400 font-semibold"> North Western University</span> (2024) with  
              <span className="text-cyan-400 font-semibold"> CGPA 3.38</span>.
            </p>

            <p>
              My development journey started in <span className="text-pink-400 font-semibold">June 2024</span>.  
              I work with <span className="text-cyan-400 font-semibold">
                React, Next.js, Tailwind CSS, Node.js, Express & Prisma
              </span> and I’m exploring AI-powered tools for smarter applications.
            </p>

            <p>
              I enjoy solving real-world problems, learning new technologies, and building meaningful digital products.
            </p>

            {/* 🌐 Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
              <div className="flex gap-5 text-xl">
                <a
                  href="https://www.facebook.com/sneyara.parabhina/"
                  target="_blank"
                  className="hover:text-pink-400 hover:scale-125 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://wa.me/8801832346270"
                  target="_blank"
                  className="hover:text-green-400 hover:scale-125 transition"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://github.com/Sneara0"
                  target="_blank"
                  className="hover:text-gray-400 hover:scale-125 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sneara-parvin-aa0a4b285/"
                  target="_blank"
                  className="hover:text-blue-400 hover:scale-125 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
