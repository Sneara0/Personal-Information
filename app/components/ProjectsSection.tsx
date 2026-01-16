"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A secure Expense Tracker built with Next.js, Prisma, and PostgreSQL. User authentication is handled with Clerk. Track your daily expenses, view analytics, and manage budgets easily.",
    image: "/project/expense-ai.png", // updated
    live: "#",
    code: "https://github.com/snearaparvin/ExpenseTracker",
  },
  {
    title: "Job Hunt Hub",
    description:
      "A complete job portal where users can browse, apply, and track jobs. Admin panel included for posting jobs. Built with React, Node.js, and MongoDB.",
    image: "/project/Job website.png", // updated
    live: "#",
    code: "https://github.com/snearaparvin/JobHuntHub",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce platform with product listing, cart, and checkout. Built using Next.js, Tailwind CSS, and Stripe for payments.",
    image: "/project/E-commerce.png", // updated
    live: "#",
    code: "https://github.com/snearaparvin/EcommerceSite",
  },
  {
    title: "Hospital Management System",
    description:
      "Manage patients, doctors, appointments, and billing efficiently using React, Node.js, and Tailwind CSS.",
    image: "/project/lifeline.png", // updated
    live: "#",
    code: "https://github.com/snearaparvin/HospitalManagement",
  },
  {
    title: "Flight Booking Agency",
    description:
      "A flight booking web app with AI-powered suggestions for flights and travel plans, built with React, Next.js, and Tailwind CSS.",
    image: "/project/flight.png", // updated
    live: "#",
    code: "https://github.com/snearaparvin/AIFlightAgency",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-black text-white"
    >
      <SectionTitle title="Projects" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg 
            relative group hover:shadow-pink-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <motion.div
              className="overflow-hidden"
              whileHover={{ opacity: 0.9 }}
            >
              <Image
                src={project.image}
                alt={`${project.title} Screenshot`}
                width={400}
                height={250}
                className="object-cover w-full h-48 sm:h-56 lg:h-64 group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-pink-400">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-2">
                {/* Live Button */}
                {project.live !== "#" && (
                  <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                    <Link
                      href={project.live}
                      target="_blank"
                      className="relative inline-flex items-center px-4 py-2 overflow-hidden 
                      text-sm font-semibold rounded-xl group bg-gradient-to-r 
                      from-pink-500 to-purple-600 transition-all duration-300 hover:shadow-xl"
                    >
                      <span
                        className="absolute inset-0 w-full h-full bg-gradient-to-r 
                        from-purple-600 via-pink-500 to-purple-600 opacity-0 
                        group-hover:opacity-100 transition duration-500 blur-xl"
                      ></span>

                      <span className="relative z-10">🚀 Live</span>
                    </Link>
                  </motion.div>
                )}

                {/* Code Button */}
                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                  <Link
                    href={project.code}
                    target="_blank"
                    className="relative inline-flex items-center px-4 py-2 overflow-hidden
                    text-sm font-semibold rounded-xl group bg-gradient-to-r 
                    from-gray-700 via-gray-900 to-black transition-all duration-300 
                    hover:shadow-xl"
                  >
                    <span
                      className="absolute inset-0 w-full h-full bg-gradient-to-r 
                      from-black via-gray-700 to-black opacity-0 
                      group-hover:opacity-100 transition duration-500 blur-xl"
                    ></span>

                    <span className="relative z-10 flex items-center gap-2">
                      <FaGithub className="text-white text-lg" /> Code
                    </span>
                  </Link>
                </motion.div>
              </div>

              <p className="mt-3 text-gray-400 text-sm text-right italic">
                Sneara Parvin
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
