import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Severity from "@/components/Severity";
import Necessity from "@/components/Necessity";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Strategy from "@/components/Strategy";
import CTA from "@/components/CTA";

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
