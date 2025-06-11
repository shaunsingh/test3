import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

export function ProjectsSection() {
  return (
    <section className="w-full max-container padding-container text-white">
      <div className="bg-card p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Project Cards */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProjectCard
              title="Project Name"
              description="Lorem ipsum dolor sit amet, consectetur elit"
              link="#"
            />
            <ProjectCard
              title="Project Name"
              description="Lorem ipsum dolor sit amet, consectetur elit"
              link="#"
            />
            <ProjectCard
              title="Project Name"
              description="Lorem ipsum dolor sit amet, consectetur elit"
              link="#"
            />
          </div>

          {/* GitHub Cards */}
          <div className="md:col-span-1 grid grid-cols-1 gap-4">
            <GithubCard link="#" />
            <GithubCard link="#" />
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
    <Link href={link} className="bg-bg3 p-4 flex flex-col justify-between hover:bg-bg4/70 transition-colors group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Github className="h-5 w-5 mr-2" />
            <h3 className="text-lg font-medium text-fg2">{title}</h3>
          </div>
          <Button size="icon" className="bg-bg4 group-hover:bg-white transition-colors">
            <ArrowUpRight className="h-5 w-5 text-white group-hover:text-black transition-colors" />
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
    <Link href={link} className="bg-bg3 p-4 flex items-center justify-center hover:bg-bg4 transition-colors text-fg2">
      <Github className="h-6 w-6 mr-2" />
      <span className="font-medium">GITHUB</span>
    </Link>
  );
} 
