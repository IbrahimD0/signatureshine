import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


export default function RequestServiceForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col">
      
      <main className="flex-grow flex items-top justify-center px-4 py-8 relative">
        <div className="w-full max-w-2xl ">
          <form className="space-y-10 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">REQUEST SERVICE</h2>
            <div>
              <Label htmlFor="name" className="sr-only">Name</Label>
              <Input id="name" placeholder="Name*" required className="bg-gray-700 text-white border-gray-600 py-6 text-lg" />
            </div>
            <div>
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input id="email" type="email" placeholder="Email*" required className="bg-gray-700 text-white border-gray-600 py-6 text-lg" />
            </div>
            <div>
              <Label htmlFor="phone" className="sr-only">Phone</Label>
              <Input id="phone" type="tel" placeholder="Phone*" required className="bg-gray-700 text-white border-gray-600 py-6 text-lg" />
            </div>
            <div>
              <Label htmlFor="service" className="sr-only">Service</Label>
              <Input id="service" placeholder="Service*" required className="bg-gray-700 text-white border-gray-600 py-6 text-lg" />
            </div>
            <div>
              <Label htmlFor="vehicle" className="sr-only">Make/Model/Year/Color</Label>
              <Input id="vehicle" placeholder="Make/Model/Year/Color*" required className="bg-gray-700 text-white border-gray-600 py-6 text-lg" />
            </div>
            <div>
              <Label htmlFor="comments" className="sr-only">Location & Comments</Label>
              <Textarea id="comments" placeholder="Location & Comments" className="bg-gray-700 text-white border-gray-600 text-lg" />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-6">SUBMIT</Button>
          </form>
        </div>
      </main>
    </div>
  )
}