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
    className="relative group px-4 py-2 transition-colors duration-300"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 w-full h-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--cherry-pink)] opacity-0 group-hover:h-full group-hover:opacity-10 transition-all duration-300" />
  </Link>
);

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="codeotaku-nav">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-virgil text-2xl animate-glow">
            CodeOtaku
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/manifesto">Manifesto</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[var(--background)] border-b border-[var(--card-border)] py-4">
            <div className="flex flex-col space-y-4 px-4">
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/manifesto">Manifesto</NavLink>
            </div>
          </div>
        )}
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
        <h1 className="codeotaku-heading mb-6">Where Anime Meets Code</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          A journey through the digital realm where technology and anime culture
          converge. Join me in exploring the art of programming through the lens
          of anime aesthetics.
        </p>
        <button className="anime-button">Enter the Void</button>
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
      title: "Building an Anime Recommendation Engine",
      description:
        "Dive into the world of machine learning to create a personalized anime recommendation system",
      tags: ["Python", "AI", "Anime"],
      image: "/api/placeholder/400/300",
    },
    {
      title: "Creating a Manga Reader with Next.js",
      description:
        "Explore the process of building a seamless manga reading experience",
      tags: ["Next.js", "React", "TypeScript"],
      image: "/api/placeholder/400/300",
    },
    {
      title: "Anime-Inspired UI Animation Effects",
      description:
        "Transform ordinary interfaces into magical experiences with anime-style animations",
      tags: ["CSS", "Animation", "Design"],
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-virgil text-3xl md:text-4xl mb-12 text-center">
          Latest Transmissions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="codeotaku-card"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-virgil text-xl mb-2">{post.title}</h3>
              <p className="text-[var(--foreground)] opacity-80 mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-[var(--neon-blue)] bg-opacity-10 text-[var(--neon-blue)]"
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
            className="hover:text-[var(--neon-blue)] transition-colors"
            aria-label="Project Repository"
          >
            <Github size={24} />
          </Link>
        </div>
        <p className="font-virgil text-center opacity-80">
          "In code we trust, in anime we believe"
        </p>
        <p className="mt-4 text-sm opacity-60">
          Encrypted with 💜 by CodeOtaku
        </p>
      </div>
    </div>
  </footer>
);

// Main Page Component
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
