import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MailingListSection() {
  return (
    <section className="w-full">
      <div className="container bg-card mx-auto p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-mono text-white mb-2">Merchandise Coming Soon</h2>
          <p className="text-sm text-gray-400">Sign up for Notifications</p>
        </div>
        <Link href="#" className="bg-white text-black px-4 py-2 text-sm font-medium flex items-center">
          MAILING LIST <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
} 
