import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Integrating Deep Learning into IT Infrastructure Monitoring",
      description: "Artigo sobre como integrar Deep Learning no monitoramento de infraestrutura de TI",
      tech: ["Deep Learning", "Python", "TensorFlow", "Infraestrutura"],
      image: "/project1.jpg",
      color: "neon-pink",
      link: "https://bit.ly/42yEnds",
    },
    {
      title: "How to Reduce Infrastructure Costs with Deep Learning",
      description: "Artigo sobre redução de custos de infraestrutura utilizando Deep Learning",
      tech: ["Deep Learning", "Otimização de Custos", "Python", "Cloud"],
      image: "/project2.jpg",
      color: "neon-cyan",
      link: "https://bit.ly/43yLyUi",
    },
    {
      title: "API Security Scanner",
      description: "Ferramenta para análise de segurança em APIs REST e GraphQL",
      tech: ["Python", "FastAPI", "OWASP", "Security"],
      image: "/project3.jpg",
      color: "neon-yellow",
      link: "#",
    },
    {
      title: "DevSecOps Pipeline",
      description: "Pipeline de CI/CD com integração de ferramentas de segurança",
      tech: ["Jenkins", "Docker", "SAST/DAST", "Terraform"],
      image: "/project1.jpg",
      color: "neon-green",
      link: "#",
    },
    {
      title: "Microservices Dashboard",
      description: "Dashboard para monitoramento de microsserviços em Kubernetes",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Kubernetes"],
      image: "/project2.jpg",
      color: "neon-purple",
      link: "#",
    },
    {
      title: "Cloud Cost Optimizer",
      description: "Aplicação para otimização de custos em ambientes multi-cloud",
      tech: ["Golang", "Gin", "AWS/GCP/Azure", "React"],
      image: "/project3.jpg",
      color: "neon-blue",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="projects-section py-20 px-4">
      <div className="container mx-auto">
        <div className="section-header mb-12">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-neon-cyan">//</span> PROJETOS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="retro-button-secondary">
            <span>VER MAIS PROJETOS</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tech: string[]
    image: string
    color: string
    link: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={`retro-project-card border-${project.color}`}>
      <div className="project-image">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={225}
          className="object-cover"
        />
        <div className="project-overlay"></div>
      </div>

      <div className="p-6">
        <h3 className={`text-xl font-vt323 text-${project.color} mb-2`}>{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-black/50 text-neon-green text-xs rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <Link href="#" className={`text-${project.color} hover:underline flex items-center gap-1`}>
            <Github size={16} />
            <span>Código</span>
          </Link>
          <Link href={project.link} className={`text-${project.color} hover:underline flex items-center gap-1`}>
            <ExternalLink size={16} />
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
