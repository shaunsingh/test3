import Image from "next/image";
import Link from "next/link";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
    >
      <Image
        src="/logo-baked.svg"
        alt="Nyoom Engineering logo"
        width={0}
        height={0}
        className="h-full w-auto"
        priority
        loading="eager"
      />
    </Link>
  );
}