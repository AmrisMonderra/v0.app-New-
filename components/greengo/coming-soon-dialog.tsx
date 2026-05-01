"use client"

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog"
import { Sparkles } from "lucide-react"

interface ComingSoonDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceName: string | null
}

export function ComingSoonDialog({ open, onOpenChange, serviceName }: ComingSoonDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="tile border-0 max-w-sm bg-transparent p-8 [&>button]:text-gold">
        <DialogHeader className="items-center text-center gap-4">
          <Sparkles className="neon-icon-strong h-10 w-10" strokeWidth={1.75} />
          <DialogTitle className="font-serif text-2xl tracking-widest shimmer-text">
            COMING SOON
          </DialogTitle>
          <DialogDescription className="font-serif tracking-wider text-foreground/80 text-base">
            {serviceName ? (
              <>
                <span className="gold-text-soft font-semibold">{serviceName}</span>
                <br />
                will be available shortly.
              </>
            ) : (
              "This service will be available shortly."
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="divider-ornament mt-2 text-xs tracking-[0.4em]">
          <span className="gold-text-soft">GREENGO</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
