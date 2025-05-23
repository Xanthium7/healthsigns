"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { BlurrySphere } from "@/components/ui/blurry-sphere";
import { toast } from "@/components/ui/use-toast";
import { EMAIL_CONFIG } from "@/config/email-config";
import Copy from "@/components/Copy";

// Type definitions
interface FormData {
  fullname: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  fullname?: string;
  email?: string;
  message?: string;
  privacy?: string;
  [key: string]: string | undefined;
}

// Animated components
const MotionDiv = motion.div;

export default function ContactPage() {
  // Animation controls
  const controls = useAnimation();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
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

    // Clear error when user interacts with field
    if (formErrors[id]) {
      setFormErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.fullname.trim()) errors.fullname = "Name is required";
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
      formData.subject ? formData.subject : "Contact Form Submission"
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullname}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    // Open Gmail compose window using the config email
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_CONFIG.contactEmail}&su=${subject}&body=${body}`,
      "_blank"
    );

    // Reset form and show success
    setFormData({
      fullname: "",
      email: "",
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <Copy animateOnScroll={false}>
              <h1 className="text-4xl md:text-5xl font-medium mb-6 text-primary">
                Get in Touch
              </h1>
            </Copy>
            <Copy animateOnScroll={false} delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Have questions about our services or want to schedule a demo?
                Our team is here to help. Reach out to us using any of the
                methods below.
              </p>
            </Copy>
          </MotionDiv>

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
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/10 to-background rounded-3xl card-3d">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <Copy>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      Email
                    </h3>
                  </Copy>
                  <Copy delay={0.1}>
                    <p className="text-muted-foreground">
                      {EMAIL_CONFIG.displayEmail}
                    </p>
                  </Copy>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/10 to-background rounded-3xl card-3d">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-secondary" />
                  </div>
                  <Copy>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      Phone
                    </h3>
                  </Copy>
                  <Copy delay={0.1}>
                    <p className="text-muted-foreground">+1 9732706212</p>
                  </Copy>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/10 to-background rounded-3xl card-3d">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <Copy>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      Address
                    </h3>
                  </Copy>
                  <Copy delay={0.1}>
                    <p className="text-muted-foreground">
                      30 N Gould St # 29714 Sheridan, WY 82801
                    </p>
                  </Copy>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="border-none shadow-xl bg-gradient-to-br from-primary/10 to-background rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Visual Element */}
                <div className="relative h-full min-h-[300px] lg:min-h-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-[url('https://i.pinimg.com/236x/d7/34/e7/d734e755f690c7fe18b4bbfbef688fb3.jpg')] bg-cover bg-center"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-center p-8 z-10 text-primary-foreground">
                      <Copy>
                        <h3 className="text-3xl font-medium mb-6">
                          Let's Start a Conversation
                        </h3>
                      </Copy>
                      <Copy delay={0.2}>
                        <p className="mb-8 text-lg opacity-90">
                          We're excited to hear from you and learn how we can
                          help transform your healthcare operations with our AI
                          solutions.
                        </p>
                      </Copy>

                      <div className="space-y-6 mb-10">
                        <div className="flex items-center">
                          <div className="bg-primary/20 p-3 rounded-full mr-4">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm opacity-75">Email us at</p>
                            <p className="font-medium">
                              {EMAIL_CONFIG.displayEmail}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="bg-primary/20 p-3 rounded-full mr-4">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm opacity-75">Call us at</p>
                            <p className="font-medium">+1 (973) 270-6212</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="bg-primary/20 p-3 rounded-full mr-4">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm opacity-75">
                              Visit our office
                            </p>
                            <p className="font-medium">
                              30 N Gould St # 29714 Sheridan, WY 82801
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="h-1 w-16 bg-primary/50 rounded mb-4"></div>
                        <Copy delay={0.3}>
                          <p className="text-sm opacity-80">
                            Your privacy matters to us. We're committed to
                            protecting your personal information.
                          </p>
                        </Copy>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="p-8 lg:p-10">
                  <Copy>
                    <h2 className="text-2xl font-medium mb-6 text-primary">
                      Send Us a Message
                    </h2>
                  </Copy>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label
                          htmlFor="fullname"
                          className="block text-sm font-medium text-muted-foreground mb-1"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullname"
                          placeholder="John Doe"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 md:py-3 border ${
                            formErrors.fullname
                              ? "border-destructive"
                              : "border-border"
                          } rounded-full focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground transition-colors text-base`}
                        />
                        {formErrors.fullname && (
                          <p className="text-destructive text-xs mt-1">
                            {formErrors.fullname}
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
                          className={`w-full px-4 py-2.5 md:py-3 border ${
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
                          className="w-full px-4 py-2.5 md:py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-ring bg-input text-foreground transition-colors text-base appearance-none bg-no-repeat bg-right"
                          style={{
                            backgroundImage:
                              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                          }}
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="demo">Schedule a Demo</option>
                          <option value="pricing">Pricing & Plans</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">
                            Partnership Opportunities
                          </option>
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
                          placeholder="How can we help you today?"
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 md:py-3 border ${
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
                        <p className="text-destructive text-xs">
                          {formErrors.privacy}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-full py-3 md:py-6 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 text-base"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}{" "}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </MotionDiv>
        </div>
      </section>

      {/* Map Section */}
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
                Our Location
              </h2>
            </Copy>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[500px] w-full glass"
          >
            <div className="w-full h-full bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3022.913174580775!2d-74.367089!3d40.741936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3af1b056494d7%3A0x636449a1c178dbc0!2sRegus%20-%20Short%20Hills%20-%2051%20JFK%20Parkway!5e0!3m2!1sen!2sin!4v1745235095605!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HealthSigns AI Office Location"
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Copy>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to transform healthcare with AI?
              </h2>
            </Copy>
            <Copy delay={0.2}>
              <p className="text-xl mb-8">
                Join us in our mission to provide better care for patients
                around the world through innovative Remote Patient Management
                solutions.
              </p>
            </Copy>
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-muted rounded-full"
            >
              Schedule a Demo
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
