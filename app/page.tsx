import BookingForm from "@/components/get_quote";
import LandingPage from "@/components/langing";
import Navbar from "@/components/navbar";
import Services from "@/components/services";


export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Services />
      <BookingForm />
    </>
  );
}
