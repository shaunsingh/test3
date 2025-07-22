import { ProjectsCard } from "../cards/projects-card";

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
    <ProjectsCard projects={PROJECT_DATA} githubLinks={GITHUB_LINKS} />
  );
} 
