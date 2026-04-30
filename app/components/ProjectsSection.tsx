"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "EventSphere",
    description: "A comprehensive event management platform. Features include event creation, discovery, and secure user management with a robust backend API.",
    image: "/project/eventsphere.png", 
    live: "https://eventspehere-frontend.vercel.app/",
    code: "https://github.com/Sneara0/Eventsphere-Frontend",
    backend: "https://github.com/Sneara0/EventsSphere--Backend",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"]
  },
  {
    title: "Expense Tracker",
    description: "A secure AI-powered expense tracker. Track daily costs, view analytics, and manage budgets efficiently with Clerk authentication.",
    image: "/project/expense-ai.png",
    live: "#",
    code: "https://github.com/Sneara0/next-expense-tracker-ai",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Clerk"]
  },
  {
    title: "Job Hunt Hub",
    description: "A full-stack job portal with job tracking and admin panel for recruitment management. Clean UI and efficient data handling.",
    image: "/project/Job website.png",
    live: "#",
    code: "https://github.com/Sneara0/Job-Website-MERN",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "E-commerce Platform",
    description: "Modern shopping experience with product filters, cart functionality, and Stripe payment gateway integration.",
    image: "/project/E-commerce.png",
    live: "#",
    code: "https://github.com/Sneara0/E-commerce-Project-Full-stack",
    tech: ["Next.js", "Tailwind", "Stripe", "Sanity"]
  },
  {
    title: "Hospital Management",
    description: "Efficiently manage patients, doctor appointments, and medical records with a clean, responsive Dashboard.",
    image: "/project/lifeline.png",
    live: "#",
    code: "https://github.com/Sneara0/Lifeline-Hospital-Website",
    tech: ["React", "Node.js", "Tailwind"]
  },
  {
    title: "Flight Agency",
    description: "Flight booking web app with AI-powered suggestions for travel plans and responsive flight detail views.",
    image: "/project/flight.png",
    live: "#",
    code: "https://github.com/Sneara0/Responsive-Flight-Agency-Website",
    tech: ["Next.js", "Tailwind", "GSAP"]
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ইমেজ এবং কন্টেন্ট পুরোপুরি লোড হওয়ার পর এনিমেশন শুরু করার জন্য
    const refreshAndAnimate = () => {
      ScrollTrigger.refresh();
      
      const ctx = gsap.context(() => {
        // title animation
        gsap.fromTo(".project-header", 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            scrollTrigger: {
              trigger: ".project-header",
              start: "top 90%",
            }
          }
        );

        // cards animation
        gsap.fromTo(
          cardsRef.current,
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%", // একটু দেরিতে শুরু হবে যাতে ইউজার দেখতে পায়
              toggleActions: "play none none none",
            },
          }
        );
      }, sectionRef);

      return ctx;
    };

    // লোড হওয়ার সাথে সাথে রিফ্রেশ
    const timeoutId = setTimeout(refreshAndAnimate, 500);
    window.addEventListener("load", refreshAndAnimate);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("load", refreshAndAnimate);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-[#0a0a0a] px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 project-header">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
            Featured <span className="text-red-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              style={{ opacity: 0 }} // শুরুতে হাইড করে রাখা যাতে এনিমেশন স্মুথ হয়
              className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-red-600/50 transition-all duration-500 shadow-2xl flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  priority={index < 3} // প্রথম ৩টি ইমেজ আগে লোড হবে
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Links Section */}
              <div className="p-8 pt-0 flex flex-wrap gap-5 mt-auto">
                {project.live !== "#" && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </Link>
                )}
                <Link
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors"
                >
                  <FaGithub size={16} /> {project.backend ? "Frontend" : "Code"}
                </Link>
                {project.backend && (
                  <Link
                    href={project.backend}
                    target="_blank"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-red-500 transition-colors"
                  >
                    <FaServer size={14} /> Backend
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}