import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
      <p className="text-gray-700 text-center mb-8">
        Feel free to reach out for collaborations, opportunities, or just to say hi!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border px-4 py-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
