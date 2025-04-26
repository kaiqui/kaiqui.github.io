"use client"
import Image from "next/image"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  // Função para lidar com o scroll para as seções
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Detectar qual seção está visível na tela
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Se a seção estiver visível na tela (pelo menos parcialmente)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setActiveSection])

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-neon-pink">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image src="/retro-logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-neon-cyan font-vt323 text-xl tracking-wider">KAIQUE_LIMA</span>
          </div>

          <div className="hidden md:flex gap-6">
            {["home", "about", "projects", "skills", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-vt323 text-lg uppercase tracking-wider px-2 py-1 transition-all ${
                  activeSection === section
                    ? "text-neon-pink border-b-2 border-neon-pink"
                    : "text-white hover:text-neon-cyan"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <Button variant="outline" className="retro-button hidden md:flex">
            <span className="mr-2">DOWNLOAD CV</span>
            <FileText size={16} />
          </Button>
        </div>
      </div>
    </nav>
  )
}
