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
import { Sphere } from "@/components/ui/3d-sphere";

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
    <div className="pt-24">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              At HealthSigns, technology meets healthcare to create a seamless,
              innovative, and personalized patient management experience. We are
              a pioneering health-tech brand committed to revolutionizing the
              way patients in India, the Middle East, and the US receive medical
              care.
            </p>
          </MotionDiv>

          {/* 3D Elements */}
          <div className="absolute -bottom-10 -right-10 z-10">
            <Sphere size={1.2} color="#8b5cf6" className="floating" />
          </div>
          <div className="absolute top-1/3 left-0 z-10 transform -translate-x-1/2">
            <Sphere size={0.8} color="#a78bfa" className="floating-delay-1" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                What We Do
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                HealthSigns offers a suite of advanced healthcare solutions
                designed to enhance patient care and provider efficiency. Our
                core offering includes Remote Patient Management, enabling
                continuous monitoring and care beyond traditional clinical
                settings.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We are also developing a clinical decision support system that
                provides healthcare professionals with real-time, evidence-based
                insights. By seamlessly integrating with existing healthcare
                infrastructures, we ensure that patients receive timely,
                personalized care while supporting providers in making informed
                clinical decisions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our platform is designed to evolve, continually incorporating
                the latest advancements in AI and healthcare technology to meet
                the dynamic needs of the industry.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                How We Work
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our unique business model allows us to partner with established
                healthcare providers in India, the Middle East, and the US. By
                leveraging our partners' existing customer bases, we seamlessly
                integrate our remote patient monitoring services, enhancing
                their capabilities and extending their reach.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                This collaborative approach ensures that patients receive
                consistent, high-quality care, regardless of their location.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our Technology
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              HealthSigns utilizes advanced AI technology to continuously
              monitor patient data, identifying early signs of potential health
              issues. Our platform provides healthcare providers with actionable
              insights, enabling proactive intervention and personalized
              treatment plans.
            </p>
          </MotionDiv>

          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-purple-200 dark:bg-purple-800 transform -translate-x-1/2 z-0"></div>
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
                  className={`flex items-start mb-12 ${
                    index % 2 === 0
                      ? "justify-end md:pl-24"
                      : "justify-start md:pr-24"
                  }`}
                >
                  <div
                    className={`relative bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg max-w-md glass ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-gray-800 z-20"
                      style={{ [index % 2 === 0 ? "left" : "right"]: "-8px" }}
                    ></div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Why Choose HealthSigns?
            </h2>
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
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-xl mb-8">
              At HealthSigns, we believe in the power of technology to transform
              healthcare. Join us on our mission to provide better care for
              patients around the world.
            </p>
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
