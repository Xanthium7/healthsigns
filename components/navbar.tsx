"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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
        "text-sm font-medium transition-colors relative group block px-4 py-2 md:px-0 md:py-0 md:inline-block",
        isActive ? "text-primary" : "text-foreground hover:text-primary"
      )}
      onClick={onClick}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
          isActive ? "w-full" : "w-0",
          "md:block hidden"
        )}
      />
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "RPM", href: "/rpm" },
    { name: "Proprietary AI", href: "/ai" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/30 opacity-100 backdrop-blur-xl shadow-sm border-b border-border/30"
          : "bg-transparent opacity-0"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary font-display">
              Health
            </span>

            <span className="text-2xl font-bold text-secondary font-display">
              Signs
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

            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button / Sheet Trigger */}
          <div className="flex items-center space-x-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-foreground focus:outline-none hover:text-primary"
                  aria-label={"Open menu"}
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background p-0"
              >
                <SheetHeader className="p-6 pb-2">
                  <SheetTitle className="text-left">
                    <Link href="/" className="flex items-center">
                      <span className="text-2xl font-bold text-primary font-display">
                        Health
                      </span>
                      <span className="text-2xl font-bold text-secondary font-display">
                        Signs
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 p-4 pt-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <NavLink
                        href={link.href}
                        isActive={pathname === link.href}
                      >
                        {link.name}
                      </NavLink>
                    </SheetClose>
                  ))}
                  <div className="pt-4">
                    <SheetClose asChild>
                      <Link href="/contact" className="block">
                        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full shadow-md transition-all duration-300 transform hover:shadow-lg">
                          Contact
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
