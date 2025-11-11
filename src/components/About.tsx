import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center min-h-screen px-6 text-center overflow-hidden pt-0"
      style={{ fontFamily: "Calibri, 'Segoe UI', sans-serif" }}
    >
      {/* 3D background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-3xl animate-float-slow"></div>

      {/* Title */}
      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold mb-10 relative z-10
                   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                   bg-clip-text text-transparent
                   drop-shadow-[0_3px_10px_rgba(147,51,234,0.4)]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Paragraphs with flying fade-in effects */}
      <div className="max-w-3xl">
        {[
          "I’m Lohith Babu C, a passionate Software Developer currently working at Deloai Pvt Ltd.",
          "I build projects using React, TypeScript, Tailwind CSS, Flask, and MongoDB — focusing on creating scalable, efficient, and user-friendly solutions.",
          "I’m always eager to explore new tools and frameworks, improve my skills, and collaborate on projects that make a real impact.",
        ].map((text, idx) => (
          <motion.p
            key={idx}
            className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 relative z-10"
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Floating highlight effects */}
      <motion.div
        className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl animate-float-slow pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 rounded-full opacity-20 blur-3xl animate-float-slow pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>
    </section>
  );
};

export default About;
