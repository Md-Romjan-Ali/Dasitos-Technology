import AboutUs from "@/component/AboutUs";
import Hero from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import Sponsore from "@/component/Sponsore";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Sponsore />
      <AboutUs />
    </div>
  );
}
