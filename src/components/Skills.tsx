import React from "react";
import { GraduationCap, Award, Briefcase } from "lucide-react"; // Make sure you have lucide-react installed

const skills = {
  frontend: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Python", "Flask"],
  database: ["Oracle SQL", "MongoDB"],
  tools: ["VS Code", "Git", "GitHub", "Postman"],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
      {/* =============== TECHNICAL SKILLS =============== */}
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Frontend */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.frontend.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full shadow-sm hover:bg-gray-200 hover:scale-105 transform transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Backend
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.backend.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full shadow-sm hover:bg-gray-200 hover:scale-105 transform transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Database Management
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.database.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full shadow-sm hover:bg-gray-200 hover:scale-105 transform transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.tools.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full shadow-sm hover:bg-gray-200 hover:scale-105 transform transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex justify-center items-center gap-2">
          <GraduationCap className="w-7 h-7 text-black-600" /> Education
        </h2>

        <div className="max-w-3xl mx-auto bg-white shadow-md border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600">
            Bachelor of Engineering in Electronics and Communication
          </h3>
          <p className="text-black-700 mt-2">
            Sri Sairam College of Engineering | 2020 - 2024
          </p>
          <p className="text-black-500 mt-1"> Graduated with CGPA : 7.48</p>
        </div>
      </div>

      {/* ================= CERTIFICATIONS ================= */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex justify-center items-center gap-2">
          <Award className="w-7 h-7 text-black-600" /> Certifications
        </h2>

        <div className="max-w-3xl mx-auto bg-white shadow-md border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-black-600">
             • Data Analytics
            </h3>
            <p className="text-gray-700 mt-2">
              Besant Technologies
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black-600">
             • Python and Oracle SQL
            </h3>
            <p className="text-gray-700 mt-2">
              Besant Technologies
            </p>
          </div>
        </div>
      </div>

      {/* ================= WORK EXPERIENCE ================= */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex justify-center items-center gap-2">
          <Briefcase className="w-7 h-7 text-black-600" /> Work Experience
        </h2>

        <div className="max-w-3xl mx-auto bg-white shadow-md border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-black-600">
            Software Developer
          </h3>
          <p className="text-gray-700 mt-2">
            Contributing to full-stack development using React + Tailwind Css + Typescript for Frontend and Python + Flask + MongoDB for Backend. Collaborating with the engineering team to develop scalable, high-performance web applications and enhance product reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

