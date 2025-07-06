"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, Download, Settings, Code, Shield, Wrench, Users, Rocket, HelpCircle, Menu, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface DocsSidebarProps {
  lang: string
  currentPath?: string
}

export function DocsSidebar({ lang, currentPath }: DocsSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const t = {
    pt: {
      gettingStarted: "Primeiros Passos",
      overview: "Visão Geral",
      installation: "Instalação",
      configuration: "Configuração",
      development: "Desenvolvimento",
      apiReference: "API Reference",
      contributing: "Contribuição",
      deployment: "Deployment",
      security: "Segurança",
      troubleshooting: "Solução de Problemas",
    },
    en: {
      gettingStarted: "Getting Started",
      overview: "Overview",
      installation: "Installation",
      configuration: "Configuration",
      development: "Development",
      apiReference: "API Reference",
      contributing: "Contributing",
      deployment: "Deployment",
      security: "Security",
      troubleshooting: "Troubleshooting",
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  const navigation = [
    {
      title: text.gettingStarted,
      items: [
        {
          title: text.overview,
          href: `/${lang}/docs`,
          icon: Home,
        },
        {
          title: text.installation,
          href: `/${lang}/docs/installation`,
          icon: Download,
        },
        {
          title: text.configuration,
          href: `/${lang}/docs/configuration`,
          icon: Settings,
        },
      ],
    },
    {
      title: text.development,
      items: [
        {
          title: text.development,
          href: `/${lang}/docs/development`,
          icon: Wrench,
        },
        {
          title: text.apiReference,
          href: `/${lang}/docs/api-reference`,
          icon: Code,
        },
        {
          title: text.contributing,
          href: `/${lang}/docs/contributing`,
          icon: Users,
        },
      ],
    },
    {
      title: "Deploy & Produção",
      items: [
        {
          title: text.deployment,
          href: `/${lang}/docs/deployment`,
          icon: Rocket,
        },
        {
          title: text.security,
          href: `/${lang}/docs/security`,
          icon: Shield,
        },
      ],
    },
    {
      title: "Suporte",
      items: [
        {
          title: text.troubleshooting,
          href: `/${lang}/docs/troubleshooting`,
          icon: HelpCircle,
        },
      ],
    },
  ]

  const SidebarContent = () => (
    <div className="w-64 h-full">
      <div className="p-4">
        <Link href={`/${lang}/docs`} className="flex items-center space-x-2 mb-6">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">Documentação</span>
        </Link>

        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-6">
            {navigation.map((section, index) => (
              <div key={index}>
                <h4 className="font-medium text-sm text-muted-foreground mb-3">{section.title}</h4>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href || currentPath === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })}
                </div>
                {index < navigation.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block border-r bg-muted/30">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="sm" className="mb-4">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
