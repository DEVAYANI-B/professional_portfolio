import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillData = {
  "Frontend": ["HTML", "CSS", "ReactJS", "React Native", "Redux"],
  "Backend": ["Node.js", "Express.js", "Java", "C", "Python"],
  "Database": ["MongoDB", "MySQL", "JDBC"],
  "Cloud & DevOps": ["AWS EC2", "S3", "RDS", "CloudFormation", "Docker"],
  "Authentication": ["Firebase Auth"],
  "AI Tools": ["Krisp AI", "Fireflies AI", "Fellow AI"],
  "API & Image Services": ["Cloudinary API", "Postman"],
  "Data Science": ["NumPy", "Pandas"],
  "Testing Tools": ["Selenium", "JUnit", "Jira", "Slack"],
  "Version Control & IDE Tools": ["Git", "GitHub", "VS Code", "AWS CLI", "MS Excel", "Colab"]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10 px-4 sm:px-10">
      <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700 dark:text-indigo-300">🌌 My Skill Galaxy</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Category List */}
        <div className="w-full md:w-1/3 space-y-4">
          {Object.keys(skillData).map((category, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-all duration-200
                ${activeCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-gray-700"}`}
              onClick={() => setActiveCategory((prev) => (prev === category ? null : category))}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="w-full md:w-2/3 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {skillData[activeCategory].map((skill, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 rounded-full text-center font-medium shadow-sm hover:scale-105 transition"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
