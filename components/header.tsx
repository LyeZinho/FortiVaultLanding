"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Shield, Download, Github, Menu, BookOpen, Users, FileText } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
  lang?: string
}

export function Header({ lang = "pt" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const t = {
    pt: {
      features: "Recursos",
      docs: "Documentação",
      about: "Sobre",
      contact: "Contato",
      download: "Download",
      github: "GitHub",
      installation: "Instalação",
      configuration: "Configuração",
      api: "API Reference",
      development: "Desenvolvimento",
      security: "Segurança",
      troubleshooting: "Solução de Problemas",
      contributing: "Contribuição",
      license: "Licença",
    },
    en: {
      features: "Features",
      docs: "Documentation",
      about: "About",
      contact: "Contact",
      download: "Download",
      github: "GitHub",
      installation: "Installation",
      configuration: "Configuration",
      api: "API Reference",
      development: "Development",
      security: "Security",
      troubleshooting: "Troubleshooting",
      contributing: "Contributing",
      license: "License",
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  const docLinks = [
    { href: `/${lang}/docs/installation`, label: text.installation, icon: Download },
    { href: `/${lang}/docs/configuration`, label: text.configuration, icon: FileText },
    { href: `/${lang}/docs/api-reference`, label: text.api, icon: BookOpen },
    { href: `/${lang}/docs/development`, label: text.development, icon: Users },
    { href: `/${lang}/docs/security`, label: text.security, icon: Shield },
    { href: `/${lang}/docs/troubleshooting`, label: text.troubleshooting, icon: FileText },
  ]

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">FortiVault</span>
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              v2.0
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={`/${lang}#features`} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      {text.features}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>{text.docs}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {docLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center space-x-2">
                            <link.icon className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">{link.label}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={`/${lang}/about`} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      {text.about}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={`/${lang}/contact`} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      {text.contact}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-3">
            <LanguageToggle currentLang={lang} />
            <ThemeToggle />

            <Button variant="outline" size="sm" asChild className="hidden sm:flex bg-transparent">
              <Link href="https://github.com/LyeZinho/FortiVault" target="_blank">
                <Github className="h-4 w-4 mr-2" />
                {text.github}
              </Link>
            </Button>

            <Button size="sm" asChild>
              <Link href={`/${lang}/download`}>
                <Download className="h-4 w-4 mr-2" />
                {text.download}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6" />
                    <span>FortiVault</span>
                  </SheetTitle>
                  <SheetDescription>Decentralized Password Manager</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link href={`/${lang}#features`} className="block px-2 py-1 text-lg" onClick={() => setIsOpen(false)}>
                    {text.features}
                  </Link>
                  <div className="space-y-2">
                    <div className="px-2 py-1 text-lg font-medium">{text.docs}</div>
                    {docLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center space-x-2 px-4 py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        <link.icon className="h-4 w-4" />
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                  <Link href={`/${lang}/about`} className="block px-2 py-1 text-lg" onClick={() => setIsOpen(false)}>
                    {text.about}
                  </Link>
                  <Link href={`/${lang}/contact`} className="block px-2 py-1 text-lg" onClick={() => setIsOpen(false)}>
                    {text.contact}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
