import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={onClose}
        >
          <div 
            className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative aspect-video">
              <img
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white'
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Coupon System',
    description: 'Coupon System is a comprehensive e-commerce platform designed to manage coupon sales for businesses. The website allows three types of users: Admins, Companies, and Customers. Admins have full control over the platform, while companies can manage and sell their coupons, and customers can browse and purchase available coupons. The system streamlines coupon management, ensuring a seamless experience for both sellers and buyers.',
    image: './Images/Coupon_System.jpg',
    technologies: ['React', 'Node.js', 'MySQL-DB', 'Spring'],
    galleryImages: ['./Images/Coupon_System_Home.png', './Images/Coupon_System_Login.png', './Images/Coupon_System_About.png', './Images/Coupon_System_Contact_Us.png', './Images/Coupon_System_Coupons.png', './Images/Coupon_System_Details.png'], // You can add more images here
    github: 'https://github.com/noamshalev4/Coupon-System-Phase-3-FE/tree/main/coupon-system-3-fe',
  },
  {
    id: 2,
    title: 'Talo-Boutique Catering',
    description: "Talo Boutique is a culinary website for a professional chef offering premium catering services. The platform showcases an exclusive selection of gourmet menus, custom-tailored to meet the needs of each client, whether for private events, corporate functions, or special occasions. The website highlights the chef's expertise, featuring a detailed menu of exquisite dishes crafted with fresh, locally-sourced ingredients. Users can explore various services, place orders, and inquire about bespoke catering solutions. The design is sleek and modern, reflecting the high-end nature of the services, ensuring an engaging and seamless experience for potential clients seeking top-tier culinary experiences.",
    image: './Images/Talo_Boutique.png',
    technologies: ['Wix'],
    link: 'https://www.talo-boutique.com/',
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('projects.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.galleryImages && project.galleryImages.length > 0 ? (
                    <button
                      onClick={() => openGallery(project)}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      {t('projects.viewProject')}
                    </button>
                  ) : project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      {t('projects.viewProject')}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      {t('projects.viewGithub')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && selectedProject.galleryImages && (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={selectedProject.galleryImages}
        />
      )}
    </section>
  );
};

export default Projects;