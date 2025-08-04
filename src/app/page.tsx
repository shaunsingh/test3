import { Hero } from "@/components/home/hero";
import { MailingListSection } from "@/components/home/mailing-list-section";
import { BigMedia } from "@/components/home/big-media";
import { Section } from "@/components/home/section";
import { ProjectsSection } from "@/components/home/projects-section";
import { WritingsSection } from "@/components/home/writings-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <Hero/>
      <Section/>
      <BigMedia/>
      <ProjectsSection/>
      <WritingsSection/>
      <MailingListSection/>
    </div>
  );
}