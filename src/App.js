import React from "react";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import "./index.css";
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition duration-500">
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />

        <section id="home" className="pt-24 scroll-mt-24">
          <Home />
        </section>
        <section id="projects" className="pt-24 scroll-mt-24">
          <Projects />
        </section>
        <section id="skills" className="pt-24 scroll-mt-24">
          <Skills />
        </section>
        <section id="contact" className="pt-24 scroll-mt-24">
          <Contact />
        </section>
      </div>
    </div>
  );
}

function Navbar({ toggleDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600 hover:scale-105 transition">Devayani</h1>
      <div className="space-x-6 font-medium">
        <NavLink to="home">Home</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
    className="cursor-pointer hover:text-blue-600 hover:underline transition duration-300"
  >
    {children}
  </Link>
);

function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/profile.jpg"
        alt="Devayani"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg mb-6 border-4 border-blue-300"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        Hello, I'm Devayani 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        <span className="text-blue-600 font-semibold">
          <Typewriter
            words={['Full Stack Developer 💻', 'ReactJS Enthusiast ⚛️', 'Computer Science Engineer 🧠']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </p>
      <a
        href="/resume.pdf"
        download
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 shadow transition"
      >
        Download Resume
      </a>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    { title: "SnapGuard", desc: "OCR + Blockchain Image Integrity Verifier", link: "https://github.com/yourusername/snapguard" },
    { title: "E-commerce App", desc: "MERN Stack based shopping platform", link: "#" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-3">{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "ReactJS", color: "text-blue-500" },
    { name: "Java", color: "text-orange-600" },
    { name: "Tailwind CSS", color: "text-cyan-600" },
    { name: "Node.js", color: "text-green-600" },
    { name: "Git", color: "text-red-500" },
    { name: "SQL", color: "text-indigo-600" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className={`bg-white px-6 py-3 rounded-full shadow hover:shadow-xl ${skill.color} font-semibold`}
            whileHover={{ scale: 1.1 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <p className="mb-2 text-center">Feel free to connect with me via the platforms below:</p>
      <div className="text-center space-y-2 mt-4">
        <p>Email: <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">youremail@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/yourusername</a></p>
      </div>
    </div>
  );
}

export default App;
