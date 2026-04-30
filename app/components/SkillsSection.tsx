"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGo,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Prisma", icon: <SiPrisma className="text-gray-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Go (Golang)", icon: <SiGo className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Lenis এর সাথে GSAP এর রিফ্রেশ সিঙ্ক করার জন্য
    const refreshTrigger = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refreshTrigger);

    const ctx = gsap.context(() => {
      // কার্ডগুলোর এনিমেশন
      gsap.fromTo(
        cardsRef.current,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15, // একটির পর একটি আসবে
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // সেকশনটি স্ক্রিনের ৮৫% এ আসলে এনিমেশন শুরু হবে
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", refreshTrigger);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 px-6 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Technical <span className="text-red-600">Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-600/50 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Card Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="text-5xl mb-4 relative z-10 transform group-hover:rotate-6 transition-transform duration-500">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors relative z-10">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}