"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Card and CardContent might still be used for the overall layout
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { BlurrySphere } from "@/components/ui/blurry-sphere";
import { toast } from "@/components/ui/use-toast";
import { EMAIL_CONFIG } from "@/config/email-config";
import Copy from "@/components/Copy";
import SpotlightCard from "@/CoolComponents/SpotlightCard/SpotlightCard";
import Image from "next/image";
import Aurora from "@/Backgrounds/Aurora/Aurora"; // Import Aurora

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Zod Schema for form validation
const contactFormSchema = z.object({
  fullname: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Email is invalid." }),
  subject: z.string().optional(),
  message: z.string().min(1, { message: "Message is required." }),
  privacy: z.boolean().refine((value) => value === true, {
    message: "You must agree to the privacy policy.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Animated components
const MotionDiv = motion.div;

export default function ContactPage() {
  const controls = useAnimation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
      privacy: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  // formErrors state is now handled by react-hook-form via form.formState.errors

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Form handlers (handleInputChange and validateForm are no longer needed)

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Create Gmail compose URL
      const subject = encodeURIComponent(
        data.subject ? data.subject : "Contact Form Submission"
      );
      const body = encodeURIComponent(
        `Name: ${data.fullname}\n` +
          `Email: ${data.email}\n\n` +
          `Message:\n${data.message}`
      );

      // Open Gmail compose window using the config email
      const mailWindow = window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_CONFIG.contactEmail}&su=${subject}&body=${body}`,
        "_blank"
      );

      if (!mailWindow) {
        toast({
          title: "Popup Blocked?",
          description:
            "The Gmail window might have been blocked. Please check your browser's popup settings and try again, or allow popups for this site.",
          variant: "destructive", // Or "warning" if available/preferred
          duration: 7000,
        });
      }

      // Reset form and show success
      form.reset();
      toast({
        title: "Message prepared",
        description:
          "Your message has been prepared in Gmail. Please check your browser window or tab. If it didn't open, ensure popups are allowed for this site.",
        duration: 6000, // Slightly longer duration for more info
      });
    } catch (error) {
      console.error("Error during form submission:", error);
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactItems = [
    {
      icon: <Mail className="h-8 w-8 text-secondary" />, // Adjusted icon color to secondary as per SpotlightCard example
      title: "Email",
      description: EMAIL_CONFIG.displayEmail,
    },
    {
      icon: <Phone className="h-8 w-8 text-secondary" />,
      title: "Phone",
      description: "+1 9732706212",
    },
    {
      icon: <MapPin className="h-8 w-8 text-secondary" />,
      title: "Address",
      description: "30 N Gould St # 29714 Sheridan, WY 82801",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 pt-24 bg-gradient-to-br from-primary/10 to-background relative">
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 flex">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto w-1/2"
          >
            <Copy animateOnScroll={false}>
              <h1 className="text-4xl md:text-7xl font-extrabold text-left uppercase mb-6 text-primary/80">
                Get in Touch
              </h1>
            </Copy>
            <Copy animateOnScroll={false} delay={0.2}>
              <p className="text-lg md:text-xl text-left text-muted-foreground mb-8">
                Have questions about our services or want to schedule a demo?
                Our team is here to help. Reach out to us using any of the
                methods below.
              </p>
            </Copy>
          </MotionDiv>
          <div className="w-1/2  relative flex justify-center items-center ">
            <Image
              className="absolute -top-24 left-1/4 z-50"
              src={"/customer_support.png"}
              width={450}
              height={450}
              alt="customer suppport"
            />
          </div>

          {/* 3D Elements */}

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
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[hsl(var(--background))] to-transparent pointer-events-none z-[5]"></div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-background relative overflow-hidden z-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactItems.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard
                  className="h-full bg-gray-100/5 dark:bg-gray-800/50 border border-secondary/20 hover:shadow-secondary/10 shadow-lg transition-shadow duration-300 rounded-xl p-6" // Adjusted bg for theme
                  spotlightColor="rgba(0, 229, 255, 0.2)" // Example color, adjust as needed
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="flex justify-center items-center mb-4 bg-secondary/10 p-3 rounded-full w-16 h-16 flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold uppercase mb-2 text-secondary tracking-wide">
                      {item.title}
                    </h3>
                    <Copy delay={0.01} animateOnScroll={false}>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </Copy>
                  </div>
                </SpotlightCard>
              </MotionDiv>
            ))}
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
                      <div className="w-full h-full bg-[url('https://images.pexels.com/photos/3780104/pexels-photo-3780104.png?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-between  p-8 z-10 text-primary-foreground">
                      <div className="flex justify-center items-center ">
                        <Copy>
                          <h3 className="text-6xl font-medium mt-6">
                            Reach Out to Our Team
                          </h3>
                        </Copy>
                      </div>
                      <div>
                        <Copy delay={0.2}>
                          <p className="mb-8 text-lg opacity-90">
                            We're excited to hear from you and learn how we can
                            help transform your healthcare operations with our
                            AI solutions.
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
                      </div>

                      <div>
                        <div className="h-1 w-16 bg-primary/50 rounded mb-4"></div>
                        <Copy delay={0.3} animateOnScroll={false}>
                          <p className="text-sm opacity-80">
                            Your privacy matters to us. We are committed to
                            protecting your personal information.
                          </p>
                        </Copy>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <Copy>
                    <h2 className="text-2xl font-medium mb-8 text-primary">
                      Send Us a Message
                    </h2>
                  </Copy>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Full Name{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                className="py-6 px-4 rounded-xl" // Example of custom styling if needed
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Email Address{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                {...field}
                                className="py-6 px-4 rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="py-6 px-4 rounded-xl">
                                  <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general">
                                  General Inquiry
                                </SelectItem>
                                <SelectItem value="demo">
                                  Schedule a Demo
                                </SelectItem>
                                <SelectItem value="pricing">
                                  Pricing & Plans
                                </SelectItem>
                                <SelectItem value="support">
                                  Technical Support
                                </SelectItem>
                                <SelectItem value="partnership">
                                  Partnership Opportunities
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Your Message{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="How can we help you today?"
                                {...field}
                                rows={5}
                                className="py-4 px-4 rounded-xl min-h-[120px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="privacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the privacy policy and terms of
                                service
                              </FormLabel>
                              <FormDescription>
                                You must agree to our terms and conditions.
                              </FormDescription>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting || !form.formState.isValid} // Disable if submitting or form is invalid
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-xl py-4 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}{" "}
                        <Send className="ml-2.5 h-5 w-5" />
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </Card>
          </MotionDiv>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[hsl(var(--background))] to-transparent pointer-events-none z-[5]"></div>
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
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[hsl(var(--background))] to-transparent pointer-events-none z-[5]"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3d2323]  text-primary-foreground relative overflow-hidden">
        {" "}
        {/* Removed gradient, added overflow-hidden */}
        {/* Aurora as background */}
        <div className="absolute inset-0 z-0 pointer-events-none ">
          <Aurora
            colorStops={["#f50029", "#FF0037", "#FF0000"]}
            blend={1}
            amplitude={0.5}
            speed={1.5}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern bg-[length:20px_20px] opacity-[0.1] pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          {" "}
          {/* Ensure content is above Aurora */}
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
          </MotionDiv>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary/50 rounded-full blur-3xl opacity-30"></div>
      </section>
    </div>
  );
}
