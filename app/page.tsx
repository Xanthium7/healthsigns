"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Users,
  Activity,
  TrendingUp,
  DollarSign,
  Globe,
  Database,
  Star,
  CheckCircle,
  Check, // Add Check icon
} from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";

import { VideoText } from "@/components/magicui/video-text";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Aurora from "@/Backgrounds/Aurora/Aurora";
import Copy from "@/components/Copy";
import { TextReveal } from "@/components/magicui/text-reveal";
import SpotlightCard from "@/CoolComponents/SpotlightCard/SpotlightCard";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import FlowingMenu from "@/CoolComponents/FlowingMenu/FlowingMenu";
import Careers from "@/components/Careers";

// Animated components
const MotionDiv = motion.div;

const whyPartnerItems = [
  {
    icon: <Users className="h-10 w-10 text-primary" />, // Kept for potential future use or if FlowingMenu is adapted
    title: "Empower Your Patients",
    description:
      "Transform patients into active partners in their health journey. Our RPM fosters engagement, boosts adherence, and elevates outcomes.",
  },
  {
    icon: <Activity className="h-10 w-10 text-primary" />,
    title: "Stay Ahead of Health Risks",
    description:
      "Leverage continuous vital tracking for early issue detection. Our RPM keeps you one step ahead, ensuring timely interventions and proactive care.",
  },

  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Smart Savings, Smarter Care",
    description:
      "Slash unnecessary costs by minimizing in-person visits and readmissions. Deliver premium, efficient care without breaking the bank.",
  },

  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Unlock Actionable Intelligence",
    description:
      "Turn raw health data into powerful, actionable insights. Understand patient trends and treatment efficacy for superior decision-making.",
  },
];

const flowingMenuItems = whyPartnerItems.map((item, index) => ({
  link: "#", // Placeholder link
  text: item.title,
  image: `https://picsum.photos/600/400?random=${index + 1}`, // Placeholder image
}));

