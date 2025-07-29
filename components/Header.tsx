// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
// highlight-next-line
import { SearchDialog } from "./SearchDialog"; // Import the new search component

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/diy-mfa", label: "DIY MFA" },
  { href: "/reading-list", label: "Reading List" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-canvas/80 dark:bg-canvasDark/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus-ring"
            aria-label="Open main menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link href="/" className="flex items-center focus-ring rounded-md">
            <Image src="/Logo.png" alt="AI Writers Retreat Logo" width={64} height={64} className="h-16 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors focus-ring rounded-sm ${
                pathname === link.href
                  ? "text-ink dark:text-canvas font-bold"
                  : "text-ink/60 dark:text-canvas/60 hover:text-ink dark:hover:text-canvas"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://coff.ee/aiwritersretreat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/60 dark:text-canvas/60 hover:text-ink dark:hover:text-canvas focus-ring rounded-sm"
          >
            Donate
          </a>
        </nav>

        {/* --- MODIFICATION START --- */}
        <div className="flex items-center space-x-1">
          {/* The SearchDialog now contains its own trigger button */}
          {/* highlight-next-line */}
          <SearchDialog />
          <ThemeToggle />
        </div>
        {/* --- MODIFICATION END --- */}

      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-canvas dark:bg-canvasDark border-t border-gray-200 dark:border-gray-800">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://coff.ee/aiwritersretreat"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
