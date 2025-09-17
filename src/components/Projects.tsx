import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  galleryImages?: string[];
  github?: string;
  link?: string;
  featured?: boolean;
}

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
                    className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
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

// Featured Recipe Project (top project)
const projects: Project[] = [
  {
    id: 0,
    featured: true,
    title: 'Recipe Project',
    description:
      'Recipe Project is a full-stack web application for discovering, sharing, and managing recipes. It features a modern React frontend and a robust backend, allowing users to browse, search, and contribute recipes. The project demonstrates advanced skills in React, Node.js, and database management, and includes user authentication, responsive design, and a rich user experience.',
    image: 'public\Images\home_page.png', // Place image in public/assets
    technologies: [
      'React 19', 'TypeScript', 'Bootstrap 5', 'Custom CSS', 'React Context API', 'React Router DOM 7', 'i18next', 'Framer Motion', 'React Icons', 'Lucide React', 'Axios', 'Vite',
      'Spring Boot 3', 'Java 21', 'Spring Web MVC', 'Spring Boot Validation', 'Bucket4j', 'WebClient', 'Maven', 'Lombok'
    ],
    galleryImages: ['public/Images/home_page.png', 'public/Images/Recipe_Project_About.png', 'public/Images/Recipe_Project_Contact.png', 'public/Images/Recipe_Project_Create_Recipe_Step1.png', 'public/Images/Recipe_Project_Create_Recipe_Step2.png', 'public/Images/Recipe_Project_Create_Recipe_Step3.png', 'public/Images/Recipe_Project_Create_Recipe_Generated_Recipe1.png', 'public/Images/Recipe_Project_Create_Recipe_Generated_Recipe2.png'],
    github: 'https://github.com/noamshalev4/Recipe_Project',
    link: '', // Add live demo link if available
  },
  {
    id: 1,
    title: 'Coupon System',
    description:
      'Coupon System is a comprehensive e-commerce platform designed to manage coupon sales for businesses. The website allows three types of users: Admins, Companies, and Customers. Admins have full control over the platform, while companies can manage and sell their coupons, and customers can browse and purchase available coupons. The system streamlines coupon management, ensuring a seamless experience for both sellers and buyers.',
    image: './Images/Coupon_System.jpg',
    technologies: ['React', 'Node.js', 'MySQL-DB', 'Spring'],
    galleryImages: [
      './Images/Coupon_System_Home.png',
      './Images/Coupon_System_Login.png',
      './Images/Coupon_System_About.png',
      './Images/Coupon_System_Contact_Us.png',
      './Images/Coupon_System_Coupons.png',
      './Images/Coupon_System_Details.png',
    ],
    github: 'https://github.com/noamshalev4/Recipe_Project',
  },
  {
    id: 2,
    title: 'Talo-Boutique Catering',
    description:
      "Talo Boutique is a culinary website for a professional chef offering premium catering services. The platform showcases an exclusive selection of gourmet menus, custom-tailored to meet the needs of each client, whether for private events, corporate functions, or special occasions. The website highlights the chef's expertise, featuring a detailed menu of exquisite dishes crafted with fresh, locally-sourced ingredients. Users can explore various services, place orders, and inquire about bespoke catering solutions. The design is sleek and modern, reflecting the high-end nature of the services, ensuring an engaging and seamless experience for potential clients seeking top-tier culinary experiences.",
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
        <h2 className="section-heading text-center mb-12">
          {t('projects.title') || 'My Projects'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card ${project.featured ? 'border-4 border-green-400' : ''} ${projects.length % 2 !== 0 && idx === 0 ? 'md:col-span-2 mx-auto' : ''}`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-green-400 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow">
                  Top Project
                </div>
              )}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full ${projects.length % 2 !== 0 && idx === 0 ? 'h-120' : 'h-48'} object-cover`}
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
                      {t('projects.viewProject') || 'View Project'}
                    </button>
                  ) : project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      {t('projects.viewProject') || 'View Project'}
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
                      {t('projects.viewGithub') || 'GitHub'}
                    </a>
                  )}
                  {project.id === 0 && (
                    <button
                      onClick={() => {
                        window.open('https://drive.google.com/file/d/1FrE7OpGQVKrB5I0__AkMODE5qq9ItFap/view?usp=sharing', '_blank');
                      }}
                      className="flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                    >
                      <Play className="h-5 w-5 mr-1" />
                      Watch Demo Video
                    </button>
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