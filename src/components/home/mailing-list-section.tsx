import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";

export function MailingListSection() {
  return (
    <section className="w-full max-container padding-container">
      <div className="bg-bg2 p-4 flex flex-col gap-4 sm:flex-row justify-between sm:items-center">
        <div>
          <h2 className="text-xl font-mono text-fg3 mb-2">Merchandise Coming Soon</h2>
          <p className="text-sm text-fg1">Sign up for Notifications</p>
        </div>
        <Link href="#" className="bg-white text-black px-4 py-2 text-sm font-medium flex items-center w-full sm:w-auto justify-center hover:bg-gray-100 transition-colors" prefetch={false}>
          MAILING LIST <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
} 
