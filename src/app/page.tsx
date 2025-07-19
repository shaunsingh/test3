import { Hero } from "@/components/home/hero";
import { MailingListSection } from "@/components/home/mailing-list-section";
import { BigMedia } from "@/components/home/big-media";
import { Section } from "@/components/home/section";
import { ProjectsSection } from "@/components/home/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <Hero/>
      <Section/>
      <BigMedia/>
      <ProjectsSection/>
      <MailingListSection/>
    </div>
  );
}