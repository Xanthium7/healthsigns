"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Building2,
  FlaskConical,
  Stethoscope,
  Home,
  Leaf,
  Brain,
  FileText,
  MessageSquare,
  Calendar,
  Activity,
  TrendingUp,
  Users,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  Heart,
  Sparkles,
  MapPin,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { BlurrySphere } from "@/components/ui/blurry-sphere";
import Copy from "@/components/Copy";
import Aurora from "@/Backgrounds/Aurora/Aurora";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

// Animated components
const MotionDiv = motion.div;

// WhoWeServeBeam Component
function WhoWeServeBeam() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const centralRef = React.useRef<HTMLDivElement>(null);
  const hospitalRef = React.useRef<HTMLDivElement>(null);
  const labRef = React.useRef<HTMLDivElement>(null);
  const clinicRef = React.useRef<HTMLDivElement>(null);
  const homecareRef = React.useRef<HTMLDivElement>(null);

  // Custom health logo SVG component
  const HealthLogo = () => (
    <Image src={"/logo.png"} alt="Health Logo" width={200} height={200}></Image>
  );
  // Circle component using forwardRef pattern
  const Circle = React.forwardRef<
    HTMLDivElement,
    {
      className?: string;
      children?: React.ReactNode;
      icon: React.ReactNode;
      title: string;
      style?: React.CSSProperties;
    }
  >(({ className, children, icon, title, style }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center bg-card border-2 border-primary/10 rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group ${className}`}
        style={{ width: "100px", height: "100px", ...style }}
      >
        <div className="h-8 w-8 text-primary transition-colors duration-300">
          {icon}
        </div>
        <span className="text-xs font-semibold text-center mt-1 text-foreground transition-colors duration-300">
          {title}
        </span>
        {children}
      </div>
    );
  });

  Circle.displayName = "Circle";

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Central Health Logo */}
      <div
        ref={centralRef}
        className="absolute z-20 flex flex-col items-center justify-center bg-background border-4 border-primary/20 rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300"
        style={{ width: "120px", height: "120px" }}
      >
        <HealthLogo />
      </div>

      {/* Left Side Elements */}
      <Circle
        ref={hospitalRef}
        className="absolute z-10"
        style={{ top: "20%", left: "10%" }}
        icon={<Building2 className="h-8 w-8" />}
        title="Hospitals"
      />

      <Circle
        ref={homecareRef}
        className="absolute z-10"
        style={{ bottom: "20%", left: "10%" }}
        icon={<Home className="h-8 w-8" />}
        title="Homecare"
      />

      {/* Right Side Elements */}
      <Circle
        ref={labRef}
        className="absolute z-10"
        style={{ top: "20%", right: "10%" }}
        icon={<FlaskConical className="h-8 w-8" />}
        title="SmartLabs"
      />

      <Circle
        ref={clinicRef}
        className="absolute z-10"
        style={{ bottom: "20%", right: "10%" }}
        icon={<Stethoscope className="h-8 w-8" />}
        title="Clinics"
      />

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hospitalRef}
        toRef={centralRef}
        duration={3}
        // pathColor="hsl(var(--primary))"
        // gradientStartColor="hsl(var(--primary))"
        // gradientStopColor="hsl(var(--secondary))"
        curvature={-120}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={labRef}
        toRef={centralRef}
        duration={3.5}
        // delay={0.5}
        // pathColor="hsl(var(--primary))"
        // gradientStartColor="hsl(var(--primary))"
        // gradientStopColor="hsl(var(--secondary))"
        curvature={-120}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clinicRef}
        toRef={centralRef}
        duration={4}
        delay={1}
        // pathColor="hsl(var(--primary))"
        // gradientStartColor="hsl(var(--primary))"
        // gradientStopColor="hsl(var(--secondary))"
        curvature={120}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={homecareRef}
        toRef={centralRef}
        duration={3.2}
        delay={1.5}
        // pathColor="hsl(var(--primary))"
        // gradientStartColor="hsl(var(--primary))"
        // gradientStopColor="hsl(var(--secondary))"
        curvature={120}
      />
    </div>
  );
}

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

  const journeySteps = [
    {
      step: "01",
      title: "Easy Onboarding",
      description:
        "Upload records and get structured summaries with AI-powered document processing.",
    },
    {
      step: "02",
      title: "Smart Risk Assessment",
      description:
        "AI detects risk areas and care gaps with dynamic scoring and insights.",
    },
    {
      step: "03",
      title: "Customizable Care Plans",
      description:
        "Doctors tailor AI-generated suggestions for personalized patient care.",
    },
    {
      step: "04",
      title: "Real-Time Assistant",
      description:
        "AI supports clinical decision-making with evidence-based suggestions.",
    },
    {
      step: "05",
      title: "Connected Devices",
      description:
        "Live tracking of vitals with automated alerts for timely interventions.",
    },
    {
      step: "06",
      title: "Weekly Check-ins",
      description:
        "Keep patients informed and motivated with regular engagement.",
    },
    {
      step: "07",
      title: "Pre-Triage Summaries",
      description:
        "Actionable insights before every visit to streamline consultations.",
    },
    {
      step: "08",
      title: "Trend Tracking",
      description:
        "Dynamic risk analysis and transparent reporting for care teams.",
    },
  ];

  const testimonials = [
    {
      quote:
        "HealthSigns has helped us streamline our diagnostic workflows and deliver better patient experiences.",
      author: "Believers Church Medical College",
      role: "Healthcare Partner",
    },
    {
      quote:
        "Thanks to HealthSigns' AI, we've automated millions of reports and improved result clarity.",
      author: "Leading Diagnostic Lab",
      role: "Laboratory Partner",
    },
  ];

  const globalLocations = [
    { country: "United States", flag: "🇺🇸" },
    { country: "India", flag: "🇮🇳" },
    { country: "UAE", flag: "🇦🇪" },
    { country: "Colombia", flag: "🇨🇴", partner: "with Appisoft" },
  ];

  const partners = [
    { name: "Appisoft", region: "Colombia expansion" },
    {
      name: "TicSocial",
      region: "Multilingual AI for Spanish-speaking regions",
    },
  ];

  return (
    <div className=" overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        {" "}
        {/* Adjusted padding */}
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <Copy delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-foreground uppercase tracking-tight leading-tight">
                {" "}
                {/* Adjusted font weight, casing, tracking, leading */}
                AI-Powered Healthcare,
                <span className="block text-primary mt-2">
                  {" "}
                  {/* Added margin-top for spacing */}
                  Connected & Compassionate
                </span>
              </h1>
            </Copy>
            <Copy delay={0.4} animateOnScroll={false}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto font-jakarta">
                {" "}
                {/* Added font-jakarta */}
                Healthcare that's preventive, personalized and accessible,
                powered by data, guided by care. We unify your health records
                from clinics, labs, hospitals and home care into one secure
                platform.
              </p>
            </Copy>
            <Copy delay={0.6} animateOnScroll={false}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <InteractiveHoverButton>
                    Partner With Us
                  </InteractiveHoverButton>
                </Link>
                <Button variant="outline" size="lg" className="rounded-full">
                  Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Copy>
          </MotionDiv>

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
        </div>
      </section>{" "}
      {/* Who We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Desktop Layout: Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Left Side: Title */}
            <div className="flex items-center justify-start">
              <Copy>
                <h2 className="text-secondary/30 uppercase text-4xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                  WHO DO WE SERVE?
                </h2>
                <p className="mt-4">
                  <span className="text-muted-foreground text-2xl xl:text-3xl font-jakarta ">
                    We empower healthcare providers with AI-driven solutions
                    that enhance patient care, streamline operations, and
                    improve outcomes across hospitals, labs, clinics, and
                    homecare.
                  </span>
                </p>
              </Copy>
            </div>

            {/* Right Side: AnimatedBeam Component */}
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="relative h-[600px] xl:h-[700px] flex items-center justify-center"
            >
              <WhoWeServeBeam />
            </MotionDiv>
          </div>

          {/* Mobile Layout: Column */}
          <div className="block lg:hidden">
            {/* Top: Title */}
            <div className="text-center mb-12">
              <Copy>
                <h2 className="text-secondary/30 uppercase text-4xl md:text-5xl font-extrabold tracking-tight">
                  WHO DO WE SERVE ?
                </h2>
              </Copy>
            </div>

            {/* Bottom: AnimatedBeam Component */}
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="relative h-[500px] md:h-[600px] flex items-center justify-center"
            >
              <WhoWeServeBeam />
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* Hospitals Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Copy>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    Hospitals
                  </span>
                </div>
              </Copy>
              <Copy delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground uppercase tracking-tight">
                  {" "}
                  {/* Adjusted font size, weight, casing, tracking */}
                  AI-Enhanced Hospital Operations
                </h2>
              </Copy>
              <Copy delay={0.4}>
                <p className="text-lg text-muted-foreground mb-6 font-jakarta">
                  {" "}
                  {/* Added font-jakarta */}
                  We equip hospitals with AI tools that streamline operations
                  and elevate care delivery.
                </p>
              </Copy>

              <div className="space-y-4 mb-8">
                {[
                  "AI Accelerators with seamless EMR integration",
                  "Automated lab result workflows",
                  "WhatsApp integration for reports & invoices",
                  "Cost reduction and workflow efficiency",
                ].map((feature, index) => (
                  <Copy key={index} delay={0.1 * index + 0.6}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-jakarta">
                        {feature}
                      </span>{" "}
                      {/* Added font-jakarta */}
                    </div>
                  </Copy>
                ))}

                <Copy delay={0.8}>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-2xl">
                    <h4 className="font-semibold text-foreground mb-2">
                      Trusted By:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-muted-foreground font-jakarta">
                          {" "}
                          {/* Added font-jakarta */}
                          Appisoft (Strategic partner in Colombia)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-muted-foreground font-jakarta">
                          {" "}
                          {/* Added font-jakarta */}
                          Believers Church Medical College
                        </span>
                      </div>
                    </div>
                  </div>
                </Copy>
              </div>
            </MotionDiv>

            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Hospital AI Integration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 right-10 w-20 h-20 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-xl opacity-30"></div>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* Smart Labs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Smart Labs AI"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
              </div>
              <div className="absolute -top-5 left-10 w-20 h-20 bg-gradient-to-r from-secondary/40 to-primary/40 rounded-full blur-xl opacity-30"></div>
            </MotionDiv>

            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <Copy>
                <div className="flex items-center gap-2 mb-4">
                  <FlaskConical className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    Smart Labs
                  </span>
                </div>
              </Copy>
              <Copy delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground uppercase tracking-tight">
                  {" "}
                  {/* Adjusted font size, weight, casing, tracking */}
                  AI-Enhanced Diagnostic Excellence
                </h2>
              </Copy>
              <Copy delay={0.4}>
                <p className="text-lg text-muted-foreground mb-6 font-jakarta">
                  {" "}
                  {/* Added font-jakarta */}
                  Smart Labs use AI to enhance accuracy and simplify diagnostics
                  with over 1 million reports generated.
                </p>
              </Copy>

              <div className="space-y-4 mb-8">
                {[
                  "Appointment bookings & lab order creation",
                  "AI-generated lab results with explainable insights",
                  "Voice-based summaries via WhatsApp",
                  "Integration with lab machines through accelerators",
                ].map((feature, index) => (
                  <Copy key={index} delay={0.1 * index + 0.6}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-jakarta">
                        {feature}
                      </span>{" "}
                      {/* Added font-jakarta */}
                    </div>
                  </Copy>
                ))}

                <Copy delay={0.8}>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <span className="font-bold text-2xl text-foreground">
                        1M+
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-jakarta">
                      {" "}
                      {/* Added font-jakarta */}
                      Reports generated to date
                    </p>
                  </div>
                </Copy>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>{" "}
      {/* Patient Journey Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Copy>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  Patient Journey
                </span>
              </div>
            </Copy>
            <Copy delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground uppercase tracking-tight">
                {" "}
                {/* Adjusted font size, weight, casing, tracking */}
                How It Works – The Patient Journey
              </h2>
            </Copy>
            <Copy delay={0.4}>
              <p className="text-lg text-muted-foreground font-jakarta">
                {" "}
                {/* Added font-jakarta */}
                From onboarding to follow-ups, HealthSigns transforms preventive
                care, making it smarter, simpler, and more effective.
              </p>
            </Copy>
          </MotionDiv>

          <div className="relative">
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/20 to-primary/30 transform -translate-x-1/2 z-0 rounded-full"></div>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="relative z-10"
            >
              {journeySteps.map((step, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-start mb-12 ${
                    index % 2 === 0
                      ? "justify-start md:pr-28"
                      : "justify-end md:pl-28"
                  }`}
                >
                  <div
                    className={`relative bg-background/80 backdrop-blur-md border border-primary/20 p-6 rounded-2xl shadow-xl max-w-md ${
                      index % 2 === 0 ? "md:mr-[12%]" : "md:ml-[12%]"
                    }`}
                  >
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background z-20 flex items-center justify-center"
                      style={{ [index % 2 === 0 ? "right" : "left"]: "-16px" }}
                    >
                      <span className="text-xs font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <Copy>
                      <h3 className="text-lg font-bold mb-3 text-foreground">
                        {step.title}
                      </h3>
                    </Copy>
                    <Copy delay={0.1}>
                      <p className="text-sm text-muted-foreground leading-relaxed font-jakarta">
                        {" "}
                        {/* Added font-jakarta */}
                        {step.description}
                      </p>
                    </Copy>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
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
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  Testimonials
                </span>
              </div>
            </Copy>
            <Copy delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground uppercase tracking-tight">
                {" "}
                {/* Adjusted font size, weight, casing, tracking */}
                What Our Partners Say
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full border-none shadow-lg bg-gradient-to-br from-card to-card/80 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <MessageSquare className="h-8 w-8 text-primary mb-4" />
                      <blockquote className="text-lg text-muted-foreground italic leading-relaxed font-jakarta">
                        {" "}
                        {/* Added font-jakarta */}"{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground font-jakarta">
                          {" "}
                          {/* Added font-jakarta */}
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Copy>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">
                    About Us
                  </span>
                </div>
              </Copy>
              <Copy delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground uppercase tracking-tight">
                  {" "}
                  {/* Adjusted font size, weight, casing, tracking */}
                  Bridging Healthcare with AI
                </h2>
              </Copy>
              <Copy delay={0.4}>
                <p className="text-lg text-muted-foreground mb-6 font-jakarta">
                  {" "}
                  {/* Added font-jakarta */}
                  Your health data lives in many places - doctor's notes, lab
                  reports, prescriptions, apps. When it's not connected, care
                  becomes confusing and fragmented. HealthSigns brings it all
                  together.
                </p>
              </Copy>
              <Copy delay={0.6}>
                <p className="text-lg text-muted-foreground mb-8 font-jakarta">
                  {" "}
                  {/* Added font-jakarta */}
                  We unify patient data from labs, clinics, hospitals, and
                  homecare, enabling early risk detection and smart clinical
                  decision-making while delivering patient-friendly reports and
                  reminders.
                </p>
              </Copy>

              <div className="space-y-6">
                <Copy delay={0.8}>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="h-6 w-6 text-primary" />
                      <h4 className="font-bold text-foreground">Vision</h4>
                    </div>
                    <p className="text-muted-foreground font-jakarta">
                      {" "}
                      {/* Added font-jakarta */}
                      Preventive, personalized, and accessible
                      healthcare—powered by data, guided by care.
                    </p>
                  </div>
                </Copy>
                <Copy delay={1.0}>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <h4 className="font-bold text-foreground">What We Do</h4>
                    </div>
                    <p className="text-muted-foreground font-jakarta">
                      {" "}
                      {/* Added font-jakarta */}
                      Unify patient data, enable early risk detection, deliver
                      smart clinical decision-making, and equip healthcare
                      professionals with automation and real-time insights.
                    </p>
                  </div>
                </Copy>
              </div>
            </MotionDiv>

            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Healthcare AI Connection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 right-10 w-20 h-20 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-xl opacity-30"></div>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* Global Reach Section */}
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
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  Global Reach
                </span>
              </div>
            </Copy>
            <Copy delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground uppercase tracking-tight">
                {" "}
                {/* Adjusted font size, weight, casing, tracking */}
                Serving Healthcare Worldwide
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {globalLocations.map((location, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card rounded-2xl">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{location.flag}</div>
                    <h3 className="font-bold text-foreground mb-2">
                      {location.country}
                    </h3>
                    {location.partner && (
                      <p className="text-sm text-primary font-jakarta">
                        {location.partner}
                      </p> /* Added font-jakarta */
                    )}
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20"
          >
            <Copy>
              <h3 className="text-xl font-bold mb-6 text-foreground text-center">
                Strategic Partners
              </h3>
            </Copy>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <Copy key={index} delay={0.2 + index * 0.1}>
                  <div className="flex items-center gap-3 bg-background/50 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {partner.name}
                      </div>
                      <div className="text-sm text-muted-foreground font-jakarta">
                        {" "}
                        {/* Added font-jakarta */}
                        {partner.region}
                      </div>
                    </div>
                  </div>
                </Copy>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>{" "}
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
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Copy>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join Us in Transforming Healthcare
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-xl mb-8 opacity-90 font-jakarta">
                {" "}
                {/* Added font-jakarta */}
                At HealthSigns, we believe in the power of technology to
                transform healthcare. Join us on our mission to provide better
                care for patients around the world.
              </p>
            </Copy>
            <Copy delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-background text-primary hover:bg-muted rounded-full px-8"
                  >
                    Partner with us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                >
                  Schedule Demo <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Copy>
          </MotionDiv>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary/50 rounded-full blur-3xl opacity-30"></div>
      </section>
    </div>
  );
}
