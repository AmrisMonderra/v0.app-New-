"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const update = () => {
      // Bangkok = UTC+7
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      setTime(formatter.format(new Date()))
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full pt-6 pb-4">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.6)] to-transparent" />
      <div className="flex items-center justify-center gap-3 font-serif tracking-[0.3em] text-sm sm:text-base">
        <span className="gold-text-soft">BANGKOK</span>
        <span className="gold-text-soft">—</span>
        <span className="gold-text-soft tabular-nums" suppressHydrationWarning>
          {time || "--:--"}
        </span>
        <span
          className="status-dot inline-block h-2.5 w-2.5 rounded-full bg-[#34d97c] ml-2"
          aria-label="online"
        />
      </div>
    </div>
  )
}
