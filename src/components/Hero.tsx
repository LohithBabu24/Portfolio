import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 text-center
                 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 bg-[length:300%_300%] animate-gradientMove transition-all duration-700
                 pt-20 sm:pt-24"
      style={{ fontFamily: '"Poppins", "Segoe UI", sans-serif' }}
    >
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-gray-100 drop-shadow-sm">
          <span className="text-blue-600 dark:text-blue-400">Hi, I’m</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
            Lohith Babu C
          </span>
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          A passionate Full Stack Developer skilled in{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            React
          </span>
          ,{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            TypeScript
          </span>
          , and{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            Flask
          </span>
          .
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                     text-white font-semibold rounded-lg shadow-lg
                     hover:shadow-xl hover:scale-105 active:scale-95
                     transition duration-300"
        >
          View My Work
        </a>

        <a
          href="/Lohith Babu C (CV).pdf"
          download
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 
                     text-white font-semibold rounded-lg shadow-lg
                     hover:shadow-xl hover:scale-105 active:scale-95
                     transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-8 mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delayChildren: 0.8, staggerChildren: 0.2 },
          },
        }}
      >
        {/* GitHub */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 
                     hover:text-black dark:hover:text-white transform hover:scale-110 
                     hover:drop-shadow-lg transition duration-300"
        >
          <Github className="w-7 h-7" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 
                     hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-110 
                     hover:drop-shadow-lg transition duration-300"
        >
          <Linkedin className="w-7 h-7" />
        </motion.a>

        {/* Email */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          href="mailto:lohithbabu2447@gmail.com"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 
                     hover:text-red-500 dark:hover:text-red-400 transform hover:scale-110 
                     hover:drop-shadow-lg transition duration-300"
        >
          <Mail className="w-7 h-7" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
