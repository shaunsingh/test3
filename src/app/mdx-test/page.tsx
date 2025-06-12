import Welcome from '@/markdown/welcome.mdx'

export default function Page() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <div className="max-container padding-container py-16 flex justify-center">
        <div className="w-full max-w-[80ch] mx-auto">
          <Welcome />
        </div>
      </div>
    </div>
  )
}
