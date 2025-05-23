"use client";

import { useEffect } from "react";
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
} from "lucide-react";
import { BlurrySphere } from "@/components/ui/blurry-sphere";
import Copy from "@/components/Copy";
import Aurora from "@/Backgrounds/Aurora/Aurora";

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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <Copy animateOnScroll={false}>
                <h1 className="text-4xl md:text-5xl font-medium mb-6 text-primary">
                  Always-on healthcare. Anywhere, Anytime.
                </h1>
              </Copy>
              <Copy animateOnScroll={false} delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Experience seamless healthcare with HealthSigns Remote Patient
                  Monitoring. Empowering patients and providers with real-time
                  health insights for better outcomes.
                </p>
              </Copy>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Remote Patient Monitoring"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>

              {/* 3D Elements */}
              <div className="absolute -bottom-10 -right-10 z-10">
                <BlurrySphere
                  size={1.2}
                  colors={[
                    "hsl(var(--primary))",
                    "hsl(var(--accent))",
                    "hsl(var(--secondary))",
                  ]}
                  className="floating"
                  opacity={0.6}
                  animationDuration={10}
                />
              </div>
              <div className="absolute top-1/3 left-0 z-10 transform -translate-x-1/2">
                <BlurrySphere
                  size={0.8}
                  colors={[
                    "hsl(var(--primary)/0.8)",
                    "hsl(var(--primary)/0.6)",
                    "hsl(var(--primary)/0.4)",
                  ]}
                  className="floating-delay-1"
                  opacity={0.5}
                  animationDuration={8}
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* What is RPM Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                What is Remote Patient Monitoring (RPM)?
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Remote Patient Monitoring (RPM) is an innovative healthcare
                solution that allows healthcare providers to monitor patients'
                health outside traditional clinical settings. By utilizing
                cutting-edge technology, RPM collects vital health data in
                real-time, providing continuous insights into a patient's
                condition.
              </p>
            </Copy>
          </MotionDiv>
        </div>
      </section>

      {/* How Does RPM Work Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                How Does RPM Work?
              </h2>
            </Copy>
          </MotionDiv>

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                {
                  icon: <Activity className="h-12 w-12 text-primary" />,
                  title: "Data Collection",
                  description:
                    "Patients use medical devices such as blood pressure monitors, glucose meters, pulse oximeters, and wearable sensors to record their vital signs and health metrics.",
                },
                {
                  icon: <Smartphone className="h-12 w-12 text-primary" />,
                  title: "Real-Time Transmission",
                  description:
                    "These devices are connected to our secure HealthSigns platform, where data is transmitted in real-time to healthcare providers.",
                },
                {
                  icon: <BarChart className="h-12 w-12 text-primary" />,
                  title: "Continuous Monitoring",
                  description:
                    "Healthcare professionals continuously monitor the incoming data, allowing for early detection of potential health issues and timely interventions.",
                },
                {
                  icon: <UserCheck className="h-12 w-12 text-primary" />,
                  title: "Personalized Care Plans",
                  description:
                    "Based on the collected data, healthcare providers can adjust treatment plans, provide medical advice, and ensure patients are adhering to their prescribed regimens.",
                },
                {
                  icon: <Heart className="h-12 w-12 text-primary" />,
                  title: "Patient Engagement",
                  description:
                    "RPM encourages patients to take an active role in their healthcare, promoting better self-management and adherence to treatment plans.",
                },
              ].map((item, index) => (
                <MotionDiv key={index} variants={fadeInUp}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-center rounded-2xl card-3d">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4 bg-primary/10 p-3 rounded-full w-fit mx-auto">
                        {item.icon}
                      </div>
                      <Copy>
                        <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                          {item.title}
                        </h3>
                      </Copy>
                      <Copy delay={0.1}>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </Copy>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Benefits of RPM Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                Benefits of RPM
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-lg text-muted-foreground">
                At HealthSigns, we are committed to delivering top-notch remote
                patient monitoring services that enhance the healthcare
                experience for patients and providers alike. Discover the future
                of healthcare with HealthSigns RPM solutions.
              </p>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Improved Health Outcomes",
                description:
                  "Continuous monitoring enables early detection and timely management of health conditions, leading to better overall health outcomes.",
              },
              {
                title: "Convenience",
                description:
                  "Patients receive quality care from the comfort of their homes, reducing the need for frequent in-person visits.",
              },
              {
                title: "Enhanced Communication",
                description:
                  "RPM fosters stronger communication between patients and healthcare providers, ensuring that concerns are addressed promptly.",
              },
              {
                title: "Cost-Effective",
                description:
                  "By preventing hospitalizations and reducing the frequency of emergency visits, RPM helps lower healthcare costs for patients and providers.",
              },
            ].map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/10 to-background rounded-3xl glass">
                  <CardContent className="p-8">
                    <Copy>
                      <h3 className="text-2xl font-semibold mb-4 text-primary">
                        {item.title}
                      </h3>
                    </Copy>
                    <Copy delay={0.1}>
                      <p className="text-lg text-muted-foreground">
                        {item.description}
                      </p>
                    </Copy>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
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
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to transform your healthcare experience?
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-xl mb-8">
                Schedule a consultation with our experts to learn how
                HealthSigns RPM can benefit your practice or healthcare
                facility.
              </p>
            </Copy>
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-muted rounded-full"
            >
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </MotionDiv>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary/50 rounded-full blur-3xl opacity-30"></div>
      </section>
    </div>
  );
}
