import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertTriangle, Terminal, Download, Settings, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Instalação - FortiVault",
  description: "Guia completo de instalação do FortiVault em diferentes ambientes",
}

export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">📥 Guia de Instalação</h1>
        <p className="text-xl text-muted-foreground">
          Este guia fornece instruções detalhadas para instalar e configurar o FortiVault em diferentes ambientes.
        </p>
      </div>

      {/* Pré-requisitos */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />📋 Pré-requisitos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Sistema Operacional</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Windows 10/11</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>macOS 10.15+</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Ubuntu 20.04+</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Debian 11+</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Software Necessário</h3>
              <div className="space-y-3">
                <div>
                  <Badge variant="outline" className="mb-2">
                    Frontend (Next.js)
                  </Badge>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Node.js 18.17.0 ou superior</li>
                    <li>• pnpm 8.0.0+ (recomendado)</li>
                    <li>• Git para controle de versão</li>
                  </ul>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    Backend (Python)
                  </Badge>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Python 3.11 ou superior</li>
                    <li>• pip (gerenciador de pacotes)</li>
                    <li>• SQLite (incluído no Python)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instalação Rápida */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />🚀 Instalação Rápida
          </CardTitle>
          <CardDescription>Configure o FortiVault em 3 passos simples</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">1. Clone o Repositório</h3>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`# HTTPS
git clone https://github.com/seu-usuario/FortiVault.git

# SSH (se configurado)
git clone git@github.com:seu-usuario/FortiVault.git

cd FortiVault`}
                </code>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">2. Configure o Backend</h3>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`# Navegue para a pasta do backend
cd backend

# Crie um ambiente virtual (recomendado)
python -m venv venv

# Ative o ambiente virtual
# Windows
venv\\Scripts\\activate
# macOS/Linux
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Execute o servidor backend
python main.py`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                O backend estará disponível em: <code>http://127.0.0.1:8000</code>
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold mb-2">3. Configure o Frontend</h3>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`# Em um novo terminal, navegue para a raiz do projeto
cd FortiVault

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm dev`}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                O frontend estará disponível em: <code>http://localhost:3000</code>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instalação com Docker */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />🐳 Instalação com Docker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="compose" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="compose">Docker Compose</TabsTrigger>
              <TabsTrigger value="manual">Dockerfile Manual</TabsTrigger>
            </TabsList>

            <TabsContent value="compose" className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">
                  {`# Clone o repositório
git clone https://github.com/seu-usuario/FortiVault.git
cd FortiVault

# Execute com Docker Compose
docker-compose up -d`}
                </code>
              </div>
            </TabsContent>

            <TabsContent value="manual" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Backend Dockerfile</h4>
                <div className="bg-muted p-4 rounded-md">
                  <code className="text-sm">
                    {`FROM python:3.11-slim

WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .
EXPOSE 8000
CMD ["python", "main.py"]`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Frontend Dockerfile</h4>
                <div className="bg-muted p-4 rounded-md">
                  <code className="text-sm">
                    {`FROM node:18-alpine

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]`}
                  </code>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Configuração Inicial */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />🔧 Configuração Inicial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">1. Primeiro Acesso</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Acesse <code>http://localhost:3000</code>
                </li>
                <li>Clique em "Criar Nova Conta"</li>
                <li>
                  Configure sua conta principal:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Nome de usuário</li>
                    <li>Email</li>
                    <li>Senha da conta</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-3">2. Configuração da Senha Mestra</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Após o registro, configure sua <strong>Senha Mestra</strong>
                </li>
                <li>Esta senha é usada para criptografar todas as suas senhas</li>
              </ol>
              <Alert className="mt-3">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>IMPORTANTE:</strong> Esta senha não pode ser recuperada se perdida
                </AlertDescription>
              </Alert>
            </div>

            <div>
              <h3 className="font-semibold mb-3">3. Configuração 2FA (Opcional mas Recomendado)</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Vá para <strong>Configurações</strong> → <strong>Segurança</strong>
                </li>
                <li>Clique em "Configurar 2FA"</li>
                <li>
                  Escaneie o QR Code com um app como:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Google Authenticator</li>
                    <li>Authy</li>
                    <li>Microsoft Authenticator</li>
                  </ul>
                </li>
                <li>Salve os códigos de backup em local seguro</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verificação da Instalação */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />🔍 Verificação da Instalação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Teste de Funcionamento</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>
                  <strong>Backend:</strong> Acesse <code>http://127.0.0.1:8000/docs</code> para ver a documentação da
                  API
                </li>
                <li>
                  <strong>Frontend:</strong> Acesse <code>http://localhost:3000</code> para a interface
                </li>
                <li>
                  <strong>Saúde do Sistema:</strong> <code>http://127.0.0.1:8000/health</code>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Comandos de Verificação</h3>
              <div className="bg-muted p-3 rounded-md">
                <code className="text-sm">
                  {`# Verificar versões
node --version    # Deve ser 18+
python --version  # Deve ser 3.11+
pnpm --version    # Deve ser 8+

# Verificar serviços
curl http://127.0.0.1:8000/health
curl http://localhost:3000`}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Solução de Problemas */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            ⚠️ Solução de Problemas Comuns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-red-600">Erro: "Port 3000 already in use"</h4>
              <div className="bg-muted p-3 rounded-md mt-2">
                <code className="text-sm">
                  {`# Encontrar processo usando a porta
lsof -ti:3000
# Parar o processo
kill -9 <PID>`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-red-600">Erro: "Python module not found"</h4>
              <div className="bg-muted p-3 rounded-md mt-2">
                <code className="text-sm">
                  {`# Verificar se o ambiente virtual está ativo
which python
# Reativar se necessário
source venv/bin/activate  # Linux/macOS
venv\\Scripts\\activate     # Windows`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-red-600">Erro: "Cannot connect to backend"</h4>
              <ol className="list-decimal list-inside text-sm mt-2 space-y-1">
                <li>Verifique se o backend está rodando na porta 8000</li>
                <li>Verifique o firewall/antivírus</li>
                <li>
                  Tente acessar <code>http://127.0.0.1:8000/health</code>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Próximos Passos */}
      <Card>
        <CardHeader>
          <CardTitle>🔄 Próximos Passos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Após a instalação bem-sucedida:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">📖 Configuração</h4>
                <p className="text-sm text-muted-foreground">
                  Leia o Guia de Configuração para personalizar o FortiVault
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">🔒 Segurança</h4>
                <p className="text-sm text-muted-foreground">Configure práticas de segurança avançadas</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">🛠️ Desenvolvimento</h4>
                <p className="text-sm text-muted-foreground">Explore o Guia de Desenvolvimento para contribuir</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
