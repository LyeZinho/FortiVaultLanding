import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Lock, Key, Eye, CheckCircle } from "lucide-react"
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
      architecture: {
        title: "Arquitetura de Segurança",
        description: "Modelo de segurança zero-knowledge implementado",
      },
      crypto: {
        title: "Implementações de Criptografia",
        description: "Algoritmos e técnicas de criptografia utilizadas",
      },
      auth: {
        title: "Autenticação e Autorização",
        description: "Sistemas de autenticação implementados",
      },
      headers: {
        title: "Headers de Segurança",
        description: "Configurações de segurança HTTP",
      },
      database: {
        title: "Segurança do Banco de Dados",
        description: "Proteção e configuração segura do banco",
      },
      checklist: {
        title: "Checklist de Segurança",
        description: "Lista de verificação para configuração segura",
      },
    },
    en: {
      title: "Security",
      subtitle: "Complete documentation on FortiVault's security implementations and best practices",
      architecture: {
        title: "Security Architecture",
        description: "Zero-knowledge security model implemented",
      },
      crypto: {
        title: "Cryptography Implementations",
        description: "Cryptographic algorithms and techniques used",
      },
      auth: {
        title: "Authentication and Authorization",
        description: "Authentication systems implemented",
      },
      headers: {
        title: "Security Headers",
        description: "HTTP security configurations",
      },
      database: {
        title: "Database Security",
        description: "Database protection and secure configuration",
      },
      checklist: {
        title: "Security Checklist",
        description: "Verification checklist for secure configuration",
      },
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
              <DocsSearch lang={lang} />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">🔒 {text.title}</h1>
              <p className="text-xl text-muted-foreground">{text.subtitle}</p>
            </div>

            {/* Basic Security Info */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {text.architecture.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-3">Modelo de Segurança Zero-Knowledge</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      O FortiVault implementa um modelo de segurança zero-knowledge onde:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Dados criptografados localmente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Servidor nunca vê dados descriptografados</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Chaves de criptografia nunca são transmitidas</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Autenticação multifator obrigatória</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Backup criptografado ponta-a-ponta</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Sincronização P2P segura</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cryptography */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  {text.crypto.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Algoritmos de Criptografia</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h5 className="font-medium mb-2">AES-256-GCM</h5>
                        <p className="text-sm text-muted-foreground">
                          Criptografia simétrica para dados sensíveis com autenticação integrada
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h5 className="font-medium mb-2">PBKDF2</h5>
                        <p className="text-sm text-muted-foreground">
                          Derivação de chaves a partir de senhas com salt aleatório
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h5 className="font-medium mb-2">ECDSA</h5>
                        <p className="text-sm text-muted-foreground">
                          Assinatura digital para verificação de integridade
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h5 className="font-medium mb-2">X25519</h5>
                        <p className="text-sm text-muted-foreground">
                          Acordo de chaves para comunicação P2P segura
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Authentication */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  {text.auth.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Autenticação de Dois Fatores (2FA)</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Implementação obrigatória de 2FA para todas as contas:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="font-medium mb-2">TOTP</div>
                        <p className="text-xs text-muted-foreground">
                          Time-based One-Time Password (Google Authenticator, Authy)
                        </p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="font-medium mb-2">WebAuthn</div>
                        <p className="text-xs text-muted-foreground">
                          Hardware security keys (YubiKey, solokeys)
                        </p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="font-medium mb-2">Backup Codes</div>
                        <p className="text-xs text-muted-foreground">
                          Códigos de recuperação únicos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Headers */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  {text.headers.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Headers HTTP de Segurança</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <code className="text-sm">Strict-Transport-Security</code>
                        <span className="text-xs text-green-600">✓ Ativo</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <code className="text-sm">Content-Security-Policy</code>
                        <span className="text-xs text-green-600">✓ Ativo</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <code className="text-sm">X-Frame-Options</code>
                        <span className="text-xs text-green-600">✓ Ativo</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <code className="text-sm">X-Content-Type-Options</code>
                        <span className="text-xs text-green-600">✓ Ativo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {text.checklist.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">✅ Senhas mestras fortes (min. 12 caracteres)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">✅ 2FA habilitado em todas as contas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">✅ Backup regular e criptografado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">✅ Atualizações automáticas ativadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">✅ Dispositivos confiáveis apenas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">✅ Sessões com timeout automático</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
