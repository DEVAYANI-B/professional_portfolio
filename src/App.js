
import React from "react";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import "./index.css";
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-900 text-gray-100 transition duration-500">
        <Navbar />

        <section id="home" className="pt-24 scroll-mt-24">
          <Home />
        </section>
        <section id="projects" className="pt-24 scroll-mt-24">
          <Projects />
        </section>
        <section id="skills" className="pt-24 scroll-mt-24">
          <Skills />
        </section>
        <section id="profiles" className="pt-24 scroll-mt-24">
          <Profiles />
        </section>
        <section id="contact" className="pt-24 scroll-mt-24">
          <Contact />
        </section>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-4 bg-gray-900 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl md:text-3xl font-extrabold text-teal-400 tracking-tight">Devayani</h1>
      <div className="space-x-4 md:space-x-6 font-medium flex flex-wrap items-center mt-2 md:mt-0">
        <NavLink to="home">Home</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="profiles">CodeProfiles</NavLink>
        <NavLink to="contact">Contact</NavLink>
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
    className="cursor-pointer text-gray-200 hover:text-teal-400 transition duration-300 text-sm md:text-base"
  >
    {children}
  </Link>
);



function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/profile.jpg"
        alt="Devayani"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl mb-6 border-4 border-teal-400"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Hello, I'm <span className="text-teal-600 dark:text-teal-400">Devayani</span> 👋
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-800 dark:text-gray-300">
        <span className="text-teal-600 dark:text-teal-400 font-semibold">
          <Typewriter
            words={['Full Stack Developer 💻', 'ReactJS Enthusiast ⚛️', 'Computer Science Engineer 🧠','Frontend Developer </>']}
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
        className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 shadow transition"
      >
        Download Resume
      </a>
    </motion.div>
  );
}
function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "UConnect",
      desc: "Real-time video app with Agora SDK, Krisp AI & AWS",
      longDesc:
        "UConnect is a real-time video communication app built using Agora SDK for seamless audio/video, integrated with Krisp AI for noise cancellation, and hosted using AWS services. It supports multi-user video conferencing with chat features.",
      link: "https://github.com/DEVAYANI-B/uconnect",
      tech: ["ReactJS", "Redux", "Node.js", "Krisp AI","Fireflies AI","Firebase","AWS","Docker"]
    },
    {
      title: "SnapGuard",
      desc: "OCR + Blockchain Image Integrity Verifier",
      longDesc:
        "SnapGuard uses OCR to extract text from images, hashes it with SHA-256, and stores it on a blockchain. On re-upload, it verifies integrity by comparing hashes, ensuring image tampering detection.",
      link: "https://github.com/DEVAYANI-B/snapguard",
      tech: ["ReactJS", "Blockchain", "Node.js"]
    },
    {
      title: "DocSpot",
      desc: "Doctor booking system using React & MongoDB",
      longDesc:
        "DocSpot is a full-stack application that allows patients to book doctor appointments. It features user authentication, booking schedules, and doctor management using MongoDB and NodeJS backend.",
      link: "https://github.com/DEVAYANI-B/DocSpot",
      tech: ["ReactJS", "Node.js", "MongoDB", "Express.js","Cloudinary","tailwindcss"]
    },
    {
      title: "Attend-Ease",
      desc: "JavaFX-based student attendance system",
      longDesc:
        "Attend-Ease is a desktop application built with JavaFX for faculty to record, manage, and export student attendance data, with options for filtering by date, course, and performance.",
      link: "#",
      tech: ["Java", "JavaFX", "MySQL"]
    },
    {
      title: "DBA-Healthcare",
      desc: "Diabetic prediction using SVM in Python",
      longDesc:
        "This machine learning project analyzes healthcare datasets to predict diabetes using SVM algorithm. Implemented with Pandas, NumPy, and Matplotlib for EDA and model evaluation.",
      link: "#",
      tech: ["Python", "Pandas", "NumPy"]
    },
    {
      title: "PhotoCloudX",
      desc: "Cloud-based Photo Management App using React & Cloudinary",
      longDesc:
        "PhotoCloudX is a photo management application built using React.js and Cloudinary. It allows users to securely upload, organize, and view their images. With Cloudinary integration, it ensures efficient cloud-based storage and retrieval.",
      link: "https://github.com/DEVAYANI-B/PhotoCloudX",
      tech: ["ReactJS", "Cloudinary", "Node.js"]
    }
  ];

  const techIcons = {
    "ReactJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "AWS": "./aws.png",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "JavaFX": "./javafx.png", 
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "Cloudinary": "./cloudinary.png", 
    "Fireflies AI":"./fireflies.png",
    "Firebase": "./firebase.png" ,
    "Blockchain": "./blockchain.png",
    "Krisp AI": "./krisp.png",
    "Redux": "./redux.png",
    "Docker":"./docker.png",
    "tailwindcss": "./tailwindcss.png",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  };

  const toggleDescription = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-teal-600 dark:text-teal-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => toggleDescription(idx)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                {proj.title}
              </h3>
              <div className="flex flex-wrap gap-1 ml-2">
                {proj.tech?.map((tech, i) => (
                  <img
                    key={i}
                    src={techIcons[tech]}
                    alt={tech}
                    title={tech}
                    className="w-6 h-6"
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{proj.desc}</p>
            {openIndex === idx && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{proj.longDesc}</p>
            )}
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skillGalaxy = {
    "Languages":["Java", "JavaScript", "C", "Python"],
    
    "Frontend": ["HTML", "CSS", "ReactJS", "React Native", "Redux"],
    "Backend": ["Node.js", "Express.js", "Java", "C", "Python"],
    "Database": ["MongoDB", "MySQL", "JDBC"],
    "Cloud & DevOps": ["AWS EC2", "S3", "RDS", "CloudFormation", "Docker"],
    "Authentication": ["Firebase Auth"],
    "AI Tools": ["Krisp AI", "Fireflies AI", "Fellow AI"],
    "API & Image Services": ["Cloudinary API", "Postman"],
    "Data Science": ["NumPy", "Pandas"],
    "Testing Tools": ["Selenium", "JUnit", "Jira", "Slack"],
    "Version Control & IDE": ["Git", "GitHub", "VS Code", "AWS CLI", "MS Excel", "Colab"]
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-teal-600 dark:text-teal-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {Object.entries(skillGalaxy).map(([category, skills], idx) => (
          <div
            key={idx}
            className="w-60 bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transform transition hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-3 text-black-600 dark:text-black-400 text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800 dark:text-gray-200">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-teal-100 dark:bg-teal-700 px-3 py-1 rounded-full shadow-sm hover:bg-teal-200 dark:hover:bg-teal-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function Profiles() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-teal-600 dark:text-teal-400">Competitive Profiles</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
        <motion.a
          href="https://leetcode.com/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <SiLeetcode className="text-4xl text-yellow-500 mb-2" />
          <p className="font-semibold text-teal-600 dark:text-teal-400">LeetCode</p>
        </motion.a>
        <motion.a
          href="https://www.hackerrank.com/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <SiHackerrank className="text-4xl text-green-600 mb-2" />
          <p className="font-semibold text-teal-600 dark:text-teal-400">HackerRank</p>
        </motion.a>
        <motion.a
          href="https://www.codechef.com/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <SiCodechef className="text-4xl text-gray-700 dark:text-gray-300 mb-2" />
          <p className="font-semibold text-teal-600 dark:text-teal-400">CodeChef</p>
        </motion.a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-teal-600 dark:text-teal-400">Contact Me</h2>
      <p className="mb-4 text-center text-gray-700 dark:text-gray-300">Feel free to connect with me via the platforms below:</p>
      <div className="text-center space-y-2">
        <p>Email: <a href="mailto:devayani1809@gmail.com" className="text-teal-600 dark:text-teal-400 hover:underline">devayani1809@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/devayani-b-10042b258/" target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">linkedin.com/in/devayani-b-10042b258/</a></p>
        <p>GitHub: <a href="https://github.com/DEVAYANI-B" target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">github.com/DEVAYANI-B</a></p>
      </div>
    </div>
  );
}

export default App;
