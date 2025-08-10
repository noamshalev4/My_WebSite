import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

const skills = [
  // Frontend
  { name: 'React 19', icon: '⚛️', level: 95 },
  { name: 'TypeScript', icon: '📘', level: 90 },
  { name: 'Bootstrap 5', icon: '🅱️', level: 85 },
  { name: 'Custom CSS', icon: '🎨', level: 85 },
  { name: 'React Context API', icon: '🔄', level: 85 },
  { name: 'React Router DOM 7', icon: '🛣️', level: 80 },
  { name: 'i18next', icon: '🌐', level: 80 },
  { name: 'Framer Motion', icon: '🎞️', level: 80 },
  { name: 'React Icons', icon: '🎨', level: 80 },
  { name: 'Lucide React', icon: '🖼️', level: 80 },
  { name: 'Axios', icon: '🔗', level: 85 },
  { name: 'Vite', icon: '⚡', level: 85 },
  // Backend
  { name: 'Spring Boot 3', icon: '🛠️', level: 90 },
  { name: 'Java 21', icon: '☕', level: 90 },
  { name: 'Spring Web MVC', icon: '🌱', level: 85 },
  { name: 'Spring Boot Validation', icon: '✅', level: 80 },
  { name: 'Bucket4j', icon: '⏳', level: 75 },
  { name: 'WebClient', icon: '🌍', level: 80 },
  { name: 'Maven', icon: '🏗️', level: 85 },
  { name: 'Lombok', icon: '✨', level: 80 },
  // DevOps & Other
  { name: 'Git', icon: '🔧', level: 85 },
  { name: 'CI/CD', icon: '🚀', level: 80 },
  { name: 'Docker', icon: '🐳', level: 80 },
  { name: 'Linux', icon: '🐧', level: 75 },
  { name: 'Internationalization', icon: '🌐', level: 80 },
  { name: 'Responsive Design', icon: '📱', level: 85 },
  { name: 'Animations', icon: '🎬', level: 80 },
  { name: 'REST API', icon: '🔌', level: 85 },
];

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;