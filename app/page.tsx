import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { redirect } from "next/navigation"
import {
  Shield,
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

export default function RootPage() {
  redirect("/pt")
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">FortiVault</span>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                v2.0
              </Badge>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
                Recursos
              </Link>
              <Link href="#docs" className="text-slate-300 hover:text-white transition-colors">
                Documentação
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contato
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Gerenciador de Senhas
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}
                Descentralizado
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              FortiVault é um gerenciador de senhas seguro, moderno e 100% local, desenvolvido com foco em privacidade e
              praticidade. Criptografia zero-knowledge, sincronização P2P e autenticação 2FA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                <Download className="h-5 w-5 mr-2" />
                Baixar Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-3 bg-transparent"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Ver Documentação
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>100% Offline</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Zero-Knowledge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recursos Principais</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tecnologia de ponta para manter suas senhas seguras e acessíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Lock className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Criptografia Zero-Knowledge</CardTitle>
                <CardDescription className="text-slate-300">
                  Suas senhas são criptografadas localmente usando AES-256-GCM. Nem mesmo nós podemos acessá-las.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Autenticação 2FA</CardTitle>
                <CardDescription className="text-slate-300">
                  Suporte completo a TOTP com códigos de backup para máxima segurança.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Wifi className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Sincronização P2P</CardTitle>
                <CardDescription className="text-slate-300">
                  Sincronize entre dispositivos sem servidores centrais, mantendo total privacidade.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">PWA Offline-First</CardTitle>
                <CardDescription className="text-slate-300">
                  Funciona completamente offline e pode ser instalado como aplicativo nativo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Database className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Backup Seguro</CardTitle>
                <CardDescription className="text-slate-300">
                  Backups criptografados automáticos com recuperação fácil e verificação de integridade.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Interface Moderna</CardTitle>
                <CardDescription className="text-slate-300">
                  UI responsiva com suporte a modo escuro/claro e drag-and-drop intuitivo.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Stack Tecnológico</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Construído com as melhores tecnologias modernas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-white mb-4">Frontend</CardTitle>
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Next.js 15
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    React 19
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Shadcn/ui
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-white mb-4">Backend</CardTitle>
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    FastAPI
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    Python 3.11+
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    SQLite
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    JWT + 2FA
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    Argon2
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-white mb-4">Segurança</CardTitle>
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                    AES-256-GCM
                  </Badge>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                    PBKDF2
                  </Badge>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                    TOTP
                  </Badge>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                    CSP
                  </Badge>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                    Rate Limiting
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Documentação Completa</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Guias detalhados para instalação, configuração e desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  📥 Instalação
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Guia completo de instalação em diferentes ambientes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  ⚙️ Configuração
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription className="text-slate-300">Configurações avançadas e personalização</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  🔌 API Reference
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription className="text-slate-300">Documentação completa da API REST</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  🛠️ Desenvolvimento
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription className="text-slate-300">Guia completo para desenvolvedores</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  🔒 Segurança
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription className="text-slate-300">Práticas de segurança e implementações</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  🚀 Deploy
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
                <CardDescription className="text-slate-300">Guias de deploy para diferentes ambientes</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Ver Toda Documentação
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Sobre o FortiVault</h2>

            <div className="text-lg text-slate-300 space-y-6 mb-12">
              <p>
                O FortiVault nasceu da necessidade de ter um gerenciador de senhas que realmente respeite sua
                privacidade. Diferente de soluções comerciais, o FortiVault é completamente open-source e funciona 100%
                offline.
              </p>

              <p>
                Nossa missão é democratizar a segurança digital, fornecendo uma ferramenta profissional e gratuita que
                qualquer pessoa pode usar, auditar e contribuir.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-slate-300">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-slate-300">Dados Coletados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                <div className="text-slate-300">Senhas Suportadas</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Users className="h-5 w-5 mr-2" />
                Contribuir
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                <Star className="h-5 w-5 mr-2" />
                Dar uma Estrela
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Pronto para Proteger suas Senhas?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Comece a usar o FortiVault hoje mesmo e tenha controle total sobre sua segurança digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100 text-lg px-8 py-3">
              <Download className="h-5 w-5 mr-2" />
              Download Gratuito
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
            >
              <Github className="h-5 w-5 mr-2" />
              Ver no GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">FortiVault</span>
              </div>
              <p className="text-slate-400">Gerenciador de senhas descentralizado e seguro para todos.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Desenvolvedores</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#docs" className="hover:text-white transition-colors">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contribuir
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Issues
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discussões
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="mailto:suporte@fortivault.com" className="hover:text-white transition-colors">
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 FortiVault. Licenciado sob MIT License. Desenvolvido com ❤️ para a comunidade.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
