"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Database,
  LineChart,
  Bell,
  RefreshCw,
  Users,
  Send,
} from "lucide-react";
import { BlurrySphere } from "@/components/ui/blurry-sphere";
import { toast } from "@/components/ui/use-toast";
import { EMAIL_CONFIG } from "@/config/email-config";
import Copy from "@/components/Copy";

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean; // Added privacy checkbox field
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string; // Added privacy error field
  [key: string]: string | undefined;
}

// Animated components
const MotionDiv = motion.div;

export default function AIPage() {
  // Animation controls
  const controls = useAnimation();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false, // Initialize privacy setting
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Form handlers
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
    if (formErrors[id]) {
      setFormErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.privacy)
      errors.privacy = "You must agree to the privacy policy";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Create Gmail compose URL
    const subject = encodeURIComponent(
      formData.subject || "AI Inquiry from Website"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message:\n${formData.message}`
    );

    // Open Gmail compose window using the config email
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_CONFIG.aiInquiriesEmail}&su=${subject}&body=${body}`,
      "_blank"
    );

    // Reset form and show success message
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
    setIsSubmitting(false);
    toast({
      title: "Message sent",
      description:
        "Your message has been prepared in Gmail. Check your browser window.",
      duration: 5000,
    });
  };

  // Define animations
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
            <MotionDiv className="text-center lg:text-left">
              <Copy animateOnScroll={false}>
                <h1 className="text-4xl md:text-5xl font-medium mb-6 text-primary">
                  Proprietary AI-Powered Monitoring for better Health Outcomes
                </h1>
              </Copy>
              <Copy animateOnScroll={false} delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  HealthSigns AI enhances monitoring, integrates data,
                  personalizes care, and offers proactive insights for better
                  outcomes. Stay ahead with HealthSigns.
                </p>
              </Copy>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full"
              >
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="blob h-[400px] w-full overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-background relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BlurrySphere
                    size={2.5}
                    colors={[
                      "hsl(var(--primary))",
                      "hsl(var(--primary)/0.8)",
                      "hsl(var(--primary)/0.6)",
                    ]}
                    className="pulse"
                    opacity={0.7}
                    animationDuration={12}
                  />
                </div>
              </div>

              {/* 3D Elements */}
              <div className="absolute -bottom-10 -right-10 z-10">
                <BlurrySphere
                  size={1}
                  colors={[
                    "hsl(var(--primary)/0.8)",
                    "hsl(var(--primary)/0.6)",
                    "hsl(var(--primary)/0.4)",
                  ]}
                  className="floating"
                  opacity={0.6}
                  animationDuration={10}
                />
              </div>
              <div className="absolute top-1/3 left-0 z-10 transform -translate-x-1/2">
                <BlurrySphere
                  size={0.7}
                  colors={[
                    "hsl(var(--primary)/0.6)",
                    "hsl(var(--primary)/0.4)",
                    "hsl(var(--primary)/0.2)",
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

      {/* How Our AI Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                How Our AI Works
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-lg text-muted-foreground">
                At HealthSigns, our AI technology empowers patients and
                healthcare providers with the tools and insights needed for
                proactive, personalized care. Experience the future of
                healthcare with our intelligent RPM solutions.
              </p>
            </Copy>
          </MotionDiv>
        </div>
      </section>

      {/* Intelligent Monitoring Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv>
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Intelligent Monitoring"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
            </MotionDiv>
            <MotionDiv>
              <Copy>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                  Intelligent Monitoring for Proactive Care
                </h2>
              </Copy>
              <Copy delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6">
                  At HealthSigns, our proprietary AI technology is at the heart
                  of our remote patient monitoring (RPM) services. Designed to
                  enhance patient care and streamline healthcare processes, our
                  AI works tirelessly behind the scenes to provide intelligent
                  insights and proactive health management.
                </p>
              </Copy>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                Key AI Features
              </h2>
            </Copy>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-12 w-12 text-primary" />,
                title: "Comprehensive Health Data Integration",
                description:
                  "Our AI system seamlessly integrates with various medical devices and wearables to collect vital health data such as heart rate, blood pressure, glucose levels, and more.",
              },
              {
                icon: <Brain className="h-12 w-12 text-primary" />,
                title: "Intelligent Clinical Decision Support",
                description:
                  "HealthSigns CDSS provides real-time, evidence-based recommendations to healthcare providers. It identifies health risks, suggests interventions, and guides treatment plans.",
              },
              {
                icon: <LineChart className="h-12 w-12 text-primary" />,
                title: "Real-Time Health Insights",
                description:
                  "Our AI system seamlessly integrates with various medical devices and wearables to collect vital health data such as heart rate, blood pressure, glucose levels, and more.",
              },
              {
                icon: <Bell className="h-12 w-12 text-primary" />,
                title: "Personalized Alerts and Recommendations",
                description:
                  "When our AI identifies a potential issue, it generates personalized alerts and recommendations. Healthcare providers receive real-time notifications, enabling them to intervene promptly.",
              },
              {
                icon: <RefreshCw className="h-12 w-12 text-primary" />,
                title: "Continuous Learning and Improvement",
                description:
                  "Our AI system continuously learns from the data it processes. This ongoing learning improves its accuracy and predictive capabilities over time.",
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Enhanced Patient Engagement",
                description:
                  "Our AI-powered platform fosters greater patient engagement by providing easy-to-understand health reports and recommendations.",
              },
            ].map((item, index) => (
              <MotionDiv key={index}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/10 to-background rounded-3xl card-3d">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
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
        </div>
      </section>

      {/* Predictive Analytics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv className="order-2 lg:order-1">
              <Copy>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                  Predictive Health Insights
                </h2>
              </Copy>
              <Copy delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6">
                  Our AI goes beyond just monitoring—it predicts potential
                  health risks by identifying patterns and trends in the
                  collected data. This predictive capability allows healthcare
                  providers to anticipate and address health concerns before
                  they become critical.
                </p>
              </Copy>
              <Copy delay={0.3}>
                <p className="text-lg text-muted-foreground">
                  By analyzing historical data and current health metrics, our
                  AI can identify subtle changes that might indicate the onset
                  of a health issue, enabling early intervention and better
                  patient outcomes.
                </p>
              </Copy>
            </MotionDiv>
            <MotionDiv className="order-1 lg:order-2">
              <div className="blob h-[400px] w-full overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-background relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BlurrySphere
                    size={2}
                    colors={[
                      "hsl(var(--primary)/0.8)",
                      "hsl(var(--primary))",
                      "hsl(var(--primary)/0.6)",
                    ]}
                    className="pulse"
                    opacity={0.6}
                    animationDuration={10}
                  />
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
