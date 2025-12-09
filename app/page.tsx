import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CompaniesCarousel from "@/components/companies-carousel"
import AboutSection from "@/components/about-section"
import AwardsCertificates from "@/components/awards-certificates"
import Footer from "@/components/footer"
import ContactPanel from "@/components/contact-panel"
import ScrollNavigation from "@/components/scroll-navigation"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <CompaniesCarousel />
      <AboutSection />
      <AwardsCertificates />
      <Footer />

      {/* Fixed UI Elements */}
      <ContactPanel />
      <ScrollNavigation />
    </main>
  )
}
