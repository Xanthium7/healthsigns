"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

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
    <div className="flex  relative items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 h-full flex justify-center container flex-col text-center ">
        <h1 className="text-8xl text-left font-bold mb-4">
          Career <br />
          Opportunities
        </h1>
        <p className="text-lg text-left text-gray-700">
          Join our team and help shape the future of healthcare with AI-powered
          solutions.
        </p>
        <p className="mt-2 text-left text-gray-600">
          We are always looking for talented individuals to join us in our
          mission.
        </p>
      </div>
      <div className="z-10 w-1/2 h-full">
        {shouldRenderLanyard ? (
          <LanyardWrapper position={[0, 0, 15]} gravity={[0, -40, 0]} />
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-pulse text-gray-500 mb-4">
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
