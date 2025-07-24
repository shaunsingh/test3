import Image from "next/image";
import { ReactNode } from "react";

interface BigMediaCardProps {
  id?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePriority?: boolean;
}

export function BigMediaCard({ id, label, title, description, cta, imageSrc, imageAlt, imagePriority }: BigMediaCardProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-bg2 p-4 flex flex-col gap-4">
        {/* Section label */}
        <div className="text-ignore">{label}</div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-[max-content_1fr_auto] gap-6 gap-x-18">
          <h1 className="section-heading">{title}</h1>

          {description && <p>{description}</p>}

          {cta && <div>{cta}</div>}
        </div>

        <div className="section-image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority={imagePriority}
          />
        </div>
      </div>
    </section >
  );
} 