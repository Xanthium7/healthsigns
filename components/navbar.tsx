"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CSSTransition } from "react-transition-group";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors relative group",
        isActive
          ? "text-purple-600 dark:text-purple-400"
          : "text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400"
      )}
      onClick={onClick}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full",
          isActive ? "w-full" : "w-0"
        )}
      />
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "RPM", href: "/rpm" },
    { name: "Proprietary AI", href: "/ai" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/60 backdrop-blur-xl shadow-sm border-b border-gray-200/30 dark:bg-gray-900/70 dark:border-gray-700/30"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text font-display">
              HealthSigns
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.name}
              </NavLink>
            ))}
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div ref={menuRef}>
          <CSSTransition
            in={isOpen}
            timeout={200}
            classNames={{
              enter: "mobile-menu-enter",
              enterActive: "mobile-menu-enter-active",
              exit: "mobile-menu-exit",
              exitActive: "mobile-menu-exit-active",
            }}
            unmountOnExit
          >
            <nav className="md:hidden mt-4 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100/30 dark:border-gray-700/30">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    href={link.href}
                    isActive={pathname === link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="px-4 py-2">{link.name}</div>
                  </NavLink>
                ))}
                <div className="px-4 pt-2 pb-2">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-full shadow-md transition-all duration-300 transform hover:shadow-lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </nav>
          </CSSTransition>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
