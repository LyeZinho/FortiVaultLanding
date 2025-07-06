import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Database, Shield, Palette, HardDrive, Zap, AlertTriangle, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsSearch } from "@/components/docs-search"

interface ConfigurationPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function ConfigurationPage({ params }: ConfigurationPageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "Guia de Configuração",
      subtitle: "Configure o FortiVault para personalizar sua experiência de uso",
      backend: {
        title: "Configurações do Backend",
        env: "Arquivo de Configuração: backend/.env",
        security: "Configurações de Segurança",
        database: "Configurações do Banco de Dados",
      },
      frontend: {
        title: "Configurações do Frontend",
        nextConfig: "Arquivo de Configuração: next.config.mjs",
        tailwind: "Configurações do Tailwind CSS",
      },
      security: {
        title: "Configurações de Segurança",
        auth: "Configurações de Autenticação",
        crypto: "Configurações de Criptografia",
      },
      interface: {
        title: "Configurações de Interface",
        user: "Configurações do Usuário",
        accessibility: "Configurações de Acessibilidade",
      },
      sync: {
        title: "Configurações de Sincronização P2P",
        discovery: "Configuração da Descoberta de Dispositivos",
      },
      backup: {
        title: "Configurações de Backup",
        policies: "Políticas de Backup",
      },
      performance: {
        title: "Configurações de Performance",
        frontend: "Otimizações do Frontend",
        backend: "Otimizações do Backend",
      },
      environments: {
        title: "Configurações por Ambiente",
        development: "Desenvolvimento",
        production: "Produção",
        test: "Teste",
      },
      pwa: {
        title: "Configurações PWA",
        manifest: "Manifest",
      },
      validation: {
        title: "Validação da Configuração",
        script: "Script de Verificação",
      },
    },
    en: {
      title: "Configuration Guide",
      subtitle: "Configure FortiVault to customize your user experience",
      backend: {
        title: "Backend Configuration",
        env: "Configuration File: backend/.env",
        security: "Security Configuration",
        database: "Database Configuration",
      },
      frontend: {
        title: "Frontend Configuration",
        nextConfig: "Configuration File: next.config.mjs",
        tailwind: "Tailwind CSS Configuration",
      },
      security: {
        title: "Security Configuration",
        auth: "Authentication Configuration",
        crypto: "Cryptography Configuration",
      },
      interface: {
        title: "Interface Configuration",
        user: "User Configuration",
        accessibility: "Accessibility Configuration",
      },
      sync: {
        title: "P2P Sync Configuration",
        discovery: "Device Discovery Configuration",
      },
      backup: {
        title: "Backup Configuration",
        policies: "Backup Policies",
      },
      performance: {
        title: "Performance Configuration",
        frontend: "Frontend Optimizations",
        backend: "Backend Optimizations",
      },
      environments: {
        title: "Environment-specific Configuration",
        development: "Development",
        production: "Production",
        test: "Test",
      },
      pwa: {
        title: "PWA Configuration",
        manifest: "Manifest",
      },
      validation: {
        title: "Configuration Validation",
        script: "Verification Script",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar lang={lang} currentPath="/docs/configuration" />

          <main className="flex-1 max-w-4xl">
            <div className="mb-8">
              <DocsSearch lang={lang} />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
              <p className="text-xl text-muted-foreground">{text.subtitle}</p>
            </div>

            {/* Backend Configuration */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  {text.backend.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">{text.backend.env}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Crie um arquivo `.env` na pasta `backend/` com as seguintes configurações:
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">.env</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# Configurações do Servidor
HOST=127.0.0.1
PORT=8000
DEBUG=True
LOG_LEVEL=info

# Configurações de Segurança
SECRET_KEY=your-super-secret-key-here-min-32-chars
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
REFRESH_TOKEN_EXPIRE_DAYS=30

# Configurações do Banco de Dados
DATABASE_PATH=backend/database/vault.db
BACKUP_DIRECTORY=backend/backups
AUTO_BACKUP_ENABLED=True
AUTO_BACKUP_INTERVAL_HOURS=24

# Configurações de Criptografia
ENCRYPTION_ALGORITHM=AES-256-GCM
PASSWORD_HASH_ALGORITHM=argon2
ARGON2_TIME_COST=3
ARGON2_MEMORY_COST=65536
ARGON2_PARALLELISM=1

# Configurações 2FA
TOTP_ISSUER_NAME=FortiVault
TOTP_VALIDITY_WINDOW=1
BACKUP_CODES_COUNT=10

# Configurações CORS
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
ALLOW_CREDENTIALS=True

# Configurações de Rate Limiting
RATE_LIMIT_PER_MINUTE=60
RATE_LIMIT_BURST=100

# Configurações de Sincronização P2P
P2P_ENABLED=True
P2P_PORT=8001
P2P_DISCOVERY_INTERVAL=30
P2P_ENCRYPTION_ENABLED=True`}</code>
                      </pre>
                    </div>
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Importante:</strong> Mantenha o arquivo .env seguro e nunca o commite no controle de
                      versão.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* Frontend Configuration */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 mr-2 text-primary" />
                  {text.frontend.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="nextjs" className="w-full">
                  <TabsList>
                    <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                    <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
                  </TabsList>

                  <TabsContent value="nextjs" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">{text.frontend.nextConfig}</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <pre className="text-sm overflow-x-auto">
                          <code>{`/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de Build
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['sqlite3']
  },
  
  // Configurações de Imagem
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1']
  },
  
  // Configurações PWA
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
  
  // Headers de Segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval';",
          },
        ],
      },
    ]
  },
}

