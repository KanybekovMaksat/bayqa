"use client";

import Benefits from "../components/about/Benefits";
import BioElements from "../components/about/BioElements";
import ClientBenefits from "../components/about/ClientBenefits";
import Footer from "../components/about/Footer";
import Hero from "../components/about/Hero";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Benefits />
      <BioElements />
      {/* <Pricing /> */}
      <ClientBenefits />
      <Footer />
    </div>
  );
}
