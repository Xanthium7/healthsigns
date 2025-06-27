"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { CustomMarquee } from "@/components/ui/custom-marquee";
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
  const controls = useAnimation(); // Video modal state
  const [isVideoMuted, setIsVideoMuted] = React.useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const [videoProgress, setVideoProgress] = React.useState(0);
  const [videoDuration, setVideoDuration] = React.useState(0);
  const [videoBuffered, setVideoBuffered] = React.useState(0);
  const [videoError, setVideoError] = React.useState<string | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    controls.start("visible");
  }, [controls]); // Video control functions
  const handlePlayPause = async () => {
    if (!videoRef.current) return;

    try {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        // Ensure video is ready before playing
        if (videoRef.current.readyState >= 2) {
          await videoRef.current.play();
          setIsVideoPlaying(true);
        } else {
          console.log("Video not ready to play yet");
        }
      }
    } catch (error) {
      console.warn("Play/pause error:", error);
      setIsVideoPlaying(false);
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
      try {
        videoRef.current.muted = isVideoMuted;
        setVideoDuration(videoRef.current.duration || 0);
        setVideoError(null);
        console.log("Video loaded successfully");
      } catch (error) {
        console.warn("Video load error:", error);
        setVideoError("Failed to load video metadata");
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);

      // Track buffered amount
      if (videoRef.current.buffered.length > 0) {
        const bufferedEnd = videoRef.current.buffered.end(
          videoRef.current.buffered.length - 1
        );
        const bufferedProgress =
          (bufferedEnd / videoRef.current.duration) * 100;
        setVideoBuffered(bufferedProgress);
      }
    }
  };
  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const video = e.currentTarget;
    let errorMessage = "Video loading failed";

    if (video.error) {
      switch (video.error.code) {
        case video.error.MEDIA_ERR_ABORTED:
          errorMessage = "Video loading was aborted by user";
          break;
        case video.error.MEDIA_ERR_NETWORK:
          errorMessage = "Network error - check your internet connection";
          break;
        case video.error.MEDIA_ERR_DECODE:
          errorMessage = "Video format error - file may be corrupted";
          break;
        case video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMessage = "Video format not supported by your browser";
          break;
        default:
          errorMessage = `Video error code: ${video.error.code}`;
      }
    } else {
      errorMessage = "Video failed to load - please try refreshing the page";
    }

    setVideoError(errorMessage);
    console.warn("Video error:", errorMessage);
    // Don't throw the error to prevent crashes
  };

  const handleVideoWaiting = () => {
    console.log("Video is buffering...");
  };

  const handleVideoCanPlay = () => {
    console.log("Video can start playing");
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
    setVideoBuffered(0);
    setVideoError(null);
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
    {
      name: "Appisoft",
      region: "One stop location for IT and Consulting Services",
    },
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
            <Copy delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-secondary/70 uppercase tracking-tight leading-tight">
                Transforming Healthcare
              </h1>
            </Copy>
            <Copy delay={0.1} animateOnScroll={false}>
              <p className="text-xl text-muted-foreground  font-jakarta leading-relaxed">
                HealthSigns leverages AI and healthcare expertise to transform
                patient care and streamline operations. Our innovative solutions
                help providers deliver better outcomes across the healthcare
                ecosystem.
              </p>

              <p className="text-xl text-muted-foreground font-jakarta leading-relaxed">
                Our mission is to make healthcare more accessible and effective
                by bridging advanced technology with compassionate care,
                empowering providers to deliver exceptional results.
              </p>
            </Copy>{" "}
            <Copy delay={0.1} animateOnScroll={false}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
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
                          onLoadedMetadata={() => {
                            if (videoRef.current) {
                              setVideoDuration(videoRef.current.duration || 0);
                            }
                          }}
                          onError={handleVideoError}
                          onWaiting={handleVideoWaiting}
                          onCanPlay={handleVideoCanPlay}
                          playsInline
                          preload="metadata"
                          muted
                          style={{ backgroundColor: "#000" }}
                        >
                          {/* Primary video source */}
                          <source
                            src="https://www.dropbox.com/scl/fi/sqgd8ogq6qwsacl6na1o5/demo_video.mp4?rlkey=mjzdayjdafc3jlfz6570vokc0&st=1q4twgej&raw=1"
                            type="video/mp4"
                          />
                          {/* Fallback video source */}
                          <source
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            type="video/mp4"
                          />
                          <p className="text-white/60 p-4 text-center">
                            Your browser does not support video playback. Please
                            try updating your browser or use a different one.
                          </p>
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
                          {" "}
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
                              {/* Buffer indicator */}
                              <div
                                className="h-full bg-white/30 rounded-full transition-all duration-200"
                                style={{ width: `${videoBuffered}%` }}
                              ></div>
                              {/* Progress fill */}
                              <div
                                className="h-full bg-gradient-to-r from-primary via-primary/80 to-secondary rounded-full transition-all duration-200 relative overflow-hidden absolute top-0 left-0"
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
                          </div>{" "}
                          {/* Error display */}
                          {videoError && (
                            <div className="mb-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                              <p className="text-red-300 text-sm mb-2">
                                {videoError}
                              </p>
                              <button
                                onClick={() => {
                                  setVideoError(null);
                                  if (videoRef.current) {
                                    videoRef.current.load();
                                  }
                                }}
                                className="text-xs bg-red-500/30 hover:bg-red-500/50 px-2 py-1 rounded transition-colors"
                              >
                                Retry
                              </button>
                            </div>
                          )}
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
      {/* What We Do Section */}
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
                What We Do
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-primary" />,
                title: "AI-Powered Diagnostics",
                description:
                  "Advanced machine learning algorithms that analyze medical data to provide accurate, fast, and reliable diagnostic insights.",
              },
              {
                icon: <Activity className="w-12 h-12 text-primary" />,
                title: "Remote Patient Monitoring",
                description:
                  "Continuous health tracking through connected devices, enabling proactive care and early intervention.",
              },
              {
                icon: <FileText className="w-12 h-12 text-primary" />,
                title: "Health Records Integration",
                description:
                  "Seamless integration of health data from multiple sources into a unified, secure platform.",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-primary" />,
                title: "Predictive Analytics",
                description:
                  "Data-driven insights that predict health trends and identify potential risk factors before they become critical.",
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-primary" />,
                title: "Clinical Decision Support",
                description:
                  "Evidence-based recommendations that assist healthcare providers in making informed treatment decisions.",
              },
              {
                icon: <Calendar className="w-12 h-12 text-primary" />,
                title: "Care Coordination",
                description:
                  "Streamlined communication and workflow management across healthcare teams and facilities.",
              },
            ].map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <CardContent className="p-0 text-center">
                    <Copy>
                      <div className="mb-4 flex justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-jakarta leading-relaxed">
                        {service.description}
                      </p>
                    </Copy>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      {/* Who We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
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
            <div className="text-center mb-12">
              <Copy>
                <h2 className="text-secondary/30 uppercase text-4xl md:text-5xl font-extrabold tracking-tight">
                  WHO DO WE SERVE ?
                </h2>
              </Copy>
            </div>

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
      {/* What Makes Us Different Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
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
                What Makes Us Different
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Copy>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Shield className="w-8 h-8 text-primary" />,
                      title: "Privacy-First Approach",
                      description:
                        "HIPAA-compliant security with end-to-end encryption ensuring patient data protection.",
                    },
                    {
                      icon: <Zap className="w-8 h-8 text-primary" />,
                      title: "Real-Time Processing",
                      description:
                        "Instant analysis and alerts that enable immediate response to critical health changes.",
                    },
                    {
                      icon: <Globe className="w-8 h-8 text-primary" />,
                      title: "Global Scalability",
                      description:
                        "Cloud-native architecture that scales seamlessly across different healthcare systems worldwide.",
                    },
                    {
                      icon: <Heart className="w-8 h-8 text-primary" />,
                      title: "Human-Centered Design",
                      description:
                        "Technology that enhances, not replaces, the human connection in healthcare delivery.",
                    },
                  ].map((differentiator, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        {differentiator.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {differentiator.title}
                        </h3>
                        <p className="text-muted-foreground font-jakarta">
                          {differentiator.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Copy>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ai_insight.png"
                  alt="HealthSigns AI Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* Leadership Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <Copy delay={0.1}>
              <div className="flex flex-row items-center justify-between gap-4 text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight ">
                  Leadership Team
                </h2>
                <div className="bg-red-500 w-32 h-20"></div>
              </div>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Executive Officer",
                image: "/placeholder-user.jpg",
                bio: "Former VP of Digital Health at Johns Hopkins, leading healthcare innovation for over 15 years.",
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                image: "/placeholder-user.jpg",
                bio: "Ex-Google AI researcher with 12+ years experience in machine learning and healthcare applications.",
              },
              {
                name: "Dr. Priya Patel",
                role: "Chief Medical Officer",
                image: "/placeholder-user.jpg",
                bio: "Board-certified physician and healthcare informatics expert with extensive clinical experience.",
              },
            ].map((leader, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
                  <CardContent className="p-0">
                    <Copy>
                      <div className="mb-4">
                        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {leader.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {leader.role}
                      </p>
                      <p className="text-muted-foreground font-jakarta text-sm leading-relaxed">
                        {leader.bio}
                      </p>
                    </Copy>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      {/* Our Partners Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
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
                Our Strategic Partners
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <CardContent className="p-0">
                    <Copy>
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0 w-24 h-16 bg-background rounded-xl flex items-center justify-center border border-primary/20 overflow-hidden">
                          <Image
                            src={
                              partner.name === "Appisoft"
                                ? "/appisoft.png"
                                : "/ticsocial.png"
                            }
                            alt={`${partner.name} logo`}
                            width={80}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 text-center mt-4 md:text-left">
                          <p className="text-muted-foreground font-jakarta leading-relaxed">
                            {partner.region}
                          </p>
                        </div>
                      </div>
                    </Copy>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      {/* Our Impact Section */}
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
                Our Impact
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                number: "10,000+",
                label: "Patients Monitored",
              },
              {
                icon: <Building2 className="w-8 h-8 text-primary" />,
                number: "50+",
                label: "Healthcare Facilities",
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                number: "15",
                label: "Countries Served",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                number: "98%",
                label: "Accuracy Rate",
              },
            ].map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
                  <CardContent className="p-0">
                    <Copy>
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          {stat.icon}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-2 text-primary">
                        {stat.number}
                      </h3>
                      <p className="text-muted-foreground font-jakarta">
                        {stat.label}
                      </p>
                    </Copy>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      {/* Media Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
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
                In The Media
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HealthSigns Revolutionizes Remote Patient Care",
                publication: "Healthcare Tech Magazine",
                date: "March 2024",
                description:
                  "How AI-powered monitoring is changing the landscape of healthcare delivery.",
              },
              {
                title: "The Future of Medical AI",
                publication: "Medical Innovation Today",
                date: "February 2024",
                description:
                  "Industry experts discuss the potential of artificial intelligence in healthcare.",
              },
              {
                title: "Breakthrough in Predictive Healthcare",
                publication: "Digital Health News",
                date: "January 2024",
                description:
                  "HealthSigns platform achieves 98% accuracy in early disease detection.",
              },
            ].map((article, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <CardContent className="p-0">
                    <Copy>
                      <div className="mb-4">
                        <span className="text-sm text-primary font-medium">
                          {article.publication}
                        </span>
                        <span className="text-sm text-muted-foreground ml-2">
                          • {article.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground font-jakarta text-sm leading-relaxed">
                        {article.description}
                      </p>
                    </Copy>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      {/* Careers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Copy delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-foreground uppercase tracking-tight">
                Join Our Mission
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 font-jakarta leading-relaxed">
                Be part of a team that's transforming healthcare through
                innovation. At HealthSigns, you'll work alongside brilliant
                minds, tackle meaningful challenges, and make a real impact on
                global health outcomes.
              </p>
            </Copy>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Sparkles className="w-8 h-8 text-primary" />,
                  title: "Innovation First",
                  description:
                    "Work with cutting-edge AI technology and pioneer the future of healthcare.",
                },
                {
                  icon: <Users className="w-8 h-8 text-primary" />,
                  title: "Collaborative Culture",
                  description:
                    "Join a diverse, inclusive team where every voice matters and ideas flourish.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-primary" />,
                  title: "Growth Opportunities",
                  description:
                    "Advance your career with continuous learning and professional development.",
                },
              ].map((benefit, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Copy>
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground font-jakarta">
                        {benefit.description}
                      </p>
                    </div>
                  </Copy>
                </MotionDiv>
              ))}
            </div>

            <Copy delay={0.1}>
              <div className="flex justify-center">
                <Link href="/career">
                  <InteractiveHoverButton>
                    Explore Career Opportunities
                  </InteractiveHoverButton>
                </Link>
              </div>
            </Copy>
          </MotionDiv>
        </div>
      </section>
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
            <Copy delay={0.1}>
              <p className="text-xl mb-8 opacity-90 font-jakarta">
                {" "}
                {/* Added font-jakarta */}
                At HealthSigns, we believe in the power of technology to
                transform healthcare. Join us on our mission to provide better
                care for patients around the world.
              </p>
            </Copy>
            <Copy delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <InteractiveHoverButton>Book a Call</InteractiveHoverButton>
                </Link>
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
