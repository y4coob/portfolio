"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "../components/ui/button"
import { Timeline } from "../components/ui/timeline"
import HeroSection from "../components/hero-section"
import SkillSection from "../components/skill-section"
import Image from "next/image";

const sections = ["Home", "Skills", "Projects", "About"]

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home")
  const [mounted, setMounted] = useState(false)

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset to account for fixed header
      
      const sectionElements = sections.map((section) => document.getElementById(section.toLowerCase()))

      sectionElements.forEach((element, index) => {
        if (element) {
          const sectionTop = element.offsetTop
          const sectionBottom = sectionTop + element.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[index])
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const projectsData = [
    {
      title: "2025",
      content: (
        <div>
          <div className="space-y-4 mb-8">
            <h3 className="text-gray-100 text-xl md:text-2xl font-bold">
              Multi-LLM Chat Interface
            </h3>
            <p className="text-gray-300 text-sm md:text-base font-medium">
              A sophisticated chat application enabling simultaneous interaction with multiple AI language models.{" "}
              <a
                href="http://165.22.66.46:3000/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline font-semibold"
              >
                View Live Demo
              </a>
            </p>
            <ul className="text-gray-300 text-sm md:text-base list-disc list-inside space-y-2">
              <li>Seamless integration with GPT-3.5, Claude, and DeepSeek Chat models</li>
              <li>Secure user authentication and API key management system</li>
              <li>Real-time parallel processing of responses from multiple AI models</li>
              <li>Modern, responsive dark-themed UI with tabbed model comparison</li>
              <li>Robust error handling and rate limiting protection</li>
            </ul>
          </div>
    
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Image
              src="/multi-chat.png"
              alt="Multi-LLM chat interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/multi-api-keys.png"
              alt="API key management interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/multi-first.png"
              alt="Landing page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/multi-register.png"
              alt="Registration page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>
    
          <div className="space-y-3">
            <h4 className="text-gray-100 text-base md:text-lg font-bold">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Docker", "DigitalOcean"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm md:text-base font-medium"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      ),
    }
    ,
    {
      title: "Late 2024",
      content: (
        <div>
          <div className="space-y-4 mb-8">
            <h3 className="text-gray-100 text-xl md:text-2xl font-bold">
              SiliconFlow Website
            </h3>
            <p className="text-gray-300 text-sm md:text-base font-medium">
              Developed Website and UI for a Software Agency{" "}
              <a
                href="http://165.22.66.46:3000/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline font-semibold"
              >
                View Website
              </a>
            </p>
          </div>
    
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Image
              src="/silicon-grid.png"
              alt="Multi-LLM chat interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/silicon-landing.png"
              alt="API key management interface"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/silicon-service.png"
              alt="Landing page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/silicon-service-grid.png"
              alt="Registration page"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>
    
          <div className="space-y-3">
            <h4 className="text-gray-100 text-base md:text-lg font-bold">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm md:text-base font-medium"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      ),
    }, 
    {
      title: "",
      content: (
        <div>
          <div className="space-y-4 mb-8">
            <h3 className="text-gray-100 text-xl md:text-2xl font-bold">
              TUM Hackathon Optiver Challenge
            </h3>
            <p className="text-gray-300 text-sm md:text-base font-medium">
              Developed a high-frequency trading bot for semiconductor ETFs using Python and the Optibook API (simulated exchange).
            </p>
            <ul className="text-gray-300 text-sm md:text-base list-disc list-inside space-y-2">
              <li>
                Implemented market-making and arbitrage strategies with real-time order management and execution.
              </li>
              <li>
                Designed a multi-threaded architecture for simultaneous execution of multiple trading strategies.
              </li>
              <li>
                Created advanced algorithms for dynamic spread adjustment, position hedging, and order book analysis.
              </li>
            </ul>
          </div>
    
          <div className="space-y-3">
            <h4 className="text-gray-100 text-base md:text-lg font-bold">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "Optibook API", "Multi-threading", "Algorithmic Trading", "Market-Making", "Arbitrage"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm md:text-base font-medium"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      ),
    }
  ];
  return (
    <div ref={containerRef} className="min-h-screen bg-black text-zinc-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center space-x-4 py-4">
            {sections.map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  onClick={() => {
                    const element = document.getElementById(section.toLowerCase())
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={activeSection === section ? "bg-zinc-800" : ""}
                >
                  {section}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <motion.div className="h-1 bg-zinc-700" style={{ scaleX, transformOrigin: "0%" }} />
      </header>

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="home" className="flex flex-col items-center justify-center relative overflow-hidden py-12">
            <HeroSection />
          </section>

          <section id="skills" className="flex flex-col justify-center py-12 bg-black">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SkillSection />
            </motion.div>
          </section>

          <section id="projects" className="flex flex-col justify-center py-16 px-4 bg-black">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Timeline data={projectsData} />
            </motion.div>
          </section>

          <section id="about" className="flex flex-col justify-center py-16 px-4 ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-[2fr,1fr] gap-8">
                  <div className="bg-zinc-900/50 p-8 rounded-lg shadow-lg">
                    <p className="text-zinc-300 mb-6 text-lg">
                      I am a passionate student at Technical University of Munich (TUM), currently pursuing my first
                      semester in Information Systems. My academic journey began with 4 semesters of Computer Science at
                      TUM, which laid a strong foundation for my current studies.
                    </p>
                    <p className="text-zinc-300 mb-6 text-lg">
                      My enthusiasm lies in developing innovative solutions and exploring the fascinating intersection
                      of technology and business. I&apos;m constantly learning and expanding my skill set to stay at the
                      forefront of the rapidly evolving tech landscape.
                    </p>
                    <p className="text-zinc-300 text-lg">
                      When I&apos;m not coding or studying, you can find me exploring new technologies, contributing to
                      open-source projects, or engaging in tech meetups and hackathons. I believe in the power of
                      technology to solve real-world problems and am excited to be part of this dynamic field.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-zinc-900/50 p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold mb-4 text-zinc-100">Education</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-zinc-200 font-medium">Information Systems</p>
                          <p className="text-zinc-400 text-sm">Technical University of Munich</p>
                          <p className="text-zinc-500 text-sm">2024 - Present</p>
                        </div>
                        <div>
                          <p className="text-zinc-200 font-medium">Computer Science</p>
                          <p className="text-zinc-400 text-sm">Technical University of Munich</p>
                          <p className="text-zinc-500 text-sm">2022 - 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold mb-4 text-zinc-100">Contact</h3>
                      <div className="space-y-2 text-zinc-300">
                        <p>📍 Munich, Germany</p>
                        <p>📧 yacoobmohoboob2004@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <motion.div
        className="fixed bottom-4 right-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button asChild>
          <a
            href="https://github.com/y4coob"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Github className="mr-2 h-4 w-4" /> GitHub Profile
          </a>
        </Button>
      </motion.div>
    </div>
  )
}

