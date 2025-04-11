import Hero from "./components/Hero";
import IndustryDropdown from "./components/IndustryDropdown";
import Innocation from "./components/Innovation";
import ServiceSection from "./components/Service";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IndustryDropdown />
      <Innocation />
      <ServiceSection />
      <Testimonials />
      <Technologies />
      <WhyChooseUs />
    </>
  );
}
