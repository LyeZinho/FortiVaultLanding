"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, GitBranch, Wrench, TestTube, Bug, Users, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsSearch } from "@/components/docs-search"

interface DevelopmentPageProps {
  params: {
    lang: string
  }
}

export default function DevelopmentPageClient({ params: { lang } }: DevelopmentPageProps) {
  const t = {
    pt: {
      title: "Guia de Desenvolvimento",
      subtitle: "Documentação completa para desenvolvedores que desejam contribuir com o FortiVault",
      architecture: {
        title: "Arquitetura do Projeto",
        description: "O FortiVault é construído com uma arquitetura moderna e modular",
        frontend: "Frontend (Next.js 15)",
        backend: "Backend (FastAPI)",
        database: "Banco de Dados (SQLite)",
      },
      structure: {
        title: "Estrutura de Diretórios",
        description: "Organização dos arquivos e pastas do projeto",
      },
      setup: {
        title: "Configuração do Ambiente",
        description: "Como configurar seu ambiente de desenvolvimento",
        clone: "Clone o repositório",
        install: "Instale as dependências",
        config: "Configure o ambiente",
        run: "Execute o projeto",
      },
      standards: {
        title: "Padrões de Código",
        description: "Convenções e melhores práticas adotadas no projeto",
        typescript: "TypeScript/JavaScript",
        python: "Python",
        styling: "Estilização",
      },
      testing: {
        title: "Testes",
        description: "Como executar e escrever testes",
        frontend: "Frontend (Jest + Testing Library)",
        backend: "Backend (pytest)",
        e2e: "E2E (Playwright)",
      },
      debugging: {
        title: "Debugging",
        description: "Ferramentas e técnicas de debug",
      },
      contributing: {
        title: "Como Contribuir",
        description: "Fluxo de contribuição para o projeto",
        fork: "Fork do repositório",
        branch: "Criar branch",
        commit: "Fazer commits",
        pr: "Abrir Pull Request",
      },
    },
    en: {
      title: "Development Guide",
      subtitle: "Complete documentation for developers who want to contribute to FortiVault",
      architecture: {
        title: "Project Architecture",
        description: "FortiVault is built with a modern and modular architecture",
        frontend: "Frontend (Next.js 15)",
        backend: "Backend (FastAPI)",
        database: "Database (SQLite)",
      },
      structure: {
        title: "Directory Structure",
        description: "Organization of project files and folders",
      },
      setup: {
        title: "Environment Setup",
        description: "How to set up your development environment",
        clone: "Clone the repository",
        install: "Install dependencies",
        config: "Configure environment",
        run: "Run the project",
      },
      standards: {
        title: "Code Standards",
        description: "Conventions and best practices adopted in the project",
        typescript: "TypeScript/JavaScript",
        python: "Python",
        styling: "Styling",
      },
      testing: {
        title: "Testing",
        description: "How to run and write tests",
        frontend: "Frontend (Jest + Testing Library)",
        backend: "Backend (pytest)",
        e2e: "E2E (Playwright)",
      },
      debugging: {
        title: "Debugging",
        description: "Debug tools and techniques",
      },
      contributing: {
        title: "How to Contribute",
        description: "Contribution workflow for the project",
        fork: "Fork the repository",
        branch: "Create branch",
        commit: "Make commits",
        pr: "Open Pull Request",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar lang={lang} currentPath="/docs/development" />

          <main className="flex-1 max-w-4xl">
            <div className="mb-8">
              <DocsSearch lang={lang} />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">🛠️ {text.title}</h1>
              <p className="text-xl text-muted-foreground">{text.subtitle}</p>
            </div>

            {/* Arquitetura */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  {text.architecture.title}
                </CardTitle>
                <CardDescription>{text.architecture.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{text.architecture.frontend}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary">React 19</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">shadcn/ui</Badge>
                        <Badge variant="secondary">Zustand</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{text.architecture.backend}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary">Python 3.11+</Badge>
                        <Badge variant="secondary">Pydantic</Badge>
                        <Badge variant="secondary">SQLAlchemy</Badge>
                        <Badge variant="secondary">JWT</Badge>
                        <Badge variant="secondary">Cryptography</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{text.architecture.database}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="secondary">SQLite</Badge>
                        <Badge variant="secondary">WAL Mode</Badge>
                        <Badge variant="secondary">Encrypted</Badge>
                        <Badge variant="secondary">Backup</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Estrutura de Diretórios */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {text.structure.title}
                </CardTitle>
                <CardDescription>{text.structure.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`FortiVault/
├── app/                          # Next.js App Router
│   ├── [lang]/                   # Rotas multilíngues
│   │   ├── page.tsx             # Página inicial
│   │   ├── download/            # Página de download
│   │   ├── docs/                # Documentação
│   │   ├── about/               # Sobre
│   │   ├── contact/             # Contato
│   │   └── license/             # Licença
├── api/                     # API Routes (se necessário)
├── globals.css              # Estilos globais
├── layout.tsx               # Layout raiz
├── components/                   # Componentes React
│   ├── ui/                      # Componentes shadcn/ui
│   ├── header.tsx               # Cabeçalho
│   ├── footer.tsx               # Rodapé
│   ├── docs-sidebar.tsx         # Sidebar da documentação
│   └── theme-provider.tsx       # Provider de tema
├── backend/                     # Backend FastAPI
│   ├── main.py                  # Aplicação principal
│   ├── models/                  # Modelos de dados
│   ├── routes/                  # Rotas da API
│   ├── services/                # Lógica de negócio
│   ├── utils/                   # Utilitários
│   └── requirements.txt         # Dependências Python
├── lib/                         # Utilitários TypeScript
├── hooks/                       # Custom hooks React
├── public/                      # Arquivos estáticos
├── styles/                      # Estilos adicionais
├── types/                       # Definições de tipos
├── middleware.ts                # Middleware Next.js
├── next.config.mjs              # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind
├── package.json                 # Dependências Node.js
└── README.md                    # Documentação`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Configuração do Ambiente */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  {text.setup.title}
                </CardTitle>
                <CardDescription>{text.setup.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="step1" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="step1">1. Clone</TabsTrigger>
                    <TabsTrigger value="step2">2. Install</TabsTrigger>
                    <TabsTrigger value="step3">3. Config</TabsTrigger>
                    <TabsTrigger value="step4">4. Run</TabsTrigger>
                  </TabsList>

                  <TabsContent value="step1" className="space-y-4">
                    <h4 className="font-semibold">{text.setup.clone}</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        {`# Clone o repositório
git clone https://github.com/LyeZinho/FortiVault.git
cd FortiVault

# Configure o Git (se necessário)
git config user.name "Seu Nome"
git config user.email "seu@email.com"`}
                      </code>
                    </div>
                  </TabsContent>

                  <TabsContent value="step2" className="space-y-4">
                    <h4 className="font-semibold">{text.setup.install}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Frontend (Next.js)</h5>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm">
                            {`# Instalar dependências do frontend
pnpm install

# Ou usando npm
npm install

# Ou usando yarn
yarn install`}
                          </code>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Backend (Python)</h5>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm">
                            {`# Criar ambiente virtual
cd backend
python -m venv venv

# Ativar ambiente virtual
# Windows
venv\\Scripts\\activate
# macOS/Linux
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="step3" className="space-y-4">
                    <h4 className="font-semibold">{text.setup.config}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Variáveis de Ambiente</h5>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm">
                            {`# Copiar arquivo de exemplo
cp .env.example .env

# Editar variáveis de ambiente
# .env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///./vault.db
JWT_SECRET=your-jwt-secret-here`}
                          </code>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Configuração do VS Code</h5>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm">
                            {`# .vscode/settings.json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "python.defaultInterpreterPath": "./backend/venv/bin/python"
}`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="step4" className="space-y-4">
                    <h4 className="font-semibold">{text.setup.run}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Executar Backend</h5>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm">
                            {`# Terminal 1 - Backend
cd backend
source venv/bin/activate  # Linux/macOS
# ou venv\\Scripts\\activate  # Windows
python main.py

# Backend rodando em: http://127.0.0.1:8000`}
                          </code>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Executar Frontend</h5>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm">
                            {`# Terminal 2 - Frontend
pnpm dev

# Frontend rodando em: http://localhost:3000`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Padrões de Código */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  {text.standards.title}
                </CardTitle>
                <CardDescription>{text.standards.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="typescript" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="typescript">{text.standards.typescript}</TabsTrigger>
                    <TabsTrigger value="python">{text.standards.python}</TabsTrigger>
                    <TabsTrigger value="styling">{text.standards.styling}</TabsTrigger>
                  </TabsList>

                  <TabsContent value="typescript" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Convenções TypeScript/React</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`// Exemplo de componente React
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-md font-medium transition-colors',
        {
          'bg-primary text-primary-foreground': variant === 'primary',
          'bg-secondary text-secondary-foreground': variant === 'secondary',
          'px-3 py-1 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}`}
                        </code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Hooks Customizados</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`// hooks/use-vault.ts
import { useState, useEffect } from 'react'

interface VaultData {
  passwords: Password[]
  folders: Folder[]
  stats: VaultStats
}

export function useVault() {
  const [data, setData] = useState<VaultData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVaultData() {
      try {
        setLoading(true)
        const response = await api.getVaultData()
        setData(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchVaultData()
  }, [])

  return { data, loading, error, refetch: fetchVaultData }
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="python" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Estrutura de Rotas FastAPI</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`# routes/vault.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from ..models import Password
from ..schemas import PasswordCreate, PasswordResponse
from ..services.auth import get_current_user

router = APIRouter(prefix="/vault", tags=["vault"])

@router.get("/passwords", response_model=List[PasswordResponse])
async def get_passwords(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    """Obter senhas do usuário atual"""
    passwords = db.query(Password).filter(
        Password.user_id == current_user.id
    ).offset(skip).limit(limit).all()
    
    return passwords

@router.post("/passwords", response_model=PasswordResponse)
async def create_password(
    password_data: PasswordCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    """Criar nova senha"""
    password = Password(
        **password_data.dict(),
        user_id=current_user.id
    )
    
    db.add(password)
    db.commit()
    db.refresh(password)
    
    return password`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="styling" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Convenções Tailwind CSS</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`// Ordem das classes Tailwind
<div className={cn(
  // Layout
  "flex items-center justify-between",
  // Spacing
  "p-4 gap-2",
  // Sizing
  "w-full h-auto",
  // Typography
  "text-sm font-medium",
  // Colors
  "bg-background text-foreground",
  // Borders
  "border border-border rounded-md",
  // Effects
  "shadow-sm hover:shadow-md",
  // Transitions
  "transition-all duration-200",
  // Responsive
  "md:p-6 lg:text-base"
)}>
  Content
</div>`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Testes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-5 w-5" />
                  {text.testing.title}
                </CardTitle>
                <CardDescription>{text.testing.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="frontend" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend">{text.testing.frontend}</TabsTrigger>
                    <TabsTrigger value="backend">{text.testing.backend}</TabsTrigger>
                    <TabsTrigger value="e2e">{text.testing.e2e}</TabsTrigger>
                  </TabsList>

                  <TabsContent value="frontend" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Configuração Jest</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(customJestConfig)`}
                        </code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Exemplo de Teste</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="backend" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Configuração pytest</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`# backend/conftest.py
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from .main import app
from .database import get_db, Base

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture
def db():
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()
        Base.metadata.drop_all(bind=engine)

@pytest.fixture
def client(db):
    def override_get_db():
        try:
            yield db
        finally:
            db.close()
    
    app.dependency_overrides[get_db] = override_get_db
    yield TestClient(app)
    app.dependency_overrides.clear()`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="e2e" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Testes E2E com Playwright</h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm">
                          {`// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('http://localhost:3000/pt')
    
    await page.click('text=Login')
    await page.fill('[name="username"]', 'testuser')
    await page.fill('[name="password"]', 'testpass')
    await page.click('button[type="submit"]')
    
    await expect(page).toHaveURL(/.*dashboard/)
    await expect(page.locator('text=Bem-vindo')).toBeVisible()
  })
})`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Debugging */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5" />
                  {text.debugging.title}
                </CardTitle>
                <CardDescription>{text.debugging.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">VS Code Launch Configuration</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        {`// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "launch",
      "program": "\${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "cwd": "\${workspaceFolder}",
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Python: FastAPI",
      "type": "python",
      "request": "launch",
      "program": "\${workspaceFolder}/backend/main.py",
      "console": "integratedTerminal",
      "cwd": "\${workspaceFolder}/backend"
    }
  ]
}`}
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Logs de Debug</h4>
                    <div className="bg-muted p-4 rounded-lg">
                      <code className="text-sm">
                        {`# Frontend - Debug no navegador
console.log('Debug info:', data)
console.table(users)
console.group('API Call')
console.log('Request:', request)
console.log('Response:', response)
console.groupEnd()

# Backend - Logging Python
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

logger.debug("Debug message")
logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Como Contribuir */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {text.contributing.title}
                </CardTitle>
                <CardDescription>{text.contributing.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                        <span className="font-medium">{text.contributing.fork}</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg ml-10">
                        <code className="text-sm">
                          {`# Fork no GitHub e clone
git clone https://github.com/seu-usuario/FortiVault.git
cd FortiVault
git remote add upstream https://github.com/LyeZinho/FortiVault.git`}
                        </code>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          2
                        </div>
                        <span className="font-medium">{text.contributing.branch}</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg ml-10">
                        <code className="text-sm">
                          {`# Criar branch para feature
git checkout -b feature/nova-funcionalidade

# Ou para bugfix
git checkout -b fix/corrigir-bug`}
                        </code>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          3
                        </div>
                        <span className="font-medium">{text.contributing.commit}</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg ml-10">
                        <code className="text-sm">
                          {`# Commits semânticos
git commit -m "feat: adicionar autenticação 2FA"
git commit -m "fix: corrigir bug na criptografia"
git commit -m "docs: atualizar README"`}
                        </code>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          4
                        </div>
                        <span className="font-medium">{text.contributing.pr}</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg ml-10">
                        <code className="text-sm">
                          {`# Push e criar PR
git push origin feature/nova-funcionalidade

# Abrir PR no GitHub com:
# - Descrição clara
# - Screenshots (se UI)
# - Testes passando`}
                        </code>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <GitBranch className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Dica:</strong> Sempre sincronize com o repositório upstream antes de criar uma nova
                      branch: <code>git pull upstream main</code>
                    </AlertDescription>
                  </Alert>
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
