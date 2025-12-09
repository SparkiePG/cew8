export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/10"
      style={{
        backgroundColor: "var(--primary)",
        paddingTop: "clamp(2.5rem, 4vw, 4rem)",
        paddingBottom: "clamp(1.5rem, 2vw, 2rem)",
      }}
    >
      <div
        className="w-full mx-auto"
        style={{
          maxWidth: "1920px",
          paddingInline: "clamp(1rem, 5vw, 4rem)",
        }}
      >
        <div
          className="flex flex-col sm:flex-row justify-between"
          style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)", paddingBottom: "clamp(1.5rem, 2vw, 2rem)" }}
        >
          {/* Left side: Logo, Name, and Address */}
          <div className="flex flex-col items-center sm:items-start" style={{ gap: "clamp(1rem, 2vw, 1.5rem)" }}>
            {/* Brand Logo & Name */}
            <div className="flex items-center" style={{ gap: "clamp(0.5rem, 1vw, 0.75rem)" }}>
              <div
                className="relative rounded-lg overflow-hidden bg-white flex items-center justify-center"
                style={{
                  width: "clamp(2rem, 1.5vw + 1.5rem, 2.75rem)",
                  height: "clamp(2rem, 1.5vw + 1.5rem, 2.75rem)",
                }}
              >
                <span
                  className="font-serif font-bold text-primary"
                  style={{ fontSize: "clamp(0.875rem, 0.5vw + 0.5rem, 1.125rem)" }}
                >
                  DG
                </span>
              </div>
              <span
                className="font-serif font-bold text-white tracking-tight"
                style={{ fontSize: "clamp(1.25rem, 1vw + 0.75rem, 1.75rem)" }}
              >
                DGrealtor
              </span>
            </div>

            {/* Address */}
            <div
              className="flex flex-col items-center sm:items-start"
              style={{ gap: "clamp(0.25rem, 0.5vw, 0.375rem)" }}
            >
              <h4
                className="text-accent font-bold uppercase tracking-wider"
                style={{ fontSize: "clamp(0.625rem, 0.3vw + 0.5rem, 0.75rem)" }}
              >
                Address
              </h4>
              <div
                className="text-gray-300 leading-relaxed text-center sm:text-left"
                style={{ fontSize: "clamp(0.875rem, 0.4vw + 0.6rem, 1rem)" }}
              >
                <p>123 Business District</p>
                <p>Suite 404</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Right side: Email */}
          <div
            className="flex flex-col items-center sm:items-end sm:mt-12"
            style={{ gap: "clamp(0.25rem, 0.5vw, 0.375rem)" }}
          >
            <h4
              className="text-accent font-bold uppercase tracking-wider"
              style={{ fontSize: "clamp(0.625rem, 0.3vw + 0.5rem, 0.75rem)" }}
            >
              Email
            </h4>
            <a
              href="mailto:DGrealtor@mail.in"
              className="text-white font-medium hover:text-accent transition-colors"
              style={{ fontSize: "clamp(0.875rem, 0.5vw + 0.6rem, 1.125rem)" }}
            >
              DGrealtor@mail.in
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t border-white/10 flex justify-center items-center"
          style={{ paddingTop: "clamp(1.5rem, 2vw, 2rem)" }}
        >
          <p className="text-gray-500" style={{ fontSize: "clamp(0.7rem, 0.3vw + 0.5rem, 0.8rem)" }}>
            © 2025 DGrealtor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
