import { BigMedia } from "@/components/home/big-media";
import { Hero } from "@/components/home/hero";
import { Section } from "@/components/home/section";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-20">
      <Hero />
      <Section />
      <BigMedia />
    </div>
  );
}
