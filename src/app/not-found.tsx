import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center bg-background text-white p-4">
      <h1 className="text-9xl font-bold mb-4 font-mono">
        40
        <span className="relative inline-block">
          4
          <span className="absolute -top-0.5 right-1 text-red-600 text-4xl rotate-[15deg]">
            💢
          </span>
        </span>
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold font-mono">Page Not Found</h2>
    </div>
  );
}
