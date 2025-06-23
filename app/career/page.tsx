"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Copy from "@/components/Copy";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

// Create a more robust dynamic import with better error handling
const LanyardWrapper = dynamic(
  () =>
    import("@/CoolComponents/Lanyard/LanyardWrapper").catch(() => {
      // Return a fallback component if import fails
      return {
        default: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-pulse text-gray-500 mb-4">
                3D Animation Loading...
              </div>
              <div className="text-sm text-gray-400">
                Please wait while we load the interactive content
              </div>
            </div>
          </div>
        ),
      };
    }),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    ),
  }
);

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "CEO & Chief Innovator",
    description:
      "With over 20 years in health-tech, Dr. Reed pioneers AI solutions, driving our mission to revolutionize patient care globally.",
    email: "evelyn.reed@healthsigns.com",
    phone: "+1 (555) 123-4501",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Marcus Chen",
    role: "Marketing Director",
    description:
      "Marcus crafts compelling narratives that connect HealthSigns with the global healthcare community, amplifying our impact.",
    email: "marcus.chen@healthsigns.com",
    phone: "+1 (555) 123-4502",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Aisha Khan",
    role: "Lead AI Developer",
    description:
      "Aisha leads our brilliant development team, architecting the sophisticated AI algorithms that power our innovative solutions.",
    email: "aisha.khan@healthsigns.com",
    phone: "+1 (555) 123-4503",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Dr. Ben Carter",
    role: "Head of Research & Development",
    description:
      "Dr. Carter spearheads our R&D efforts, ensuring HealthSigns remains at the cutting edge of medical AI technology and ethical practices.",
    email: "ben.carter@healthsigns.com",
    phone: "+1 (555) 123-4504",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Sofia Ramirez",
    role: "Operations Manager",
    description:
      "Sofia ensures seamless operations, enabling our team to focus on innovation and delivering exceptional value to our partners.",
    email: "sofia.ramirez@healthsigns.com",
    phone: "+1 (555) 123-4505",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Kenji Tanaka",
    role: "Senior UX Designer",
    description:
      "Kenji designs intuitive and user-centric interfaces, making complex AI tools accessible and effective for healthcare professionals.",
    email: "kenji.tanaka@healthsigns.com",
    phone: "+1 (555) 123-4506",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
  },
];

export default function Career() {
  const [shouldRenderLanyard, setShouldRenderLanyard] = useState(false);

  useEffect(() => {
    // Delay the rendering of the 3D component to avoid hydration issues
    const timer = setTimeout(() => {
      setShouldRenderLanyard(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row relative items-center justify-center min-h-screen bg-background px-4 lg:px-0">
        <div className="w-full lg:w-1/2 h-full flex justify-center container flex-col text-center lg:text-left py-8 lg:py-0">
          <Copy delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary/80 text-center lg:text-left font-extrabold mb-4 lg:mb-6 uppercase leading-tight">
              <span className="lg:hidden">Career Opportunities</span>
              <span className="hidden lg:block">
                Career
                <br />
                Opportunities
              </span>
            </h1>
          </Copy>
          <Copy delay={0.1}>
            <p className="text-base sm:text-lg lg:text-lg text-center lg:text-left text-secondary mb-3 lg:mb-4 px-2 lg:px-0 leading-relaxed">
              Joining HealthSigns offers a unique opportunity to be at the
              forefront of healthcare innovation, where your work directly
              contributes to the betterment of society.
            </p>
            <p className="text-sm sm:text-base lg:text-base text-center lg:text-left text-secondary/80 mb-6 lg:mb-3 px-2 lg:px-0 leading-relaxed">
              Here, you'll explore a dynamic career in AI, developing
              cutting-edge solutions that transform patient care globally. Our
              strategic and experienced team fosters a collaborative
              environment, encouraging professional growth and the pursuit of
              excellence. Be a part of a mission-driven organization that values
              your expertise and is dedicated to making a meaningful impact in
              the world of health-tech.
            </p>
          </Copy>
          <div className="flex justify-center lg:justify-start mt-4 lg:mt-6">
            <InteractiveHoverButton color="#256789" borderColor="#1d4f6b">
              <Link
                href={"/contact"}
                className="text-base sm:text-lg lg:text-base"
              >
                Explore Opportunities
              </Link>
            </InteractiveHoverButton>
          </div>
        </div>

        {/* Hide Lanyard on mobile screens */}
        <div className="hidden lg:block z-10 w-1/2 h-full">
          {shouldRenderLanyard ? (
            <LanyardWrapper position={[0, 0, 15]} gravity={[0, -40, 0]} />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse text-gray-500 mb-4 text-base">
                  Initializing 3D Environment...
                </div>
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="w-full bg-background py-12 lg:py-20 px-4">
        <div className="container mx-auto">
          <Copy delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-secondary/80 text-center font-extrabold mb-8 lg:mb-12 uppercase leading-tight">
              Meet Our Team
            </h2>
          </Copy>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-primary/10"
              >
                {/* Profile Picture */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <Image
                      src={member.image}
                      alt={`${member.name} profile picture`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-md sm:text-lg text-accent font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-secondary/90 leading-relaxed mb-4 flex-grow text-center">
                  {member.description}
                </p>

                {/* Contact Information */}
                <div className="mt-auto pt-4 border-t border-primary/10">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:underline"
                      >
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:underline"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
