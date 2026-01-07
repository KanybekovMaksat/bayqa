"use client";
import Hero from '@/components/about/Hero';
import Benefits from '@/components/about/Benefits';
import BioElements from '@/components/about/BioElements';
import Pricing from '@/components/about/Pricing';
import ClientBenefits from '@/components/about/ClientBenefits';
import Footer from '@/components/about/Footer';


export default function Home() {
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
