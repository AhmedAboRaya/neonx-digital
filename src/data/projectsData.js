// Architect X
import ax1 from "../assets/ProjImages/architect-x/img (1).webp";
import ax2 from "../assets/ProjImages/architect-x/img (2).webp";
import ax3 from "../assets/ProjImages/architect-x/img (3).webp";
import ax4 from "../assets/ProjImages/architect-x/img (4).webp";
import ax5 from "../assets/ProjImages/architect-x/img (5).webp";
import ax6 from "../assets/ProjImages/architect-x/img (6).webp";
import ax7 from "../assets/ProjImages/architect-x/img (7).webp";
import ax8 from "../assets/ProjImages/architect-x/img (8).webp";
import ax9 from "../assets/ProjImages/architect-x/img (9).webp";
import ax10 from "../assets/ProjImages/architect-x/img (10).webp";
import ax11 from "../assets/ProjImages/architect-x/img (11).webp";
import ax12 from "../assets/ProjImages/architect-x/img (12).webp";
import ax13 from "../assets/ProjImages/architect-x/img (13).webp";
import ax14 from "../assets/ProjImages/architect-x/img (14).webp";
import ax15 from "../assets/ProjImages/architect-x/img (15).webp";
import ax16 from "../assets/ProjImages/architect-x/img (16).webp";
import ax17 from "../assets/ProjImages/architect-x/img (17).webp";
import ax18 from "../assets/ProjImages/architect-x/img (18).webp";
import ax19 from "../assets/ProjImages/architect-x/img (19).webp";
import ax20 from "../assets/ProjImages/architect-x/img (20).webp";

// Design Genome
import dg1 from "../assets/ProjImages/design-genome/img-1.webp";
import dg2 from "../assets/ProjImages/design-genome/img-2.webp";
import dg3 from "../assets/ProjImages/design-genome/img-3.webp";
import dg4 from "../assets/ProjImages/design-genome/img-4.webp";
import dg5 from "../assets/ProjImages/design-genome/img-5.webp";
import dg6 from "../assets/ProjImages/design-genome/img-6.webp";
import dg8 from "../assets/ProjImages/design-genome/img-8.webp";

// Aokaaze Sushi
import ak1 from "../assets/ProjImages/aokaze-sushi/img (1).webp";
import ak2 from "../assets/ProjImages/aokaze-sushi/img (2).webp";
import ak3 from "../assets/ProjImages/aokaze-sushi/img (3).webp";
import ak4 from "../assets/ProjImages/aokaze-sushi/img (4).webp";
import ak5 from "../assets/ProjImages/aokaze-sushi/img (5).webp";
import ak6 from "../assets/ProjImages/aokaze-sushi/img (6).webp";
import ak7 from "../assets/ProjImages/aokaze-sushi/img (7).webp";
import ak8 from "../assets/ProjImages/aokaze-sushi/img (8).webp";
import ak9 from "../assets/ProjImages/aokaze-sushi/img (9).webp";
import ak10 from "../assets/ProjImages/aokaze-sushi/img (10).webp";

// Pantzzz Store
import pantzzImg from "../assets/ProjImages/pantzz-store/img.webp";

// Other Projects
import image1 from "../assets/ProjImages/proj1.png";
import image2 from "../assets/ProjImages/proj1-1.png";
import image3 from "../assets/ProjImages/proj1-2.png";
import image4 from "../assets/ProjImages/proj1-3.png";
import image5 from "../assets/ProjImages/proj2.png";
import image6 from "../assets/ProjImages/proj3.png";
import image7 from "../assets/ProjImages/proj3-1.png";
import image8 from "../assets/ProjImages/proj3-2.png";
import image9 from "../assets/ProjImages/proj3-4.png";
import image10 from "../assets/ProjImages/proj4.jpeg";
import image11 from "../assets/ProjImages/proj5.png";
import image12 from "../assets/ProjImages/Proj6.png";

export const categories = [
  { id: "all", label: "All Projects", count: 10 },
  { id: "saas", label: "SaaS & Ed-Tech", count: 5 },
  { id: "ecommerce", label: "E-Commerce & Retail", count: 3 },
  { id: "web-ai", label: "AI & Bespoke Web", count: 2 },
];

