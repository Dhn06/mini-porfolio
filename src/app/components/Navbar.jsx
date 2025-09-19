"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-950 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
      
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            height={50}
            width={50}
            className="rounded-full cursor-pointer"
          />
        </Link>

        
        <ul className="hidden md:flex items-center gap-10 font-bold text-lg text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#About">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#Contact">Contact</Link></li>
        </ul>

        <button 
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

 
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-neutral-900 text-white font-bold text-lg">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="#About" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link href="#Contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}
