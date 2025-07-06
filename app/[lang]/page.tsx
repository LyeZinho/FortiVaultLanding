import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Lock,
  Smartphone,
  Wifi,
  Download,
  BookOpen,
  Github,
  Star,
  CheckCircle,
  Zap,
  Globe,
  Database,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface HomePageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params
  const t = {
    pt: {
      hero: {
        title: "Gerenciador de Senhas",
        titleHighlight: "Descentralizado",
        description:
          "FortiVault é um gerenciador de senhas seguro, moderno e 100% local, desenvolvido com foco em privacidade e praticidade. Criptografia zero-knowledge, sincronização P2P e autenticação 2FA.",
        downloadNow: "Baixar Agora",
        viewDocs: "Ver Documentação",
        offline: "100% Offline",
        openSource: "Open Source",
        zeroKnowledge: "Zero-Knowledge",
      },
      features: {
        title: "Recursos Principais",
        subtitle: "Tecnologia de ponta para manter suas senhas seguras e acessíveis",
        encryption: {
          title: "Criptografia Zero-Knowledge",
          description:
            "Suas senhas são criptografadas localmente usando AES-256-GCM. Nem mesmo nós podemos acessá-las.",
        },
        twofa: {
          title: "Autenticação 2FA",
          description: "Suporte completo a TOTP com códigos de backup para máxima segurança.",
        },
        sync: {
          title: "Sincronização P2P",
          description: "Sincronize entre dispositivos sem servidores centrais, mantendo total privacidade.",
        },
        pwa: {
          title: "PWA Offline-First",
          description: "Funciona completamente offline e pode ser instalado como aplicativo nativo.",
        },
        backup: {
          title: "Backup Seguro",
          description: "Backups criptografados automáticos com recuperação fácil e verificação de integridade.",
        },
        interface: {
          title: "Interface Moderna",
          description: "UI responsiva com suporte a modo escuro/claro e drag-and-drop intuitivo.",
        },
      },
      techStack: {
        title: "Stack Tecnológico",
        subtitle: "Construído com as melhores tecnologias modernas",
        frontend: "Frontend",
        backend: "Backend",
        security: "Segurança",
      },
      documentation: {
        title: "Documentação Completa",
        subtitle: "Guias detalhados para instalação, configuração e desenvolvimento",
        installation: "📥 Instalação",
        installationDesc: "Guia completo de instalação em diferentes ambientes",
        configuration: "⚙️ Configuração",
        configurationDesc: "Configurações avançadas e personalização",
        api: "🔌 API Reference",
        apiDesc: "Documentação completa da API REST",
        development: "🛠️ Desenvolvimento",
        developmentDesc: "Guia completo para desenvolvedores",
        security: "🔒 Segurança",
        securityDesc: "Práticas de segurança e implementações",
        deploy: "🚀 Deploy",
        deployDesc: "Guias de deploy para diferentes ambientes",
        viewAll: "Ver Toda Documentação",
      },
      about: {
        title: "Sobre o FortiVault",
        description1:
          "O FortiVault nasceu da necessidade de ter um gerenciador de senhas que realmente respeite sua privacidade. Diferente de soluções comerciais, o FortiVault é completamente open-source e funciona 100% offline.",
        description2:
          "Nossa missão é democratizar a segurança digital, fornecendo uma ferramenta profissional e gratuita que qualquer pessoa pode usar, auditar e contribuir.",
        openSource: "Open Source",
        noData: "Dados Coletados",
        unlimited: "Senhas Suportadas",
        contribute: "Contribuir",
        star: "Dar uma Estrela",
      },
      cta: {
        title: "Pronto para Proteger suas Senhas?",
        subtitle: "Comece a usar o FortiVault hoje mesmo e tenha controle total sobre sua segurança digital.",
        download: "Download Gratuito",
        github: "Ver no GitHub",
      },
    },
    en: {
      hero: {
        title: "Password Manager",
        titleHighlight: "Decentralized",
        description:
          "FortiVault is a secure, modern and 100% local password manager, developed with focus on privacy and practicality. Zero-knowledge encryption, P2P sync and 2FA authentication.",
        downloadNow: "Download Now",
        viewDocs: "View Documentation",
        offline: "100% Offline",
        openSource: "Open Source",
        zeroKnowledge: "Zero-Knowledge",
      },
      features: {
        title: "Key Features",
        subtitle: "Cutting-edge technology to keep your passwords secure and accessible",
        encryption: {
          title: "Zero-Knowledge Encryption",
          description: "Your passwords are encrypted locally using AES-256-GCM. Not even we can access them.",
        },
        twofa: {
          title: "2FA Authentication",
          description: "Complete TOTP support with backup codes for maximum security.",
        },
        sync: {
          title: "P2P Synchronization",
          description: "Sync between devices without central servers, maintaining total privacy.",
        },
        pwa: {
          title: "Offline-First PWA",
          description: "Works completely offline and can be installed as a native app.",
        },
        backup: {
          title: "Secure Backup",
          description: "Automatic encrypted backups with easy recovery and integrity verification.",
        },
        interface: {
          title: "Modern Interface",
          description: "Responsive UI with dark/light mode support and intuitive drag-and-drop.",
        },
      },
      techStack: {
        title: "Technology Stack",
        subtitle: "Built with the best modern technologies",
        frontend: "Frontend",
        backend: "Backend",
        security: "Security",
      },
      documentation: {
        title: "Complete Documentation",
        subtitle: "Detailed guides for installation, configuration and development",
        installation: "📥 Installation",
        installationDesc: "Complete installation guide for different environments",
        configuration: "⚙️ Configuration",
        configurationDesc: "Advanced configurations and customization",
        api: "🔌 API Reference",
        apiDesc: "Complete REST API documentation",
        development: "🛠️ Development",
        developmentDesc: "Complete guide for developers",
        security: "🔒 Security",
        securityDesc: "Security practices and implementations",
        deploy: "🚀 Deploy",
        deployDesc: "Deploy guides for different environments",
        viewAll: "View All Documentation",
      },
      about: {
        title: "About FortiVault",
        description1:
          "FortiVault was born from the need to have a password manager that truly respects your privacy. Unlike commercial solutions, FortiVault is completely open-source and works 100% offline.",
        description2:
          "Our mission is to democratize digital security, providing a professional and free tool that anyone can use, audit and contribute to.",
        openSource: "Open Source",
        noData: "Data Collected",
        unlimited: "Passwords Supported",
        contribute: "Contribute",
        star: "Give a Star",
      },
      cta: {
        title: "Ready to Protect Your Passwords?",
        subtitle: "Start using FortiVault today and have total control over your digital security.",
        download: "Free Download",
        github: "View on GitHub",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header lang={lang} />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {text.hero.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                {" "}
                {text.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{text.hero.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href={`/${lang}/download`}>
                  <Download className="h-5 w-5 mr-2" />
                  {text.hero.downloadNow}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${lang}/docs`}>
                  <BookOpen className="h-5 w-5 mr-2" />
                  {text.hero.viewDocs}
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{text.hero.offline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{text.hero.openSource}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{text.hero.zeroKnowledge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{text.features.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{text.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{text.features.encryption.title}</CardTitle>
                <CardDescription>{text.features.encryption.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{text.features.twofa.title}</CardTitle>
                <CardDescription>{text.features.twofa.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wifi className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{text.features.sync.title}</CardTitle>
                <CardDescription>{text.features.sync.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{text.features.pwa.title}</CardTitle>
                <CardDescription>{text.features.pwa.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{text.features.backup.title}</CardTitle>
                <CardDescription>{text.features.backup.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{text.features.interface.title}</CardTitle>
                <CardDescription>{text.features.interface.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{text.techStack.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{text.techStack.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="mb-4">{text.techStack.frontend}</CardTitle>
                <div className="space-y-3">
                  <Badge variant="secondary">Next.js 15</Badge>
                  <Badge variant="secondary">React 19</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Shadcn/ui</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="mb-4">{text.techStack.backend}</CardTitle>
                <div className="space-y-3">
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Python 3.11+</Badge>
                  <Badge variant="secondary">SQLite</Badge>
                  <Badge variant="secondary">JWT + 2FA</Badge>
                  <Badge variant="secondary">Argon2</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="mb-4">{text.techStack.security}</CardTitle>
                <div className="space-y-3">
                  <Badge variant="secondary">AES-256-GCM</Badge>
                  <Badge variant="secondary">PBKDF2</Badge>
                  <Badge variant="secondary">TOTP</Badge>
                  <Badge variant="secondary">CSP</Badge>
                  <Badge variant="secondary">Rate Limiting</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{text.documentation.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{text.documentation.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow group cursor-pointer" asChild>
              <Link href={`/${lang}/docs/installation`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {text.documentation.installation}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{text.documentation.installationDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group cursor-pointer" asChild>
              <Link href={`/${lang}/docs/configuration`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {text.documentation.configuration}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{text.documentation.configurationDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group cursor-pointer" asChild>
              <Link href={`/${lang}/docs/api-reference`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {text.documentation.api}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{text.documentation.apiDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group cursor-pointer" asChild>
              <Link href={`/${lang}/docs/development`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {text.documentation.development}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{text.documentation.developmentDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group cursor-pointer" asChild>
              <Link href={`/${lang}/docs/security`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {text.documentation.security}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{text.documentation.securityDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group cursor-pointer" asChild>
              <Link href={`/${lang}/docs/deployment`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {text.documentation.deploy}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription>{text.documentation.deployDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${lang}/docs`}>
                <BookOpen className="h-5 w-5 mr-2" />
                {text.documentation.viewAll}
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">{text.about.title}</h2>

            <div className="text-lg text-muted-foreground space-y-6 mb-12">
              <p>{text.about.description1}</p>
              <p>{text.about.description2}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">{text.about.openSource}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-muted-foreground">{text.about.noData}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-muted-foreground">{text.about.unlimited}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${lang}/docs/contributing`}>
                  <Users className="h-5 w-5 mr-2" />
                  {text.about.contribute}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/LyeZinho/FortiVault" target="_blank">
                  <Star className="h-5 w-5 mr-2" />
                  {text.about.star}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">{text.cta.title}</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{text.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={`/${lang}/download`}>
                <Download className="h-5 w-5 mr-2" />
                {text.cta.download}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="https://github.com/LyeZinho/FortiVault" target="_blank">
                <Github className="h-5 w-5 mr-2" />
                {text.cta.github}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