export const projects = [
  {
    id: 1,
    title: "Architect X – Multi-Tier E-Learning Platform",
    tagline: "Enterprise Educational LMS & Secure Media Streaming",
    category: "saas",
    featured: true,
    coverImage: ax1,
    imageCount: 20,
    description: "A comprehensive enterprise e-learning platform supporting 3 user tiers (Students, Instructors, Admins) with strict media protection. Engineered a draft-based review workflow where instructor updates require granular administrative review and selective approval. Integrated multi-course bundled pricing packages alongside individual course enrollment and payment flows.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://architect-x-sigma.vercel.app/",
    stats: "20 Screens • 3-Tier Security",
  },
  {
    id: 2,
    title: "Design Genome – Rhino 3D Ed-Tech Platform",
    tagline: "Computational Architecture LMS & Stripe Billing",
    category: "saas",
    featured: true,
    coverImage: dg1,
    imageCount: 7,
    description: "An innovative educational platform tailored for architecture students, featuring computational Rhino 3D course tracks. Integrated Stripe billing for course purchases and recurring subscriptions, alongside interactive discussion forums and custom admin tools.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://design-genome.vercel.app/",
    stats: "7 Screens • Stripe Billing",
  },
  {
    id: 3,
    title: "Aokaaze Sushi – Restaurant Management & Booking",
    tagline: "Full-Stack Dining Experience & Live Table Reservations",
    category: "ecommerce",
    featured: true,
    coverImage: ak1,
    imageCount: 10,
    description: "A sleek restaurant web application featuring interactive digital menu browsing, dynamic food ordering, and an interactive table booking system with seat count and location selection. Developed a comprehensive real-time admin dashboard allowing staff to track live orders, manage table reservations, and update menu items seamlessly.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://aokaaze-sushi.vercel.app/",
    stats: "10 Screens • Live Reservation",
  },
  {
    id: 4,
    title: "Pantzzz Store – E-Commerce Apparel Platform",
    tagline: "High-Performance Modern Fashion Marketplace",
    category: "ecommerce",
    featured: true,
    coverImage: pantzzImg,
    imageCount: 1,
    description: "A full-scale commercial clothing e-commerce store with secure online payment integration. Engineered robust RESTful APIs for inventory management, dynamic product catalogs, shopping cart workflows, and an administrative dashboard.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    link: "https://pantzzzstore.cloud/home",
    stats: "Production Store • REST Engine",
  },
  {
    id: 5,
    title: "E-Commerce Platform – Waqar",
    tagline: "Saudi Men's Fashion & Logistics Dispatch",
    category: "ecommerce",
    featured: true,
    coverImage: image1,
    imageCount: 4,
    description: "E-commerce platform specializing in Saudi men's clothing, especially Shemagh. Offers essential shopping features, including browsing products, adding to cart, modifying items, and completing orders. Customers can track their orders (Pending, In Transit, Delivered). The admin dashboard allows managing products, categorizing orders, assigning delivery officers, and viewing order statistics.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://waqar-shemagh.vercel.app/",
    stats: "4 Screens • Order Dispatching",
  },
  {
    id: 6,
    title: "AI Chat Platform – UIR",
    tagline: "Conversational Intelligence Powered by OpenAI",
    category: "web-ai",
    featured: true,
    coverImage: image11,
    imageCount: 1,
    description: "An AI-powered chatbot for the International University of Rabat (UIR), integrating React and Tailwind CSS for a responsive frontend, with ASP.NET Core and SQL Server ensuring a scalable backend. Leveraging OpenAI, the chatbot enhanced user interactions, streamlining communication and showcasing expertise in full-stack development and AI integration.",
    tags: ["React", "Tailwind CSS", "OpenAI", ".NET Core"],
    link: "#",
    stats: "OpenAI Engine • .NET Core",
  },
  {
    id: 7,
    title: "E-Learning Platform – Esrark",
    tagline: "High-School Educational Suite with BunnyStream",
    category: "saas",
    featured: false,
    coverImage: image12,
    imageCount: 1,
    description: "An E-learning platform for high school students to purchase courses, make online payments, and access lectures. Students can take exams for each course with results displayed instantly. Administrators, including managers and staff, can add, modify, or delete courses, lectures, and exams with BunnyStream video storage integration.",
    tags: ["React", "Node.js", "MongoDB", "BunnyStream"],
    link: "https://esrark.vercel.app/",
    stats: "BunnyStream Video • Instant Exams",
  },
  {
    id: 8,
    title: "Online Learning Platform – Minasaty",
    tagline: "Interactive Student Portal & Lecture Delivery",
    category: "saas",
    featured: false,
    coverImage: image5,
    imageCount: 1,
    description: "An educational platform where students can purchase courses, make online payments, and access lectures for purchased courses. Administrators have roles such as manager and staff, with the manager able to add, modify, or delete courses, upload lectures via BunnyStream, manage student requests, and manage staff members.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://manasty-phi.vercel.app/",
    stats: "Role Hierarchy • Lecture CMS",
  },
  {
    id: 9,
    title: "Car Wash Landing Page – Allo Lave",
    tagline: "Modern On-Demand Automotive Booking Portal",
    category: "web-ai",
    featured: false,
    coverImage: image6,
    imageCount: 4,
    description: "A dynamic and interactive landing page for Allo Lave, a car wash service platform. Built using React and Tailwind CSS, the landing page delivers a seamless user experience with an intuitive and responsive interface, mobile-first design, and interactive booking.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    link: "https://allo-lave.vercel.app/",
    stats: "4 Screens • Interactive UI/UX",
  },
  {
    id: 10,
    title: "School Management System – Epim",
    tagline: "Institutional Examination & Jury Administration",
    category: "saas",
    featured: false,
    coverImage: image10,
    imageCount: 1,
    description: "A school management system for jury exams. Key features included organizing members, scheduling meetings, assigning roles, generating comprehensive reports, and validating results.",
    tags: ["React", ".NET", "SQL Server"],
    link: "#",
    stats: "Jury Scheduling • SQL Server",
  },
];

