import { SkillCard } from "../components/SkillCard";
import { ExperienceCard } from "../components/ExperienceCard";

const skillsData = [
  {
    title: "React & TypeScript Development",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "Commercial Storefront Signage",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <line x1="9" y1="9" x2="15" y2="9"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
      </svg>
    ),
  },
  {
    title: "UI/UX & Web Design",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    ),
  },
  {
    title: "Adobe Creative Suite",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="9"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
  {
    title: "AI & Data Privacy Research",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2v20M2 12h20"></path>
      </svg>
    ),
  },
];

const experienceData = [
  {
    title: "VIU Meets Application",
    role: "Systems Architecture & Development",
    date: "2026",
    points: [
      "• Architected a comprehensive event discovery platform from the ground up, handling both structural planning and execution",
      "• Designed core technical architecture with domain class models and system sequence diagrams to map user interactions",
      "• Built and integrated a proof-of-concept database to handle complex backend relationships and user data securely",
    ],
  },
  {
    title: "Restaurant Staff Management System",
    role: "C++ Developer",
    date: "2025",
    points: [
      "• Built a modular console application to manage complex staff hierarchies and mentorship pairings across multiple employee levels",
      "• Applied strict object-oriented programming principles, utilizing inheritance and abstraction for scalable codebase",
      "• Optimized data retrieval by implementing hash maps, drastically improving the speed of mentor-mentee lookups",
    ],
  },
  {
    title: "Lore Website",
    role: "Frontend Developer",
    date: "2025",
    points: [
      "• Led UI development and responsiveness strategy for collaborative team project, focusing on modern frontend architecture",
      "• Engineered flexible, responsive layout system to ensure visual interface scaled flawlessly across all devices",
      "• Translated structural wireframes into high-fidelity digital experiences, bridging design and functional code",
    ],
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 md:pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* ABOUT ME SECTION */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-orange-200 mb-8 md:mb-12 tracking-wide">
            ABOUT ME
          </h1>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left column - Text content */}
            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Hi, I'm Victor. I'm a Creative Technologist, which is really just a way of saying I bridge the gap between coding and design.
              </p>

              <p>
                If you need a fast, modern website, I can build it. If you need a complete visual identity or physical storefront signage for your business, I can design it. Most people only do one or the other, but I like taking a project from a rough idea all the way to the finish line. I make sure your brand looks amazing and your digital tools actually work.
              </p>

              <p>
                I am currently a Computer Science student at Vancouver Island University, where I assist in research on AI and data privacy and serve as a director-at-large for the student union. I have experience in full-stack development, commercial design, and visual storytelling. I am passionate about using technology to create compelling narratives and seamless user experiences.
              </p>
            </div>

            {/* Right column - Rotated image with grid pattern background */}
            <div className="flex justify-center relative h-80 md:h-[500px]">

              {/* Background container with grid pattern for image */}
              <div
                className="absolute bottom-0  z-10 flex items-center justify-center"
                style={{
                  width: "90%",
                  maxWidth: "500px",
                  height: "100%",
                  backgroundImage: `
                    linear-gradient(0deg, #676464 1px, transparent 1px),
                    linear-gradient(90deg, #676464 1px, transparent 1px)
                  `,
                  backgroundSize: "70px 70px",
                  backgroundColor: "#ffe5b0",
                  borderRadius: "200px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/portfolioRebuild/aboutPics.webp"
                  alt="Victor"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ objectPosition: "center"}}
                /> 
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS & EXPERTISE SECTION */}
        <div className="mb-20 ">
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-wide">
            SKILLS & EXPERTISE
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div>
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-wide">
            EXPERIENCE
          </h2>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                role={exp.role}
                date={exp.date}
                points={exp.points}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
