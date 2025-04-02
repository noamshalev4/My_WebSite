import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Globe2, Server } from 'lucide-react';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
          dir={isHebrew ? 'rtl' : 'ltr'}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            style={{ 
              direction: isHebrew ? 'rtl' : 'ltr',
              textAlign: isHebrew ? 'right' : 'center',
              unicodeBidi: 'embed'
            }}
            dangerouslySetInnerHTML={{ __html: t('about.description') }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Code2 className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
              {t('about.frontend.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {t('about.frontend.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Server className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
              {t('about.backend.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {t('about.backend.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Globe2 className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
              {t('about.performance.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {t('about.performance.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;