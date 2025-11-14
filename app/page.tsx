import Image from "next/image";
import { ShaderAnimation } from "@/components/shader-animation";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden mt-20">
      {/* Navbar */}
      <Navbar />

      {/* Background Shader Animation */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <ShaderAnimation />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-white mb-8 sm:mb-12 text-center" style={{fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.02em", textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"}}>
          PILOT BEAT RESINKK
        </h1>

        {/* Image Gallery */}
        <div className="flex justify-center items-center w-full">
          <Image
            src="/images/0F509825-872C-4491-A549-4772B6195BC9.jpg"
            alt="Shader Animation"
            width={500}
            height={500}
            priority
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </main>
  )
}