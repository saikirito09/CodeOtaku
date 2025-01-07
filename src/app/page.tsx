"use client";

import React, { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Navigation Links Component
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative group px-4 py-2 transition-colors duration-300 font-virgil"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 w-full h-0 bg-gradient-to-r from-[var(--cherry-pink)] to-[var(--electric-purple)] opacity-0 group-hover:h-full group-hover:opacity-10 transition-all duration-300" />
  </Link>
);

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="codeotaku-nav">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-virgil text-2xl animate-glow group">
            Code<span className="text-[var(--cherry-pink)]">Otaku</span>
            <span className="inline-block group-hover:rotate-12 transition-transform duration-300">
              ★
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

// Hero Section
const Hero = () => (
  <section className="pt-32 pb-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="codeotaku-heading mb-6">
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            Coding
          </span>
          <span className="text-[var(--cherry-pink)] mx-2">×</span>
          <span className="inline-block hover:scale-110 transition-transform duration-300">
            Anime
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-virgil">
          Where coding meets anime aesthetics - join the adventure!
        </p>
      </motion.div>
    </div>
  </section>
);

// Featured Posts Section
interface Post {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const FeaturedPosts = () => {
  const posts: Post[] = [
    {
      title: "Building Your Dream Anime Finder",
      description:
        "Create a magical recommendation system to discover your next favorite anime series",
      tags: ["Python", "AI", "Anime"],
      image: "/api/placeholder/400/300",
    },
    {
      title: "Manga Reader: A Developer's Tale",
      description:
        "Craft your own manga reading experience with modern web magic",
      tags: ["Next.js", "React", "TypeScript"],
      image: "/api/placeholder/400/300",
    },
    {
      title: "Anime-Style UI Magic",
      description:
        "Transform your websites with enchanting anime-inspired animations",
      tags: ["CSS", "Animation", "Design"],
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-virgil text-3xl md:text-4xl mb-12 text-center">
          Latest Adventures
          <span className="inline-block ml-2 animate-bounce">✨</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="codeotaku-card group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-virgil text-xl mb-2 group-hover:text-[var(--cherry-pink)] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-[var(--foreground)] opacity-80 mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-[var(--cherry-pink)] bg-opacity-10 text-[var(--cherry-pink)] hover:bg-opacity-20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="border-t border-[var(--card-border)] py-12">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <Link
            href="https://github.com"
            className="hover:text-[var(--cherry-pink)] transition-colors"
            aria-label="Project Repository"
          >
            <Github size={24} />
          </Link>
        </div>
        <p className="font-virgil text-center opacity-80">
          "Where code meets imagination~"
        </p>
        <p className="mt-4 text-sm opacity-60 font-virgil">
          Crafted with ✨ by CodeOtaku
        </p>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedPosts />
      <Footer />
    </main>
  );
}
