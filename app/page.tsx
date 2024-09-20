import LandingPage from "@/components/langing";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Services />
    </>
  );
}
