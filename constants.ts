import { Project, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LUMINA BANK',
    category: 'Fintech App',
    year: '2023',
    description: 'A comprehensive banking dashboard focusing on accessibility and high-contrast data visualization. Implemented using React and D3.js for real-time market tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    tags: ['React', 'D3.js', 'TypeScript'],
    link: '#'
  },
  {
    id: '2',
    title: 'VELVET INTERIORS',
    category: 'E-Commerce',
    year: '2024',
    description: 'Minimalist e-commerce platform for high-end furniture. Features include 3D product previews, custom checkout flows, and headless CMS integration.',
    imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2600&auto=format&fit=crop',
    tags: ['Next.js', 'Shopify', 'WebGL'],
    link: '#'
  },
  {
    id: '3',
    title: 'ECHO MAGAZINE',
    category: 'Editorial',
    year: '2022',
    description: 'Digital editorial experience with complex grid layouts and scroll-triggered animations. Awarded "Site of the Day" for typographic excellence.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e0b708?q=80&w=2500&auto=format&fit=crop',
    tags: ['Vue', 'GSAP', 'Editorial'],
    link: '#'
  },
  {
    id: '4',
    title: 'AERO DASH',
    category: 'SaaS Platform',
    year: '2023',
    description: 'Flight tracking analytics tool for logistics companies. Dark mode first design with real-time socket integration.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2600&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Socket.io'],
    link: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Product Director',
    company: 'TechFlow',
    content: 'Albert transformed our chaotic dashboard into a work of art. His attention to typographic detail is unmatched in the development world.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Velvet',
    content: 'Working with Albert was seamless. He bridges the gap between design and code perfectly. Our conversion rates doubled after the launch.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Elena Rostova',
    role: 'Art Director',
    company: 'Echo Mag',
    content: 'Technically brilliant and aesthetically sensitive. It is rare to find a developer who cares about micro-interactions as much as Albert does.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
  }
];

// ==========================================
// YOUR PERSONAL IMAGE SETUP
// ==========================================
// To use your own photo:
// 1. Rename your image file to 'portrait.jpg' (or similar).
// 2. Place it in the 'public' folder of this project.
// 3. Uncomment the line below:
// export const HERO_IMAGE = '/portrait.jpg';

// Currently using Unsplash demo image:
export const HERO_IMAGE = '/portrait.jpeg';
