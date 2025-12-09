"use client"

const awards = [
  ["Excellence in RE", "Top 100 Realtors Global", "Client Choice Award 2024", "Best Agent"],
  ["Outstanding Service Award", "Innovation 2023", "Market Excellence - North Region", "Rising Star"],
  ["Community Impact Award", "Sustainable Living Champion", "Urban Development Leader", "Fastest Growing Agency"],
]

const certificates = [
  ["Commercial Appraisal Level II", "Licensed Senior Agent", "Prop. Management", "Valuation Expert"],
  ["Negotiation Specialist", "Financial Analysis & Reporting", "Real Estate Property Law", "Risk Management"],
  ["Certified Green Specialist", "Advanced Contract Law", "Urban Planning Certificate", "Real Estate Ethics"],
]

function ScrollRow({
  items,
  direction = "right",
}: {
  items: string[]
  direction?: "left" | "right"
}) {
  const allItems = [...items, ...items, ...items, ...items]
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right"

  return (
    <div className="relative w-full overflow-hidden mask-gradient-x">
      <div className={`flex w-max ${animationClass} pause-on-hover gap-3 md:gap-4`}>
        {allItems.map((item, index) => (
          <div key={index} className="award-box">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

const TrophyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 md:w-6 md:h-6"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const CertificateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 md:w-6 md:h-6"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)

export default function AwardsCertificates() {
  return (
    <section id="awards" className="relative overflow-hidden bg-primary py-16 md:py-24">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="w-full mx-auto relative z-10 max-w-[1400px] px-4 md:px-8 lg:px-12">
        <h2 className="font-serif text-center text-white text-2xl md:text-3xl lg:text-4xl mb-12 md:mb-16">
          Awards and Certificate
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start relative gap-12 lg:gap-8">
          {/* Awards Column */}
          <div className="w-full lg:w-[48%] flex flex-col gap-6 md:gap-8 items-center overflow-hidden">
            <div className="flex items-center justify-center gap-3 mb-2 md:mb-4">
              <span className="text-accent">
                <TrophyIcon />
              </span>
              <h3 className="font-serif text-white text-xl md:text-2xl lg:text-3xl">Awards</h3>
            </div>

            <div className="w-full space-y-4 md:space-y-6">
              <ScrollRow items={awards[0]} direction="right" />
              <ScrollRow items={awards[1]} direction="left" />
              <ScrollRow items={awards[2]} direction="right" />
            </div>
          </div>

          {/* Dividers */}
          <div className="hidden lg:block w-px bg-white/20 self-stretch mx-auto min-h-[400px]" />
          <div className="lg:hidden w-3/4 h-px bg-white/20 mx-auto my-4" />

          {/* Certificates Column */}
          <div className="w-full lg:w-[48%] flex flex-col gap-6 md:gap-8 items-center overflow-hidden">
            <div className="flex items-center justify-center gap-3 mb-2 md:mb-4">
              <span className="text-accent">
                <CertificateIcon />
              </span>
              <h3 className="font-serif text-white text-xl md:text-2xl lg:text-3xl">Certificates</h3>
            </div>

            <div className="w-full space-y-4 md:space-y-6">
              <ScrollRow items={certificates[0]} direction="left" />
              <ScrollRow items={certificates[1]} direction="right" />
              <ScrollRow items={certificates[2]} direction="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
