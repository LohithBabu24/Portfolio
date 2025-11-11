import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  gitLink?: string;
}

const projects: Project[] = [
  {
    title: "Student Database Management",
    description:
      "A full-stack CRUD app using React, Tailwind CSS, TypeScript, Flask, and MongoDB.",
    gitLink: "https://github.com/username/student-db",
  },
  {
    title: "Portfolio Website",
    description:
      "My own portfolio built with React + TypeScript + Tailwind CSS, hosted on Netlify.",
    gitLink: "https://github.com/username/portfolio",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-gray-900 py-20 px-6 overflow-hidden"
      style={{ fontFamily: "Calibri, 'Segoe UI', sans-serif" }}
    >
      {/* ================= 3D Floating Gradients ================= */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 blur-3xl rounded-3xl animate-float-slow pointer-events-none"></div>
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 dark:from-blue-700/40 dark:via-purple-700/40 dark:to-pink-700/40 rounded-full opacity-20 blur-3xl animate-float-slow pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 dark:from-pink-700/40 dark:via-purple-700/40 dark:to-blue-700/40 rounded-full opacity-20 blur-3xl animate-float-slow pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl font-bold mb-12 text-center
                     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                     bg-clip-text text-transparent
                     drop-shadow-[0_3px_10px_rgba(147,51,234,0.4)]"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md dark:shadow-gray-700 hover:shadow-xl dark:hover:shadow-gray-600 transition p-6 flex flex-col items-center"
              whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-gray-100">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
