import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/noamshalev4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/noam-shalev-701b75335/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:noamsbest@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {t('footer.name')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;