export default nextConfig`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="tailwind" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">{text.frontend.tailwind}</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <pre className="text-sm overflow-x-auto">
                          <code>{`// tailwind.config.ts
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Cores personalizadas
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      
      // Animações personalizadas
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Security Configuration */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  {text.security.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">{text.security.auth}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`// lib/auth-config.ts
export const authConfig = {
  // JWT
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
    refreshExpiresIn: '30d',
    algorithm: 'HS256'
  },
  
  // 2FA
  totp: {
    issuer: 'FortiVault',
    window: 1,
    digits: 6,
    period: 30,
    algorithm: 'SHA1'
  },
  
  // Políticas de Senha
  password: {
    minLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSymbols: true,
    maxAge: 90, // dias
    preventReuse: 12 // últimas senhas
  }
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{text.security.crypto}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`// lib/crypto-config.ts
export const cryptoConfig = {
  // Criptografia Simétrica
  symmetric: {
    algorithm: 'AES-256-GCM',
    keySize: 32,
    ivSize: 12,
    tagSize: 16
  },
  
  // Hash de Senhas
  password: {
    algorithm: 'argon2id',
    timeCost: 3,
    memoryCost: 65536,
    parallelism: 1,
    saltSize: 32
  },
  
  // Derivação de Chaves
  keyDerivation: {
    algorithm: 'PBKDF2',
    iterations: 100000,
    saltSize: 32,
    keySize: 32
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interface Configuration */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  {text.interface.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">{text.interface.user}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`// types/settings.ts
export interface UserSettings {
  // Aparência
  theme: 'light' | 'dark' | 'system'
  accentColor: string
  fontSize: 'small' | 'medium' | 'large'
  compactMode: boolean
  
  // Segurança
  autoLock: boolean
  autoLockTime: number // minutos
  biometricAuth: boolean
  clipboardTimeout: number // segundos
  
  // Backup
  autoBackup: boolean
  backupFrequency: 'daily' | 'weekly' | 'monthly'
  backupLocation: string
  backupEncryption: boolean
  
  // Sincronização
  syncEnabled: boolean
  syncFrequency: number // minutos
  conflictResolution: 'manual' | 'local' | 'remote'
  
  // Notificações
  passwordExpiry: boolean
  weakPasswordAlert: boolean
  breachAlert: boolean
  backupReminder: boolean
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environment Configuration */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  {text.environments.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="development" className="w-full">
                  <TabsList>
                    <TabsTrigger value="development">{text.environments.development}</TabsTrigger>
                    <TabsTrigger value="production">{text.environments.production}</TabsTrigger>
                    <TabsTrigger value="test">{text.environments.test}</TabsTrigger>
                  </TabsList>

                  <TabsContent value="development" className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# .env.development
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_DEBUG=true`}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="production" className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# .env.production
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.fortivault.com
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_DEBUG=false`}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="test" className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# .env.test
NODE_ENV=test
NEXT_PUBLIC_API_URL=http://127.0.0.1:8001
NEXT_PUBLIC_APP_ENV=test
NEXT_PUBLIC_DEBUG=true`}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Validation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HardDrive className="h-5 w-5 mr-2 text-primary" />
                  {text.validation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-3">{text.validation.script}</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`#!/bin/bash
# scripts/validate-config.sh

echo "🔍 Validando configuração do FortiVault..."

# Verificar Node.js
node_version=$(node --version)
echo "✅ Node.js: $node_version"

# Verificar Python
python_version=$(python --version)
echo "✅ Python: $python_version"

# Verificar dependências
echo "📦 Verificando dependências..."
pnpm list --depth=0 > /dev/null && echo "✅ Frontend dependencies OK"
pip list > /dev/null && echo "✅ Backend dependencies OK"

# Verificar configurações
echo "⚙️ Verificando configurações..."
[ -f "backend/.env" ] && echo "✅ Backend .env found" || echo "❌ Backend .env missing"
[ -f ".env.local" ] && echo "✅ Frontend .env found" || echo "ℹ️ Frontend .env optional"

echo "✅ Validação concluída!"`}</code>
                    </pre>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href={`/${lang}/docs/security`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Configurações de Segurança
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/${lang}/docs/api-reference`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      API Reference
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      <Footer lang={lang} />
    </div>
  )
}
