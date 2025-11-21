
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  gallery?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
}

export enum Routes {
  HOME = '/',
  WORKS = '/works',
  ABOUT = '/about',
  EXPERIENCE = '/experience',
  CONTACT = '/contact',
  PROJECT = '/works/:id'
}
