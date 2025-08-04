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
        className="h-auto w-[160px]"
        priority
        loading="eager"
      />
    </Link>
  );
}