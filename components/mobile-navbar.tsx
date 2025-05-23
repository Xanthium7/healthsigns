"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CSSTransition } from "react-transition-group";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

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
        isActive ? "text-primary" : "text-foreground hover:text-primary"
      )}
      onClick={onClick}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
          isActive ? "w-full" : "w-0"
        )}
      />
    </Link>
  );
};

const MobileNavbar = ({ isOpen, onClose, links }: MobileNavbarProps) => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={menuRef}>
      <CSSTransition
        in={isOpen}
        timeout={200}
        nodeRef={nodeRef}
        classNames={{
          enter: "mobile-menu-enter",
          enterActive: "mobile-menu-enter-active",
          exit: "mobile-menu-exit",
          exitActive: "mobile-menu-exit-active",
        }}
        unmountOnExit
      >
        <nav
          ref={nodeRef}
          className="md:hidden mt-4 py-4 bg-background/60 backdrop-blur-xl rounded-2xl shadow-lg border border-border/30"
        >
          <div className="flex justify-end px-4 mb-2">
            <button
              onClick={onClose}
              className="text-foreground hover:text-primary"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                isActive={pathname === link.href}
                onClick={onClose}
              >
                <div className="px-4 py-2">{link.name}</div>
              </NavLink>
            ))}
            <div className="px-4 pt-2 pb-2">
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full shadow-md transition-all duration-300 transform hover:shadow-lg">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </CSSTransition>
    </div>
  );
};

export default MobileNavbar;
