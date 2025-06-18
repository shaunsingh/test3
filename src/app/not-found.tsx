import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-theme(spacing.20)*6)] text-center bg-background text-white px-4 py-8">
      <h1 className="relative text-6xl font-bold mb-4 font-mono">
        40
        <span className="relative inline-block">
          4
          <span
            role="img"
            aria-label="angry symbol"
            className="absolute -top-3 -right-1 text-red-600 text-3xl rotate-15"
          >
            💢
          </span>
        </span>
      </h1>
      <h2 className="text-2xl font-semibold mb-8 font-mono">Page Not Found</h2>
      <Link href="/" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors font-mono">
        Go to Homepage
      </Link>
    </div>
  );
}
