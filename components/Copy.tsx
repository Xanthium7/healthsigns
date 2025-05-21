"use client";
import React, { useRef } from "react";
import gsap from "gsap";

import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: React.ReactElement | React.ReactElement[];
  animateOnScroll?: boolean;
  delay?: number;
}

function Copy({ children, animateOnScroll = true, delay = 0 }: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const elemetRef = useRef<HTMLElement[]>([]); // store refrence to all the text elements we wish to animate
  const splitRef = useRef<SplitText[]>([]); // stores all the split text instances
  const linesRef = useRef<HTMLElement[]>([]); // stores all the lines instances that split Text Creates

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elemetRef.current = [];
      linesRef.current = [];

      // THis logic automatically figures out if u oass singlwe text multiple lines of text or so
      let elements: HTMLElement[] = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element: HTMLElement) => {
        elemetRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        linesRef.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(linesRef.current, {
        y: "100%",
      });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(linesRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 20%",
          },
        });
      } else {
        gsap.to(linesRef.current, {
          ...animationProps,
        });
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{ ref: React.Ref<HTMLDivElement> }>,
      {
        ref: containerRef,
      }
    );
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}

export default Copy;
