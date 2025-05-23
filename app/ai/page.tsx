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

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
                Contact Us
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Interested in learning more about our AI-powered healthcare
                solutions? Get in touch with our team today.
              </p>
            </Copy>
          </MotionDiv>

          <div className="max-w-6xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-br from-primary/10 to-background rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Banner Image Column */}
                <MotionDiv className="relative h-full min-h-[300px] lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src="https://i.pinimg.com/236x/d7/34/e7/d734e755f690c7fe18b4bbfbef688fb3.jpg"
                        alt="Contact us"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-full flex flex-col justify-center p-8 z-10 text-primary-foreground">
                      <Copy>
                        <h3 className="text-2xl font-medium mb-4">
                          Get in Touch
                        </h3>
                      </Copy>
                      <Copy delay={0.2}>
                        <p className="mb-6">
                          We're here to answer your questions about our
                          AI-powered healthcare solutions.
                        </p>
                      </Copy>

                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="bg-primary/20 p-2 rounded-full mr-3">
                            <Send className="h-4 w-4" />
                          </div>
                          <span>contact@healthsigns.com</span>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-primary/20 p-2 rounded-full mr-3">
                            <Bell className="h-4 w-4" />
                          </div>
                          <span>+1 (888) 123-4567</span>
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="h-1 w-16 bg-primary/50 rounded mb-4"></div>
                        <Copy delay={0.3}>
                          <p className="text-sm opacity-80">
                            Your health data is secure with us. We adhere to
                            HIPAA compliance standards.
                          </p>
                        </Copy>
                      </div>
                    </div>
                  </div>
                </MotionDiv>

                {/* Form Column */}
                <MotionDiv>
                  <CardContent className="p-8 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-muted-foreground mb-1"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2.5 md:py-2 border ${
                              formErrors.name
                                ? "border-destructive"
                                : "border-border"
                            } rounded-full focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground transition-colors text-base`}
                          />
                          {formErrors.name && (
                            <p className="text-destructive text-xs mt-1">
                              {formErrors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-muted-foreground mb-1"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2.5 md:py-2 border ${
                              formErrors.email
                                ? "border-destructive"
                                : "border-border"
                            } rounded-full focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground transition-colors text-base`}
                          />
                          {formErrors.email && (
                            <p className="text-destructive text-xs mt-1">
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 md:py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground transition-colors text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 md:py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground transition-colors text-base appearance-none bg-no-repeat bg-right"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                          }}
                        >
                          <option value="">Select a topic</option>
                          <option value="demo">Request a Demo</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          Your Message{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 md:py-2 border ${
                            formErrors.message
                              ? "border-destructive"
                              : "border-border"
                          } rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground transition-colors text-base`}
                        ></textarea>
                        {formErrors.message && (
                          <p className="text-destructive text-xs mt-1">
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      {/* Add privacy checkbox matching the contact page */}
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            checked={formData.privacy}
                            onChange={handleInputChange}
                            className={`w-4 h-4 border ${
                              formErrors.privacy
                                ? "border-destructive"
                                : "border-border"
                            } rounded bg-muted focus:ring-3 focus:ring-ring/50`}
                            required
                          />
                        </div>
                        <label
                          htmlFor="privacy"
                          className={`ml-2 text-sm ${
                            formErrors.privacy
                              ? "text-destructive"
                              : "text-muted-foreground"
                          }`}
                        >
                          I agree to the privacy policy and terms of service
                        </label>
                      </div>
                      {formErrors.privacy && (
                        <p className="text-destructive text-xs mt-1">
                          {formErrors.privacy}
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full py-3 md:py-6 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 text-base"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}{" "}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </MotionDiv>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
