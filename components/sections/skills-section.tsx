export function SkillsSection() {
  const devopsSkills = [
    { name: "Terraform/Ansible", level: 95 },
    { name: "Kubernetes/Docker", level: 90 },
    { name: "AWS/Cloud", level: 85 },
    { name: "CI/CD", level: 80 },
    { name: "Automação (Python, Shell, Golang)", level: 75 },
  ]

  const securitySkills = [
    { name: "AppSec/DevSecOps", level: 90 },
    { name: "SAST/DAST/IAST/SCA/RASP", level: 85 },
    { name: "Modelagem de Ameaças", level: 80 },
    { name: "Testes de Penetração", level: 75 },
    { name: "Segurança em APIs", level: 70 },
    { name: "Segurança em Infraestrutura", level: 70 },
  ]

  const backendSkills = [
    { name: "Python (FastAPI/Flask)", level: 90 },
    { name: "Java (Spring Boot)", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Golang (Gin)", level: 80 },
    { name: "Bancos de Dados SQL/NoSQL", level: 75 },
  ]

  const frontendSkills = [
    { name: "TypeScript/JavaScript", level: 90 },
    { name: "Next.js/React", level: 85 },
    { name: "Angular", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "shadcn/ui", level: 75 },
  ]

  const otherSkills = [
    "OWASP ZAP",
    "Burp Suite",
    "Fortify",
    "Snyk",
    "HTTP/SSL/TLS",
    "STRIDE",
    "CVE/CWE/CVSS",
    "JFrog",
    "Grafana",
    "RabbitMQ",
    "Oracle PL/SQL",
    "Kanban/Scrum",
    "Microsserviços",
    "Flutter/Kotlin",
    "GCP/AWS/Azure",
    "Kafka",
    "REST/GraphQL",
  ]

  return (
    <section id="skills" className="skills-section py-20 px-4">
      <div className="container mx-auto">
        <div className="section-header mb-12">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-neon-yellow">//</span> HABILIDADES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-yellow to-neon-green mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="retro-card p-6">
            <h3 className="text-2xl font-vt323 text-neon-green mb-6">SRE & DEVOPS</h3>

            <div className="space-y-4">
              {devopsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} colorFrom="neon-cyan" colorTo="neon-pink" />
              ))}
            </div>
          </div>

          <div className="retro-card p-6">
            <h3 className="text-2xl font-vt323 text-neon-pink mb-6">SEGURANÇA</h3>

            <div className="space-y-4">
              {securitySkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} colorFrom="neon-yellow" colorTo="neon-green" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="retro-card p-6">
            <h3 className="text-2xl font-vt323 text-neon-cyan mb-6">BACKEND</h3>

            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} colorFrom="neon-green" colorTo="neon-cyan" />
              ))}
            </div>
          </div>

          <div className="retro-card p-6">
            <h3 className="text-2xl font-vt323 text-neon-yellow mb-6">FRONTEND</h3>

            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} colorFrom="neon-pink" colorTo="neon-purple" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="retro-card p-6">
            <h3 className="text-2xl font-vt323 text-neon-cyan mb-6">OUTRAS HABILIDADES</h3>

            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  skill: {
    name: string
    level: number
  }
  colorFrom: string
  colorTo: string
}

function SkillBar({ skill, colorFrom, colorTo }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-neon-cyan font-vt323">{skill.name}</span>
        <span className={`text-${colorFrom === "neon-cyan" ? "neon-pink" : "neon-yellow"} font-vt323`}>
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-${colorFrom} to-${colorTo}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )
}
