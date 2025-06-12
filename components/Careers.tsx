// import Lanyard from "@/CoolComponents/Lanyard/Lanyard";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Copy from "./Copy";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import Link from "next/link";

export default function Careers() {
  const MotionDiv = motion.div;
  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="min-h-[60vh] md:min-h-[80vh] mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start w-full">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Copy delay={0.05}>
              <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-extrabold mb-4 text-foreground/20 text-center md:text-left">
                HOW WE WORK
              </h1>
            </Copy>
          </div>
          <div className="w-full md:w-1/2 container flex flex-col gap-4 items-center md:items-start justify-between space-y-8 md:space-y-8 md:pl-8">
            {" "}
            <Copy delay={0.15}>
              <p className="text-muted-foreground text-lg sm:text-2xl font-jakarta text-center md:text-left">
                We <span className="font-bold">unify health records</span> from
                clinics, labs, hospitals and home care into{" "}
                <span className="font-bold">one secure platform</span>. Our{" "}
                <span className="font-bold">AI makes sense of it all</span>,
                spotting risks early and helping doctors deliver{" "}
                <span className="font-bold">smarter, personalized care</span>.
                From <span className="font-bold">onboarding to follow-ups</span>
                , we transform preventive care, making it smarter, simpler, and
                more effective across the{" "}
                <span className="font-bold">US, India, UAE, and Colombia</span>.
              </p>
            </Copy>
            <InteractiveHoverButton
              color="#205874"
              borderColor="#205874"
              padding="p-2 px-8"
              className="text-secondary self-center md:self-start"
            >
              <Link href="/about">Learn More</Link>
            </InteractiveHoverButton>
          </div>
        </div>
        {/* <Lanyard /> */}
      </div>
    </section>
  );
}
