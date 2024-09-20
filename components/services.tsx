import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white font-sans">
      

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-blue-200 font-serif">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard title="Interior Detailing" image="/interiorservice.svg" />
          <ServiceCard title="Exterior Detailing" image="/placeholder.svg" />
          <ServiceCard title="Ceramic Coating" image="/placeholder.svg" comingSoon />
          <ServiceCard title="Paint Correction" image="/placeholder.svg" comingSoon />
        </div>

        <div className="text-center mt-12">
          <Button className="bg-red-800 hover:bg-red-700 text-yellow-300 font-bold py-6 px-10  text-xl uppercase">
            Book Now
          </Button>
        </div>
      </main>

      <footer className="p-4 text-center">
        <Image
          src="/placeholder.svg"
          alt="Stylized car"
          width={200}
          height={100}
          className="mx-auto"
        />
      </footer>
    </div>
  )
}

function ServiceCard({ title, image, comingSoon = false }: { title: string, image: string, comingSoon?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <Image src={image} alt={title} width={500} height={300} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 font-serif">
            {title.split(' ').map((word, index) => (
              <span key={index} className={index === 0 ? 'text-yellow-400' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h3>
          {comingSoon && <p className="text-xl text-blue-200 font-serif">Coming soon</p>}
        </div>
      </div>
    </div>
  )
}