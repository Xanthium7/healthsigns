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
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, Volume2, VolumeX } from "lucide-react";

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
        curvature={-120}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={labRef}
        toRef={centralRef}
        duration={3.5}
        curvature={-120}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={clinicRef}
        toRef={centralRef}
        duration={4}
        delay={1}
        curvature={120}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={homecareRef}
        toRef={centralRef}
        duration={3.2}
        delay={1.5}
        curvature={120}
      />
    </div>
  );
}

export default function AboutPage() {
  // Animation controls
  const controls = useAnimation();
  // Video modal state
  const [isVideoMuted, setIsVideoMuted] = React.useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [videoProgress, setVideoProgress] = React.useState(0);
  const [videoDuration, setVideoDuration] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    controls.start("visible");
  }, [controls]); // Video control functions
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.muted = isVideoMuted;
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setVideoProgress(percentage * 100);
    }
  };

  const resetVideoState = () => {
    setIsVideoPlaying(false);
    setIsVideoMuted(true);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

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
  const globalLocations = [
    {
      country: "United States",
      flag: "🇺🇸",
      flagUrl:
        "https://i.pinimg.com/736x/1b/28/95/1b289528b25a459bd024ec8fe9adb539.jpg",
    },
    {
      country: "India",
      flag: "🇮🇳",
      flagUrl:
        "https://i.pinimg.com/736x/28/1f/8e/281f8e6f1e80ba9593954bf8e955a125.jpg",
    },
    {
      country: "UAE",
      flag: "🇦🇪",
      flagUrl:
        "https://i.pinimg.com/736x/b7/27/5e/b7275e377f88f26ff0b75c7ca799db19.jpg",
    },
    {
      country: "Colombia",
      flag: "🇨🇴",
      flagUrl:
        "https://i.pinimg.com/736x/cb/d8/e1/cbd8e18ecd473590702ee01df8dc850c.jpg",
    },
  ];

  const partners = [
    { name: "Appisoft", region: "Colombia expansion" },
    {
      name: "TicSocial",
      region: "Multilingual AI for Spanish-speaking regions",
    },
  ];

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-secondary/70 uppercase tracking-tight leading-tight">
                Transforming Healthcare
              </h1>
            </Copy>
            <Copy delay={0.2} animateOnScroll={false}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto font-jakarta">
                {" "}
                {/* Added font-jakarta */}
                Healthcare that's preventive, personalized and accessible,
                powered by data, guided by care. We unify your health records
                from clinics, labs, hospitals and home care into one secure
                platform.
              </p>
            </Copy>{" "}
            <Copy delay={0.2} animateOnScroll={false}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {" "}
                <Dialog onOpenChange={(open) => !open && resetVideoState()}>
                  <DialogTrigger asChild>
                    <InteractiveHoverButton>
                      Watch a Demo
                    </InteractiveHoverButton>
                  </DialogTrigger>{" "}
                  <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden border border-white/10 bg-black/20 backdrop-blur-2xl shadow-2xl mx-4">
                    <DialogHeader className="p-6 pb-4 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm">
                      <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-white">
                        HealthSigns Platform Demo
                      </DialogTitle>
                      <DialogDescription className="text-center text-gray-300 text-base">
                        Discover how our AI-powered healthcare platform
                        transforms patient care
                      </DialogDescription>
                    </DialogHeader>{" "}
                    <div className="relative w-full px-4 md:px-6">
                      {/* Video Container */}
                      <div className="relative w-full aspect-video bg-black/50 backdrop-blur-sm mb-4 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                        {/* Video Element */}{" "}
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover block"
                          onLoadedData={handleVideoLoad}
                          onPlay={() => setIsVideoPlaying(true)}
                          onPause={() => setIsVideoPlaying(false)}
                          onTimeUpdate={handleTimeUpdate}
                          onLoadedMetadata={() =>
                            videoRef.current &&
                            setVideoDuration(videoRef.current.duration)
                          }
                          playsInline
                          preload="metadata"
                        >
                          {/* Replace with your actual demo video URL */}
                          <source
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        {/* Custom Video Controls Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center group">
                          <div className="flex items-center gap-6">
                            {/* Play/Pause Button */}
                            <button
                              onClick={handlePlayPause}
                              className="flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-xl"
                            >
                              {isVideoPlaying ? (
                                <div className="w-8 h-8 flex gap-1.5 items-center">
                                  <div className="w-2.5 h-8 bg-white rounded-sm"></div>
                                  <div className="w-2.5 h-8 bg-white rounded-sm"></div>
                                </div>
                              ) : (
                                <Play
                                  className="w-8 h-8 text-white ml-1"
                                  fill="white"
                                />
                              )}
                            </button>

                            {/* Mute/Unmute Button */}
                            <button
                              onClick={handleMuteToggle}
                              className="flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full border border-white/15 hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
                            >
                              {isVideoMuted ? (
                                <VolumeX className="w-6 h-6 text-white" />
                              ) : (
                                <Volume2 className="w-6 h-6 text-white" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>{" "}
                      {/* Video Timeline and Controls */}
                      <div className="mb-4">
                        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg">
                          {/* Progress Bar */}
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-white/80 text-sm font-mono">
                              {formatTime(videoRef.current?.currentTime || 0)}
                            </span>
                            <div
                              className="flex-1 h-2 bg-white/20 rounded-full cursor-pointer group relative overflow-hidden backdrop-blur-sm"
                              onClick={handleSeek}
                            >
                              {/* Progress background */}
                              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-full"></div>
                              {/* Progress fill */}
                              <div
                                className="h-full bg-gradient-to-r from-primary via-primary/80 to-secondary rounded-full transition-all duration-200 relative overflow-hidden"
                                style={{ width: `${videoProgress}%` }}
                              >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                              </div>
                              {/* Hover effect */}
                              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"></div>
                            </div>
                            <span className="text-white/80 text-sm font-mono">
                              {formatTime(videoDuration)}
                            </span>
                          </div>

                          {/* Control buttons row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={handlePlayPause}
                                className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
                              >
                                {isVideoPlaying ? (
                                  <div className="w-4 h-4 flex gap-0.5 items-center">
                                    <div className="w-1 h-4 bg-white rounded-sm"></div>
                                    <div className="w-1 h-4 bg-white rounded-sm"></div>
                                  </div>
                                ) : (
                                  <Play
                                    className="w-4 h-4 text-white ml-0.5"
                                    fill="white"
                                  />
                                )}
                              </button>

                              <button
                                onClick={handleMuteToggle}
                                className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
                              >
                                {isVideoMuted ? (
                                  <VolumeX className="w-4 h-4 text-white" />
                                ) : (
                                  <Volume2 className="w-4 h-4 text-white" />
                                )}
                              </button>
                            </div>

                            <div className="text-white/60 text-sm">
                              {Math.round(videoProgress)}% complete
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* Additional Info Card */}
                      <div className="mb-6">
                        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                              <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-white mb-2">
                                See HealthSigns in Action
                              </h4>
                              <p className="text-gray-300 leading-relaxed">
                                Watch how our platform integrates seamlessly
                                with healthcare workflows, from AI-powered
                                diagnostics to patient engagement and care
                                coordination. Experience the future of
                                healthcare technology.
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium rounded-full border border-primary/30">
                                  AI Diagnostics
                                </span>
                                <span className="px-3 py-1 bg-secondary/20 backdrop-blur-sm text-secondary text-xs font-medium rounded-full border border-secondary/30">
                                  Patient Care
                                </span>
                                <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium rounded-full border border-accent/30">
                                  Workflow Integration
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
            <div className="flex items-center ">
              <Copy>
                <h2 className="text-secondary/30 uppercase text-4xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                  WHO DO WE SERVE?
                </h2>
                <p className="mt-4 lg:mt-12  ">
                  <span className="text-muted-foreground text-xl xl:text-2xl font-jakarta l">
                    We empower healthcare providers with AI-driven <br />{" "}
                    solutions to enhance care, streamline operations, and
                    improve outcomes across hospitals, labs, clinics, and
                    homecare. Our platform connects data, enables collaboration,
                    supports clinical decisions, and delivers actionable
                    insights for every step of the healthcare journey.
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
      <section className="py-20 bg-gradient-to-br from-background to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Copy delay={0.2}>
                <h2 className="text-secondary/70 uppercase text-4xl md:text-5xl font-extrabold tracking-tight">
                  AI-Enhanced <br /> Hospital Operations
                </h2>
              </Copy>
              <Copy delay={0.4}>
                <p className="text-xl text-muted-foreground my-6 ">
                  We equip hospitals with AI tools that streamline operations
                  and elevate care delivery.
                </p>
              </Copy>

              <div className=" mb-8">
                {[
                  "AI Accelerators with seamless EMR integration",
                  "Automated lab result workflows",
                  "WhatsApp integration for reports & invoices",
                  "Cost reduction and workflow efficiency",
                ].map((feature, index) => (
                  <Copy key={index} delay={0.1}>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0  " />
                        <span className="text-lg text-muted-foreground font-jakarta">
                          {feature}
                        </span>
                      </div>
                    </div>
                  </Copy>
                ))}
              </div>
              <Copy>
                <div className="bg-card/50 backdrop-blur-sm border mt-8 border-primary/20 p-6 rounded-2xl">
                  <h4 className="font-semibold text-foreground mb-2">
                    Trusted By:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-muted-foreground font-jakarta">
                        Believers Church Medical College
                      </span>
                    </div>
                  </div>
                </div>
              </Copy>
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
              <Copy delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-secondary/70 uppercase tracking-tight">
                  {" "}
                  {/* Adjusted font size, weight, casing, tracking */}
                  AI-Enhanced Diagnostic Excellence
                </h2>
              </Copy>
              <Copy delay={0.1}>
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
                  <Copy key={index} delay={0.1}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 " />
                        <span className="text-sm text-muted-foreground font-jakarta">
                          {feature}
                        </span>
                      </div>
                    </div>
                  </Copy>
                ))}
              </div>
              <Copy delay={0.1}>
                <div className="bg-gradient-to-r from-primary/10  to-secondary/10 p-6 rounded-2xl border border-primary/20">
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
            <Copy delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground uppercase tracking-tight">
                {" "}
                {/* Adjusted font size, weight, casing, tracking */}
                The Patient Journey
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
                  className={`flex items-start mb-16 ${
                    index % 2 === 0
                      ? "justify-end md:pl-28"
                      : "justify-start md:pr-28"
                  }`}
                >
                  <div
                    className={`relative bg-background/70 backdrop-blur-md border border-primary/20 p-8 rounded-2xl shadow-xl max-w-md ${
                      index % 2 === 0 ? "md:mr-[16%]" : "md:ml-[16%]"
                    }`}
                  >
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-[3px] border-background z-20"
                      style={{ [index % 2 === 0 ? "left" : "right"]: "-10px" }}
                    ></div>
                    <Copy>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {step.title}
                      </h3>
                    </Copy>
                    <Copy delay={0.1}>
                      <p className="text-muted-foreground ">
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
            <Copy delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-secondary/50 uppercase tracking-tight">
                What Our Partners Say
              </h2>
            </Copy>
          </MotionDiv>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:25s]">
              {firstRow.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]">
              {secondRow.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
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
            <Copy delay={0.1}>
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
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card h-[24vh] rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 z-0">
                    {location.flagUrl ? (
                      <Image
                        src={location.flagUrl}
                        alt={`${location.country} flag`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt={`${location.country} background`}
                        fill
                        className="object-cover opacity-20"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-card/70 to-card/80"></div>
                  </div>
                  <CardContent className="p-6 relative z-10 flex items-center justify-center h-full">
                    <Copy>
                      <h3 className="font-bold text-2xl uppercase text-secondary text-center">
                        {location.country}
                      </h3>
                    </Copy>
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
                <Copy key={index} delay={0.1}>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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
