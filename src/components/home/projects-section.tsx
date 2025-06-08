import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="w-full">
      <div className="container bg-card mx-auto p-4">
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
    <Link href={link} className="bg-background p-6 flex flex-col justify-between hover:bg-background/50 transition-colors group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Github className="h-5 w-5 mr-2 text-gray-400" />
            <h3 className="text-lg font-medium text-white">{title}</h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
        </div>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
}

interface GithubCardProps {
  link: string;
}

function GithubCard({ link }: GithubCardProps) {
  return (
    <Link href={link} className="bg-background p-6 flex items-center justify-center hover:bg-background/50 transition-colors">
      <Github className="h-6 w-6 mr-2 text-white" />
      <span className="text-white font-medium">GITHUB</span>
    </Link>
  );
} 
