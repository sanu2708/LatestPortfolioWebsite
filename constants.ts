
import { Project, Experience, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'learnme',
    title: 'LEARNME - AI EDTECH',
    category: 'AI & Frontend Engineering',
    year: '2025',
    description: 'A futuristic EdTech platform designed to elevate leadership skills through immersive learning. Features a cutting-edge Real-time AI Voice Tutor powered by Google\'s Gemini Multimodal Live API, allowing students to roleplay scenarios naturally. Includes interactive 3D elements via Spline, reactive audio visualizers, and a comprehensive course management system.',
    imageUrl: 'https://raw.githubusercontent.com/sanu2708/Imagesrepository/refs/heads/main/48bd2400-102c-47a2-966b-f0037017955e.jpg',
    tags: ['React', 'Gemini AI', 'TypeScript', 'Tailwind', 'Spline 3D'],
    link: 'https://learnmee.netlify.app/',
    gallery: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    title: 'MODERN CHAIR',
    category: 'Product UI',
    year: '2023',
    description: 'A modern Product Card project showcasing a high-end chair. Features color selection logic and responsiveness using media queries to display correctly on Shopify for Sell.',
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://modern-chairr.netlify.app/',
    gallery: [
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '4',
    title: 'BOOK MY SHOW API',
    category: 'Backend Engineering',
    year: '2023',
    description: 'A Spring Boot implementation of the backend APIs for a ticket booking system similar to BookMyShow. Features include User Registration, Movie & Theater Management, Ticket Booking with Seat Selection, and Email Notifications via SMTP. Built with a focus on robust RESTful architecture, data integrity with JPA/MySQL, and scalable design.',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Maven'],
    link: 'https://github.com/sanu2708/BookMyShow',
    gallery: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800'
    ]
  },
  {
    id: '5',
    title: 'E-COMMERCE PLATFORM',
    category: 'Backend Engineering',
    year: '2022',
    description: 'A comprehensive backend solution for an E-Commerce platform built with Spring Boot. This project focuses on scalable architecture, featuring robust product management, user authentication, and efficient data querying using Spring Data JPA and Hibernate.',
    imageUrl: 'https://raw.githubusercontent.com/sanu2708/Imagesrepository/refs/heads/main/2149241375.jpg',
    tags: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Maven'],
    link: 'https://github.com/sanu2708/E-Commerce',
    gallery: [
      'https://raw.githubusercontent.com/sanu2708/Imagesrepository/refs/heads/main/2150165932.jpg',
      'https://raw.githubusercontent.com/sanu2708/Imagesrepository/refs/heads/main/2150165908.jpg'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'IT Analyst',
    company: 'HCLTech',
    period: 'Jan 2024 – Current',
    description: [
      'Working as an IT Analyst contributing to enterprise-level solutions.',
      'Collaborating with cross-functional teams to analyze system requirements and implement efficient software solutions.',
      'Focusing on system reliability, performance optimization, and technical analysis.'
    ]
  },
  {
    id: '2',
    role: 'Teaching Assistant (TA)',
    company: 'Coding Ninjas',
    period: 'May 2024 – Jul 2024',
    description: [
      'Assisted students in JAVA development and Data Structures & Algorithms.',
      'Debugged student code, clarified complex programming concepts, and provided mentorship.',
      'Facilitated a deeper understanding of core Java concepts for aspiring developers.'
    ]
  },
  {
    id: '3',
    role: 'JAVA Developer Internship',
    company: 'KiaSoft Technology',
    period: 'Aug 2023 – Jan 2024',
    description: [
      'In this internship I made two projects using Spring MVC, Spring JDBC, MySQL, and Spring Boot.',
      'Developed a understanding of Spring Framework, including Spring Boot.',
      'Actively engaged in coding forums and developer communities. Applied Java backend concepts to personal project development.',
      'Wrote unit tests for Java code.',
      'Performed thorough testing of the application to ensure functionality and reliability.'
    ]
  },
  {
    id: '4',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2023 – Present',
    description: [
      'Delivering custom web solutions and full-stack applications for diverse clients.',
      'specializing in React, Node.js, and modern UI frameworks to build responsive and performant websites.',
      'Managing end-to-end development lifecycle from requirement gathering to deployment.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    role: 'Product Manager',
    company: 'TechFlow',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    content: 'Sanu is a developer who truly cares about the end-user experience. His attention to detail and commitment to clean, maintainable code is refreshing.'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Design Lead',
    company: 'Creative Studio',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    content: 'Collaborating with Sanu was seamless. He has a great eye for design implementation and often suggested improvements that made the final product better.'
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Founder',
    company: 'NextGen Startup',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    content: 'Reliable, skilled, and excellent at communication. Sanu helped us bring our MVP to life in record time without compromising on quality.'
  }
];

// ==========================================
// YOUR PERSONAL IMAGE SETUP
// ==========================================
export const HERO_IMAGE = 'https://raw.githubusercontent.com/sanu2708/Imagesrepository/refs/heads/main/Adobe%20Express%20-%20file.png'; // Use /portrait.jpg for files in public/ folder
