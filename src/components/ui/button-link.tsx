import Link from "next/link"
import { ArrowRight } from "@carbon/icons-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ButtonLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-fg2 text-bg1 px-4 py-2 text-sm font-medium inline-flex items-center hover:bg-fg3 hover:text-bg1 transition-colors",
        className
      )}
    >
      {children} <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  )
} 