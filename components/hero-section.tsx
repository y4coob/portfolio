import { Mail, Github,  MapPin, Linkedin } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-zinc-900  rounded-2xl p-8">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Yacoob Mohoboob</h1>
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-4 h-4" />
              <span>Munich, Germany</span>
            </div>
            <p className="text-lg text-zinc-300 max-w-2xl">
              Full-Stack Developer. Information Systems Student. 
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="mailto:yacoobmohoboob2004@gmail.com"
              className="p-2 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-5 h-5 text-zinc-400" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://github.com/y4coob"
              className="p-2 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Github className="w-5 h-5 text-zinc-400" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yacoob-mohoboob-0bb76416a/"
              className="p-2 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-zinc-400" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

