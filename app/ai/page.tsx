"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Keep if used, otherwise can be removed if InteractiveHoverButton is always used
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Database,
  LineChart,
  Bell,
  RefreshCw,
  Users,
} from "lucide-react";
import { BlurrySphere } from "@/components/ui/blurry-sphere";
import Copy from "@/components/Copy";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Aurora from "@/Backgrounds/Aurora/Aurora"; // For CTA background
import SpotlightCard from "@/CoolComponents/SpotlightCard/SpotlightCard";
import Image from "next/image"; // Ensure Image is imported

// Animated components
const MotionDiv = motion.div;

export default function AIPage() {
  // Animation controls
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Define animations (can be moved to a shared utils if used across many pages)
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
    <div className="pt-16 md:pt-24 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
      {/* Dotted pattern moved to the main parent div */}
      <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <Copy>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 text-primary/90 uppercase tracking-wider leading-tight">
                  AI-Powered
                  <br />
                  Health Insights
                </h1>
              </Copy>
              <Copy delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                  HealthSigns AI enhances monitoring, integrates data,
                  personalizes care, and offers proactive insights for better
                  health outcomes.
                </p>
              </Copy>
              <div className="flex justify-center lg:justify-start">
                <Link href="/contact#schedule-demo">
                  <InteractiveHoverButton className="w-full sm:w-auto">
                    Schedule a Demo
                  </InteractiveHoverButton>
                </Link>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-[300px] md:h-[400px] lg:h-[450px]"
            >
              {/* Optional: BlurrySphere as a background accent */}
              <div className="absolute inset-0 flex items-center justify-center top-20 opacity-50">
                <BlurrySphere
                  size={2.5}
                  colors={[
                    "hsl(var(--primary))",
                    "hsl(var(--primary)/0.7)",
                    "hsl(var(--primary)/0.5)",
                  ]}
                  className="pulse"
                  opacity={0.4}
                  animationDuration={15}
                />
              </div>
              <Image
                src="/health_insight.png"
                alt="AI Health Insights"
                height={700}
                width={700}
                className="object-contain z-10"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* How Our AI Works Section */}
      <section className="py-16 md:py-20 bg-background relative z-10">
        {/* Gradient overlay for soft top edge */}
        <div className="absolute bottom-0  bg-gradient-to-t from-primary/10 to-background w-full h-16"></div>
        <div className="absolute -top-12 sm:-top-16 md:-top-20 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-transparent via-[hsl(var(--background)_/_0.5)] to-background pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="order-1 lg:order-1" // Changed: heading is now order-1 (first) on mobile
            >
              <Copy>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-secondary/40 uppercase tracking-wider text-center lg:text-left">
                  How Our AI Works
                </h2>
              </Copy>
            </MotionDiv>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="order-2 lg:order-2" // Changed: description is now order-2 (second) on mobile
            >
              <Copy>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center lg:text-left">
                  At HealthSigns, our AI technology empowers patients and
                  healthcare providers with the tools and insights needed for
                  proactive, personalized care. Experience the future of
                  healthcare with our intelligent RPM solutions.
                </p>
              </Copy>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Intelligent Monitoring Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background/20 relative overflow-hidden z-10">
        {/* Gradient overlay for soft top edge - Simplified */}
        {/* <div className="absolute -top-12 sm:-top-16 md:-top-20 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-transparent to-[hsl(var(--primary)/0.05)] pointer-events-none z-0"></div> */}
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                  src="/innovative.png"
                  alt="Intelligent Monitoring Visualization"
                  fill
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div> */}
              </div>
            </MotionDiv>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Copy>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6 text-primary">
                  Intelligent Monitoring for Proactive Care
                </h2>
              </Copy>
              <Copy delay={0.1}>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                  Our proprietary AI technology is at the heart of our remote
                  patient monitoring services. Designed to enhance patient care
                  and streamline healthcare processes, our AI provides
                  intelligent insights and proactive health management.
                </p>
              </Copy>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Key AI Features Section */}
      <section className="py-16 md:py-20 bg-background relative z-10">
        {/* Gradient overlay for soft top edge */}
        <div className="absolute -top-12 sm:-top-16 md:-top-20 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-transparent via-[hsl(var(--background)_/_0.5)] to-background pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          >
            <Copy>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 text-primary uppercase">
                Key AI Features
              </h2>
            </Copy>
          </MotionDiv>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-x-3 xl:items-stretch"
          >
            {[
              {
                icon: (
                  <Database className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                ),
                title: "Comprehensive Data Integration",
                description:
                  "Seamlessly integrates with medical devices to collect vital health data like heart rate, blood pressure, and glucose levels.",
              },
              {
                icon: (
                  <Brain className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                ),
                title: "Clinical Decision Support",
                description:
                  "Provides real-time, evidence-based recommendations, identifies risks, suggests interventions, and guides treatment plans.",
              },
              {
                icon: (
                  <LineChart className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                ),
                title: "Real-Time Health Insights",
                description:
                  "Analyzes integrated data to offer immediate insights into patient health status and trends for timely actions.",
              },
              {
                icon: (
                  <Bell className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                ),
                title: "Personalized Alerts",
                description:
                  "Generates personalized alerts for potential issues, enabling prompt intervention by healthcare providers.",
              },
              {
                icon: (
                  <RefreshCw className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                ),
                title: "Continuous Learning",
                description:
                  "Our AI continuously learns from processed data, improving accuracy and predictive capabilities over time.",
              },
              {
                icon: (
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
                ),
                title: "Enhanced Patient Engagement",
                description:
                  "Fosters patient engagement with easy-to-understand health reports and actionable recommendations.",
              },
            ].map((item, index) => (
              <MotionDiv key={`card-${item.title}`} variants={fadeInUp}>
                <SpotlightCard
                  className="h-full bg-gray-100 border border-secondary/20 hover:shadow-secondary/10 shadow-lg transition-shadow duration-300 rounded-xl p-6"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="flex justify-center items-center mb-4 bg-secondary/10 p-3 rounded-full w-16 h-16 flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold uppercase mb-2 text-secondary tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Predictive Analytics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-background/20 relative overflow-hidden z-10">
        {/* Gradient overlay for soft top edge - Simplified */}
        <div className="absolute -top-12 sm:-top-16 md:-top-20 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-transparent to-[hsl(var(--primary)/0.05)] pointer-events-none z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <MotionDiv
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Copy>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6 text-primary">
                  Predictive Health Insights
                </h2>
              </Copy>
              <Copy delay={0.1}>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
                  Our AI predicts potential health risks by identifying patterns
                  in collected data, allowing providers to anticipate and
                  address concerns before they become critical.
                </p>
              </Copy>
              <Copy delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                  By analyzing historical and current metrics, our AI detects
                  subtle changes indicative of health issues, enabling early
                  intervention.
                </p>
              </Copy>
            </MotionDiv>
            <MotionDiv
              className="order-1 lg:order-2 relative h-[300px] md:h-[400px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              {/* Replaced BlurrySphere with Image */}
              <Image
                src="/insight.png"
                alt="Predictive Health Insights"
                width={700}
                height={700}
                className="object-contain z-10 -translate-y-24" // Use object-contain to ensure the whole image is visible
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#3d2323] text-primary-foreground relative overflow-hidden z-10">
        {/* Gradient overlay for soft top edge */}
        <div className="absolute -top-12 sm:-top-16 md:-top-20 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-transparent via-[rgba(61,35,35,0.3)] to-[#3d2323] pointer-events-none z-0"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#f50029", "#FF0037", "#FF0000"]} // Example: Primary color theme
            blend={1}
            amplitude={0.5}
            speed={1.5}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none z-0"></div>{" "}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <Copy>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6 font-display tracking-tight">
              Unlock the Power of AI in Healthcare
            </h2>
          </Copy>
          <Copy delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Discover how HealthSigns' AI-driven solutions can revolutionize
              patient care and improve outcomes. Contact us for a personalized
              consultation.
            </p>
          </Copy>
          <div className="flex justify-center">
            <Link href={"/contact"}>
              <InteractiveHoverButton className="text-secondary w-full sm:w-auto">
                Request a Consultation
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
