import Link from "next/link";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 relative overflow-hidden">
      {/* Add subtle design elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent dark:from-gray-800 dark:to-transparent opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              HealthSigns
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay connected with HealthSigns on social media for the latest
              updates and health tips.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors transform hover:scale-110 inline-block"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors inline-flex items-center group"
                >
                  <span>Home</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-purple-500 ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors inline-flex items-center group"
                >
                  <span>About Us</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-purple-500 ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rpm"
                  className="text-gray-600 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors inline-flex items-center group"
                >
                  <span>RPM</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-purple-500 ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className="text-gray-600 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors inline-flex items-center group"
                >
                  <span>Proprietary AI</span>
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-purple-500 ml-0 group-hover:ml-2 transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Get Connected
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-300 flex items-center">
                <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                +1 9732706212
              </li>
              <li className="text-gray-600 dark:text-gray-300 flex items-center">
                <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                info@healthsigns.ai
              </li>
              <li className="text-gray-600 dark:text-gray-300 flex items-center">
                <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                30 N Gould St # 29714 Sheridan, WY 82801
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-300">
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
