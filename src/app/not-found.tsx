import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-theme(spacing.20)*6)] text-center bg-background text-white px-4 py-8">
      <h1 className="text-6xl font-bold mb-4 font-mono">404</h1>
      <h2 className="text-2xl font-semibold mb-6 font-mono">Page Not Found</h2>
      <p className="text-gray-400 mb-8 font-mono">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors font-mono">
        Go to Homepage
      </Link>
    </div>
  );
}
