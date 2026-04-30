"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Devnasa Technologies Limited",
    role: "Full Stack Developer (Intern/Junior)", // আপনার পদবি অনুযায়ী পরিবর্তন করতে পারেন
    desc: "Worked on building scalable web applications using the MERN stack. Focused on developing clean UI components and integrating RESTful APIs to enhance user experience.",
  },
  {
    company: "Devnasa Technologies Limited",
    role: "Web Application Contributor",
    desc: "Collaborated with the development team to optimize database queries and implement real-time features using Next.js and Prisma.",
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Slide In from Left
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Experience Content Reveal from Right
      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a0a0a] px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 🖼 Left Side: Large Image */}
          <div ref={imageRef} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-transparent blur-2xl rounded-3xl"></div>
            <div className="relative overflow-hidden rounded-3xl border border-white/5">
                <img
                src="/images/devnasa-office.jpg" // এখানে আপনার বা অফিসের একটি ভালো ছবি দিন
                alt="Working at Devnasa"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
            </div>
          </div>

          {/* 📝 Right Side: Experience Content */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Experiences
              </h2>
              <div className="w-24 h-[2px] bg-red-600 mt-2"></div>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="exp-item group">
                  <p className="text-red-600 font-bold uppercase tracking-widest text-[10px] mb-2">
                    Professional Experience
                  </p>
                  <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-red-500 transition-colors">
                    {exp.company}
                  </h3>
                  <h4 className="text-gray-300 font-semibold italic mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-gray-500 leading-relaxed mt-4 max-w-md border-l-2 border-white/10 pl-4">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;