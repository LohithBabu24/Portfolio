import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        I’m Lohith Babu C, a passionate Software Developer currently working at Deloai Pvt Ltd.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        I build projects using React, TypeScript, Tailwind CSS, Flask, and MongoDB —
        focusing on creating scalable, efficient, and user-friendly solutions.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        I’m always eager to explore new tools and frameworks, improve my skills, and collaborate on projects that make a real impact.
      </p>
    </section>
  );
};

export default About;
