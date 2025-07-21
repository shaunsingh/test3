import Link from "next/link";
import { LogoGithub as Github, ArrowUpRight } from "@carbon/icons-react";

const PROJECT_DATA = [
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    link: "#"
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    link: "#"
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    link: "#"
  }
] as const;

const GITHUB_LINKS = ["#", "#"] as const;

export function ProjectsSection() {
  return (
    <section id="projects-section" className="scroll-mt-16 w-full max-container padding-container">
      <div className="bg-bg2 p-4">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Project Cards */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
            {PROJECT_DATA.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>

          {/* GitHub Cards */}
          <div className="md:col-span-1 grid gap-4">
            {GITHUB_LINKS.map((link, index) => (
              <GithubCard key={index} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Link href={link} className="bg-bg3 p-4 hover:bg-bg4 transition-colors group" prefetch={false}>
      <div>
        <div className="flex justify-between mb-4 gap-4">
          <div className="flex items-center min-w-0">
            <Github className="h-5 w-5 mr-2" />
            <h3 className="text-lg font-medium text-fg2 truncate">{title}</h3>
          </div>
          <button
            className="bg-bg4 text-fg p-2 transition-colors
              group-hover:bg-fg1 group-hover:text-bg1
              hover:!bg-fg3 hover:!text-bg1"
          >
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-fg1">{description}</p>
      </div>
    </Link>
  );
}

interface GithubCardProps {
  link: string;
}

function GithubCard({ link }: GithubCardProps) {
  return (
    <Link href={link} className="bg-bg3 p-4 flex items-center justify-center hover:bg-bg4 transition-colors text-fg2" prefetch={false}>
      <Github className="h-6 w-6 mr-2" />
      <span className="font-medium">GITHUB</span>
    </Link>
  );
} 
