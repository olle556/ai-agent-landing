'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white text-primary shadow-md' : 'bg-transparent text-light'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          AI Agents
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#home" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="#features" className="hover:text-secondary transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-secondary transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-secondary transition-colors">About Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar