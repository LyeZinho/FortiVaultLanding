import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Lock, Key, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsSearch } from "@/components/docs-search"

interface SecurityPageProps {
  params: Promise<{
    lang: string
  }>
}

export const metadata: Metadata = {
  title: "Segurança - FortiVault",
  description: "Documentação completa sobre as implementações de segurança e melhores práticas do FortiVault",
}

export default async function SecurityPage({ params }: SecurityPageProps) {
  const { lang } = await params
  
  const t = {
    pt: {
      title: "Segurança",
      subtitle: "Documentação completa sobre as implementações de segurança e melhores práticas do FortiVault",
    },
    en: {
      title: "Security", 
      subtitle: "Complete documentation on FortiVault's security implementations and best practices",
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar lang={lang} currentPath="/docs/security" />
          <main className="flex-1 max-w-4xl">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-4xl font-bold">{text.title}</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-6">{text.subtitle}</p>
              <DocsSearch lang={lang} />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Implementações de Segurança</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Documentação em desenvolvimento...</p>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}