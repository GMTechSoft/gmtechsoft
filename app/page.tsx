import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import FeaturedWork from "@/components/home/FeaturedWork";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
