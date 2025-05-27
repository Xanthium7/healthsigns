"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const stickyElementRef = useRef<HTMLDivElement | null>(null); // Ref for the element to be pinned

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  useGSAP(
    () => {
      if (!targetRef.current || !stickyElementRef.current) return;

      const st = ScrollTrigger.create({
        trigger: targetRef.current,
        pin: stickyElementRef.current,
        start: "top top",
        end: () =>
          "+=" +
          (targetRef.current!.offsetHeight -
            stickyElementRef.current!.offsetHeight),
        pinType: "fixed", // Use transform for pinning
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });

      return () => {
        st.kill();
      };
    },
    { scope: targetRef, dependencies: [] }
  ); // Add dependencies if any props affect pinning logic

  return (
    <div ref={targetRef} className={cn("relative z-2 h-[200vh]  ", className)}>
      <div
        ref={stickyElementRef} // Assign ref to the element to be pinned
        className={
          "mx-auto flex h-[50%] max-w-4xl  items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span
          className={
            "flex flex-wrap p-5  font-extrabold text-secondary/30 md:p-8 text-5xl md:text-5xl lg:p-10 lg:text-6xl xl:text-7xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 my-1 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-secondary/85"}>
        {children}
      </motion.span>
    </span>
  );
};
