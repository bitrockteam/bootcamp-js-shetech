import Image from "next/image";
import { HeroSection } from "./Components/HeroSection";
import { SocialSection } from "./Components/SocialSection";

export default function Home() {

  console.log('ciao')
  return (
    <>
      <HeroSection />
      <SocialSection />
    </>
  );
}
