// import Lanyard from "@/CoolComponents/Lanyard/Lanyard";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  const MotionDiv = motion.div;
  return (
    <section className="py-20 bg-background">
      <div className=" h-[80vh]   mx-auto px-4 flex flex-col items-center">
        <div>
          <h3 className="text-2xl font-medium mb-4 text-foreground">Careers</h3>
          <p className="text-muted-foreground mb-6 font-jakarta">
            Joining HealthSigns offers a unique opportunity to be at the
            forefront of healthcare innovation, where your work directly
            contributes to the betterment of society.
          </p>
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 rounded-full transform transition-transform hover:scale-105"
          >
            Explore Careers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        {/* <Lanyard /> */}
      </div>
    </section>
  );
}
