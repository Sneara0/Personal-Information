"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp, FaGraduationCap, FaCode } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // কার্ডের জন্য রিফ অ্যারে টাইপ সেট করা হয়েছে
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Reveal with Skew Effect
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        skewX: 10,
        duration: 1.5,
        ease: "power4.out",
      });

      // Text Stagger Animation
      gsap.from(".about-text-content > *", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Cards Floating Animation
      cardRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
            scale: 0.8,
            opacity: 0,
            delay: index * 0.3,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* 🌌 High-Performance Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle title="About Me" />

        <div className="mt-20 grid lg:grid-cols-12 gap-16 items-center">
          
          {/* 🖼 Left Side: GSAP Image Reveal */}
          <div ref={imageRef} className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-indigo-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-500 animate-gradient-x"></div>
              <div className="relative bg-[#0d0d0d] p-3 rounded-3xl border border-white/5 overflow-hidden">
                <img
                  src="/images/sneara.jfif"
                  alt="Sneara Parvin"
                  className="w-full max-w-[400px] aspect-[4/5] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-red-600 p-4 rounded-2xl shadow-2xl hidden md:block animate-bounce">
                <FaCode className="text-2xl text-white" />
              </div>
            </div>
          </div>

          {/* 📝 Right Side: Content Flow */}
          <div ref={textRef} className="lg:col-span-7 space-y-10 about-text-content">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Innovating <br /> <span className="text-red-600">The Digital Web.</span>
              </h3>
              <p className="text-xl text-gray-400 font-medium italic border-l-4 border-red-600 pl-4">
                "Code is poetry, and I'm a digital architect since 2024."
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              I am <span className="text-white font-bold">Sneara Parvin</span>, a CSE graduate with a passion for 
              building high-performance ecosystems. My philosophy is simple: write clean code, build 
              scalable systems, and never stop learning. From the depths of **Node.js** to the 
              elegance of **Next.js**, I craft experiences that matter.
            </p>

            {/* 🎓 GSAP Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Education Card */}
              <div 
                // টাইপ এরর ফিক্স করতে কার্লি ব্র্যাকেট ব্যবহার করা হয়েছে
                ref={(el) => { cardRef.current[0] = el; }}
                className="p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl backdrop-blur-md hover:border-red-600/50 transition-colors"
              >
                <FaGraduationCap className="text-red-600 text-4xl mb-4" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Education</h4>
                <h5 className="text-lg font-bold text-white leading-tight">B.Sc. in Computer Science</h5>
                <p className="text-sm text-gray-400 mt-1">North Western University</p>
                <div className="mt-4 inline-block px-3 py-1 bg-red-600/20 text-red-500 rounded-full text-xs font-bold">
                  CGPA 3.38
                </div>
              </div>

              {/* Stack Card */}
              <div 
                // টাইপ এরর ফিক্স করতে কার্লি ব্র্যাকেট ব্যবহার করা হয়েছে
                ref={(el) => { cardRef.current[1] = el; }}
                className="p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl backdrop-blur-md hover:border-indigo-600/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Main Stack</h4>
                  </div>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Next.js & Prisma Ecosystem</h5>
                <p className="text-sm text-gray-400">Node, Express, MongoDB, Tailwind</p>
                
                <div className="mt-6 flex gap-5 text-xl text-gray-400">
                   <a href="https://github.com/Sneara0" target="_blank" className="hover:text-white transition-colors"><FaGithub /></a>
                   <a href="https://www.linkedin.com/in/sneara-parvin-aa0a4b285/" target="_blank" className="hover:text-blue-500 transition-colors"><FaLinkedinIn /></a>
                   <a href="https://wa.me/8801832346270" target="_blank" className="hover:text-green-500 transition-colors"><FaWhatsapp /></a>
                   <a href="https://www.facebook.com/sneyara.parabhina/" target="_blank" className="hover:text-blue-600 transition-colors"><FaFacebookF /></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;