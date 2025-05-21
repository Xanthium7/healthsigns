"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Globe,
  Users,
  Puzzle,
  Heart,
  Link2,
} from "lucide-react";
import { BlurrySphere } from "@/components/ui/blurry-sphere";
import Copy from "@/components/Copy";

// Animated components
const MotionDiv = motion.div;

export default function AboutPage() {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <Copy>
              <h1 className="text-4xl md:text-5xl h-20 font-medium mb-6 text-purple-500">
                About HealthSigns
              </h1>
            </Copy>
            <Copy delay={0.5} animateOnScroll={false}>
              <p className="text-lg md:text-xl text-gray-700  mb-8 leading-relaxed">
                At HealthSigns, we bridge the gap between technology and
                healthcare to deliver seamless, innovative, and personalized
                patient management solutions. As a pioneering health-tech brand,
                we are dedicated to transforming the way patients in India, the
                Middle East, and the US access and experience medical care.
              </p>
            </Copy>
          </MotionDiv>

          <div className="absolute -bottom-10 -right-10 z-10">
            <BlurrySphere
              size={1.2}
              colors={["#8b5cf6", "#f375b4", "#6366f1"]}
              className="floating"
              opacity={0.6}
              animationDuration={10}
            />
          </div>
          <div className="absolute top-1/3 left-0 z-10 transform -translate-x-1/2">
            <BlurrySphere
              size={0.8}
              colors={["#a78bfa", "#9f7df0", "#d8b4fe"]}
              className="floating-delay-1"
              opacity={0.5}
              animationDuration={8}
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="What We Do"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-5 right-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30"></div>
            </MotionDiv>
            <MotionDiv initial="hidden" animate="visible" variants={fadeInUp}>
              <Copy animateOnScroll={false}>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-purple-500">
                  What We Do
                </h2>
              </Copy>

              <Copy delay={0.2} animateOnScroll={false}>
                <p className="text-lg text-gray-700  mb-6">
                  HealthSigns offers a suite of advanced healthcare solutions
                  designed to enhance patient care and provider efficiency. Our
                  core offering includes Remote Patient Management, enabling
                  continuous monitoring and care beyond traditional clinical
                  settings.
                  <br /> We are also developing a clinical decision support
                  system that provides healthcare professionals with real-time,
                  evidence-based insights. By seamlessly integrating with
                  existing healthcare infrastructures, we ensure that patients
                  receive timely, personalized care while supporting providers
                  in making informed clinical decisions.
                </p>
              </Copy>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <Copy>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-purple-500">
                  How We Work
                </h2>
              </Copy>
              <Copy delay={0.2}>
                <p className="text-lg text-gray-700  mb-6">
                  Our unique business model allows us to partner with
                  established healthcare providers in India, the Middle East,
                  and the US. By leveraging our partners' existing customer
                  bases, we seamlessly integrate our remote patient monitoring
                  services, enhancing their capabilities and extending their
                  reach.
                </p>
              </Copy>
              <Copy delay={0.3}>
                <p className="text-lg text-gray-700 ">
                  This collaborative approach ensures that patients receive
                  consistent, high-quality care, regardless of their location.
                </p>
              </Copy>
            </MotionDiv>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="How We Work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-5 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-purple-500">
                Our Technology
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-lg text-gray-700 ">
                HealthSigns utilizes advanced AI technology to continuously
                monitor patient data, identifying early signs of potential
                health issues. Our platform provides healthcare providers with
                actionable insights, enabling proactive intervention and
                personalized treatment plans.
              </p>
            </Copy>
          </MotionDiv>

          <div className="relative">
            <div className="absolute top-0 left-1/2 w-1 h-full bg-purple-200 dark:bg-purple-700/50 transform -translate-x-1/2 z-0 rounded-full"></div>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="relative z-10"
            >
              {[
                {
                  title: "Data Collection",
                  description:
                    "Our system collects vital health data from various devices and wearables in real-time.",
                },
                {
                  title: "AI Analysis",
                  description:
                    "Advanced algorithms analyze the data to identify patterns and potential health concerns.",
                },
                {
                  title: "Actionable Insights",
                  description:
                    "Healthcare providers receive clear, actionable insights to make informed decisions.",
                },
                {
                  title: "Personalized Care",
                  description:
                    "Patients receive personalized care plans based on their unique health data.",
                },
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-start mb-16 ${
                    index % 2 === 0
                      ? "justify-end md:pl-28"
                      : "justify-start md:pr-28"
                  }`}
                >
                  <div
                    className={`relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-purple-200/60 dark:border-purple-700/60 p-8 rounded-2xl shadow-xl max-w-md ${
                      index % 2 === 0 ? "md:mr-[12%]" : "md:ml-[12%]"
                    }`}
                  >
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500 border-[3px] border-white dark:border-gray-900 z-20"
                      style={{ [index % 2 === 0 ? "left" : "right"]: "-10px" }}
                    ></div>
                    <Copy>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </Copy>
                    <Copy delay={0.1}>
                      <p className="text-gray-700 ">{item.description}</p>
                    </Copy>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Why Choose HealthSigns Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-purple-500">
                Why Choose HealthSigns?
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-10 w-10 text-purple-500" />,
                title: "Cutting-Edge AI",
                description:
                  "Our advanced AI algorithms provide real-time, actionable insights, ensuring proactive and personalized patient care.",
              },
              {
                icon: <Globe className="h-10 w-10 text-purple-500" />,
                title: "Global Reach",
                description:
                  "With a presence in India, the Middle East, and the US, we bring world-class healthcare solutions to diverse populations.",
              },
              {
                icon: <Users className="h-10 w-10 text-purple-500" />,
                title: "Local Expertise",
                description:
                  "Our team can be found hard at work across every new location to ensure local insights feed into our system always.",
              },
              {
                icon: <Puzzle className="h-10 w-10 text-purple-500" />,
                title: "Collaborative Approach",
                description:
                  "We partner with established healthcare providers to deliver seamless integration and extended patient care services.",
              },
              {
                icon: <Heart className="h-10 w-10 text-purple-500" />,
                title: "Patient-Centric",
                description:
                  "Our solutions are designed with the patient in mind, ensuring easy accessibility and improved health outcomes.",
              },
              {
                icon: <Link2 className="h-10 w-10 text-purple-500" />,
                title: "Seamless Integration",
                description:
                  "We work closely with leading healthcare providers to ensure our platform integrates smoothly with existing infrastructures.",
              },
            ].map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900 rounded-2xl card-3d">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 ">{item.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-animated text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Join Us in Transforming Healthcare
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-xl mb-8">
                At HealthSigns, we believe in the power of technology to
                transform healthcare. Join us on our mission to provide better
                care for patients around the world.
              </p>
            </Copy>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full"
            >
              Partner with us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </MotionDiv>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
      </section>
    </div>
  );
}
