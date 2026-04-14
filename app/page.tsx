import HomeHero from "./components/homehero";
import WhyChoose from "./components/whyChoose";
import HowItWorks from "./components/howItWorks";
import FAQs from "./components/FAQs";
import LandingBot from "./components/landingbot";
import NumberStrip from "./components/numberStrip";

export default function Home() {
  return (
    <>
      <HomeHero/>
      <NumberStrip/>
      <WhyChoose/>
      <HowItWorks/>
      <FAQs/>
      <LandingBot/>
    </>
  );
}
