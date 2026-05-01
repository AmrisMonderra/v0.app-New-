"use client"

import { useState } from "react"
import { Plane, ShieldCheck, Handshake, Headset, Settings } from "lucide-react"
import { ServiceTile } from "@/components/greengo/service-tile"
import { StatusBar } from "@/components/greengo/status-bar"
import { ComingSoonDialog } from "@/components/greengo/coming-soon-dialog"

const SERVICES = [
  { id: "fast-track", title: "FAST TRACK", subtitle: "(BKK)", icon: Plane },
  { id: "overstay", title: "OVERSTAY", subtitle: "SUPPORT", icon: ShieldCheck },
  { id: "partner", title: "PARTNER", subtitle: "PROGRAM", icon: Handshake },
  { id: "vip", title: "VIP", subtitle: "CONCIERGE", icon: Headset },
] as const

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleSelect = (label: string) => {
    setSelected(label)
    setDialogOpen(true)
  }

  return (
    <main className="page-bg relative min-h-screen w-full flex items-center justify-center p-0 sm:p-6">
      <div className="phone-frame marble-bg relative z-10 flex w-full max-w-[440px] flex-col overflow-hidden px-6 py-8 sm:py-10 min-h-screen sm:min-h-[860px] sm:rounded-[2.25rem]">
        {/* Header / brand */}
        <header className="flex flex-col items-center text-center pt-6 sm:pt-10">
          <h1 className="font-serif font-bold tracking-[0.18em] gold-sweep text-[2.6rem] sm:text-5xl text-balance leading-none">
            GREENGO
          </h1>

          <p className="font-serif font-semibold tracking-[0.3em] text-[0.78rem] sm:text-sm mt-3 gold-text-soft">
            YOUR VIP CONCIERGE
          </p>

          <div className="divider-ornament mt-5 w-48">
            <span className="text-[10px] rotate-45 inline-block">◆</span>
          </div>
        </header>

        {/* Service tiles */}
        <section
          className="mt-7 grid grid-cols-2 gap-4 sm:gap-5"
          aria-label="Services"
        >
          {SERVICES.map((service) => (
            <ServiceTile
              key={service.id}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              onSelect={() => handleSelect(`${service.title} ${service.subtitle}`)}
            />
          ))}
        </section>

        {/* Settings button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => handleSelect("SETTINGS")}
            className="pill flex items-center gap-4 px-6 py-3.5 w-full max-w-[260px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold-bright)]"
            aria-label="Settings"
          >
            <Settings
              className="h-6 w-6 sm:h-7 sm:w-7 text-[#fde68a]"
              strokeWidth={1.9}
              aria-hidden="true"
              style={{
                filter:
                  "drop-shadow(0 0 4px rgba(253,230,138,0.7)) drop-shadow(0 0 12px rgba(212,175,55,0.45))",
              }}
            />
            <div
              className="h-6 w-px bg-gradient-to-b from-transparent via-[rgba(253,230,138,0.8)] to-transparent"
              aria-hidden="true"
            />
            <span className="font-serif font-semibold tracking-[0.3em] text-base sm:text-lg gold-text">
              SETTINGS
            </span>
          </button>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-8" />

        {/* Status bar */}
        <StatusBar />
      </div>

      <ComingSoonDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        serviceName={selected}
      />
    </main>
  )
}
