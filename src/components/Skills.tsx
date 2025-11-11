import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const skills = {
  frontend: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Python", "Flask"],
  database: ["Oracle SQL", "MongoDB"],
  tools: ["VS Code", "Git", "GitHub", "Postman"],
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden bg-white dark:bg-gray-900"
      style={{ fontFamily: "Calibri, 'Segoe UI', sans-serif" }}
    >
      {/* ================= 3D Floating Gradients ================= */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 blur-3xl rounded-3xl animate-float-slow pointer-events-none"></div>
      <motion.div
        className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 dark:from-blue-700/40 dark:via-purple-700/40 dark:to-pink-700/40 rounded-full opacity-20 blur-3xl animate-float-slow pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 dark:from-pink-700/40 dark:via-purple-700/40 dark:to-blue-700/40 rounded-full opacity-20 blur-3xl animate-float-slow pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* ================= TECHNICAL SKILLS ================= */}
      <motion.h2
        className="text-4xl font-bold mb-12 z-10 relative
                   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                   bg-clip-text text-transparent
                   drop-shadow-[0_3px_10px_rgba(147,51,234,0.4)]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full z-10 relative">
        {Object.entries(skills).map(([category, list], idx) => (
          <motion.div
            key={category}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 capitalize">
              {category === "tools" ? "Tools & Platforms" : category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {list.map((skill: string) => (
                <motion.span
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 text-black-800 text-bold dark:text-gray-200 px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transform transition-all duration-300"
                  whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= EDUCATION ================= */}
      <motion.div
        className="mt-24 z-10 relative"
        initial={{ opacity: 0, y: 30, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center flex justify-center items-center gap-2
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                       bg-clip-text text-transparent
                       drop-shadow-[0_3px_10px_rgba(147,51,234,0.4)]">
          <GraduationCap className="w-7 h-7" /> Education
        </h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-gray-600 transition">
          <h3 className="text-xl font-semibold text-blue-600">
            Bachelor of Engineering in Electronics and Communication
          </h3>
          <p className="text-black-800 text-bold dark:text-black-200 mt-2">
            Sri Sairam College of Engineering | 2020 - 2024
          </p>
          <p className="text-black-500 text-bold dark:text-black-400 mt-1">Graduated with CGPA : 7.48</p>
        </div>
      </motion.div>

     {/* ================= CERTIFICATIONS ================= */}
<motion.div
  className="mt-24 z-10 relative"
  initial={{ opacity: 0, y: 30, rotateX: 15 }}
  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <h2
    className="text-3xl font-bold mb-12 text-center flex justify-center items-center gap-2
               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent
               drop-shadow-[0_3px_10px_rgba(147,51,234,0.4)]"
  >
    <Award className="w-7 h-7" /> Certifications
  </h2>

  <div className="mx-auto w-[600px] h-[220px] bg-white dark:bg-gray-800 
                  shadow-md dark:shadow-gray-700 border border-gray-100 dark:border-gray-700 
                  rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-gray-600 transition">
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
        • Data Analytics
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">Besant Technologies</p>
    </div>

    <div className="text-center">
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
        • Python and Oracle SQL
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">Besant Technologies</p>
    </div>
  </div>
</motion.div>



      {/* ================= WORK EXPERIENCE ================= */}
      <motion.div
        className="mt-24 z-10 relative"
        initial={{ opacity: 0, y: 30, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center flex justify-center items-center gap-2
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                       bg-clip-text text-transparent
                       drop-shadow-[0_3px_10px_rgba(147,51,234,0.4)]">
          <Briefcase className="w-7 h-7" /> Work Experience
        </h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-gray-600 transition">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-black-100 text-center">
            Software Developer - Present 
          </h3>
          <p className="text-black-700 text-bold dark:text-black-300 mt-2 text-center">
            Contributing to full-stack development using React + Tailwind CSS + Typescript for Frontend and Python + Flask + MongoDB for Backend.
          </p>
        </div>
        <div className="mt-10 max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl dark:hover:shadow-gray-600 transition">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-black-100 text-center">
            Embedded Systems and Automotive Intern
          </h3>
          <p className="text-black-700 text-bold dark:text-black-300 mt-2 text-center">
            Completed one month internship at Cranes Varsity, Bangalore | 2024
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
