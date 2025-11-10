import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  sourceLink?: string;
}

const projects: Project[] = [
  {
    title: "Student Database Management",
    description:
      "A full-stack CRUD app using React, Tailwind CSS, TypeScript, Flask, and MongoDB.",
    image: "https://via.placeholder.com/600x400",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My own portfolio built with React + TypeScript + Tailwind CSS, hosted on Netlify.",
    image: "https://via.placeholder.com/600x400",
    liveLink: "#",
    sourceLink: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={p.image} alt={p.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.description}</p>
                <div className="space-x-4">
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {p.sourceLink && (
                    <a
                      href={p.sourceLink}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
