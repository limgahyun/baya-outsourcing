import Hero from "@/components/main/Hero";
import Problem from "@/components/main/Problem";
import Severity from "@/components/main/Severity";
import Necessity from "@/components/main/Necessity";
import Portfolio from "@/components/main/Portfolio";
import Testimonials from "@/components/main/Testimonials";
import Strategy from "@/components/main/Strategy";
import CTA from "@/components/main/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Severity />
      <Problem />
      <Necessity />
      <Portfolio />
      <Testimonials />
      <Strategy />
      <CTA />
    </>
  );
}
