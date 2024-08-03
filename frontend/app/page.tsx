import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutContainer from "@/components/AboutContainer";
import HeroOne from "@/components/HeroOne";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HeroOne/>
    </>
  );
}
