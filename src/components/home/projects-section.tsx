import Link from "next/link";
import { Button } from "../ui/button";
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
    <section id="projects-section" className="scroll-mt-16 w-full max-container padding-container text-white">
      <div className="bg-card p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Project Cards */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div className="md:col-span-1 grid grid-cols-1 gap-4">
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
    <Link href={link} className="bg-bg3 p-4 flex flex-col justify-between hover:bg-bg4/70 transition-colors group" prefetch={false}>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Github className="h-5 w-5 mr-2" />
            <h3 className="text-lg font-medium text-fg2">{title}</h3>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="bg-bg4 text-white transition-colors
              group-hover:bg-fg1 group-hover:text-black
              hover:!bg-fg3 hover:!text-black"
          >
            {/* Icon inherits currentColor so we don't need to repeat colour utilities */}
            <ArrowUpRight className="h-5 w-5" />
          </Button>
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
