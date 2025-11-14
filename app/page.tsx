import Image from "next/image";
import { ShaderAnimation } from "@/components/shader-animation";
import { Navbar } from "@/components/navbar";
import CircularTestimonials from "@/components/circular-testimonials";

const testimonials = [
  {
    quote: "Amazing experience",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0006.jpg",
  },
  {
    quote: "Great moments",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0007.jpg",
  },
  {
    quote: "Unforgettable",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0008.jpg",
  },
  {
    quote: "Perfect day",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0009.jpg",
  },
  {
    quote: "Love it",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0010.jpg",
  },
  {
    quote: "Best experience",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0011.jpg",
  },
  {
    quote: "Incredible",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0012.jpg",
  },
  {
    quote: "Amazing vibes",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0013.jpg",
  },
  {
    quote: "Simply the best",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0014.jpg",
  },
  {
    quote: "Outstanding",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0016.jpg",
  },
  {
    quote: "Spectacular",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0017.jpg",
  },
  {
    quote: "Wonderful",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0018.jpg",
  },
  {
    quote: "Fantastic",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0019.jpg",
  },
  {
    quote: "Brilliant",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0020.jpg",
  },
  {
    quote: "Marvelous",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0021.jpg",
  },
  {
    quote: "Splendid",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0022.jpg",
  },
  {
    quote: "Divine",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0023.jpg",
  },
  {
    quote: "Heavenly",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0024.jpg",
  },
  {
    quote: "Exquisite",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0025.jpg",
  },
  {
    quote: "Perfect",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/IMG-20251114-WA0026.jpg",
  },
  {
    quote: "Sublime",
    name: "King Meiky",
    designation: "RESINKK",
    src: "/images/WhatsApp Image 2025-11-14 at 19.24.02_7218d664.jpg",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Shader Animation */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <ShaderAnimation />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Title Section */}
        <div className="w-full flex items-center justify-center mb-8 sm:mb-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tighter whitespace-pre-wrap text-white text-center" style={{fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em", textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"}}>
            KING MEIKY JOURNEY
          </h1>
        </div>

        {/* Image Carousel Section */}
        <div className="w-full flex items-center justify-center">
          <div
            className="items-center justify-center relative flex"
            style={{ maxWidth: "1456px" }}
          >
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#ffffff",
                designation: "#e1e1e1",
                testimony: "#f1f1f7",
                arrowBackground: "#0582CA",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#00A6FB",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}