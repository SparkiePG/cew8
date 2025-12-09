"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: "1920px",
          paddingInline: "clamp(1rem, 5vw, 4rem)",
        }}
      >
        <div className="flex items-center justify-between" style={{ height: "clamp(3.5rem, 3vw + 2.5rem, 6rem)" }}>
          <a href="#hero" className="flex items-center gap-2 md:gap-3 group focus:outline-none">
            <div
              className="relative rounded-lg overflow-hidden shadow-md transition-transform group-hover:scale-105"
              style={{
                width: "clamp(2rem, 1.5vw + 1.5rem, 3rem)",
                height: "clamp(2rem, 1.5vw + 1.5rem, 3rem)",
              }}
            >
              <Image src="/header/Header.jpg" alt="DGrealtor Logo" fill className="object-cover" priority />
            </div>
            <span
              className={`font-serif font-bold tracking-tight transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              } group-hover:text-accent`}
              style={{ fontSize: "clamp(1.125rem, 1vw + 0.75rem, 1.75rem)" }}
            >
              DGrealtor
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center" style={{ gap: "clamp(1rem, 3vw, 3rem)" }}>
            <a
              href="#about"
              className={`font-medium tracking-wide transition-colors py-2 ${
                isScrolled ? "text-gray-600 hover:text-accent" : "text-white/90 hover:text-accent"
              }`}
              style={{ fontSize: "clamp(0.875rem, 0.5vw + 0.6rem, 1.125rem)" }}
            >
              About
            </a>
            <a
              href="#footer"
              className={`font-medium tracking-wide transition-colors py-2 ${
                isScrolled ? "text-gray-600 hover:text-accent" : "text-white/90 hover:text-accent"
              }`}
              style={{ fontSize: "clamp(0.875rem, 0.5vw + 0.6rem, 1.125rem)" }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
