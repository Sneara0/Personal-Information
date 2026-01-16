"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGo,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Go (Golang)", icon: <SiGo className="text-cyan-400" /> },
  { name: "Prisma", icon: <SiPrisma className="text-green-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        {/* Skill Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center justify-center bg-gray-800/40 border border-gray-700 rounded-3xl p-6 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:backdrop-blur-md transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-3xl"></div>

              {/* Icon */}
              <motion.div
                className="text-5xl mb-3 relative z-10"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>

              {/* Label */}
              <h3 className="text-lg font-semibold relative z-10">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
