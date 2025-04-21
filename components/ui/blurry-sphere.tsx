import React from "react";

interface BlurrySphereProps {
  size?: number;
  colors?: string[];
  className?: string;
  opacity?: number;
  animationDuration?: number;
}

export function BlurrySphere({
  size = 1,
  colors = ["#8b5cf6"],
  className = "",
  opacity = 0.7,
  animationDuration = 8,
}: BlurrySphereProps) {
  // Generate a unique ID for the animation
  const animationId = React.useId().replace(/:/g, "");

  // Create the keyframe styles for color transition
  const generateKeyframes = () => {
    if (colors.length <= 1) return ``;

    const step = 100 / colors.length;
    let keyframes = `
      @keyframes gradient-${animationId} {
        0% { background-color: ${colors[0]}; }
    `;

    for (let i = 1; i < colors.length; i++) {
      keyframes += `
        ${step * i}% { background-color: ${colors[i]}; }
      `;
    }

    keyframes += `
        100% { background-color: ${colors[0]}; }
      }
    `;
    return keyframes;
  };

  const animationStyle =
    colors.length > 1
      ? {
          animation: `gradient-${animationId} ${animationDuration}s infinite ease-in-out alternate`,
        }
      : { backgroundColor: colors[0] };

  return (
    <>
      <style>{generateKeyframes()}</style>
      <div
        className={`relative ${className}`}
        style={{
          width: `${size * 100}px`,
          height: `${size * 100}px`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            ...animationStyle,
            opacity: opacity,
          }}
        />
        <div
          className="absolute inset-2 rounded-full blur-2xl"
          style={{
            ...animationStyle,
            opacity: opacity * 1.2,
            animationDelay: "-6s",
          }}
        />
        <div
          className="absolute inset-4 rounded-full blur-xl"
          style={{
            ...animationStyle,
            opacity: opacity * 1.4,
            animationDelay: "-8s",
          }}
        />
      </div>
    </>
  );
}
