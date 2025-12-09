"use client"

// Inline SVG icons to avoid external dependencies
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="company-icon">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
)

const MicrochipIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="company-icon">
    <path d="M6 4h12v2h-1v1h1v2h-1v2h1v2h-1v2h1v2h-1v1h1v2H6v-2h1v-1H6v-2h1v-2H6v-2h1V9H6V7h1V6H6V4zm3 2v12h6V6H9zm1 2h4v8h-4V8zm1 1v6h2V9h-2zM3 8h2v2H3V8zm0 4h2v2H3v-2zm16-4h2v2h-2V8zm0 4h2v2h-2v-2z" />
  </svg>
)

const HardHatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="company-icon">
    <path d="M12 2c-4 0-8 .5-8 4v3h2v-1h12v1h2V6c0-3.5-4-4-8-4zM4 11v1c0 1 .5 1.5 1 2v4c0 1 1 2 2 2h10c1 0 2-1 2-2v-4c.5-.5 1-1 1-2v-1H4zm3 2h10v3H7v-3z" />
  </svg>
)

const SubwayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="company-icon">
    <path d="M12 2c-4 0-8 1-8 5v9c0 2.2 1.8 4 4 4l-1 1v1h10v-1l-1-1c2.2 0 4-1.8 4-4V7c0-4-4-5-8-5zm-4 14c-.83 0-1.5-.67-1.5-1.5S7.17 13 8 13s1.5.67 1.5 1.5S8.83 16 8 16zm8 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2-5H6V7h12v4z" />
  </svg>
)

const CityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="company-icon">
    <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="company-icon">
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
  </svg>
)

const companies = [
  { name: "Global Assets", Icon: GlobeIcon },
  { name: "TechCorp", Icon: MicrochipIcon },
  { name: "BuildRight", Icon: HardHatIcon },
  { name: "Metro Solutions", Icon: SubwayIcon },
  { name: "Urban Spaces", Icon: CityIcon },
  { name: "Prime Ventures", Icon: ChartIcon },
]

export default function CompaniesCarousel() {
  // Create 4 sets for seamless looping
  const allCompanies = [...companies, ...companies, ...companies, ...companies]

  return (
    <section
      id="companies"
      className="w-full border-t border-b border-gray-200"
      style={{
        backgroundColor: "var(--secondary)",
        paddingBlock: "clamp(3rem, 5vw, 6rem)",
        scrollMarginTop: "5rem",
      }}
    >
      <div className="w-full mx-auto" style={{ maxWidth: "1920px" }}>
        {/* Section Title */}
        <div
          className="text-center"
          style={{
            marginBottom: "clamp(2rem, 4vw, 4rem)",
            paddingInline: "clamp(1rem, 5vw, 4rem)",
          }}
        >
          <h2
            className="font-serif text-primary font-medium tracking-wide"
            style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)" }}
          >
            Company worked with
          </h2>
          <div
            className="bg-accent mx-auto mt-4 rounded-full"
            style={{
              width: "clamp(4rem, 5vw, 6rem)",
              height: "4px",
            }}
          />
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div
            className="flex w-max animate-scroll-right pause-on-hover items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            style={{ gap: "clamp(2rem, 4vw, 4rem)" }}
          >
            {allCompanies.map((company, index) => (
              <div key={index} className="company-box">
                <company.Icon />
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
