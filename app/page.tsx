"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, useAnimation } from "framer-motion";
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
} from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";
import { Sphere } from "@/components/ui/3d-sphere";

// Animated components
const MotionDiv = motion.div;

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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-soft-glow opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <h1 className="mb-6 gradient-text text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transforming Healthcare with AI-Powered Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 font-jakarta">
                Our AI-powered Remote Patient Management system ensures
                real-time monitoring, that allows for early detection and timely
                care, thus enhancing patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="gradient"
                  className="rounded-full transform transition-transform hover:scale-105"
                >
                  Know more
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-full transform transition-transform hover:scale-105"
                >
                  Partner with us
                </Button>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-purple-200/50 dark:ring-purple-900/30">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="AI-powered healthcare"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
              </div>

              {/* 3D Elements */}
              <div className="absolute -bottom-10 -right-10 z-10">
                <Sphere size={1.2} color="#8b5cf6" className="floating" />
              </div>
              <div className="absolute -top-10 -left-10 z-10">
                <Sphere
                  size={0.8}
                  color="#a78bfa"
                  className="floating-delay-1"
                />
              </div>
              <div className="absolute top-1/2 right-1/3 z-10">
                <Sphere
                  size={0.6}
                  color="#c4b5fd"
                  className="floating-delay-2"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <StatCard
              value="98%"
              label="Patient Satisfaction"
              icon={<Star className="h-6 w-6" />}
              className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-purple-100/50 dark:border-purple-900/20 hover:shadow-lg transition-shadow duration-300"
            />
            <StatCard
              value="24/7"
              label="Continuous Monitoring"
              icon={<Activity className="h-6 w-6" />}
              className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-purple-100/50 dark:border-purple-900/20 hover:shadow-lg transition-shadow duration-300"
            />
            <StatCard
              value="85%"
              label="Early Detection Rate"
              icon={<CheckCircle className="h-6 w-6" />}
              className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-purple-100/50 dark:border-purple-900/20 hover:shadow-lg transition-shadow duration-300"
            />
          </MotionDiv>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-6 gradient-text text-3xl md:text-4xl font-bold tracking-tight">
              Why Partner with HealthSigns?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-jakarta text-lg">
              Unlock the full potential of your healthcare services by
              partnering with HealthSigns. Our innovative solutions and
              collaborative approach can help you provide top-notch remote
              patient care.
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-purple-500" />,
                title: "Enhanced Patient Engagement",
                description:
                  "RPM allows patients to actively participate in their own care, leading to better adherence to treatment plans and improved health outcomes.",
              },
              {
                icon: <Activity className="h-10 w-10 text-purple-500" />,
                title: "Proactive Health Monitoring",
                description:
                  "By continuously tracking vital signs and health metrics, RPM enables early detection of potential issues.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
                title: "Improved Chronic Disease Management",
                description:
                  "For patients with chronic conditions, RPM offers consistent monitoring and management, reducing the burden on healthcare facilities.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-purple-500" />,
                title: "Cost-Effective Care",
                description:
                  "RPM reduces the need for frequent in-person visits and hospital admissions, significantly lowering healthcare costs.",
              },
              {
                icon: <Globe className="h-10 w-10 text-purple-500" />,
                title: "Increased Accessibility",
                description:
                  "RPM breaks down geographical barriers, providing high-quality care to patients in remote or underserved areas.",
              },
              {
                icon: <Database className="h-10 w-10 text-purple-500" />,
                title: "Data-Driven Insights",
                description:
                  "RPM empowers healthcare providers with valuable insights into patient health trends and treatment efficacy.",
              },
            ].map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl card-3d transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-fit">
                      {item.icon}
                    </div>
                    <h3 className="mb-3 text-gray-900 dark:text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-jakarta">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* About HealthSigns Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <h2 className="mb-6 gradient-text">About HealthSigns</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-jakarta">
                At HealthSigns, our founders and team have deep healthcare
                expertise and extensive experience in delivering health
                services. We understand the challenges in healthcare—gaps in
                care, delayed responses, and the need for continuous monitoring.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 font-jakarta">
                Integrating AI into healthcare is crucial to bridge these gaps,
                offering real-time monitoring, personalized care, and improved
                clinical decision-making. Our human-centric approach ensures
                technology enhances compassionate care.
              </p>
              <Button variant="gradient" className="rounded-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MotionDiv>
            <MotionDiv
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="About HealthSigns"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-5 right-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30"></div>
              <div className="absolute -top-5 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Pricing & Careers Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-purple-50 to-lavender-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-3xl shadow-lg backdrop-blur-sm border border-purple-100/50 dark:border-purple-900/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Pricing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-jakarta">
                Affordable, scalable, and designed to meet your needs, our
                pricing plans ensure you get the best value for advanced patient
                care.
              </p>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-full transform transition-transform hover:scale-105"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-gradient-to-br from-lavender-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-3xl shadow-lg backdrop-blur-sm border border-indigo-100/50 dark:border-indigo-900/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Careers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-jakarta">
                Joining HealthSigns offers a unique opportunity to be at the
                forefront of healthcare innovation, where your work directly
                contributes to the betterment of society.
              </p>
              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-full transform transition-transform hover:scale-105"
              >
                Explore Careers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MotionDiv>
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
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display tracking-tight">
              Enhance patient outcomes without the stress of in-person
              monitoring.
            </h2>
            <Button
              size="xl"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              Partner with us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </MotionDiv>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-violet-400 rounded-full blur-3xl opacity-20"></div>
      </section>
    </div>
  );
}
