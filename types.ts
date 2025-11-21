export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export enum Routes {
  HOME = '/',
  WORKS = '/works',
  ABOUT = '/about',
  TESTIMONIALS = '/testimonials',
  CONTACT = '/contact',
  PROJECT = '/works/:id'
}