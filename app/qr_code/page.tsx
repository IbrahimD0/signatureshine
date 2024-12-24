'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-[#1C2331] flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="relative bg-gradient-to-b from-[#1C2331] to-[#2C3E50] rounded-3xl p-6 pb-8 shadow-xl border border-gray-700">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-28 h-28 border-4 border-white/10 shadow-lg bg-black">
              <AvatarImage src="img/logo.png" alt="Profile picture" className="rounded-full w-full h-full object-cover" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="mt-4 text-2xl font-bold text-white">Signature Shine</h1>
            <p className="text-gray-300">Premium Mobile Detailing</p>
            <p className="text-sm text-gray-400 text-center mt-2">
              Top-quality car detailing directly to you
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-800 hover:text-white flex items-center gap-3 font-bold"
              onClick={() => window.open('https://facebook.com/profile', '_blank')}
            >
              <Facebook size={32} strokeWidth={2} className="w-6 h-6 size={34}" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              className="w-full bg-gray-700 border-gray-600 text-white hover:bg-gray-800 hover:text-white flex items-center gap-3 font-bold"
              onClick={() => window.open('https://www.instagram.com/signatureshine__/', '_blank')}
            >
              <Instagram size={32} strokeWidth={2} className="w-6 h-6" />
              Instagram
            </Button>
            
          </div>

          {/* Contact Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button 
              className="bg-[#DC3545] hover:bg-[#C82333] text-white flex items-center gap-2 font-bold"
              onClick={() => window.location.href = 'tel:+15109019313'}
            >
              <Phone size={36} strokeWidth={3} className="w-4 h-4" />
              Call
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/55 border-gray-600 text-white hover:bg-gray-800 hover:text-white flex items-center gap-2 font-bold"
              onClick={() => window.location.href = 'mailto:info@signatureshine.org'}
            >
              <Mail size={40} strokeWidth={3} className="w-4 h-4" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

