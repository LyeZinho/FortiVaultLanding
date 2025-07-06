"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Download,
  Github,
  Star,
  Calendar,
  FileText,
  Loader2,
  AlertCircle,
  ExternalLink,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Release {
  id: number
  tag_name: string
  name: string
  body: string
  published_at: string
  assets: Array<{
    name: string
    download_count: number
    browser_download_url: string
    size: number
  }>
  prerelease: boolean
}

interface DownloadPageProps {
  params: Promise<{
    lang: string
  }>
}

interface DownloadPageClientProps {
  lang: string
}

function DownloadPageClient({ lang }: DownloadPageClientProps) {
  const [releases, setReleases] = useState<Release[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [starCount, setStarCount] = useState<number | null>(null)

  const t = {
    pt: {
      title: "Download FortiVault",
      subtitle: "Baixe a versão mais recente do FortiVault para seu sistema operacional",
      noReleases: "Nenhuma versão disponível ainda",
      noReleasesDesc:
        "Ainda não foram liberadas versões do FortiVault. Acompanhe o repositório no GitHub para ser notificado quando a primeira versão for lançada.",
      watchRepo: "Acompanhar Repositório",
      starRepo: "Dar uma Estrela",
      loading: "Carregando versões...",
      error: "Erro ao carregar versões",
      latest: "Mais Recente",
      prerelease: "Pré-lançamento",
      released: "Lançado em",
      downloads: "downloads",
      size: "Tamanho",
      changelog: "Notas da Versão",
      allReleases: "Ver Todas as Versões no GitHub",
      platforms: "Plataformas Suportadas",
      windows: "Windows 10/11",
      mac: "macOS 10.15+",
      linux: "Ubuntu 20.04+",
      web: "Navegador Web",
      webDesc: "Acesse diretamente pelo navegador",
      accessWeb: "Acessar Versão Web",
      stars: "estrelas",
    },
    en: {
      title: "Download FortiVault",
      subtitle: "Download the latest version of FortiVault for your operating system",
      noReleases: "No releases available yet",
      noReleasesDesc:
        "No FortiVault releases have been published yet. Watch the GitHub repository to be notified when the first version is released.",
      watchRepo: "Watch Repository",
      starRepo: "Give a Star",
      loading: "Loading releases...",
      error: "Error loading releases",
      latest: "Latest",
      prerelease: "Pre-release",
      released: "Released on",
      downloads: "downloads",
      size: "Size",
      changelog: "Release Notes",
      allReleases: "View All Releases on GitHub",
      platforms: "Supported Platforms",
      windows: "Windows 10/11",
      mac: "macOS 10.15+",
      linux: "Ubuntu 20.04+",
      web: "Web Browser",
      webDesc: "Access directly through browser",
      accessWeb: "Access Web Version",
      stars: "stars",
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        setLoading(true)

        // Fetch releases
        const releasesResponse = await fetch("https://api.github.com/repos/LyeZinho/FortiVault/releases")

        if (!releasesResponse.ok) {
          throw new Error("Failed to fetch releases")
        }

        const releasesData = await releasesResponse.json()
        setReleases(releasesData)

        // Fetch repository info for star count
        const repoResponse = await fetch("https://api.github.com/repos/LyeZinho/FortiVault")

        if (repoResponse.ok) {
          const repoData = await repoResponse.json()
          setStarCount(repoData.stargazers_count)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchReleases()
  }, [])

  const formatFileSize = (bytes: number) => {
    const sizes = ["Bytes", "KB", "MB", "GB"]
    if (bytes === 0) return "0 Bytes"
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getPlatformIcon = (filename: string) => {
    if (filename.includes("win") || filename.includes("windows")) {
      return <Monitor className="h-4 w-4" />
    }
    if (filename.includes("mac") || filename.includes("darwin")) {
      return <Monitor className="h-4 w-4" />
    }
    if (filename.includes("linux") || filename.includes("ubuntu")) {
      return <Monitor className="h-4 w-4" />
    }
    if (filename.includes("android")) {
      return <Smartphone className="h-4 w-4" />
    }
    return <FileText className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{text.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com/LyeZinho/FortiVault" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  {text.watchRepo}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/LyeZinho/FortiVault" target="_blank">
                  <Star className="h-4 w-4 mr-2" />
                  {text.starRepo}
                  {starCount && (
                    <Badge variant="secondary" className="ml-2">
                      {starCount} {text.stars}
                    </Badge>
                  )}
                </Link>
              </Button>
            </div>
          </div>

          {/* Supported Platforms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                {text.platforms}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{text.windows}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{text.mac}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{text.linux}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{text.web}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{text.web}</h4>
                  <p className="text-sm text-muted-foreground">{text.webDesc}</p>
                </div>
                <Button asChild>
                  <Link href="https://app.fortivault.com" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {text.accessWeb}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin mr-2" />
              <span className="text-lg">{text.loading}</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {text.error}: {error}
              </AlertDescription>
            </Alert>
          )}

          {/* No Releases State */}
          {!loading && !error && releases.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Download className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{text.noReleases}</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">{text.noReleasesDesc}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="https://github.com/LyeZinho/FortiVault/subscription" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      {text.watchRepo}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/LyeZinho/FortiVault" target="_blank">
                      <Star className="h-4 w-4 mr-2" />
                      {text.starRepo}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Releases List */}
          {!loading && !error && releases.length > 0 && (
            <div className="space-y-6">
              {releases.map((release, index) => (
                <Card key={release.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-xl">{release.name || release.tag_name}</CardTitle>
                        {index === 0 && <Badge className="bg-green-500 hover:bg-green-600">{text.latest}</Badge>}
                        {release.prerelease && <Badge variant="secondary">{text.prerelease}</Badge>}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {text.released} {formatDate(release.published_at)}
                      </div>
                    </div>
                    {release.body && (
                      <CardDescription className="mt-2">
                        <details className="cursor-pointer">
                          <summary className="font-medium hover:text-foreground">{text.changelog}</summary>
                          <div className="mt-2 text-sm whitespace-pre-wrap">
                            {release.body.slice(0, 500)}
                            {release.body.length > 500 && "..."}
                          </div>
                        </details>
                      </CardDescription>
                    )}
                  </CardHeader>

                  {release.assets.length > 0 && (
                    <CardContent>
                      <div className="grid gap-3">
                        {release.assets.map((asset) => (
                          <div
                            key={asset.name}
                            className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              {getPlatformIcon(asset.name)}
                              <div>
                                <div className="font-medium">{asset.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {formatFileSize(asset.size)} • {asset.download_count} {text.downloads}
                                </div>
                              </div>
                            </div>
                            <Button size="sm" asChild>
                              <Link href={asset.browser_download_url} target="_blank">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}

              <div className="text-center pt-8">
                <Button variant="outline" asChild>
                  <Link href="https://github.com/LyeZinho/FortiVault/releases" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    {text.allReleases}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer lang={lang} />
    </div>
  )
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { lang } = await params
  return <DownloadPageClient lang={lang} />
}