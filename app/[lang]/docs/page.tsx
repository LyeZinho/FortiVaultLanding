import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Download,
  Settings,
  Code,
  Shield,
  Wrench,
  Users,
  Rocket,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface DocsPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "Documentação FortiVault",
      subtitle: "Guias completos para instalação, configuração e desenvolvimento do FortiVault",
      quickStart: {
        title: "Início Rápido",
        description: "Comece a usar o FortiVault em poucos minutos",
        steps: ["Baixe a versão mais recente", "Instale seguindo o guia", "Configure sua conta", "Comece a usar!"],
        getStarted: "Começar Agora",
      },
      categories: {
        title: "Categorias da Documentação",
        gettingStarted: {
          title: "🚀 Primeiros Passos",
          description: "Tudo que você precisa para começar",
          docs: [
            { title: "Instalação", href: "installation", description: "Guia completo de instalação" },
            { title: "Configuração", href: "configuration", description: "Configurações básicas e avançadas" },
          ],
        },
        development: {
          title: "🛠️ Desenvolvimento",
          description: "Para desenvolvedores e contribuidores",
          docs: [
            { title: "Desenvolvimento", href: "development", description: "Ambiente de desenvolvimento" },
            { title: "Contribuição", href: "contributing", description: "Como contribuir com o projeto" },
            { title: "API Reference", href: "api-reference", description: "Documentação completa da API" },
          ],
        },
        deployment: {
          title: "🚀 Deploy e Produção",
          description: "Deploy em diferentes ambientes",
          docs: [
            { title: "Deployment", href: "deployment", description: "Guias de deploy" },
            { title: "Segurança", href: "security", description: "Práticas de segurança" },
          ],
        },
        support: {
          title: "🆘 Suporte",
          description: "Ajuda e solução de problemas",
          docs: [
            { title: "Solução de Problemas", href: "troubleshooting", description: "Problemas comuns e soluções" },
          ],
        },
      },
      allDocs: {
        title: "Toda a Documentação",
        installation: {
          title: "📥 Instalação",
          description: "Guia completo de instalação em diferentes ambientes",
          status: "Completo",
        },
        configuration: {
          title: "⚙️ Configuração",
          description: "Configurações avançadas e personalização",
          status: "Completo",
        },
        apiReference: {
          title: "🔌 API Reference",
          description: "Documentação completa da API REST",
          status: "Completo",
        },
        development: {
          title: "🛠️ Desenvolvimento",
          description: "Guia completo para desenvolvedores",
          status: "Completo",
        },
        deployment: {
          title: "🚀 Deployment",
          description: "Guias de deploy para diferentes ambientes",
          status: "Completo",
        },
        security: {
          title: "🔒 Segurança",
          description: "Práticas de segurança e implementações",
          status: "Completo",
        },
        troubleshooting: {
          title: "❓ Solução de Problemas",
          description: "Problemas comuns e soluções",
          status: "Completo",
        },
        contributing: {
          title: "🤝 Contribuição",
          description: "Como contribuir com o projeto",
          status: "Completo",
        },
      },
      searchDocs: {
        title: "Busca Rápida",
        byFeature: "Por Funcionalidade",
        byTechnology: "Por Tecnologia",
        byEnvironment: "Por Ambiente",
      },
      community: {
        title: "Comunidade e Suporte",
        description: "Precisa de ajuda? Nossa comunidade está aqui para ajudar!",
        github: "GitHub Issues",
        discussions: "Discussões",
        contact: "Contato",
      },
    },
    en: {
      title: "FortiVault Documentation",
      subtitle: "Complete guides for installation, configuration and development of FortiVault",
      quickStart: {
        title: "Quick Start",
        description: "Start using FortiVault in just a few minutes",
        steps: ["Download the latest version", "Install following the guide", "Configure your account", "Start using!"],
        getStarted: "Get Started",
      },
      categories: {
        title: "Documentation Categories",
        gettingStarted: {
          title: "🚀 Getting Started",
          description: "Everything you need to get started",
          docs: [
            { title: "Installation", href: "installation", description: "Complete installation guide" },
            { title: "Configuration", href: "configuration", description: "Basic and advanced configurations" },
          ],
        },
        development: {
          title: "🛠️ Development",
          description: "For developers and contributors",
          docs: [
            { title: "Development", href: "development", description: "Development environment" },
            { title: "Contributing", href: "contributing", description: "How to contribute to the project" },
            { title: "API Reference", href: "api-reference", description: "Complete API documentation" },
          ],
        },
        deployment: {
          title: "🚀 Deploy and Production",
          description: "Deploy in different environments",
          docs: [
            { title: "Deployment", href: "deployment", description: "Deploy guides" },
            { title: "Security", href: "security", description: "Security practices" },
          ],
        },
        support: {
          title: "🆘 Support",
          description: "Help and troubleshooting",
          docs: [{ title: "Troubleshooting", href: "troubleshooting", description: "Common problems and solutions" }],
        },
      },
      allDocs: {
        title: "All Documentation",
        installation: {
          title: "📥 Installation",
          description: "Complete installation guide for different environments",
          status: "Complete",
        },
        configuration: {
          title: "⚙️ Configuration",
          description: "Advanced configurations and customization",
          status: "Complete",
        },
        apiReference: {
          title: "🔌 API Reference",
          description: "Complete REST API documentation",
          status: "Complete",
        },
        development: {
          title: "🛠️ Development",
          description: "Complete guide for developers",
          status: "Complete",
        },
        deployment: {
          title: "🚀 Deployment",
          description: "Deploy guides for different environments",
          status: "Complete",
        },
        security: {
          title: "🔒 Security",
          description: "Security practices and implementations",
          status: "Complete",
        },
        troubleshooting: {
          title: "❓ Troubleshooting",
          description: "Common problems and solutions",
          status: "Complete",
        },
        contributing: {
          title: "🤝 Contributing",
          description: "How to contribute to the project",
          status: "Complete",
        },
      },
      searchDocs: {
        title: "Quick Search",
        byFeature: "By Feature",
        byTechnology: "By Technology",
        byEnvironment: "By Environment",
      },
      community: {
        title: "Community and Support",
        description: "Need help? Our community is here to help!",
        github: "GitHub Issues",
        discussions: "Discussions",
        contact: "Contact",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  const docItems = [
    {
      ...text.allDocs.installation,
      href: `/${lang}/docs/installation`,
      icon: Download,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      ...text.allDocs.configuration,
      href: `/${lang}/docs/configuration`,
      icon: Settings,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      ...text.allDocs.apiReference,
      href: `/${lang}/docs/api-reference`,
      icon: Code,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      ...text.allDocs.development,
      href: `/${lang}/docs/development`,
      icon: Wrench,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
      ...text.allDocs.deployment,
      href: `/${lang}/docs/deployment`,
      icon: Rocket,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/20",
    },
    {
      ...text.allDocs.security,
      href: `/${lang}/docs/security`,
      icon: Shield,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    },
    {
      ...text.allDocs.troubleshooting,
      href: `/${lang}/docs/troubleshooting`,
      icon: HelpCircle,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/20",
    },
    {
      ...text.allDocs.contributing,
      href: `/${lang}/docs/contributing`,
      icon: Users,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{text.subtitle}</p>
          </div>

          {/* Quick Start */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{text.quickStart.title}</CardTitle>
              <CardDescription className="text-lg">{text.quickStart.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {text.quickStart.steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-sm">{step}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" asChild>
                  <Link href={`/${lang}/docs/installation`}>
                    <Download className="h-5 w-5 mr-2" />
                    {text.quickStart.getStarted}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* All Documentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">{text.allDocs.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docItems.map((doc) => (
                <Card key={doc.href} className="hover:shadow-lg transition-shadow group cursor-pointer" asChild>
                  <Link href={doc.href}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${doc.bgColor}`}>
                          <doc.icon className={`h-6 w-6 ${doc.color}`} />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {doc.status}
                        </Badge>
                      </div>
                      <CardTitle className="flex items-center justify-between">
                        {doc.title}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{doc.description}</CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Search */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{text.searchDocs.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    {text.searchDocs.byFeature}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href={`/${lang}/docs/api-reference#endpoints-de-2fa`} className="hover:text-foreground">
                        Autenticação 2FA
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/docs/api-reference#endpoints-de-backup`} className="hover:text-foreground">
                        Backup/Restore
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/docs/security#implementações-de-criptografia`}
                        className="hover:text-foreground"
                      >
                        Criptografia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/docs/api-reference#endpoints-de-sincronização`}
                        className="hover:text-foreground"
                      >
                        P2P Sync
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    {text.searchDocs.byTechnology}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href={`/${lang}/docs/development#frontend`} className="hover:text-foreground">
                        Next.js
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/docs/development#backend`} className="hover:text-foreground">
                        FastAPI
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/docs/deployment#deploy-com-docker`} className="hover:text-foreground">
                        Docker
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/docs/development#typescriptjavascript`} className="hover:text-foreground">
                        TypeScript
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    {text.searchDocs.byEnvironment}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link
                        href={`/${lang}/docs/development#configuração-do-ambiente-de-desenvolvimento`}
                        className="hover:text-foreground"
                      >
                        Desenvolvimento
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/docs/deployment#deploy-com-docker`} className="hover:text-foreground">
                        Docker
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/docs/deployment#deploy-em-cloud-providers`}
                        className="hover:text-foreground"
                      >
                        AWS/Cloud
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${lang}/docs/deployment#self-hosted-raspberry-pi`}
                        className="hover:text-foreground"
                      >
                        Raspberry Pi
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{text.community.title}</CardTitle>
              <CardDescription className="text-lg">{text.community.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="https://github.com/LyeZinho/FortiVault/issues" target="_blank">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    {text.community.github}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/LyeZinho/FortiVault/discussions" target="_blank">
                    <Users className="h-4 w-4 mr-2" />
                    {text.community.discussions}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/${lang}/contact`}>
                    <FileText className="h-4 w-4 mr-2" />
                    {text.community.contact}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer lang={lang} />
    </div>
  )
}
