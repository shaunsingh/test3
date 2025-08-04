import { ButtonLink } from "../ui/button-link";

interface MailingListCardProps {
  heading: string;
  subtext: string;
  buttonHref: string;
  buttonLabel: string;
}

export function MailingListCard({ heading, subtext, buttonHref, buttonLabel }: MailingListCardProps) {
  return (
    <section className="w-full">
      <div className="justify-between bg-bg2 p-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-mono text-fg2">{heading}</h1>
          <p className="text-sm">{subtext}</p>
        </div>
        <ButtonLink href={buttonHref} className="flex w-full sm:w-auto justify-center">
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  );
} 