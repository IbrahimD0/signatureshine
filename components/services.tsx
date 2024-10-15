"use client";

import Image from "next/image";
import { useState } from "react";


export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-blue-200 font-serif">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Interior Detailing"
            image="/img/services/first_service.jpg"
            description="Our Interior Detailing service provides a deep clean and refresh for your vehicle's interior. We meticulously clean all surfaces, including seats, carpets, dashboard, and vents, leaving your car looking and smelling like new."
            features={[
              "Spotless interior free of dirt, stains, and debris",
              "Refreshed upholstery and carpets",
              "Improved air quality inside your vehicle",
              "Protection for leather and plastic components",
            ]}
          />
          <ServiceCard
            title="Exterior Detailing"
            image="/img/services/second_service.jpg"
            description="Our Exterior Detailing Hand Wash is a thorough and gentle cleaning process that removes dirt, grime, and contaminants from your car's exterior without damaging the paint."
            features={[
              "Pristine, streak-free exterior",
              "Enhanced paint shine and protection",
              "Improved curb appeal with clean tires and rims",
            ]}
          />
          <ServiceCard
            title="Ceramic Coating"
            image="/img/services/third_service.jpg"
            description="Our Ceramic Coating service provides the ultimate protection for your car's exterior. This long-lasting, high-gloss coating forms a protective layer that shields your paint from UV rays, dirt, and water."
            features={[
              "Superior paint protection lasting up to 5 years",
              "Enhanced gloss and color depth",
              "Hydrophobic properties that repel water and contaminants",
              "Easier maintenance with less frequent washing needed",
            ]}
            comingSoon
          />
          <ServiceCard
            title="Paint Correction"
            image="/img/services/fourth_service.jpg"
            description="Our Paint Correction service restores the shine and clarity of your vehicle's paint by removing swirl marks, scratches, and other imperfections."
            features={[
              "Flawless, mirror-like paint finish",
              "Removal of scratches, swirl marks, and oxidation",
              "Enhanced color depth and gloss",
            ]}
            comingSoon
          />
        </div>

        {/* <div className="text-center mt-12">
          <Link href="request_services">
            <Button className="bg-red-800 hover:bg-red-700 text-yellow-300 font-bold py-6 px-10 text-xl uppercase">
              Book Now
            </Button>
          </Link>
        </div> */}
      </main>

      {/* <footer className="p-4 text-center">
        <Image
          src="/placeholder.svg"
          alt="Stylized car"
          width={200}
          height={100}
          className="mx-auto"
        />
      </footer> */}
    </div>
  );
}

function ServiceCard({
  title,
  image,
  description,
  features,
  comingSoon = false,
}: {
  title: string;
  image: string;
  description: string;
  features: string[];
  comingSoon?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#161628] to-[#5117d738] mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-2 font-serif">
          {title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index === 0 ? "text-yellow-400" : "text-white"}
            >
              {word}{" "}
            </span>
          ))}
        </h3>
        {comingSoon && (
          <p className="text-xl text-blue-200 font-serif mb-4">Coming soon</p>
        )}
        <p className="text-gray-300 mb-4">{description}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-300 hover:text-blue-200 transition-colors duration-200"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </button>
        {isExpanded && (
          <ul className="list-disc list-inside mt-4 text-gray-300">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
