"use client"

import { useState, useEffect } from "react"

const backgroundImages = [
  {
    src: "/homepage/hero-1.jpg",
    alt: "Modern commercial building with glass facade",
  },
  {
    src: "/homepage/hero-2.jpg",
    alt: "State of the art infrastructure",
  },
  {
    src: "/homepage/hero-3.jpg",
    alt: "Mumbai Maharashtra commercial business district",
  },
  {
    src: "/homepage/hero-4.jpg",
    alt: "Corporate office building skyline",
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 15000) // Updated interval to 15 seconds (15000ms)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`} // Increased transition duration to 2 seconds for smoother fade
        >
          <img src={img.src || "/placeholder.svg"} alt={img.alt} className="w-full h-full object-cover object-center" />
        </div>
      ))}

      {/* Hero overlay gradient */}
      <div className="hero-overlay absolute inset-0 pointer-events-none z-10" />

      {/* Content */}
      <div
        className="relative z-20 w-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center"
        style={{ paddingInline: "clamp(1rem, 5vw, 4rem)" }}
      >
        <h1
          className={`font-serif text-white font-bold leading-[1.1] drop-shadow-lg transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{
            fontSize: "clamp(1.75rem, 5vw + 1rem, 5rem)",
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          Find your next business <br className="hidden sm:block" />
          <span className="text-accent">location with us.</span>
        </h1>

        {/* Scroll indicator */}
        <a
          href="#companies"
          className={`group flex flex-col items-center gap-3 text-white/80 hover:text-white transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ marginTop: "clamp(2rem, 4vw, 4rem)" }}
        >
          <span
            className="uppercase tracking-[0.25em] font-medium group-hover:text-accent transition-colors"
            style={{ fontSize: "clamp(0.625rem, 0.5vw + 0.5rem, 0.875rem)" }}
          >
            Scroll Down
          </span>
          <div
            className="rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all"
            style={{
              width: "clamp(2rem, 2vw + 1.5rem, 2.75rem)",
              height: "clamp(2rem, 2vw + 1.5rem, 2.75rem)",
            }}
          >
            <svg
              className="animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                width: "clamp(0.75rem, 0.5vw + 0.5rem, 1rem)",
                height: "clamp(0.75rem, 0.5vw + 0.5rem, 1rem)",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}
