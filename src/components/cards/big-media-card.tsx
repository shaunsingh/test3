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
}

export function BigMediaCard({ id, label, title, description, cta, imageSrc, imageAlt }: BigMediaCardProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-bg2 p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {/* Section label */}
          <div className="text-ignore">{label}</div>

          {/* Main content */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[max-content_1fr_auto]">
            <div className="flex flex-col gap-4 lg:contents">
              <h1 className="section-heading">{title}</h1>
              {description && <p>{description}</p>}
            </div>
            {cta && <div>{cta}</div>}
          </div>
        </div>

        <div className="section-image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={500}
            sizes="(max-width: 768px) 100vw, 100vw"
            style={{ width: "100%", height: 500, objectFit: "cover", objectPosition: "center" }}
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section >
  );
} 