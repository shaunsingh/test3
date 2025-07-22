import Image from "next/image";
import { ReactNode } from "react";

interface BigMediaCardProps {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export function BigMediaCard({ label, title, description, cta, imageSrc, imageAlt }: BigMediaCardProps) {
  return (
    <section className="max-container padding-container">
      <div className="bg-bg2 p-4">
        {/* Section label */}
        <div className="text-ignore mb-4">{label}</div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <h1 className="heading-frontmatter">{title}</h1>

          {description && <p className="flex text-sm font-mono">{description}</p>}

          {cta && <div className="flex-initial">{cta}</div>}
        </div>

        <div className="relative min-h-[500px]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section >
  );
} 