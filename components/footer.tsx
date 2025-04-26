import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-neon-pink/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Kaique L.</p>
            <p className="text-gray-500 text-sm">Desenvolvedor Full Stack</p>
          </div>

          <div className="flex gap-4">
            <Link href="#" className="social-icon-link">
              <Github size={20} />
            </Link>
            <Link href="#" className="social-icon-link">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="social-icon-link">
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs font-vt323">
            FEITO COM <span className="text-neon-pink">♥</span> E MUITA NOSTALGIA DOS ANOS 80/90
          </p>
        </div>
      </div>
    </footer>
  )
}
