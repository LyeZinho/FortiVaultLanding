"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface LanguageToggleProps {
  currentLang: string
}

export function LanguageToggle({ currentLang }: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: string) => {
    const segments = pathname.split("/")
    segments[1] = newLang
    const newPath = segments.join("/")
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Globe className="h-4 w-4 mr-2" />
          {currentLang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("pt")}>🇧🇷 Português</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>🇺🇸 English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
