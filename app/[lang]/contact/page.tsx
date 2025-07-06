import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, MessageSquare, Bug, Lightbulb, Users, ExternalLink, Globe, Shield } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ContactPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Estamos aqui para ajudar! Escolha a melhor forma de entrar em contato conosco.",
      channels: {
        title: "Canais de Comunicação",
        github: {
          title: "GitHub Issues",
          description: "Para reportar bugs, solicitar funcionalidades ou fazer perguntas técnicas.",
          action: "Abrir Issue",
        },
        discussions: {
          title: "GitHub Discussions",
          description: "Para discussões gerais, dúvidas sobre uso e compartilhar ideias.",
          action: "Participar da Discussão",
        },
        email: {
          title: "Email",
          description: "Para questões privadas, parcerias ou assuntos comerciais.",
          action: "Enviar Email",
        },
        security: {
          title: "Segurança",
          description: "Para reportar vulnerabilidades de segurança de forma responsável.",
          action: "Reportar Vulnerabilidade",
        },
      },
      support: {
        title: "Tipos de Suporte",
        bug: {
          title: "Reportar Bug",
          description: "Encontrou um problema? Nos ajude a corrigi-lo!",
        },
        feature: {
          title: "Solicitar Funcionalidade",
          description: "Tem uma ideia para melhorar o FortiVault?",
        },
        help: {
          title: "Precisa de Ajuda",
          description: "Dúvidas sobre instalação, configuração ou uso?",
        },
        contribute: {
          title: "Contribuir",
          description: "Quer ajudar no desenvolvimento do projeto?",
        },
      },
      community: {
        title: "Comunidade",
        description: "Junte-se à nossa comunidade global de usuários e desenvolvedores.",
        discord: "Discord",
        reddit: "Reddit",
        twitter: "Twitter",
      },
      response: {
        title: "Tempo de Resposta",
        github: "1-3 dias úteis",
        email: "3-5 dias úteis",
        security: "24-48 horas",
        community: "Imediato",
      },
      guidelines: {
        title: "Diretrizes de Comunicação",
        respectful: "Seja respeitoso e construtivo",
        clear: "Seja claro e específico",
        search: "Pesquise antes de perguntar",
        patient: "Seja paciente - somos voluntários",
      },
    },
    en: {
      title: "Get in Touch",
      subtitle: "We're here to help! Choose the best way to contact us.",
      channels: {
        title: "Communication Channels",
        github: {
          title: "GitHub Issues",
          description: "To report bugs, request features or ask technical questions.",
          action: "Open Issue",
        },
        discussions: {
          title: "GitHub Discussions",
          description: "For general discussions, usage questions and sharing ideas.",
          action: "Join Discussion",
        },
        email: {
          title: "Email",
          description: "For private matters, partnerships or business inquiries.",
          action: "Send Email",
        },
        security: {
          title: "Security",
          description: "To responsibly report security vulnerabilities.",
          action: "Report Vulnerability",
        },
      },
      support: {
        title: "Support Types",
        bug: {
          title: "Report Bug",
          description: "Found a problem? Help us fix it!",
        },
        feature: {
          title: "Request Feature",
          description: "Have an idea to improve FortiVault?",
        },
        help: {
          title: "Need Help",
          description: "Questions about installation, configuration or usage?",
        },
        contribute: {
          title: "Contribute",
          description: "Want to help with project development?",
        },
      },
      community: {
        title: "Community",
        description: "Join our global community of users and developers.",
        discord: "Discord",
        reddit: "Reddit",
        twitter: "Twitter",
      },
      response: {
        title: "Response Time",
        github: "1-3 business days",
        email: "3-5 business days",
        security: "24-48 hours",
        community: "Immediate",
      },
      guidelines: {
        title: "Communication Guidelines",
        respectful: "Be respectful and constructive",
        clear: "Be clear and specific",
        search: "Search before asking",
        patient: "Be patient - we're volunteers",
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

          {/* Communication Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">{text.channels.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{text.channels.github.title}</CardTitle>
                      <CardDescription>{text.channels.github.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="https://github.com/LyeZinho/FortiVault/issues" target="_blank">
                      <Bug className="h-4 w-4 mr-2" />
                      {text.channels.github.action}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{text.channels.discussions.title}</CardTitle>
                      <CardDescription>{text.channels.discussions.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="https://github.com/LyeZinho/FortiVault/discussions" target="_blank">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      {text.channels.discussions.action}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{text.channels.email.title}</CardTitle>
                      <CardDescription>{text.channels.email.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="mailto:contact@fortivault.com">
                      <Mail className="h-4 w-4 mr-2" />
                      {text.channels.email.action}
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-red-200 dark:border-red-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                      <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-red-600 dark:text-red-400">{text.channels.security.title}</CardTitle>
                      <CardDescription>{text.channels.security.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link href="mailto:security@fortivault.com">
                      <Shield className="h-4 w-4 mr-2" />
                      {text.channels.security.action}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">{text.support.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 p-3 bg-red-100 dark:bg-red-900/20 rounded-full w-fit">
                    <Bug className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-lg">{text.support.bug.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{text.support.bug.description}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit">
                    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">{text.support.feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{text.support.feature.description}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 p-3 bg-green-100 dark:bg-green-900/20 rounded-full w-fit">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">{text.support.help.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{text.support.help.description}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full w-fit">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">{text.support.contribute.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{text.support.contribute.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Times */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{text.response.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="font-semibold text-primary">GitHub Issues</div>
                  <div className="text-sm text-muted-foreground">{text.response.github}</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">Email</div>
                  <div className="text-sm text-muted-foreground">{text.response.email}</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600 dark:text-red-400">Security</div>
                  <div className="text-sm text-muted-foreground">{text.response.security}</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">Community</div>
                  <div className="text-sm text-muted-foreground">{text.response.community}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{text.community.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6">{text.community.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="https://discord.gg/fortivault" target="_blank">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {text.community.discord}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://reddit.com/r/fortivault" target="_blank">
                    <Globe className="h-4 w-4 mr-2" />
                    {text.community.reddit}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://twitter.com/fortivault" target="_blank">
                    <Globe className="h-4 w-4 mr-2" />
                    {text.community.twitter}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{text.guidelines.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{text.guidelines.respectful}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{text.guidelines.clear}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{text.guidelines.search}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{text.guidelines.patient}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer lang={lang} />
    </div>
  )
}
