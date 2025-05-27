"use client";
import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Add error boundary to catch any rendering errors
interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("Lanyard Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse text-gray-500">
              Loading 3D animation...
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const LanyardComponent = dynamic(() => import("./Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  ),
});

interface LanyardWrapperProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  // Responsive positioning props
  offsetX?: number; // Horizontal offset for positioning
  offsetY?: number; // Vertical offset for positioning
  mobileOffsetX?: number; // Mobile-specific horizontal offset
  mobileOffsetY?: number; // Mobile-specific vertical offset
  tabletOffsetX?: number; // Tablet-specific horizontal offset
  tabletOffsetY?: number; // Tablet-specific vertical offset
  desktopOffsetX?: number; // Desktop-specific horizontal offset
  desktopOffsetY?: number; // Desktop-specific vertical offset
  // Scale adjustments
  scale?: number; // Overall scale
  mobileScale?: number; // Mobile scale
  tabletScale?: number; // Tablet scale
  desktopScale?: number; // Desktop scale
}

export default function LanyardWrapper(props: LanyardWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    setIsClient(true);
    // Add a small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Detect screen size for responsive positioning
  useEffect(() => {
    if (!isClient) return;

    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [isClient]);

  // Calculate responsive offsets and scale
  const getResponsiveValues = () => {
    const {
      offsetX = 0,
      offsetY = 0,
      mobileOffsetX,
      mobileOffsetY,
      tabletOffsetX,
      tabletOffsetY,
      desktopOffsetX,
      desktopOffsetY,
      scale = 1,
      mobileScale,
      tabletScale,
      desktopScale,
      position = [0, 0, 30],
    } = props;

    let finalOffsetX = offsetX;
    let finalOffsetY = offsetY;
    let finalScale = scale;

    // Apply device-specific overrides
    switch (screenSize) {
      case "mobile":
        finalOffsetX = mobileOffsetX ?? offsetX;
        finalOffsetY = mobileOffsetY ?? offsetY;
        finalScale = mobileScale ?? scale;
        break;
      case "tablet":
        finalOffsetX = tabletOffsetX ?? offsetX;
        finalOffsetY = tabletOffsetY ?? offsetY;
        finalScale = tabletScale ?? scale;
        break;
      case "desktop":
        finalOffsetX = desktopOffsetX ?? offsetX;
        finalOffsetY = desktopOffsetY ?? offsetY;
        finalScale = desktopScale ?? scale;
        break;
    }

    // Apply offsets to position
    const adjustedPosition: [number, number, number] = [
      position[0] + finalOffsetX,
      position[1] + finalOffsetY,
      position[2],
    ];

    return { adjustedPosition, finalScale };
  };

  if (!isClient || !isMounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const { adjustedPosition, finalScale } = getResponsiveValues();
  return (
    <div
      className="relative w-full h-full transition-transform duration-300 ease-in-out"
      style={{
        transform: `scale(${finalScale})`,
        transformOrigin: "center",
      }}
    >
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="animate-pulse text-gray-500">
                Loading 3D animation...
              </div>
            </div>
          }
        >
          <LanyardComponent {...props} position={adjustedPosition} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
