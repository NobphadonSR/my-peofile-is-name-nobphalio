"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/100 sticky p-4 top-0 z-50 transition-all duration-300 rounded-xl m-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-primary text-xl md:text-2xl font-bold hover:scale-105 transition-transform"
        >
          Nobphanolio
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-primary hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-primary hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="text-primary hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-primary hover:text-accent transition-colors">
            About
          </Link>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } fixed top-0 right-0 h-full w-48 bg-black/75 backdrop-blur-sm transform transition-all duration-300 ease-in-out md:hidden rounded-xl`}
        >
          <button
            className="absolute top-4 right-4 text-primary"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col p-6 space-y-4 mt-12">
            <Link href="/" className="text-primary hover:text-accent py-2 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-primary hover:text-accent py-2 transition-colors">
              Blog
            </Link>
            <Link href="/projects" className="text-primary hover:text-accent py-2 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-primary hover:text-accent py-2 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
