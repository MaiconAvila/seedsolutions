"use client"

import { Hero } from "@/components/sections/animated-hero"
import { Benefits } from "@/components/sections/benefits"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Features } from "@/components/sections/features"
import { SocialProof } from "@/components/sections/social-proof"
import { Comparison } from "@/components/sections/comparison"
import { FAQ } from "@/components/sections/faq"
import { Guarantee } from "@/components/sections/guarantee"
import { Footer } from "@/components/sections/footer"
import { ContactForm } from "@/components/sections/contact-form"

const Page = () => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Background pontilhado */}
      <div className="fixed top-0 left-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Conteúdo */}
      <div className="relative z-10 overflow-hidden">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Comparison />
        <FAQ />
        <Guarantee />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
