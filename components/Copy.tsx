"use client";
import React, { useRef } from "react";
import gsap from "gsap";

import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Copy({ children, animateOnScroll = true, delay = 0 }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  return React.cloneElement(children, { ref: containerRef });
}

export default Copy;
