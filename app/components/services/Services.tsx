"use client";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Frontend Development",
    desc: "Crafting visually stunning and highly responsive user interfaces using modern frameworks like React and Next.js.",
    icon: <FaCode />,
    skills: ["React", "Next.js", "Tailwind", "Framer Motion"]
  },
  {
    title: "Backend Development",
    desc: "Designing secure, scalable server-side logic and robust database architectures to power your complex applications.",
    icon: <FaServer />,
    skills: ["Node.js", "MongoDB", "Express", "PostgreSQL"]
  },
  {
    title: "Full Stack Development",
    desc: "Providing end-to-end solutions with seamless integration between frontend and backend for optimal performance.",
    icon: <FaLayerGroup />,
    skills: ["MERN Stack", "Next.js Fullstack", "Rest API"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a] px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="mb-16">
          <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-2">Features</p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            My <span className="text-red-600">Services</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;