export const projectImages = [
  // Architect X (id: 1)
  { id: 1, image: ax1 },
  { id: 1, image: ax2 },
  { id: 1, image: ax3 },
  { id: 1, image: ax4 },
  { id: 1, image: ax5 },
  { id: 1, image: ax6 },
  { id: 1, image: ax7 },
  { id: 1, image: ax8 },
  { id: 1, image: ax9 },
  { id: 1, image: ax10 },
  { id: 1, image: ax11 },
  { id: 1, image: ax12 },
  { id: 1, image: ax13 },
  { id: 1, image: ax14 },
  { id: 1, image: ax15 },
  { id: 1, image: ax16 },
  { id: 1, image: ax17 },
  { id: 1, image: ax18 },
  { id: 1, image: ax19 },
  { id: 1, image: ax20 },

  // Design Genome (id: 2)
  { id: 2, image: dg1 },
  { id: 2, image: dg2 },
  { id: 2, image: dg3 },
  { id: 2, image: dg4 },
  { id: 2, image: dg5 },
  { id: 2, image: dg6 },
  { id: 2, image: dg8 },

  // Aokaaze Sushi (id: 3)
  { id: 3, image: ak1 },
  { id: 3, image: ak2 },
  { id: 3, image: ak3 },
  { id: 3, image: ak4 },
  { id: 3, image: ak5 },
  { id: 3, image: ak6 },
  { id: 3, image: ak7 },
  { id: 3, image: ak8 },
  { id: 3, image: ak9 },
  { id: 3, image: ak10 },

  // Pantzzz Store (id: 4)
  { id: 4, image: pantzzImg },

  // Waqar (id: 5)
  { id: 5, image: image1 },
  { id: 5, image: image2 },
  { id: 5, image: image3 },
  { id: 5, image: image4 },

  // AI Chat Platform (id: 6)
  { id: 6, image: image11 },

  // Esrark (id: 7)
  { id: 7, image: image12 },

  // Minasaty (id: 8)
  { id: 8, image: image5 },

  // Allo Lave (id: 9)
  { id: 9, image: image6 },
  { id: 9, image: image7 },
  { id: 9, image: image8 },
  { id: 9, image: image9 },

  // Epim (id: 10)
  { id: 10, image: image10 },
];

export const getProjectImages = (projectId) => {
  return projectImages.filter((item) => item.id === projectId);
};
