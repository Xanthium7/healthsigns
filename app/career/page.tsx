"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Copy from "@/components/Copy";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";

// Create a more robust dynamic import with better error handling
const LanyardWrapper = dynamic(
  () =>
    import("@/CoolComponents/Lanyard/LanyardWrapper").catch(() => {
      // Return a fallback component if import fails
      return {
        default: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-pulse text-gray-500 mb-4">
                3D Animation Loading...
              </div>
              <div className="text-sm text-gray-400">
                Please wait while we load the interactive content
              </div>
            </div>
          </div>
        ),
      };
    }),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    ),
  }
);

export default function Career() {
  const [shouldRenderLanyard, setShouldRenderLanyard] = useState(false);

  useEffect(() => {
    // Delay the rendering of the 3D component to avoid hydration issues
    const timer = setTimeout(() => {
      setShouldRenderLanyard(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row relative items-center justify-center min-h-screen bg-background px-4 lg:px-0">
      <div className="w-full lg:w-1/2 h-full flex justify-center container flex-col text-center lg:text-left py-8 lg:py-0">
        <Copy delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary/80 text-center lg:text-left font-extrabold mb-4 lg:mb-6 uppercase leading-tight">
            <span className="lg:hidden">Career Opportunities</span>
            <span className="hidden lg:block">
              Career
              <br />
              Opportunities
            </span>
          </h1>
        </Copy>
        <Copy delay={0.1}>
          <p className="text-base sm:text-lg lg:text-lg text-center lg:text-left text-secondary mb-3 lg:mb-4 px-2 lg:px-0 leading-relaxed">
            Joining HealthSigns offers a unique opportunity to be at the
            forefront of healthcare innovation, where your work directly
            contributes to the betterment of society.
          </p>
          <p className="text-sm sm:text-base lg:text-base text-center lg:text-left text-secondary/80 mb-6 lg:mb-3 px-2 lg:px-0 leading-relaxed">
            Here, you'll explore a dynamic career in AI, developing cutting-edge
            solutions that transform patient care globally. Our strategic and
            experienced team fosters a collaborative environment, encouraging
            professional growth and the pursuit of excellence. Be a part of a
            mission-driven organization that values your expertise and is
            dedicated to making a meaningful impact in the world of health-tech.
          </p>
        </Copy>
        <div className="flex justify-center lg:justify-start mt-4 lg:mt-6">
          <InteractiveHoverButton color="#256789" borderColor="#1d4f6b">
            <Link
              href={"/contact"}
              className="text-base sm:text-lg lg:text-base"
            >
              Explore Opportunities
            </Link>
          </InteractiveHoverButton>
        </div>
      </div>

      {/* Hide Lanyard on mobile screens */}
      <div className="hidden lg:block z-10 w-1/2 h-full">
        {shouldRenderLanyard ? (
          <LanyardWrapper position={[0, 0, 15]} gravity={[0, -40, 0]} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="animate-pulse text-gray-500 mb-4 text-base">
                Initializing 3D Environment...
              </div>
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
