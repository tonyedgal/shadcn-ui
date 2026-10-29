"use client"

import * as React from "react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/styles/base-nova/ui/dialog"

const STORAGE_KEY = "shadcn-create-welcome-dialog-custom-primary"

export function WelcomeDialog() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setIsOpen(true)
    }
  }, [])

  // Stable callback — avoids re-creation on every render. (rerender-functional-setstate)
  const handleOpenChange = React.useCallback((open: boolean) => {
    setIsOpen(open)
    if (!open) {
      localStorage.setItem(STORAGE_KEY, "true")
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="dialog-ring max-w-92 min-w-0 gap-0 overflow-hidden rounded-xl p-0 sm:max-w-sm dark:bg-neutral-900"
      >
        <div className="flex aspect-[2/1.2] w-full items-center justify-center rounded-t-xl bg-neutral-950 text-center text-neutral-100 sm:aspect-2/1">
          <img
            src="/spaceman.webp"
            alt="Spaceman"
            className="size-28 object-contain"
          />
        </div>
        <DialogHeader className="gap-1 p-4">
          <DialogTitle className="text-left text-base">
            Pick your own primary color
          </DialogTitle>
          <DialogDescription className="text-left leading-relaxed text-foreground">
            Open Theme, click +, type a hex value and press the check mark. The
            preview, the share link and the preset all keep your color.
          </DialogDescription>
          <DialogDescription className="mt-2 text-left leading-relaxed text-foreground">
            Presets with a custom color need a newer shadcn CLI than the one
            available today. Until it ships, copy your theme from Get Code, then
            Theme.
          </DialogDescription>
          <DialogDescription className="mt-2 text-left leading-relaxed font-medium text-foreground">
            A demo of a{" "}
            <a
              href="https://github.com/shadcn-ui/ui/pull/12533"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              proposed feature
            </a>{" "}
            by spaceman.sh. Not an official shadcn/ui site.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="m-0">
          <DialogClose render={<Button className="w-full" />}>
            Get Started
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
