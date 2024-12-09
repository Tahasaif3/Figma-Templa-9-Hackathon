'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { FaShoppingBag } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="pt-8 pb-4 text-center">
          <Link href="/" className="inline-block text-2xl font-bold">
            <span className="text-orange-500">Food</span>tuck
          </Link>
        </div>

        {/* Navbar */}
        <nav className="relative">
          <div className="flex justify-between items-center py-6">

            {/* Toggle button for mobile responsiveness */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white"
            >
              <AiOutlineMenu className="w-6 h-6" />
            </button>

            {/* Desktop navbar */}
            <ul className="hidden md:flex space-x-6 text-white justify-center items-center">
              <li><Link href="/" className="hover:text-orange-500 underline decoration-orange-500 decoration-4">Home</Link></li>
              <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
              <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
              <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
              <li><Link href="/About" className="hover:text-orange-500">About</Link></li>
              <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
              <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
            </ul>

            {/* Search and Cart */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800/50 rounded-full py-2.5 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 w-[200px] text-sm"
                />
                <Search className="absolute right-4 top-2.5 text-gray-400" size={20} />
              </div>
              <Link href="/ShoppingCart">
                <button className="bg-gray-800 p-2 rounded-full">
                  <FaShoppingBag />
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 top-20 w-full bg-black text-white py-4`}>
            <ul className="flex flex-col items-center space-y-4">
              <li><Link href="/" className="hover:text-orange-500 transition-colors" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/Menu" className="hover:text-orange-500 transition-colors" onClick={toggleMenu}>Menu</Link></li>
              <li><Link href="/Blog" className="hover:text-orange-500 transition-colors" onClick={toggleMenu}>Blog</Link></li>
              <li><Link href="/Pages" className="hover:text-orange-500 transition-colors" onClick={toggleMenu}>Pages</Link></li>
              <li><Link href="/About" className="hover:text-orange-500 transition-colors" onClick={toggleMenu}>About</Link></li>
              <li><Link href="/Shop" className="hover:text-orange-500 transition-colors" onClick={toggleMenu}>Shop</Link></li>
              <li><Link href="/Chef" className="hover:text-orange-500 transition-colors" onClick={toggleMenu}>Chef</Link></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="space-y-6 text-center md:text-left">
            <Image src={"/quick.png"} alt='Quick and amazing logo' width={249} height={40} className="mx-auto md:mx-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-orange-500">The</span> Art of speed<br />
              food Quality
            </h1>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              See Menu
            </button>
          </div>

          {/* Image hero */}
          <div className="relative">
            <Image
              src="/heros.png"
              alt="Delicious Food"
              width={878}
              height={670}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
