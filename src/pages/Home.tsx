{/* import icon from lucid react */}
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-black text-orange-200 pt-32 md:pt-40 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12 overflow-hidden">
          <h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[5rem] leading-none font-impact font-black tracking-wide hero-title-transform"
          >
            CREATIVE TECHNOLOGIST
          </h1>
        </div>

        {/* Two columns using CSS Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
          {/* Left column - first introduction paragraph */}
          <div>
            <p className="text-gray-300 text-base md:text-sm">
              Orchestrating digital systems at the intersection of Computer
              Science and Applied Research. I specialize in bridging the technical gap
              between complex backend logic and high-fidelity frontend experiences, ensuring
              every interaction is grounded in data and structural integrity.
            </p>
          </div>

          {/* Right column - second paragraph and CTA button */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <p className="text-gray-300 text-base md:text-sm">
              A multidisciplinary Creative Technologist and visual storyteller.
              I translate complex data and brand identities into compelling
              narratives whether through interactive UI,
              commercial design, or documenting the evolution of a project in
              the public eye.
            </p>
            {/* Call-to-action link with underline and arrow icon */}
            {/* w-fit prevents button from stretching full width on mobile */}
            <Link
              to="/contact"
              className="flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-70 transition-opacity whitespace-nowrap w-fit"
            >
              GET IN TOUCH
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Curved section with grid pattern */}
        <div
          className="mt-12 md:mt-16 mb-12 md:mb-16 lg:mb-20 p-4 md:p-12 w-full h-[300px] md:h-[500px] relative overflow-hidden"
          style={{
            borderRadius: "0 160px 160px 0",
            backgroundImage: `
              linear-gradient(0deg, #676464 1px, transparent 1px),
              linear-gradient(90deg, #676464 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            backgroundColor: "#ffe5b0",
          }}
        >
          <img
            src="/portfolioRebuild/myPics.webp"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-contain "
            style={{ objectPosition: "center" }}
          />

          {/* Badge 1: Full-Stack Dev - Rectangle with git image */}
          <div
            className="absolute p-3 bg-orange-400 text-black rounded-lg z-10 hidden md:flex flex-col items-center justify-center"
            style={{ top: "15%", left: "20%", transform: "rotate(-12deg)", width: "140px", height: "140px" }}
          >
            <img src="/portfolioRebuild/fullStack.png" alt="git" className="w-12 h-12 mb-2" />
            <div className="text-xs font-bold text-center">FULL-STACK</div>
            <div className="text-[9px] text-center">ARCHITECTURE</div>
          </div>

          {/* Badge 2: Security - Circle with security image */}
          <div
            className="absolute w-32 h-32 rounded-full bg-red-500 hidden md:flex flex-col items-center justify-center z-10"
            style={{ top: "8%", right: "14%", transform: "rotate(8deg)", width: "140px", height: "140px" }}
          >
            <img src="/portfolioRebuild/security.png" alt="security" className="w-14 h-14 mb-1" />
            <div className="text-[9px] font-bold text-center text-white">SECURITY</div>
          </div>

          {/* Badge 3: Visual Branding - Slanted badge with react image */}
          <div
            className="absolute p-3 bg-yellow-400 text-black rounded z-10 hidden md:flex flex-col items-center justify-center"
            style={{ top: "38%", left: "6%", transform: "rotate(18deg)", width: "130px", height: "130px" }}
          >
            <img src="/portfolioRebuild/story.png" alt="story" className="w-10 h-10 mb-1" />
            <div className="text-[9px] font-bold text-center">VISUAL</div>
            <div className="text-[8px] text-center">STORYTELLING</div>
          </div>

          {/* Badge 4: Creative Coding - Pill shape with gitHub image */}
          <div
            className="absolute px-4 py-3 bg-purple-500 text-black rounded-full z-10 hidden md:flex flex-col items-center justify-center"
            style={{ bottom: "5%", left: "14%", transform: "rotate(-15deg)", width: "140px", height: "140px" }}
          >
            <img src="/portfolioRebuild/uI.png" alt="ui" className="w-12 h-12 mb-1" />
            <div className="text-[9px] font-bold text-center">Systems</div>
            <div className="text-[8px] text-center">Design</div>
          </div>

          {/* Badge 5: Leadership - Stamp circle with grade image */}
          <div
            className="absolute px-4 py-3 rounded-full bg-lime-400 text-black hidden md:flex flex-col items-center justify-center z-10"
            style={{ bottom: "5%", right: "20%", transform: "rotate(-15deg)", width: "140px", height: "140px" }}
          >
            <img src="/portfolioRebuild/code.png" alt="code" className="w-12 h-12 mb-1" />
            <div className="text-[9px] font-bold text-center">INTERACTIVE</div>
            <div className="text-[8px] text-center">Motion & UX</div>
          </div>

          {/* Badge 6: Research - Square with git image */}
          <div
            className="absolute p-3 bg-teal-500 text-black rounded z-10 hidden md:flex flex-col items-center justify-center"
            style={{ top: "45%", right: "8%", transform: "rotate(12deg)", width: "140px", height: "140px" }}
          >
            <img src="/portfolioRebuild/research.png" alt="research" className="w-10 h-10 mb-1" />
            <div className="text-[8px] font-bold text-center">APPLIED</div>
            <div className="text-[8px] text-center">RESEARCH</div>
          </div>
        </div>

        {/* Mobile-only badges strip - hidden on desktop */}
        <div className="flex md:hidden gap-3 overflow-x-auto pb-2 -mx-4 px-4 mt-6 mb-8">
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full bg-orange-400 text-black text-xs font-bold min-h-[44px]">
            <img src="/portfolioRebuild/fullStack.png" alt="full-stack" className="w-5 h-5" />
            FULL-STACK
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full bg-red-500 text-white text-xs font-bold min-h-[44px]">
            <img src="/portfolioRebuild/security.png" alt="security" className="w-5 h-5" />
            SECURITY
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full bg-yellow-400 text-black text-xs font-bold min-h-[44px]">
            <img src="/portfolioRebuild/story.png" alt="storytelling" className="w-5 h-5" />
            VISUAL
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full bg-purple-500 text-white text-xs font-bold min-h-[44px]">
            <img src="/portfolioRebuild/uI.png" alt="ui" className="w-5 h-5" />
            SYSTEMS
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full bg-lime-400 text-black text-xs font-bold min-h-[44px]">
            <img src="/portfolioRebuild/code.png" alt="code" className="w-5 h-5" />
            INTERACTIVE
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full bg-teal-500 text-white text-xs font-bold min-h-[44px]">
            <img src="/portfolioRebuild/research.png" alt="research" className="w-5 h-5" />
            RESEARCH
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
