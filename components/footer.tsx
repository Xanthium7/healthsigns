import Link from "next/link";
import { Linkedin, ArrowRight, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 md:pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top section: CTA, Logo, Links */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] lg:grid-cols-[2fr_1.5fr_1.5fr] gap-y-8 md:gap-y-12 gap-x-8 pb-8 md:pb-12 mb-8 border-b border-background/10">
          {/* Column 1: CTA */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-lg lg:text-xl font-normal mb-6 leading-relaxed text-background/90">
              Elevate your practice with HealthSigns and experience the
              difference.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary hover:text-primary/80 group text-lg font-medium self-center md:self-start"
            >
              Book a call
              <span className="ml-2 w-16 h-16 border border-primary/50 rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <ArrowRight className="w-6 h-6 -rotate-45 text-primary" />
              </span>
            </Link>
          </div>

          {/* Wrapper for Logo and "Let's Work Together" for mobile layout */}
          {/* On md+ screens, md:contents makes its children direct grid items of the parent */}
          <div className="grid grid-cols-2 gap-x-4 md:contents">
            {/* Column 2: Logo */}
            <div className="relative flex flex-col items-center justify-center text-center md:border-l md:border-r border-background/10 px-4 md:px-8 py-4 md:py-8">
              {/* Logo Text */}
              <h1 className="flex gap-1 md:block relative z-10  md:gap-1 text-4xl md:text-5xl lg:text-6xl font-semibold leading-none">
                <span className="text-primary block md:-translate-x-10">
                  Health
                </span>
                <span className="text-background block md:mt-1 md:translate-x-10">
                  Signs
                </span>
              </h1>
            </div>

            {/* Column 3: "Let's Work Together" */}
            <div className="flex flex-col justify-center items-center text-center md:items-stretch gap-1 md:gap-2">
              <span className="text-2xl md:text-4xl md:text-left font-light text-background/80 md:px-12">
                Let&apos;s Work
              </span>
              <span className="text-3xl md:text-5xl md:text-right font-semibold text-background">
                Together
              </span>
            </div>
          </div>
        </div>

        {/* Bottom section: Follow Us & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-8 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-xs font-medium mb-3 uppercase tracking-wider text-background/60">
              Follow us
            </h3>
            <div className="flex space-x-3 justify-center md:justify-start">
              <Link
                href="https://linkedin.com"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center text-background/70 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center text-background/70 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center text-background/70 hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </Link>
              {/* Add other social icons here similarly */}
            </div>
          </div>
          <p className="text-xs text-background/50 text-center md:text-right">
            Copyright © {new Date().getFullYear()} HealthSigns. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
