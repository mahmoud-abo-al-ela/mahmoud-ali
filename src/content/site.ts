// All copy lives here so a translated dictionary (e.g. Arabic) can be added later
// without touching the components.

import type { StaticImageData } from "next/image";
import automeCar from "@/assets/projects/autome-car.webp";
import automeMobile from "@/assets/projects/autome-mobile.webp";
import dateshub from "@/assets/projects/dateshub.webp";
import taskManager from "@/assets/projects/task-management.webp";

export const profile = {
  name: "Mahmoud Ali",
  role: "Frontend-focused MERN developer",
  headline: "I build fast web products in English and Arabic.",
  intro:
    "I work in React, Next.js and TypeScript, and I care about the parts people feel: fast pages, accessible components, and layouts that read as naturally right-to-left as left-to-right. Behind the interface I write the Node.js APIs, usually on MongoDB, or PostgreSQL when the data calls for it.",
  github: "https://github.com/mahmoud-abo-al-ela",
  githubHandle: "mahmoud-abo-al-ela",
  linkedin: "https://linkedin.com/in/mahmoud-7li-abo-al-ela/",
};

export type Shot = { image: StaticImageData; alt: string; caption: string };

export const autome = {
  name: "AutoMe",
  summary: "A marketplace and back office for car dealerships in Egypt.",
  description:
    "Dealerships subscribe, get a storefront on their own subdomain, and run inventory, test drives, billing and buyer chats from one dashboard. AI does the slow parts of selling, and every answer it gives a buyer is checked against the listing first.",
  highlights: [
    "Drafts a full listing in Arabic and English from up to three photos of the car",
    "A buyer assistant that answers only from verified facts, with citations",
    "Search by sentence: “automatic SUV under 1.5 million in Cairo” becomes filters",
    "An MCP server so assistants like Claude can search the cars",
  ],
  stack: "Next.js 15, TypeScript, PostgreSQL with Prisma, Gemini, Paymob, Vitest",
  live: "https://auto-me.vercel.app",
  source: "https://github.com/mahmoud-abo-al-ela/AutoMe",
  shots: {
    car: {
      image: automeCar,
      alt: "AutoMe car page for a 2023 Nissan Sunny, with the price shown on a bar against the market median",
      caption: "A car page. The bar under the price compares it with similar cars on AutoMe.",
    },
    mobile: {
      image: automeMobile,
      alt: "The same AutoMe car page on a phone, with the price and a Chat Now button pinned to the bottom",
      caption: "The same page on a phone, with price and chat pinned within thumb reach.",
    },
  } satisfies Record<string, Shot>,
};

export type Project = {
  name: string;
  summary: string;
  description: string;
  stack: string;
  image?: StaticImageData;
  imageAlt?: string;
  imagePosition?: string;
  live?: string;
  source?: string;
  note?: string;
  parts?: { name: string; detail: string }[];
};

export const projects: Project[] = [
  {
    name: "DatesHub",
    summary: "An Arabic-first B2B marketplace for the dates trade.",
    description:
      "Companies and suppliers publish products and offers. Buyers browse, bookmark and message them. A CMS-driven blog and news feed keep it current. Built for a client.",
    stack: "Next.js, Clerk, Sanity, Tailwind CSS, shadcn/ui",
    image: dateshub,
    imageAlt: "DatesHub home page in Arabic, with a close-up photo of dates",
    live: "https://www.dateshub.co",
  },
  {
    name: "Task Manager",
    summary: "A MERN and TypeScript task board.",
    description:
      "Sign up and manage your own tasks with search, filters, a drag-and-drop board and image attachments. Every query is scoped to the signed-in user in the database, not checked afterwards.",
    stack: "React 19, Express, MongoDB, TanStack Query, JWT in an httpOnly cookie",
    image: taskManager,
    imagePosition: "object-[0_0]",
    imageAlt: "Task Manager sign-in page reading “Plan your day, finish what matters.”",
    live: "https://task-management-inky-five.vercel.app",
    source: "https://github.com/mahmoud-abo-al-ela/Task-management",
  },
  {
    name: "ArtMe",
    summary: "A marketplace for artists and their work.",
    description:
      "Three React apps, a public gallery, an artist studio and an admin console, on one Express and MongoDB API with uploads to Cloudinary.",
    stack: "React 19, Vite, Express 5, MongoDB, Cloudinary",
    note: "Private repository, no public demo",
    parts: [
      { name: "Gallery", detail: "Browse artworks and artist profiles" },
      { name: "Studio", detail: "Artists sign in, upload work and edit their profile" },
      { name: "Admin", detail: "Dashboard, user and artwork management" },
      { name: "API", detail: "Express 5 REST API, JWT sign-in, Cloudinary uploads" },
    ],
  },
];

export const stack = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Redux", "TanStack Query"] },
  { title: "Backend and data", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "Supabase"] },
  { title: "AI and testing", items: ["Gemini API", "MCP servers", "Vitest", "Live AI evals"] },
  { title: "Shipping", items: ["Git", "GitHub Actions", "Docker", "Vercel", "pnpm", "Figma"] },
];
