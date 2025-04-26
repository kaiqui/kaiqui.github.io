export function AboutSection() {
  return (
    <section id="about" className="about-section py-20 px-4">
      <div className="container mx-auto">
        <div className="section-header mb-12">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-neon-pink">//</span> SOBRE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="retro-card p-6">
              <h3 className="text-2xl font-vt323 text-neon-cyan mb-4">QUEM SOU</h3>
              <p className="text-gray-300 leading-relaxed">
                Profissional de TI com experiência em SRE, DevOps e Segurança de Aplicações. Especializado em
                infraestrutura como código, automação de processos e implementação de práticas de segurança no ciclo de
                desenvolvimento de software.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Desenvolvedor Full-Stack com domínio em múltiplas linguagens (Python, JavaScript/TypeScript, Java,
                Golang) e frameworks modernos como Spring Boot, FastAPI, Next.js e Angular, criando soluções robustas e
                escaláveis.
              </p>
            </div>

            <div className="retro-card p-6">
              <h3 className="text-2xl font-vt323 text-neon-yellow mb-4">EDUCAÇÃO</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-neon-green font-vt323">OFFENSIVE CYBER SECURITY - RED TEAM OPERATION</h4>
                  <p className="text-gray-400">FIAP - POS TECH</p>
                  <p className="text-gray-500 text-sm">2023 - 2024</p>
                </div>
                <div>
                  <h4 className="text-neon-green font-vt323">SEGURANÇA DA INFORMAÇÃO</h4>
                  <p className="text-gray-400">FATEC ANTONIO RUSSO</p>
                  <p className="text-gray-500 text-sm">2018 - 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="retro-card p-6">
              <h3 className="text-2xl font-vt323 text-neon-pink mb-4">EXPERIÊNCIA</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-neon-pink pl-4">
                  <h4 className="text-neon-cyan font-vt323">SRE</h4>
                  <p className="text-gray-400">Itaú</p>
                  <p className="text-gray-500 text-sm">Presente</p>
                  <p className="text-gray-300 mt-2">
                    Implementação de infraestrutura como código com Terraform, automação com Ansible, pipelines CI/CD
                    com Jenkins, e orquestração de contêineres com Kubernetes. Desenvolvimento de ferramentas internas
                    usando Python (FastAPI) e TypeScript (Next.js).
                  </p>
                </div>

                <div className="border-l-2 border-neon-cyan pl-4">
                  <h4 className="text-neon-cyan font-vt323">ANALISTA SÊNIOR DE SEGURANÇA DE APLICAÇÕES</h4>
                  <p className="text-gray-400">Sinqia</p>
                  <p className="text-gray-500 text-sm">2023 - Presente</p>
                  <p className="text-gray-300 mt-2">
                    Liderança em segurança de aplicativos, revisão arquitetônica e implementação de soluções seguras.
                    Criação de sistemas com foco em segurança utilizando Java (Spring Boot) e Golang (Gin), integrando
                    ferramentas como Fortify e Snyk.
                  </p>
                </div>

                <div className="border-l-2 border-neon-green pl-4">
                  <h4 className="text-neon-cyan font-vt323">ENGENHEIRO DE SEGURANÇA DE APLICAÇÕES</h4>
                  <p className="text-gray-400">PagBank PagSeguro</p>
                  <p className="text-gray-500 text-sm">2022 - 2023</p>
                  <p className="text-gray-300 mt-2">
                    Garantia da segurança de aplicações e sistemas, utilizando ferramentas SAST, DAST, IAST e SCA.
                    Desenvolvimento de soluções de segurança com Node.js e Angular, implementando interfaces modernas
                    com Tailwind CSS e shadcn/ui.
                  </p>
                </div>
              </div>
            </div>

            <div className="retro-card p-6">
              <h3 className="text-2xl font-vt323 text-neon-green mb-4">INTERESSES</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Segurança Ofensiva",
                  "Automação",
                  "Cloud Computing",
                  "Machine Learning",
                  "Infraestrutura como Código",
                  "DevSecOps",
                  "Arquitetura de Software",
                  "UI/UX Design",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-black/50 border border-neon-cyan 
                    text-neon-cyan rounded-md text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
