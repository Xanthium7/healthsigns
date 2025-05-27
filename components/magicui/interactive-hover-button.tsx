import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  padding?: string;
  borderColor?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, color, padding, borderColor, ...props }, ref) => {
  const buttonStyles = {
    "--hover-bg-color": color || "hsl(var(--primary))",
    "--hover-text-color": color
      ? "hsl(var(--primary-foreground))"
      : "hsl(var(--primary-foreground))",
    "--border-color": borderColor || "hsl(var(--primary)/0.4)", // Added CSS variable for border color
  } as React.CSSProperties;

  return (
    <button
      ref={ref}
      style={buttonStyles}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background text-center font-medium text-foreground transition-colors duration-300",
        "border-[var(--border-color)]", // Apply border color using CSS variable
        padding || "p-4 px-8", // Default padding if not provided
        className,
        "hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)]"
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-150",
            color ? "bg-[var(--hover-bg-color)]" : "bg-primary" // Dot color matches hover or primary
          )}
        ></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className={cn(
          "absolute inset-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
          color ? "text-[var(--hover-text-color)]" : "text-primary-foreground"
        )}
      >
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
