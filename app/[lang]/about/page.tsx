import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Heart, Code, Lock, Zap, Github, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface AboutPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "Sobre o FortiVault",
      subtitle: "Conheça a história, missão e valores por trás do FortiVault",
      mission: {
        title: "Nossa Missão",
        description:
          "Democratizar a segurança digital fornecendo uma ferramenta profissional, gratuita e de código aberto que qualquer pessoa pode usar, auditar e contribuir.",
      },
      story: {
        title: "Nossa História",
        description:
          "O FortiVault nasceu da necessidade de ter um gerenciador de senhas que realmente respeite sua privacidade. Diferente de soluções comerciais que armazenam seus dados em servidores remotos, o FortiVault foi projetado desde o início para ser completamente offline e descentralizado.",
      },
      values: {
        title: "Nossos Valores",
        privacy: {
          title: "Privacidade em Primeiro Lugar",
          description: "Seus dados são seus. Nunca coletamos, armazenamos ou acessamos suas informações pessoais.",
        },
        transparency: {
          title: "Transparência Total",
          description: "Código 100% aberto para auditoria e contribuição da comunidade.",
        },
        security: {
          title: "Segurança Máxima",
          description: "Implementamos as melhores práticas de criptografia e segurança da indústria.",
        },
        community: {
          title: "Comunidade Forte",
          description:
            "Construído pela comunidade, para a comunidade, com contribuições de desenvolvedores do mundo todo.",
        },
      },
      stats: {
        title: "FortiVault em Números",
        openSource: "Open Source",
        noData: "Dados Coletados",
        unlimited: "Senhas Suportadas",
        countries: "Países Alcançados",
      },
      team: {
        title: "Equipe e Comunidade",
        description:
          "O FortiVault é mantido por uma comunidade global de desenvolvedores, pesquisadores de segurança e entusiastas da privacidade.",
        contribute: "Contribuir",
        github: "Ver no GitHub",
      },
      technology: {
        title: "Tecnologia",
        description: "Construído com tecnologias modernas e seguras para garantir a melhor experiência possível.",
      },
      contact: {
        title: "Entre em Contato",
        description: "Tem dúvidas, sugestões ou quer contribuir? Entre em contato conosco!",
        contactUs: "Fale Conosco",
      },
    },
    en: {
      title: "About FortiVault",
      subtitle: "Learn about the story, mission and values behind FortiVault",
      mission: {
        title: "Our Mission",
        description:
          "Democratize digital security by providing a professional, free and open-source tool that anyone can use, audit and contribute to.",
      },
      story: {
        title: "Our Story",
        description:
          "FortiVault was born from the need to have a password manager that truly respects your privacy. Unlike commercial solutions that store your data on remote servers, FortiVault was designed from the ground up to be completely offline and decentralized.",
      },
      values: {
        title: "Our Values",
        privacy: {
          title: "Privacy First",
          description: "Your data is yours. We never collect, store or access your personal information.",
        },
        transparency: {
          title: "Total Transparency",
          description: "100% open source code for community auditing and contribution.",
        },
        security: {
          title: "Maximum Security",
          description: "We implement the industry's best cryptography and security practices.",
        },
        community: {
          title: "Strong Community",
          description: "Built by the community, for the community, with contributions from developers worldwide.",
        },
      },
      stats: {
        title: "FortiVault in Numbers",
        openSource: "Open Source",
        noData: "Data Collected",
        unlimited: "Passwords Supported",
        countries: "Countries Reached",
      },
      team: {
        title: "Team and Community",
        description:
          "FortiVault is maintained by a global community of developers, security researchers and privacy enthusiasts.",
        contribute: "Contribute",
        github: "View on GitHub",
      },
      technology: {
        title: "Technology",
        description: "Built with modern and secure technologies to ensure the best possible experience.",
      },
      contact: {
        title: "Get in Touch",
        description: "Have questions, suggestions or want to contribute? Get in touch with us!",
        contactUs: "Contact Us",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
            <p className="text-xl text-muted-foreground">{text.subtitle}</p>
          </div>

          {/* Mission */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{text.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-muted-foreground leading-relaxed">{text.mission.description}</p>
            </CardContent>
          </Card>

          {/* Story */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="h-6 w-6 mr-2 text-primary" />
                {text.story.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{text.story.description}</p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">{text.values.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{text.values.privacy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{text.values.privacy.description}</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{text.values.transparency.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{text.values.transparency.description}</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{text.values.security.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{text.values.security.description}</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{text.values.community.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{text.values.community.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{text.stats.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">{text.stats.openSource}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">0</div>
                  <div className="text-muted-foreground">{text.stats.noData}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <div className="text-muted-foreground">{text.stats.unlimited}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">{text.stats.countries}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="h-6 w-6 mr-2 text-primary" />
                {text.team.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{text.team.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href={`/${lang}/docs/contributing`}>
                    <Heart className="h-4 w-4 mr-2" />
                    {text.team.contribute}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/LyeZinho/FortiVault" target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    {text.team.github}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Technology */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Code className="h-6 w-6 mr-2 text-primary" />
                {text.technology.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{text.technology.description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary">Next.js 15</Badge>
                    <Badge variant="secondary">React 19</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">Python 3.11+</Badge>
                    <Badge variant="secondary">SQLite</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Security</h4>
                  <div className="space-y-1">
                    <Badge variant="secondary">AES-256-GCM</Badge>
                    <Badge variant="secondary">Argon2</Badge>
                    <Badge variant="secondary">TOTP</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{text.contact.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{text.contact.description}</p>
              <Button size="lg" asChild>
                <Link href={`/${lang}/contact`}>
                  <Mail className="h-5 w-5 mr-2" />
                  {text.contact.contactUs}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer lang={lang} />
    </div>
  )
}
