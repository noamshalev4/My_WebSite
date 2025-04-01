import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {t('hero.greeting')} <span className="text-blue-600">{t('hero.name')}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            {t('hero.role')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {t('hero.description')}
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/noamshalev4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/noam-shalev-701b75335/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:noamsbest@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;