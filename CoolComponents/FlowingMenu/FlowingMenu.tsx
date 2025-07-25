/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  scrolltext: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden ">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  link,
  text,
  image,
  scrolltext,
}) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return; // Restart marquee animation with deployment-safe approach
    const scrollingMarqueeElement = marqueeInnerRef.current
      ?.children[0] as HTMLElement;
    if (scrollingMarqueeElement) {
      scrollingMarqueeElement.classList.remove("animate-flowing-marquee");
      // Force reflow to restart animation
      void scrollingMarqueeElement.offsetWidth;
      scrollingMarqueeElement.classList.add("animate-flowing-marquee");
    }

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%" },
      0 // Start second animation at the same time
    );
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-primary-foreground uppercase font-medium text-base sm:text-lg md:text-xl leading-none p-1 sm:p-2 mx-1 sm:mx-2">
          {scrolltext}
        </span>
        {/* <div
          className="w-12 h-8 sm:w-16 sm:h-10 md:w-24 md:h-16 mx-1 sm:mx-2 my-auto rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          // style={{ background: `transparent` }}
        /> */}
        <div
          className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 mx-8 sm:mx-2 my-auto rounded-md bg-cover bg-center"
          // style={{ backgroundImage: `url(${image})` }}
          style={{ background: `#d6d6d6` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center border-b border-[#c9c9c9]"
      ref={itemRef}
    >
      <div
        className="flex items-center justify-center h-full relative  uppercase no-underline font-semibold text-foreground text-xl sm:text-xl md:text-2xl lg:text-3xl hover:text-transparent focus:text-transparent focus-visible:text-transparent transition-colors duration-300 p-2 sm:p-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-[#3d5168] translate-y-[101%]"
        ref={marqueeRef}
      >
        <div
          className="h-full w-[200%] flex translate-y-[101%]"
          ref={marqueeInnerRef}
        >
          {" "}
          <div className="flex items-center relative h-full will-change-transform animate-flowing-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
