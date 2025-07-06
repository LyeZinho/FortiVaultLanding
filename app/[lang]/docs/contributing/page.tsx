import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  GitBranch,
  Code,
  TestTube,
  FileText,
  Bug,
  Lightbulb,
  Shield,
  Star,
  Heart,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsSearch } from "@/components/docs-search"

interface ContributingPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function ContributingPage({ params }: ContributingPageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "Guia de Contribuição",
      subtitle: "Obrigado por seu interesse em contribuir com o FortiVault! Este guia irá ajudá-lo a começar.",
      howToContribute: {
        title: "Como Contribuir",
        types: "Tipos de Contribuição",
        bugReports: "Relatórios de Bug",
        features: "Novas Funcionalidades",
        documentation: "Documentação",
        codeFixes: "Correções de Código",
        uiux: "UI/UX",
        security: "Segurança",
        tests: "Testes",
      },
      gettingStarted: {
        title: "Primeiros Passos",
        setup: "Configuração do Ambiente",
        workflow: "Fluxo de Trabalho",
      },
      codeStandards: {
        title: "Padrões de Código",
        naming: "Convenções de Nomenclatura",
        structure: "Estrutura de Arquivos",
        commits: "Padrões de Commit",
      },
      testing: {
        title: "Testes",
        beforePR: "Antes de Enviar o PR",
        writing: "Escrevendo Testes",
        frontend: "Frontend (Jest + React Testing Library)",
        backend: "Backend (pytest)",
        running: "Executando Testes",
      },
      documentation: {
        title: "Documentação",
        documenting: "Documentando Código",
        typescript: "TypeScript",
        python: "Python",
        updating: "Atualizando Documentação",
      },
      bugReporting: {
        title: "Reportando Bugs",
        template: "Template de Issue",
      },
      featureRequests: {
        title: "Propondo Funcionalidades",
        template: "Template de Feature Request",
      },
      security: {
        title: "Segurança",
        reporting: "Reportando Vulnerabilidades",
        audit: "Audit de Segurança",
      },
      prChecklist: {
        title: "Checklist do Pull Request",
        code: "Código",
        documentation: "Documentação",
        functionality: "Funcionalidade",
        security: "Segurança",
      },
      uiuxGuide: {
        title: "Guia de UI/UX",
        designSystem: "Design System",
        components: "Componentes",
        accessibility: "Acessibilidade",
      },
      recognition: {
        title: "Reconhecimento",
        contributors: "Contribuidores",
        levels: "Níveis de Contribuição",
      },
      support: {
        title: "Suporte",
        channels: "Canais de Comunicação",
        officeHours: "Office Hours",
      },
      roadmap: {
        title: "Roadmap",
        upcoming: "Próximas Funcionalidades",
        howToContribute: "Como Contribuir com o Roadmap",
      },
    },
    en: {
      title: "Contributing Guide",
      subtitle: "Thank you for your interest in contributing to FortiVault! This guide will help you get started.",
      howToContribute: {
        title: "How to Contribute",
        types: "Types of Contribution",
        bugReports: "Bug Reports",
        features: "New Features",
        documentation: "Documentation",
        codeFixes: "Code Fixes",
        uiux: "UI/UX",
        security: "Security",
        tests: "Tests",
      },
      gettingStarted: {
        title: "Getting Started",
        setup: "Environment Setup",
        workflow: "Workflow",
      },
      codeStandards: {
        title: "Code Standards",
        naming: "Naming Conventions",
        structure: "File Structure",
        commits: "Commit Standards",
      },
      testing: {
        title: "Testing",
        beforePR: "Before Submitting PR",
        writing: "Writing Tests",
        frontend: "Frontend (Jest + React Testing Library)",
        backend: "Backend (pytest)",
        running: "Running Tests",
      },
      documentation: {
        title: "Documentation",
        documenting: "Documenting Code",
        typescript: "TypeScript",
        python: "Python",
        updating: "Updating Documentation",
      },
      bugReporting: {
        title: "Reporting Bugs",
        template: "Issue Template",
      },
      featureRequests: {
        title: "Proposing Features",
        template: "Feature Request Template",
      },
      security: {
        title: "Security",
        reporting: "Reporting Vulnerabilities",
        audit: "Security Audit",
      },
      prChecklist: {
        title: "Pull Request Checklist",
        code: "Code",
        documentation: "Documentation",
        functionality: "Functionality",
        security: "Security",
      },
      uiuxGuide: {
        title: "UI/UX Guide",
        designSystem: "Design System",
        components: "Components",
        accessibility: "Accessibility",
      },
      recognition: {
        title: "Recognition",
        contributors: "Contributors",
        levels: "Contribution Levels",
      },
      support: {
        title: "Support",
        channels: "Communication Channels",
        officeHours: "Office Hours",
      },
      roadmap: {
        title: "Roadmap",
        upcoming: "Upcoming Features",
        howToContribute: "How to Contribute to Roadmap",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar lang={lang} currentPath="/docs/contributing" />

          <main className="flex-1 max-w-4xl">
            <div className="mb-8">
              <DocsSearch lang={lang} />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
              <p className="text-xl text-muted-foreground">{text.subtitle}</p>
            </div>

            {/* How to Contribute */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  {text.howToContribute.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Bug className="h-5 w-5 text-red-500" />
                    <div>
                      <h4 className="font-medium">{text.howToContribute.bugReports}</h4>
                      <p className="text-sm text-muted-foreground">Encontrou um problema? Nos ajude a corrigi-lo</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <div>
                      <h4 className="font-medium">{text.howToContribute.features}</h4>
                      <p className="text-sm text-muted-foreground">Ideias para melhorar o FortiVault</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <div>
                      <h4 className="font-medium">{text.howToContribute.documentation}</h4>
                      <p className="text-sm text-muted-foreground">Melhore a documentação existente</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Code className="h-5 w-5 text-green-500" />
                    <div>
                      <h4 className="font-medium">{text.howToContribute.codeFixes}</h4>
                      <p className="text-sm text-muted-foreground">Fixes, otimizações e melhorias</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Shield className="h-5 w-5 text-purple-500" />
                    <div>
                      <h4 className="font-medium">{text.howToContribute.security}</h4>
                      <p className="text-sm text-muted-foreground">Auditorias e melhorias de segurança</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <TestTube className="h-5 w-5 text-orange-500" />
                    <div>
                      <h4 className="font-medium">{text.howToContribute.tests}</h4>
                      <p className="text-sm text-muted-foreground">Adição de testes e melhoria da cobertura</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="h-5 w-5 mr-2 text-primary" />
                  {text.gettingStarted.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">1. {text.gettingStarted.setup}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU-USUARIO/FortiVault.git
cd FortiVault

# Adicione o repositório original como upstream
git remote add upstream https://github.com/LyeZinho/FortiVault.git

# Configure o ambiente de desenvolvimento
# (Veja docs/development.md para instruções detalhadas)`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">2. {text.gettingStarted.workflow}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# Crie uma branch para sua contribuição
git checkout -b feature/sua-nova-funcionalidade

# Faça suas alterações
# ...

# Adicione e commit suas alterações
git add .
git commit -m "feat: adicionar nova funcionalidade X"

# Push para seu fork
git push origin feature/sua-nova-funcionalidade

# Abra um Pull Request no GitHub`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Code Standards */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  {text.codeStandards.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="naming" className="w-full">
                  <TabsList>
                    <TabsTrigger value="naming">Nomenclatura</TabsTrigger>
                    <TabsTrigger value="structure">Estrutura</TabsTrigger>
                    <TabsTrigger value="commits">Commits</TabsTrigger>
                  </TabsList>

                  <TabsContent value="naming" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">TypeScript/JavaScript</h4>
                        <div className="bg-muted p-4 rounded-lg">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`// Variáveis e funções: camelCase
const userPassword = 'secret'
function encryptPassword() {}

// Constantes: UPPER_SNAKE_CASE
const MAX_PASSWORD_LENGTH = 1000

// Classes: PascalCase
class PasswordManager {}

// Interfaces: PascalCase
interface PasswordEntry {}

// Componentes React: PascalCase
export function PasswordList() {}`}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Python</h4>
                        <div className="bg-muted p-4 rounded-lg">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`# Variáveis e funções: snake_case
user_password = 'secret'
def encrypt_password():
    pass

# Constantes: UPPER_SNAKE_CASE
MAX_PASSWORD_LENGTH = 1000

# Classes: PascalCase
class PasswordManager:
    pass`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="structure" className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`// components/password/PasswordItem.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { PasswordEntry } from '@/types/password'

interface PasswordItemProps {
  password: PasswordEntry
  onUpdate?: () => void
  onDelete?: () => void
}

export function PasswordItem({ password, onUpdate, onDelete }: PasswordItemProps) {
  // Component logic here
  
  return (
    <Card>
      {/* JSX here */}
    </Card>
  )
}`}</code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="commits" className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Usamos{" "}
                        <Link
                          href="https://www.conventionalcommits.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                        >
                          Conventional Commits
                        </Link>
                        :
                      </p>
                      <div className="bg-muted p-4 rounded-lg">
                        <pre className="text-sm overflow-x-auto">
                          <code>{`# Formato
<type>[optional scope]: <description>

# Tipos
feat:     Nova funcionalidade
fix:      Correção de bug
docs:     Mudanças na documentação
style:    Formatação, pontos e vírgulas ausentes, etc
refactor: Refatoração de código
test:     Adição de testes
chore:    Mudanças em ferramentas, configurações, etc

# Exemplos
feat(auth): adicionar autenticação 2FA
fix(vault): corrigir vazamento de memória na descriptografia
docs(api): atualizar documentação dos endpoints
test(auth): adicionar testes para login`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Testing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TestTube className="h-5 w-5 mr-2 text-primary" />
                  {text.testing.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">{text.testing.beforePR}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# Frontend
pnpm test               # Executar todos os testes
pnpm test:coverage      # Verificar cobertura
pnpm lint               # Verificar linting
pnpm type-check         # Verificar tipos TypeScript

# Backend
cd backend
pytest                  # Executar todos os testes
pytest --cov=.         # Verificar cobertura
flake8 .               # Verificar linting
mypy .                 # Verificar tipos`}</code>
                      </pre>
                    </div>
                  </div>

                  <Tabs defaultValue="frontend" className="w-full">
                    <TabsList>
                      <TabsTrigger value="frontend">Frontend</TabsTrigger>
                      <TabsTrigger value="backend">Backend</TabsTrigger>
                    </TabsList>

                    <TabsContent value="frontend" className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">{text.testing.frontend}</h4>
                        <div className="bg-muted p-4 rounded-lg">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`// __tests__/components/PasswordItem.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PasswordItem } from '@/components/password/PasswordItem'
import { PasswordEntry } from '@/types/password'

const mockPassword: PasswordEntry = {
  id: '1',
  title: 'Test Password',
  username: 'test@example.com',
  url: 'https://example.com',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z'
}

describe('PasswordItem', () => {
  it('should render password information', () => {
    render(<PasswordItem password={mockPassword} />)
    
    expect(screen.getByText('Test Password')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
  })

  it('should call onDelete when delete button is clicked', async () => {
    const onDeleteMock = jest.fn()
    render(<PasswordItem password={mockPassword} onDelete={onDeleteMock} />)
    
    const deleteButton = screen.getByRole('button', { name: /delete/i })
    fireEvent.click(deleteButton)
    
    await waitFor(() => {
      expect(onDeleteMock).toHaveBeenCalledWith()
    })
  })
})`}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="backend" className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">{text.testing.backend}</h4>
                        <div className="bg-muted p-4 rounded-lg">
                          <pre className="text-sm overflow-x-auto">
                            <code>{`# tests/test_auth.py
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_register_user_success():
    """Teste de registro de usuário bem-sucedido"""
    user_data = {
        "username": "testuser",
        "email": "test@example.com",
        "password": "SecurePassword123!"
    }
    
    response = client.post("/auth/register", json=user_data)
    
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == "testuser"
    assert data["email"] == "test@example.com"
    assert "password" not in data  # Senha não deve ser retornada

def test_register_user_invalid_email():
    """Teste de registro com email inválido"""
    user_data = {
        "username": "testuser",
        "email": "invalid-email",
        "password": "SecurePassword123!"
    }
    
    response = client.post("/auth/register", json=user_data)
    
    assert response.status_code == 422
    assert "email" in response.json()["detail"]`}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            {/* PR Checklist */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  {text.prChecklist.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      {text.prChecklist.code}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">O código segue os padrões estabelecidos</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Todos os testes passam</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Cobertura de testes mantida ou melhorada</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Linting passou sem erros</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Type checking passou (TypeScript)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      {text.prChecklist.documentation}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Documentação foi atualizada (se necessário)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">README atualizado (se necessário)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Changelog atualizado (para mudanças significativas)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      {text.prChecklist.security}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Nenhuma informação sensível exposta</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Inputs são validados e sanitizados</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Autenticação/autorização implementada corretamente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  {text.security.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="mb-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>NÃO</strong> abra issues públicas para vulnerabilidades de segurança.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{text.security.reporting}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Envie um email para: <strong>security@fortivault.com</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">Inclua:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Descrição da vulnerabilidade</li>
                      <li>Passos para reproduzir</li>
                      <li>Impacto potencial</li>
                      <li>Sugestões de correção (se houver)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{text.security.audit}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`# Verificar dependências
npm audit
pip-audit

# Análise estática
bandit -r backend/
eslint --ext .ts,.tsx app/ components/ lib/

# Teste de segurança
./scripts/security-test.sh`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recognition */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  {text.recognition.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{text.recognition.contributors}</h4>
                    <p className="text-sm text-muted-foreground">Todos os contribuidores são reconhecidos:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>
                        <strong>README.md</strong>: Lista de contribuidores principais
                      </li>
                      <li>
                        <strong>CONTRIBUTORS.md</strong>: Lista completa com contribuições
                      </li>
                      <li>
                        <strong>Release Notes</strong>: Créditos para cada release
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{text.recognition.levels}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-yellow-500">🥇</Badge>
                        <span className="text-sm">
                          <strong>Core Contributor</strong>: 50+ commits significativos
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-gray-400">🥈</Badge>
                        <span className="text-sm">
                          <strong>Regular Contributor</strong>: 10+ commits
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-orange-400">🥉</Badge>
                        <span className="text-sm">
                          <strong>Contributor</strong>: 1+ commit
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-purple-500">🌟</Badge>
                        <span className="text-sm">
                          <strong>Special Recognition</strong>: Contribuições únicas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  {text.support.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">{text.support.channels}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" asChild>
                        <Link href="https://discord.gg/fortivault-contributors" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Discord #contributors
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="mailto:contributors@fortivault.com">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Email
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="https://github.com/LyeZinho/FortiVault/issues" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          GitHub Issues
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="https://github.com/LyeZinho/FortiVault/discussions" target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          GitHub Discussions
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{text.support.officeHours}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">Sessões semanais para discussão de contribuições:</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground ml-4 mt-2">
                        <li>
                          <strong>Quando</strong>: Sábados, 14:00 UTC
                        </li>
                        <li>
                          <strong>Onde</strong>: Discord voice channel
                        </li>
                        <li>
                          <strong>Agenda</strong>: Dúvidas, PR reviews, planejamento
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-lg font-medium text-primary">
                    🙏 Obrigado por contribuir! Sua ajuda torna o FortiVault melhor para todos.
                  </p>
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
