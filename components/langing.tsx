import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Signature Shine: Premium Mobile Detailing
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            At Signature Shine, we bring top-quality car detailing directly to
            you. No more dealing with long waits or busy schedules. Our
            professional team arrives fully equipped to make your vehicle look
            its absolute best, inside and out.
          </p>
          <div className="flex gap-4">
            <Link href="sms:5102876721">
              <Button className="bg-red-600 hover:bg-red-700 text-white h-12 w-48 text-lg font-bold ">
                Call Now
              </Button>
            </Link>

            <Link href="/request_services">
              <Button
                variant="outline"
                className="bg-transparent hover:bg-gray-700 text-white border-white h-12 w-44 text-lg font-bold"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center border-2"></div>
      </div>
    </div>
  );
}
