import FAQs from "@/components/home features/FAQs";
import Hero from "@/components/home features/Hero";
import Highlights from "@/components/home features/Highlights";
import OurTeam from "@/components/home features/OurTeam";
import Testimonials from "@/components/home features/Testimonials";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Highlights Section */}
      <Highlights />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQs */}
      <FAQs />

      {/* Team */}
      <OurTeam />
    </>
  );
}
