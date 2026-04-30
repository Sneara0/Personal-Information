"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope, FaArrowUp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0a0a0a] pt-20 pb-10 px-6 overflow-hidden border-t border-white/5"
    >
      {/* 🌌 Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 footer-content">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Logo / Name Area */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
              Sneara <span className="text-red-600">Parvin</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">
              Full Stack Web Developer • Architecting Digital Experiences
            </p>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/Sneara0", color: "hover:bg-gray-800" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/sneara-parvin-aa0a4b285/", color: "hover:bg-blue-600" },
              { icon: <FaFacebookF />, link: "https://facebook.com/sneyara.parabhina/", color: "hover:bg-blue-700" },
              { icon: <FaEnvelope />, link: "mailto:snearaparvin.cse@gmail.com", color: "hover:bg-red-600" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 transform hover:-translate-y-2 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA / Quick Links */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full text-gray-500 text-sm gap-6">
            <p>© {new Date().getFullYear()} Sneara Parvin — All Rights Reserved</p>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white hover:text-red-600 transition-colors group"
            >
              <span className="uppercase tracking-widest font-bold text-xs">Back to top</span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all">
                <FaArrowUp className="text-[10px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;