export default function Home() {
  // Animation controls
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Adjust padding to account for navbar */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-soft-glow opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <div className="flex flex-col ">
                <h1 className=" md:translate-y-10 translate-y-20   h-20 text-[#d82e2e] text-4xl md:text-5xl lg:text-6xl font-medium  tracking-tight">
                  Transforming
                </h1>
                <div className="relative h-40 w-full flex items-center justify-center">
                  <VideoText
                    fontSize={15}
                    loop={true}
                    fontWeight={"bold"}
                    className="mt-4"
                    playbackRate={1}
                    // src="https://cdn.pixabay.com/video/2025/03/17/265435_tiny.mp4"
                    src="https://cdn.pixabay.com/video/2023/11/19/189738-886596198_tiny.mp4"
                  >
                    HEALTHCARE
                  </VideoText>
                </div>
              </div>
              <Copy delay={0.5} animateOnScroll={false}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 font-jakarta">
                  Our AI-powered Remote Patient Management system ensures
                  real-time monitoring, that allows for early detection and
                  timely care, thus enhancing patient outcomes.
                </p>
              </Copy>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={"/contact"}>
                  <InteractiveHoverButton>
                    Partner With Us
                  </InteractiveHoverButton>
                </Link>
              </div>
            </MotionDiv>

            <AnimatePresence>
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-0 top-0 bottom-0 right-0 lg:block hidden h-[100vh] w-1/2 rounded-3xl overflow-hidden"
              >
                <Image
                  src="hero.png"
                  alt="AI-powered healthcare"
                  fill
                  className="object-cover"
                  priority
                />
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <StatCard
              value="98"
              unit="%"
              label="Patient Satisfaction"
              icon={<Star className="h-6 w-6" />}
              className="bg-gradient-to-br backdrop-blur-sm from-primary/5 to-background/20 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow duration-300"
            />
            <StatCard
              value="24"
              unit="HR"
              label="Continuous Monitoring"
              icon={<Activity className="h-6 w-6" />}
              className="bg-gradient-to-br backdrop-blur-sm from-primary/5 to-background/20 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow duration-300"
            />
            <StatCard
              value="85"
              unit="%"
              label="Early Detection Rate"
              icon={<CheckCircle className="h-6 w-6" />}
              className="bg-gradient-to-br z-10 backdrop-blur-sm from-primary/10 to-background/10 rounded-2xl border border-primary/20 hover:shadow-lg transition-shadow duration-300"
            />
          </MotionDiv>
        </div>
      </section>
      {/* Who Are we ? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Copy>
            <h2 className="mb-20 text-secondary/30 uppercase text-4xl md:text-9xl font-extrabold text-center lg:text-right tracking-tight">
              Who are we ?
            </h2>
          </Copy>

          {/* <Copy delay={0.2}>
            <p className="text-muted-foreground font-jakarta text-lg">
              Unlock the full potential of your healthcare services by
              partnering with HealthSigns. Our innovative solutions and
              collaborative approach can help you provide top-notch remote
              patient care.
            </p>
          </Copy> */}
        </div>{" "}
        <div className="w-full container h-[40vh] md:h-[40vh] lg:h-[50vh] relative lg:text-right text-center">
          <Copy delay={0.2}>
            <p className="text-muted-foreground font-jakarta text-lg md:text-2xl lg:text-4xl ">
              At HealthSigns, we pioneer the convergence of{" "}
              <span className="font-bold text-foreground">
                technology and healthcare
              </span>
              . Our mission:{" "}
              <span className="font-bold text-foreground">
                seamless, innovative, personalized patient management solutions
              </span>
              . As a forward-thinking{" "}
              <span className="font-bold text-foreground">
                healthtech brand
              </span>
              , we're revolutionizing access to{" "}
              <span className="font-bold text-foreground">
                world-class medical care
              </span>{" "}
              in India, the Middle East, and the US, making healthcare
              intuitive, effective, and human-centered.
            </p>
          </Copy>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Copy>
            <h2 className="mb-20 text-secondary/30 uppercase text-4xl md:text-7xl font-extrabold text-center lg:text-left tracking-tight">
              Why Partner with <br /> HealthSigns?
            </h2>
          </Copy>

          {/* <Copy delay={0.2}>
            <p className="text-muted-foreground font-jakarta text-lg">
              Unlock the full potential of your healthcare services by
              partnering with HealthSigns. Our innovative solutions and
              collaborative approach can help you provide top-notch remote
              patient care.
            </p>
          </Copy> */}
        </div>{" "}
        <div className="w-full h-[40vh] md:h-[40vh] lg:h-[50vh] relative">
          <FlowingMenu items={flowingMenuItems} />
        </div>
      </section>

      {/* About HealthSigns Section */}

      <TextReveal className="font-extrabold uppercase ">
        At HealthSigns, we're pioneering the future of healthcare with AI
      </TextReveal>

      {/*  Careers Section */}
      <Careers />

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <MotionDiv variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
                Flexible Plans for Every Need
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-jakarta">
                Our plans are designed to align with your organization's goals
                and scale, offering both standardized enterprise solutions and
                fully customizable options.
              </p>
            </MotionDiv>
          </MotionDiv>
          <div className="flex justify-center">
            <MotionDiv
              variants={fadeInUp}
              className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-primary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xl" // Added relative overflow-hidden
            >
              <div className="grid grid-cols-1 gap-8">
                {/* Enterprise Section */}
                <div>
                  <h3 className="relative z-10 text-3xl font-semibold mb-2 text-foreground text-center md:text-left">
                    ENTERPRISE & CUSTOM SOLUTIONS
                  </h3>
                  <p className="relative z-10 text-muted-foreground mb-6 font-jakarta text-sm text-center md:text-left">
                    Comprehensive RPM solutions for large-scale healthcare
                    systems, with options for full customization to meet
                    specific clinical and operational requirements.
                  </p>
                  <ul className="relative z-10 space-y-2 text-muted-foreground font-jakarta text-sm mb-6">
                    {[
                      "Dedicated Clinical Success Manager",
                      "HIPAA-Compliant Infrastructure",
                      "Customizable RPM Device Integration",
                      "Advanced Analytics & Reporting Suite",
                      "EHR/EMR Integration Support",
                      "Tailored Patient Onboarding Programs",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative z-10 mt-auto">
                    <InteractiveHoverButton
                      color="#205874"
                      borderColor="#205874"
                      padding="p-2 px-8"
                      className="text-secondary self-center md:self-start"
                    >
                      <Link href={"/contact"}>Contact Us</Link>
                    </InteractiveHoverButton>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-20 bg-[#3d2323] text-primary-foreground relative overflow-hidden">
        {/* Aurora as background */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Aurora
            colorStops={["#f50029", "#FF0037", "#FF0000"]}
            blend={1}
            amplitude={0.5}
            speed={1.5}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <Copy>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 font-display tracking-tight">
              Enhance patient outcomes without the <br /> stress of in-person
              monitoring.
            </h2>
          </Copy>
          <Link href={"/contact"}>
            <InteractiveHoverButton className="text-secondary self-center md:self-start">
              Partner With Us
            </InteractiveHoverButton>
          </Link>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/50 rounded-full blur-3xl opacity-30 z-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/50 rounded-full blur-3xl opacity-30 z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/50 rounded-full blur-3xl opacity-20 z-10"></div>
      </section>
    </div>
  );
}
