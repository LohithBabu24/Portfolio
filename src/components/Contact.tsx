import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-700"
      style={{ fontFamily: '"Calibri", "Segoe UI", sans-serif' }}
    >
      {/* Soft 3D Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-300/30 via-purple-400/30 to-pink-400/30 blur-3xl opacity-40 dark:opacity-20"></div>

      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(147,51,234,0.3)]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-gray-700 dark:text-gray-300 max-w-2xl text-center text-lg leading-relaxed mb-10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Let’s collaborate, share ideas, or just have a quick chat!  
        I’m always open to discussing new projects, creative ideas, or opportunities.
      </motion.p>

      {/* Highlights */}
      <motion.ul
        className="text-gray-600 dark:text-gray-400 mb-12 space-y-2 text-lg relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <li>Let’s <span className="text-pink-500 font-semibold">connect and grow</span> together!</li>
      </motion.ul>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-10 mb-10 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          {
            icon: <Github size={28} />,
            href: "https://github.com/LohithBabu24",
            color: "from-gray-700 to-gray-900",
          },
          {
            icon: <Linkedin size={28} />,
            href: "https://www.linkedin.com/in/lohith-babu-c-ba6017274/",
            color: "from-blue-500 to-indigo-600",
          },
          {
            icon: <Mail size={28} />,
            href: "mailto:lohithbabu2447@gmail.com",
            color: "from-pink-500 to-purple-500",
          },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full bg-gradient-to-br ${social.color}
                        text-white shadow-lg transform hover:scale-125 hover:rotate-6 
                        transition-all duration-500 dark:shadow-purple-800/40`}
          >
            {social.icon}
          </a>
        ))}
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="flex items-center justify-center gap-3 text-gray-900 dark:text-gray-100 text-lg font-semibold relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/40">
          <Phone size={22} />
        </div>
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(147,51,234,0.3)]">
          +91 96888 92328
        </span>
      </motion.div>
    </div>
  );
};

export default Contact;
