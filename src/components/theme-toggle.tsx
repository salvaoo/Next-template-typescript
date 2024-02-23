"use client"

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import Icon from "@/components/icon"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon name="sun-medium" className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icon name="moon" className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}