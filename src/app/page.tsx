import { BigMedia } from "@/components/home/big-media";
import { Hero } from "@/components/home/hero";
import { Section } from "@/components/home/section";
import { ProjectsSection } from "@/components/home/projects-section";
import { WritingsSection } from "@/components/home/writings-section";
import { MailingListSection } from "@/components/home/mailing-list-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <Hero />
      <Section />
      <BigMedia />
      <ProjectsSection />
      <WritingsSection />
      <MailingListSection />
    </div>
  );
}
