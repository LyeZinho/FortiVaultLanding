"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

interface DocsSearchProps {
  lang: string
}

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
  keywords: string[]
}

export function DocsSearch({ lang }: DocsSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  const searchData: SearchResult[] = [
    {
      title: "Instalação",
      description: "Guia completo de instalação em diferentes ambientes",
      href: `/${lang}/docs/installation`,
      category: "Primeiros Passos",
      keywords: ["install", "setup", "node", "python", "docker"],
    },
    {
      title: "Configuração",
      description: "Configurações avançadas e personalização",
      href: `/${lang}/docs/configuration`,
      category: "Primeiros Passos",
      keywords: ["config", "settings", "environment", "env"],
    },
    {
      title: "API Reference",
      description: "Documentação completa da API REST",
      href: `/${lang}/docs/api-reference`,
      category: "Desenvolvimento",
      keywords: ["api", "endpoints", "rest", "authentication", "jwt"],
    },
    {
      title: "Desenvolvimento",
      description: "Guia completo para desenvolvedores",
      href: `/${lang}/docs/development`,
      category: "Desenvolvimento",
      keywords: ["development", "coding", "typescript", "python", "testing"],
    },
    {
      title: "Deployment",
      description: "Guias de deploy para diferentes ambientes",
      href: `/${lang}/docs/deployment`,
      category: "Deploy",
      keywords: ["deploy", "production", "docker", "aws", "cloud"],
    },
    {
      title: "Segurança",
      description: "Práticas de segurança e implementações",
      href: `/${lang}/docs/security`,
      category: "Deploy",
      keywords: ["security", "encryption", "2fa", "authentication", "ssl"],
    },
    {
      title: "Solução de Problemas",
      description: "Problemas comuns e soluções",
      href: `/${lang}/docs/troubleshooting`,
      category: "Suporte",
      keywords: ["troubleshooting", "problems", "errors", "debug", "fix"],
    },
    {
      title: "Contribuição",
      description: "Como contribuir com o projeto",
      href: `/${lang}/docs/contributing`,
      category: "Desenvolvimento",
      keywords: ["contributing", "pull request", "github", "open source"],
    },
  ]

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const filtered = searchData.filter((item) => {
      const searchText = query.toLowerCase()
      return (
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(searchText))
      )
    })

    setResults(filtered)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-muted-foreground bg-transparent">
          <Search className="h-4 w-4 mr-2" />
          Buscar documentação...
          <Badge variant="secondary" className="ml-auto">
            ⌘K
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Buscar Documentação</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Digite para buscar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full"
            autoFocus
          />

          {results.length > 0 && (
            <ScrollArea className="max-h-96">
              <div className="space-y-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <h4 className="font-medium">{result.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {result.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollArea>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Nenhum resultado encontrado para "{query}"</p>
            </div>
          )}

          {query.length < 2 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Digite pelo menos 2 caracteres para buscar</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
