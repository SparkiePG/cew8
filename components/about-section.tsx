"use client"

export default function AboutSection() {
  return (
    <section id="about" className="bg-white" style={{ paddingBlock: "clamp(4rem, 6vw, 6rem)" }}>
      <div
        className="mx-auto"
        style={{
          maxWidth: "1920px",
          paddingInline: "clamp(1rem, 5vw, 4rem)",
        }}
      >
        <div className="grid md:grid-cols-2 items-center" style={{ gap: "clamp(2rem, 4vw, 4rem)" }}>
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Professional Real Estate Agent"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-secondary rounded-lg -z-0" />
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border-2 border-accent rounded-lg -z-0" />
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-left">
            <h2
              className="font-serif text-primary font-bold leading-tight"
              style={{
                fontSize: "clamp(1.5rem, 2vw + 1rem, 3rem)",
                marginBottom: "clamp(1rem, 2vw, 1.5rem)",
              }}
            >
              About Me
            </h2>

            {/* Quote */}
            <div
              className="border-l-4 border-accent"
              style={{
                paddingLeft: "clamp(1rem, 2vw, 1.5rem)",
                paddingBlock: "clamp(0.25rem, 0.5vw, 0.5rem)",
                marginBottom: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              <p
                className="font-serif text-gray-800 italic leading-snug"
                style={{ fontSize: "clamp(1rem, 1.25vw + 0.5rem, 1.5rem)" }}
              >
                "14 years of experience as a commercial agent."
              </p>
            </div>

            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 0.5vw + 0.7rem, 1.125rem)" }}
            >
              As a dedicated independent agent, I provide a level of personalized service that large agencies simply
              cannot match. My deep understanding of the local market, combined with a commitment to integrity and
              transparency, ensures that your business finds the perfect home to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
