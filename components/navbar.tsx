import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="p-4 flex justify-between items-center bg-gray-700">
      <h1 className="text-xl font-black text-blue-200 font-serif">SIGNATURE SHINE</h1>
      <nav>
        <ul className="flex space-x-6">
          {/* <li><Link href="#" className="text-white hover:text-blue-200">About</Link></li>
          <li><Link href="#" className="text-white hover:text-blue-200">Contact</Link></li> */}
          <li><Link href="/request_services" className="text-white hover:text-blue-200">Get a Quote</Link></li>
        </ul>
      </nav>
    </header>
  )
}