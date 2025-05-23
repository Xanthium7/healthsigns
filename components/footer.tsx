import Link from "next/link";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-8 relative overflow-hidden">
      {/* Add subtle design elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-background to-transparent opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              HealthSigns
            </h3>
            <p className="text-muted-foreground mb-4">
              Stay connected with HealthSigns on social media for the latest
              updates and health tips.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-primary hover:text-primary/80 transition-colors transform hover:scale-110 inline-block"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span>Home</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-primary ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span>About Us</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-primary ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rpm"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span>RPM</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-primary ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span>Proprietary AI</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-primary ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Get Connected
            </h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground flex items-center">
                <div className="w-1 h-1 bg-primary/70 rounded-full mr-2"></div>
                +1 9732706212
              </li>
              <li className="text-muted-foreground flex items-center">
                <div className="w-1 h-1 bg-primary/70 rounded-full mr-2"></div>
                info@healthsigns.ai
              </li>
              <li className="text-muted-foreground flex items-center">
                <div className="w-1 h-1 bg-primary/70 rounded-full mr-2"></div>
                30 N Gould St # 29714 Sheridan, WY 82801
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} HealthSigns | All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
