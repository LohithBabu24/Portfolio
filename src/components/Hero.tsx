import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // reset after animation
  };

  return (
    <section
      id="hero"
      onClick={handleClick}
      className="relative flex flex-col items-center justify-center h-screen 
                 px-4 text-center overflow-hidden 
                 bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 bg-[length:300%_300%] animate-gradientMove transition-all duration-700"
      style={{ fontFamily: '"Calibri", "Segoe UI", sans-serif' }} // Apply Calibri
    >
      {/* 3D floating background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-3xl animate-float-slow"></div>

      {/* Flying overlay effect on click */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            key="flyEffect"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: 0.2, rotate: 15 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-3xl pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-3 text-transparent bg-clip-text
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                       drop-shadow-[0_3px_10px_rgba(147,51,234,0.4)]">
          Hi, I’m Lohith
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          A passionate Full Stack Developer skilled in{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">React , TypeScript , Tailwind CSS</span> {" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">and</span> {" "}
          <span className="font-semibold text-green-600 dark:text-green-400">Python , Flask , MongoDB</span>
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-6 relative z-10"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600
                     text-white font-semibold rounded-lg shadow-lg
                     hover:shadow-xl transition duration-300"
        >
          View My Work
        </motion.a>

        <motion.a
          href="/Lohith Babu C (CV).pdf"
          download
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600
                     text-white font-semibold rounded-lg shadow-lg
                     hover:shadow-xl transition duration-300"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-8 mt-4 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {[{
          icon: <Github size={28} />,
          href: "https://github.com/LohithBabu24",
          color: "from-gray-700 to-black"
        },{
          icon: <Linkedin size={28} />,
          href: "https://www.linkedin.com/in/lohith-babu-c-ba6017274/",
          color: "from-blue-500 to-indigo-600"
        },{
          icon: <Mail size={28} />,
          href: "mailto:lohithbabu2447@gmail.com",
          color: "from-pink-500 to-purple-500"
        }].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 6 }}
            className={`p-4 rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg
                       shadow-${social.color.split(" ")[1]}/50 transition-transform duration-500`}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
