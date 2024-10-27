'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Github, ChevronDown, Code, BookOpen, Trophy, Database, Wrench, DollarSign, ShoppingCart } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

const sections = ['Home', 'About', 'Skills', 'Projects', 'Certificates']

export default function Home() {
  const [activeSection, setActiveSection] = useState('Home')
  const [mounted, setMounted] = useState(false)

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionElements = sections.map(section => 
        document.getElementById(section.toLowerCase())
      )
      
      sectionElements.forEach((element, index) => {
        if (element) {
          const sectionTop = element.offsetTop
          const sectionBottom = sectionTop + element.offsetHeight
          if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
            setActiveSection(sections[index])
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
    
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center space-x-4 py-4">
            {sections.map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  onClick={() => {
                    const element = document.getElementById(section.toLowerCase())
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={activeSection === section ? 'bg-gray-200' : ''}
                >
                  {section}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <motion.div
          className="h-1 bg-gray-300"
          style={{ scaleX, transformOrigin: "0%" }}
        />
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <motion.h1 
            className="text-6xl font-bold mb-4 text-center relative z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Yacoob Mohoboob
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 text-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Information Systems Student | Developer | Tech Enthusiast
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10"
          >
            <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex flex-col justify-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4 text-lg">
                I am a passionate student at Technical University of Munich (TUM), currently pursuing my first semester in Information Systems. My academic journey began with 4 semesters of Computer Science at TUM, which laid a strong foundation for my current studies.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                My enthusiasm lies in developing innovative solutions and exploring the fascinating intersection of technology and business. I&apos;m constantly learning and expanding my skill set to stay at the forefront of the rapidly evolving tech landscape.
              </p>

              <p className="text-gray-700 text-lg">
                When I&apos;m not coding or studying, you can find me exploring new technologies, contributing to open-source projects, or engaging in tech meetups and hackathons. I believe in the power of technology to solve real-world problems and am excited to be part of this dynamic field.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-8 text-center">Skills</h2>
            <Tabs defaultValue="programming" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="databases">Databases</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="programming">
                <Card>
                  <CardHeader>
                    <CardTitle>Programming Languages</CardTitle>
                    <CardDescription>Languages I'm proficient in</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {['Java', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'].map((skill) => (
                        <li key={skill} className="flex items-center">
                          <Code className="mr-2 h-4 w-4" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="frameworks">
                <Card>
                  <CardHeader>
                    <CardTitle>Frameworks & Libraries</CardTitle>
                    <CardDescription>Tools I use to build applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {['Spring Boot', 'Node.js', 'Express.js', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'].map((skill) => (
                        <li key={skill} className="flex items-center">
                          <BookOpen className="mr-2 h-4 w-4" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="databases">
                <Card>
                  <CardHeader>
                    <CardTitle>Databases</CardTitle>
                    <CardDescription>Database systems I'm familiar with</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {['MongoDB (with Mongoose)', 'SQL (intermediate)'].map((skill) => (
                        <li key={skill} className="flex items-center">
                          <Database className="mr-2 h-4 w-4" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="other">
                <Card>
                  <CardHeader>
                    <CardTitle>Other Skills</CardTitle>
                    <CardDescription>Additional technical skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {['Git', 'RESTful APIs', 'Authentication & Authorization', 'Unit Testing', 'Integration Testing', 'Deployment'].map((skill) => (
                        <li key={skill} className="flex items-center">
                          <Wrench className="mr-2 h-4 w-4" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  title: "Vidly", 
                  description: "Video renting backend app with node.js, express and mongoose.",
                  icon: Database,
                  link: "https://github.com/y4coob/vidly-course"
                },
                { 
                  title: "Business Intelligence Dashboard", 
                  description: "Built a full-stack Business Intelligence Dashboard with Next.js and Node.js.",
                  icon: ShoppingCart,
                  link: "https://github.com/y4coob/businessIntelligence"
                }, /*
                { 
                  title: "Data Visualization Dashboard", 
                  description: "Created an interactive dashboard for visualizing complex datasets using D3.js.",
                  icon: BarChart,
                  link: "#"
                },
                { 
                  title: "Task Management App", 
                  description: "Designed and implemented a collaborative task management application with real-time updates.",
                  icon: CheckSquare,
                  link: "#"
                },
                { 
                  title: "Weather Forecast App", 
                  description: "Developed a weather forecast application integrating multiple APIs for accurate predictions.",
                  icon: Cloud,
                  link: "#"
                },
                */
                { 
                  title: "Start Up Valuation Calculator", 
                  description: "Created a Full-Stack Valuation Calculator with multiple valuation methods using next.js.",
                  icon: DollarSign,
                  link: "https://github.com/y4coob/startUp-valuation"
                }
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 ">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <project.icon className="mr-2 h-6 w-6" />
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" size="sm">
                        <a href={project.link}>Learn More</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="certificates" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-8 text-center">Certificates</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50  }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="mr-2 h-6 w-6" />
                      The Complete Node.js Course
                    </CardTitle>
                    <CardDescription>codewithmosh.com</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Topics learned:</p>
                    <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
                      <li>JavaScript & Node.js</li>
                      <li>Authentication & Authorization</li>
                      <li>RESTful API Development</li>
                      <li>MongoDB with Mongoose</li>
                      <li>Testing (Unit & Integration)</li>
                      <li>Deployment Strategies</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="mr-2 h-6 w-6" />
                      Bloomberg Market Concepts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive course covering:</p>
                    <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-2">
                      <li>Economic Indicators</li>
                      <li>Currencies</li>
                      <li>Fixed Income</li>
                      <li>Equities</li>
                      <li>Terminal Functionality</li>
                      <li>Portfolio Management</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <motion.div 
          className="fixed bottom-4 right-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button asChild>
            <a href="https://github.com/y4coob" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Github className="mr-2 h-4 w-4" /> GitHub Profile
            </a>
          </Button>
        </motion.div>
      </main>
    </div>
  )
}