"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiGithub,
  SiDigitalocean,
  
} from "react-icons/si"

interface Skill {
  name: string
  icon: IconType
}

const skills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Python", icon: SiPython },
  
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "MongoDB", icon: SiMongodb },
  
  { name: "GitHub", icon: SiGithub },
  { name: "DigitalOcean", icon: SiDigitalocean }

]

const SkillSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-zinc-100">Skills</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-black rounded-xl hover:bg-zinc-700/50 transition-colors duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <skill.icon className="w-12 h-12 mb-3 text-white group-hover:text-zinc-200 transition-colors duration-300" />
            <span className="text-sm font-medium text-white group-hover:text-zinc-100 transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillSection

