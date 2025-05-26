// import Lanyard from "@/CoolComponents/Lanyard/Lanyard";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Copy from "./Copy";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export default function Careers() {
  const MotionDiv = motion.div;
  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="min-h-[60vh] md:min-h-[80vh] mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start w-full">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold mb-4 text-foreground/20 text-center md:text-left">
              HOW WE WORK
            </h1>
          </div>
          <div className="w-full md:w-1/2 container flex flex-col gap-4 items-center md:items-start justify-around space-y-6 md:space-y-0 md:pl-8">
            <Copy delay={0.1}>
              <p className="text-muted-foreground text-sm sm:text-base font-jakarta text-center md:text-left">
                Our <span className="font-bold">innovative model</span>{" "}
                strategically partners with{" "}
                <span className="font-bold">healthcare providers</span> in
                India, the Middle East, and the US. By tapping into their
                existing customer bases, we integrate advanced{" "}
                <span className="font-bold">
                  remote patient monitoring services
                </span>
                to significantly{" "}
                <span className="font-bold">enhance care delivery</span> and{" "}
                <span className="font-bold">expand reach</span>. This
                collaborative approach ensures patients receive{" "}
                <span className="font-bold">consistent, quality care</span>{" "}
                wherever they are, fostering better health outcomes and
                accessibility. We are dedicated to transforming healthcare
                through technology and partnership.
              </p>
            </Copy>
            <InteractiveHoverButton
              color="#205874"
              borderColor="#205874"
              padding="p-2 px-6"
              className="text-secondary self-center md:self-start"
            >
              Explore Careers
            </InteractiveHoverButton>
          </div>
        </div>
        {/* <Lanyard /> */}
      </div>
    </section>
  );
}
