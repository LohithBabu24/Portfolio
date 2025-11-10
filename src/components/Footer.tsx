import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-6">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Built with React + TypeScript + Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
