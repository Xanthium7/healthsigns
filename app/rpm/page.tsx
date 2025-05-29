"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Smartphone,
  BarChart,
  UserCheck,
  Heart,
  Dot,
} from "lucide-react";

import Copy from "@/components/Copy";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import Aurora from "@/Backgrounds/Aurora/Aurora";
import SpotlightCard from "@/CoolComponents/SpotlightCard/SpotlightCard";

// Animated components
const MotionDiv = motion.div;

export default function RPMPage() {
  // Animation controls
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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
        staggerChildren: 0.1, // Adjusted stagger for more elements
      },
    },
  };

  const rpmSteps = [
    {
      icon: <Activity className="h-10 w-10 text-secondary/80" />,
      title: "Data Collection",
      description:
        "Patients use connected medical devices to record vital signs and health metrics from home.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-secondary/80" />,
      title: "Secure Transmission",
      description:
        "Data is securely transmitted in real-time to the HealthSigns platform for provider access.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-secondary/80" />,
      title: "Continous Monitoring",
      description:
        "Healthcare teams monitor data, detect early warnings, and provide timely interventions.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-secondary/80" />,
      title: "Personalized Care",
      description:
        "Insights from data inform adjustments to treatment plans and personalized patient advice.",
    },
    {
      icon: <Heart className="h-10 w-10 text-secondary/80" />,
      title: "Patient Engagement",
      description:
        "RPM empowers patients in their health journey, improving adherence and self-management.",
    },
  ];

  return (
    <div className="pt-16 md:pt-24 bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Copy>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-secondary/80 uppercase tracking-wider">
                  Remote Patient
                  <br />
                  Monitoring
                </h1>
              </Copy>
              <Copy delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  HealthSigns empowers patients and providers with continuous,
                  real-time health insights for proactive and personalized care,
                  anywhere, anytime.
                </p>
              </Copy>
              <InteractiveHoverButton>
                <Link href="#benifitsofrpm">Explore Our RPM Solutions</Link>
              </InteractiveHoverButton>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden ">
                <Image
                  src="/remote_patient.png"
                  alt="Remote Patient Monitoring Visualization"
                  fill
                  className="object-cover"
                  priority
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div> */}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* What is RPM Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Copy>
                <h2 className="text-5xl md:text-7xl font-extrabold text-secondary/30 uppercase tracking-wider">
                  What is RPM?
                </h2>
              </Copy>
            </MotionDiv>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Copy>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Remote Patient Monitoring (RPM) is an innovative healthcare
                  delivery method that utilizes technology to monitor patients'
                  health status outside of traditional clinical settings.
                  HealthSigns leverages cutting-edge RPM solutions to collect
                  vital health data in real-time, enabling continuous insights
                  and proactive interventions for improved patient outcomes.
                </p>
              </Copy>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* How Does RPM Work Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-right max-w-3xl ml-auto mb-12 md:mb-16"
          >
            <Copy>
              <h2 className="text-3xl md:text-5xl uppercase font-medium mb-6 text-right text-primary">
                How RPM Works
              </h2>
            </Copy>
          </MotionDiv>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 
                       xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] 
                       xl:gap-x-3 xl:items-stretch"
          >
            {rpmSteps.flatMap((item, index) => {
              const cardElement = (
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
              );

              if (index < rpmSteps.length - 1) {
                const arrowElement = (
                  <MotionDiv
                    key={`arrow-${item.title}`}
                    variants={fadeInUp}
                    className="hidden xl:flex items-center justify-center"
                  >
                    <svg
                      width="32"
                      height="24"
                      viewBox="0 0 32 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400 opacity-70"
                    >
                      <path
                        d="M2 12H30"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 5L30 12L22 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </MotionDiv>
                );
                return [cardElement, arrowElement];
              }
              return [cardElement];
            })}
          </MotionDiv>
        </div>
      </section>

      {/* Benefits of RPM Section */}
      <section id="benifitsofrpm" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Changed from a single MotionDiv to a grid structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
            <div></div>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Copy>
                <h2 className="text-5xl md:text-7xl font-extrabold text-right text-secondary/30 uppercase tracking-wider">
                  Key Benefits
                  <br />
                  of RPM
                </h2>
              </Copy>
            </MotionDiv>
          </div>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              {
                title: "Improved Health Outcomes",
                description:
                  "Early detection and timely interventions lead to better management of chronic conditions and overall health.",
              },
              {
                title: "Enhanced Patient Convenience",
                description:
                  "Receive quality care from home, reducing travel and wait times for appointments.",
              },
              {
                title: "Increased Provider Efficiency",
                description:
                  "Streamlined data access and automated alerts allow providers to manage more patients effectively.",
              },
              {
                title: "Cost-Effective Care",
                description:
                  "Reduces hospital readmissions and emergency visits, lowering overall healthcare costs.",
              },
            ].map((item, index) => (
              <MotionDiv key={index} variants={fadeInUp}>
                <SpotlightCard
                  className="h-full bg-gray-100 border border-secondary/20 hover:shadow-secondary/10 shadow-lg transition-shadow duration-300 rounded-xl p-6 md:p-8"
                  spotlightColor="rgba(0, 229, 255, 0.2)" // Fuchsia/purple tint for spotlight
                >
                  <h3 className="text-xl  font-bold uppercase mb-3 text-secondary">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </SpotlightCard>
              </MotionDiv>
            ))}
          </MotionDiv>
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
              Ready to Transform Healthcare with RPM?
            </h2>
          </Copy>
          <Copy delay={0.2}>
            <p className="text-lg  md:text-xl text-gray-300 mb-8">
              Discover how HealthSigns' Remote Patient Monitoring <br />
              can elevate your practice or facility. Schedule a consultation
              with our experts today.
            </p>
          </Copy>
          <Link href={"/contact"}>
            <InteractiveHoverButton className="text-secondary self-center md:self-start">
              Schedule a Consultation
            </InteractiveHoverButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
