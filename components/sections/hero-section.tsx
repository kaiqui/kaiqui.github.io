"use client"
import { ChevronRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="hero-section pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-black/50 backdrop-blur-sm p-2 rounded">
              <h2 className="text-neon-green font-vt323 text-xl">HELLO WORLD_</h2>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="text-neon-pink">Kaique</span> <span className="text-neon-cyan">Lima</span>
            </h1>

            <div className="typewriter">
              <h3 className="text-2xl md:text-3xl font-vt323 text-white">
                <span className="text-neon-yellow">function</span> <span className="text-neon-green">engineer</span>
                <span className="text-white">() &#123;</span>
              </h3>
              <h3 className="text-xl md:text-2xl font-vt323 ml-8 text-white">
                <span className="text-neon-pink">return</span> [<span className="text-neon-cyan">&quot;SRE&quot;</span>,
                <span className="text-neon-cyan">&quot;DevSecOps&quot;</span>,
                <span className="text-neon-cyan">&quot;Full-Stack&quot;</span>];
              </h3>
              <h3 className="text-2xl md:text-3xl font-vt323 text-white">&#125;</h3>
            </div>

            <p className="text-gray-300 text-lg">
              Engenheiro especializado em SRE, DevOps e Segurança de Aplicações, com sólida experiência em
              desenvolvimento Full-Stack utilizando Python, JavaScript, TypeScript, Java e Golang com diversos
              frameworks modernos.
            </p>

            <div className="flex gap-4">
              <Button className="retro-button-primary">
                <span className="mr-2">MEUS PROJETOS</span>
                <ChevronRight size={16} />
              </Button>
              <Button variant="outline" className="retro-button">
                <span className="mr-2">CONTATO</span>
                <Mail size={16} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="retro-computer">
              <div className="computer-screen">
                <div className="screen-content">
                  <pre className="text-neon-green font-vt323 text-sm">
                    {`> const engineer = new Engineer();
> engineer.skills
[ "Python", "TypeScript", "Java", 
  "Golang", "Next.js", "Spring Boot" ]
> engineer.experience
5+ years
> engineer.status
"Available for projects"
> _`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
