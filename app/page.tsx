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
} from "lucide-react";
import { StatCard } from "@/components/ui/stat-card";

import { VideoText } from "@/components/magicui/video-text";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Aurora from "@/Backgrounds/Aurora/Aurora";
import Copy from "@/components/Copy";
import { TextReveal } from "@/components/magicui/text-reveal";

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
                <h1 className=" md:translate-y-10 translate-y-20   h-20 gradient-text text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                  Transforming
                </h1>
                <div className="relative h-40 w-full flex items-center justify-center">
                  <VideoText
                    fontSize={15}
                    loop={true}
                    fontWeight={"bold"}
                    className="mt-4"
                    src="https://cdn.pixabay.com/video/2025/03/17/265435_tiny.mp4"
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
                <Button
                  size="lg"
                  className="rounded-full transform transition-transform hover:scale-105"
                >
                  Know more
                </Button>
                <Link href={"/contact"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-full transform transition-transform hover:scale-105"
                  >
                    Partner with us
                  </Button>
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

      {/* Why Partner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Copy>
              <h2 className="mb-6 text-primary text-3xl md:text-4xl font-medium tracking-tight">
                Why Partner with HealthSigns?
              </h2>
            </Copy>

            <Copy delay={0.2}>
              <p className="text-muted-foreground font-jakarta text-lg">
                Unlock the full potential of your healthcare services by
                partnering with HealthSigns. Our innovative solutions and
                collaborative approach can help you provide top-notch remote
                patient care.
              </p>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Enhanced Patient Engagement",
                description:
                  "RPM allows patients to actively participate in their own care, leading to better adherence to treatment plans and improved health outcomes.",
              },
              {
                icon: <Activity className="h-10 w-10 text-primary" />,
                title: "Proactive Health Monitoring",
                description:
                  "By continuously tracking vital signs and health metrics, RPM enables early detection of potential issues.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Improved Chronic Disease Management",
                description:
                  "For patients with chronic conditions, RPM offers consistent monitoring and management, reducing the burden on healthcare facilities.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "Cost-Effective Care",
                description:
                  "RPM reduces the need for frequent in-person visits and hospital admissions, significantly lowering healthcare costs.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Increased Accessibility",
                description:
                  "RPM breaks down geographical barriers, providing high-quality care to patients in remote or underserved areas.",
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
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
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm rounded-2xl card-3d transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/20 p-3 rounded-full w-fit">
                      {item.icon}
                    </div>
                    <h3 className="mb-3 text-card-foreground text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-jakarta">
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

      <TextReveal className="text-primary text-center text-2xl md:text-3xl font-medium">
        At HealthSigns, we're pioneering the future of healthcare with AI
      </TextReveal>

      {/* Pricing & Careers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-primary/10 to-secondary/5 p-8 rounded-3xl shadow-lg backdrop-blur-sm border border-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium mb-4 text-foreground">
                Pricing
              </h3>
              <p className="text-muted-foreground mb-6 font-jakarta">
                Affordable, scalable, and designed to meet your needs, our
                pricing plans ensure you get the best value for advanced patient
                care.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-full transform transition-transform hover:scale-105"
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
              className="bg-gradient-to-br from-secondary/5 to-primary/10 p-8 rounded-3xl shadow-lg backdrop-blur-sm border border-secondary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium mb-4 text-foreground">
                Careers
              </h3>
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
            <Button
              size="xl"
              className="bg-background text-primary   rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              Partner with us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
