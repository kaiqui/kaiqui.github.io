import type React from "react"
import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="contact-section py-20 px-4">
      <div className="container mx-auto">
        <div className="section-header mb-12">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-neon-green">//</span> CONTATO
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-green to-neon-yellow mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="retro-card p-6">
            <h3 className="text-2xl font-vt323 text-neon-pink mb-6">ENVIE UMA MENSAGEM</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-neon-cyan font-vt323 mb-2">NOME</label>
                <input type="text" className="retro-input w-full" placeholder="Seu nome" />
              </div>

              <div>
                <label className="block text-neon-cyan font-vt323 mb-2">EMAIL</label>
                <input type="email" className="retro-input w-full" placeholder="seu.email@exemplo.com" />
              </div>

              <div>
                <label className="block text-neon-cyan font-vt323 mb-2">MENSAGEM</label>
                <textarea className="retro-input w-full h-32" placeholder="Digite sua mensagem aqui..."></textarea>
              </div>

              <Button className="retro-button-primary w-full">
                <span>ENVIAR MENSAGEM</span>
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="retro-card p-6">
              <h3 className="text-2xl font-vt323 text-neon-yellow mb-6">INFORMAÇÕES DE CONTATO</h3>

              <div className="space-y-4">
                <ContactInfo
                  icon={<Mail className="text-neon-pink" size={20} />}
                  label="Email"
                  value="contato@joaosilva.dev"
                  bgColor="neon-pink/20"
                />
                <ContactInfo
                  icon={<Linkedin className="text-neon-cyan" size={20} />}
                  label="LinkedIn"
                  value="linkedin.com/in/joaosilva"
                  bgColor="neon-cyan/20"
                />
                <ContactInfo
                  icon={<Github className="text-neon-green" size={20} />}
                  label="GitHub"
                  value="github.com/joaosilva"
                  bgColor="neon-green/20"
                />
              </div>
            </div>

            <div className="retro-card p-6">
              <h3 className="text-2xl font-vt323 text-neon-green mb-6">DISPONIBILIDADE</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-300">Atualmente disponível para:</p>
                  <ul className="list-disc list-inside text-neon-cyan font-vt323 mt-2 space-y-1">
                    <li>Projetos Freelance</li>
                    <li>Contratos de Longo Prazo</li>
                    <li>Consultoria Técnica</li>
                    <li>Desenvolvimento Full Stack</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="retro-button w-full">
                    <span>BAIXAR CURRÍCULO</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  label: string
  value: string
  bgColor: string
}

function ContactInfo({ icon, label, value, bgColor }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full bg-${bgColor} flex items-center justify-center`}>{icon}</div>
      <div>
        <p className="text-gray-400">{label}</p>
        <p className="text-neon-cyan font-vt323">{value}</p>
      </div>
    </div>
  )
}
