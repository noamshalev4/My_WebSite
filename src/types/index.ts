export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  galleryImages?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface NavItem {
  label: string;
  href: string;
}