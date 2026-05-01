"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceTileProps {
  icon: LucideIcon
  title: string
  subtitle?: string
  onSelect?: () => void
  className?: string
}

export function ServiceTile({ icon: Icon, title, subtitle, onSelect, className }: ServiceTileProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "tile group flex flex-col items-center justify-between p-5 sm:p-7 aspect-square w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold-bright)]",
        className,
      )}
      aria-label={subtitle ? `${title} ${subtitle}` : title}
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <Icon
          className="neon-icon h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </div>
      <div className="text-center mt-2 leading-tight">
        <div className="font-serif text-[11px] sm:text-xs font-semibold tracking-[0.18em] gold-text">
          {title}
        </div>
        {subtitle && (
          <div className="font-serif text-[11px] sm:text-xs font-semibold tracking-[0.18em] gold-text">
            {subtitle}
          </div>
        )}
      </div>
    </button>
  )
}
