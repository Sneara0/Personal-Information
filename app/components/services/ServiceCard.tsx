"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: ReactNode;
  skills: string[];
  index: number;
}

const ServiceCard = ({ title, desc, icon, skills, index }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-red-600/50 transition-all duration-300 group"
    >
      <div className="text-4xl text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{desc}</p>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="text-[10px] bg-red-600/10 text-red-500 px-3 py-1 rounded-full border border-red-600/20 uppercase font-bold tracking-widest"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;