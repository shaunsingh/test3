import { ButtonLink } from "../ui/button-link";

export function MailingListSection() {
  return (
    <section className="w-full max-container padding-container">
      <div className="bg-bg2 p-4 flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
        <div>
          <h2 className="text-xl font-mono text-fg3 mb-2">Merchandise Coming Soon</h2>
          <p className="text-sm text-fg1">Sign up for Notifications</p>
        </div>
        <ButtonLink href="#" className="flex w-full sm:w-auto justify-center">MAILING LIST</ButtonLink>
      </div>
    </section>
  );
} 
