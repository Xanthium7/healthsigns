"use client";

import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

interface CustomMarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Animation duration in seconds
   * @default 40
   */
  duration?: number;
  /**
   * Gap between repeated items
   * @default "1rem"
   */
  gap?: string;
}

export function CustomMarquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 50,
  gap = "1rem",
  ...props
}: CustomMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    // Set CSS custom properties for animation
    containerRef.current.style.setProperty(
      "--marquee-duration",
      `${duration}s`
    );
    containerRef.current.style.setProperty("--marquee-gap", gap);
  }, [duration, gap]);
  return (
    <div
      ref={containerRef}
      {...props}
      className={cn(
        "group relative flex overflow-hidden",
        vertical ? "flex-col h-full" : "flex-row w-full",
        className
      )}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex shrink-0",
          vertical ? "flex-col" : "flex-row",
          // Animation classes based on direction and reverse
          !vertical && !reverse && "animate-marquee-scroll",
          !vertical && reverse && "animate-marquee-scroll-reverse",
          vertical && !reverse && "animate-marquee-scroll-vertical",
          vertical && reverse && "animate-marquee-scroll-vertical-reverse",
          pauseOnHover && "group-hover:animate-marquee-paused"
        )}
        style={{
          gap: gap,
          animationDuration: `${duration}s`,
          // Start from center for both directions
          transform: reverse ? "translateX(0%)" : "translateX(0%)",
        }}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex shrink-0",
                vertical ? "flex-col" : "flex-row"
              )}
              style={{ gap: gap }}
            >
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}
