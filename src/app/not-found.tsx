import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))] text-center bg-background text-white px-4 py-8">
      <h1 className="relative text-9xl font-bold mb-4 font-mono">
        40
        <span className="relative inline-block">
          4
          <span
            role="img"
            aria-label="angry symbol"
            className="absolute -top-0.5 right-1 text-red-600 text-4xl rotate-[15deg]"
          >
            💢
          </span>
        </span>
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 font-mono">Page Not Found</h2>
      <Link href="/" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors font-mono">
        Go to Homepage
      </Link>
    </div>
  );
}
