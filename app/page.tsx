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
import { CustomMarquee } from "@/components/ui/custom-marquee";
import { cn } from "@/lib/utils";

// Animated components
const MotionDiv = motion.div;

const whyPartnerItems = [
  {
    icon: <Users className="h-10 w-10 text-primary" />, // Kept for potential future use or if FlowingMenu is adapted
    title: "Better Health Outcomes for Patients",
    description:
      "Improved care quality and patient satisfaction through connected healthcare.",
  },
  {
    icon: <Activity className="h-10 w-10 text-primary" />,
    title: "Connected Technologies That Provide Real Medical Intelligence",
    description:
      "Advanced AI-driven insights that transform healthcare delivery.",
  },

  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Lowered Load on Clinicians and Medical Teams",
    description: "Streamlined workflows that reduce administrative burden.",
  },

  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Tailored Care Plans for People Around the World",
    description: "Personalized healthcare solutions that scale globally.",
  },
];

const flowingMenuItems = whyPartnerItems.map((item, index) => ({
  link: "#", // Placeholder link
  text: item.title,
  image: `https://picsum.photos/600/400?random=${index + 1}`, // Placeholder image
  scrolltext: item.description,
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
  const testimonials = [
    {
      name: "Believers Church Medical College",
      username: "@bcmc_healthcare",
      body: "HealthSigns has helped us streamline our diagnostic workflows and deliver better patient experiences.",
      img: "https://avatar.vercel.sh/bcmc",
    },
    {
      name: "Leading Diagnostic Lab",
      username: "@diagnostic_lab",
      body: "Thanks to HealthSigns' AI, we've automated millions of reports and improved result clarity.",
      img: "https://avatar.vercel.sh/lab",
    },
    {
      name: "Metro General Hospital",
      username: "@metro_hospital",
      body: "The AI accelerators have transformed our EMR integration and reduced operational costs significantly.",
      img: "https://avatar.vercel.sh/metro",
    },
    {
      name: "SmartCare Clinic",
      username: "@smartcare",
      body: "WhatsApp integration for reports has revolutionized how we communicate with patients.",
      img: "https://avatar.vercel.sh/smartcare",
    },
    {
      name: "Regional Health Network",
      username: "@regional_health",
      body: "Real-time insights and automated alerts have improved our patient care outcomes dramatically.",
      img: "https://avatar.vercel.sh/regional",
    },
    {
      name: "City Medical Center",
      username: "@city_medical",
      body: "The unified platform has eliminated data silos and enhanced collaboration across departments.",
      img: "https://avatar.vercel.sh/city",
    },
  ];

  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  const TestimonialCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-[25rem] cursor-pointer overflow-hidden rounded-2xl border p-6",
          "border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300",
          "shadow-lg hover:shadow-xl"
        )}
      >
        <div className="flex flex-row items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Image
              src={img}
              alt={`${name}'s avatar`}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-foreground">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="text-sm text-muted-foreground italic leading-relaxed font-jakarta">
          "{body}"
        </blockquote>
      </figure>
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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
                  Your health data is often fragmented - lying in doctors notes,
                  lab reports prescriptions and apps. It needs connection for
                  you to receive the best care
                  <strong> HealthSigns bridges the gaps.</strong>
                </p>
              </Copy>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={"/contact"}>
                  <InteractiveHoverButton>Book Demo</InteractiveHoverButton>
                </Link>
              </div>
            </MotionDiv>

            <AnimatePresence>
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-0 top-0 bottom-0 right-0 lg:block hidden h-full w-1/2 rounded-3xl overflow-hidden"
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
      <section className="py-12 bg-background relative">
        {/* Gradient overlay for soft top edge */}
        <div className="absolute -top-12 sm:-top-16 md:-top-20 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-transparent via-[hsl(var(--background)_/_0.5)] to-background pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
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
        <div className="w-full px-4 min-h-[40vh] md:min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-around relative lg:text-right text-center">
          <Copy>
            <h2 className="mt-12  mx-4 text-secondary/30 uppercase text-4xl md:text-9xl font-extrabold text-center lg:text-right tracking-tight">
              Who are we ?
            </h2>
          </Copy>
          <div className="flex mt-8 md:mt-0 flex-col lg:flex-row items-center justify-between gap-8">
            {" "}
            <Copy delay={0.2}>
              <p className="text-muted-foreground font-jakarta mx-4 text-lg md:text-xl lg:text-2xl   text-center lg:text-left lg:mr-auto">
                <strong>Better health outcomes</strong> are possible when{" "}
                <strong>risk is identified early</strong>, and effective
                treatments prescribed on time. What we noticed around the world
                - was that{" "}
                <strong>health outcomes had not improved significantly</strong>{" "}
                even with these advancements. Prescriptions, lab reports,
                fitness and wellness apps, doctor's notes and even medical
                records were <strong>disconnected</strong>. By{" "}
                <strong>bridging the gap</strong> - we could improve the odds.
                By providing <strong>medical intelligence</strong> - we could
                enhance people's lives. Through
                <strong>connection</strong> - we could make a difference.
              </p>
            </Copy>
            <Image
              className=" lg:w-5/12 -translate-y-16 md:-translate-y-0"
              src="wrw.png"
              alt="About HealthSigns"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-background">
        <div className=" mx-4 px-4">
          <Copy>
            <h2 className="mb-20 text-secondary/30 uppercase text-4xl md:text-7xl font-extrabold text-center lg:text-left tracking-tight">
              Why Partner with <br /> HealthSigns?
            </h2>
          </Copy>
        </div>{" "}
        <div className="w-full h-[40vh] md:h-[40vh] lg:h-[50vh] relative">
          <FlowingMenu items={flowingMenuItems} />
        </div>
      </section>

      {/* <TextReveal className="font-extrabold uppercase text-center">
        At HealthSigns, we're pioneering the future of healthcare
      </TextReveal> */}

      {/*  Careers Section */}
      <Careers />

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
            <Copy delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-secondary/50 uppercase tracking-tight">
                What Our Partners Say
              </h2>
            </Copy>
          </MotionDiv>{" "}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <CustomMarquee
              pauseOnHover
              duration={60}
              repeat={6}
              className="[--marquee-gap:2rem] mb-4"
            >
              {firstRow.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </CustomMarquee>
            <CustomMarquee
              reverse
              pauseOnHover
              duration={60}
              repeat={6}
              className="[--marquee-gap:2rem]"
            >
              {secondRow.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </CustomMarquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </section>

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
              <Copy delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-medium mb-4 text-foreground">
                  Flexible Plans for Every Need
                </h2>
              </Copy>
              <Copy delay={0.2}>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-jakarta">
                  Our plans are designed to align with your organization's goals
                  and scale, offering both standardized enterprise solutions and
                  fully customizable options.
                </p>
              </Copy>
            </MotionDiv>
          </MotionDiv>
          <div className="flex justify-center">
            <MotionDiv
              variants={fadeInUp}
              className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-primary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xl"
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
        <div className="absolute -top-12 sm:-top-16 md:-top-20 left-0 w-full h-12 sm:h-16 md:h-20 bg-gradient-to-b from-transparent via-[rgba(61,35,35,0.3)] to-[#3d2323] pointer-events-none z-0"></div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#f50029", "#FF0037", "#FF0000"]}
            blend={1}
            amplitude={0.5}
            speed={1.5}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none z-0"></div>
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
