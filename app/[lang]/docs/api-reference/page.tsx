import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PiIcon as Api, Key, Shield, Database, Settings, Activity } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsSearch } from "@/components/docs-search"

interface ApiReferencePageProps {
  params: Promise<{
    lang: string
  }>
}

export const metadata: Metadata = {
  title: "API Reference - FortiVault",
  description: "Documentação completa da API REST do FortiVault Backend",
}

export default async function ApiReferencePage({ params }: ApiReferencePageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "API Reference",
      subtitle: "Documentação completa da API REST do FortiVault Backend",
      overview: {
        title: "Visão Geral",
        description: "Informações básicas sobre a API",
      },
      auth: {
        title: "Autenticação",
        description: "Como autenticar com a API",
      },
      endpoints: {
        title: "Endpoints de Autenticação",
        description: "Endpoints para login, registro e 2FA",
      },
      vault: {
        title: "Endpoints do Cofre",
        description: "Endpoints para gerenciar senhas",
      },
      backup: {
        title: "Endpoints de Backup",
        description: "Endpoints para backup e restauração",
      },
      status: {
        title: "Códigos de Status HTTP",
        description: "Códigos de resposta da API",
      },
      errors: {
        title: "Tratamento de Erros",
        description: "Como a API trata erros",
      },
      examples: {
        title: "Exemplos de Uso",
        description: "Exemplos práticos de uso da API",
      },
      links: {
        title: "Links Úteis",
        description: "Recursos adicionais",
      },
    },
    en: {
      title: "API Reference",
      subtitle: "Complete REST API documentation for FortiVault Backend",
      overview: {
        title: "Overview",
        description: "Basic information about the API",
      },
      auth: {
        title: "Authentication",
        description: "How to authenticate with the API",
      },
      endpoints: {
        title: "Authentication Endpoints",
        description: "Endpoints for login, registration and 2FA",
      },
      vault: {
        title: "Vault Endpoints",
        description: "Endpoints for managing passwords",
      },
      backup: {
        title: "Backup Endpoints",
        description: "Endpoints for backup and restore",
      },
      status: {
        title: "HTTP Status Codes",
        description: "API response codes",
      },
      errors: {
        title: "Error Handling",
        description: "How the API handles errors",
      },
      examples: {
        title: "Usage Examples",
        description: "Practical API usage examples",
      },
      links: {
        title: "Useful Links",
        description: "Additional resources",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar lang={lang} currentPath="/docs/api-reference" />

          <main className="flex-1 max-w-4xl">
            <div className="mb-8">
              <DocsSearch lang={lang} />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">🔌 {text.title}</h1>
              <p className="text-xl text-muted-foreground">{text.subtitle}</p>
            </div>

            {/* Visão Geral */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Api className="h-5 w-5" />
                  {text.overview.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Base URL</Badge>
                      <code className="text-sm">http://127.0.0.1:8000</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Versão</Badge>
                      <code className="text-sm">v2.0</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Autenticação</Badge>
                      <code className="text-sm">JWT Bearer Token</code>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Formato</Badge>
                      <code className="text-sm">JSON</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Content-Type</Badge>
                      <code className="text-sm">application/json</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Autenticação */}
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
                    <h4 className="font-semibold mb-2">Headers Obrigatórios</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <code className="text-sm">
                        {`Authorization: Bearer <access_token>
Content-Type: application/json`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Obter Token de Acesso</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`POST /auth/login

{
  "username": "string",
  "password": "string",
  "totp_code": "string" // Opcional, necessário se 2FA estiver ativo
}

Response:
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "expires_in": 3600,
  "token_type": "bearer",
  "refresh_token": "refresh_token_here"
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Endpoints de Autenticação */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  {text.endpoints.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="register" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="register">Registrar</TabsTrigger>
                    <TabsTrigger value="logout">Logout</TabsTrigger>
                    <TabsTrigger value="refresh">Refresh</TabsTrigger>
                    <TabsTrigger value="2fa">2FA</TabsTrigger>
                  </TabsList>

                  <TabsContent value="register" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Registrar Usuário</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`POST /auth/register

Request Body:
{
  "username": "string",
  "email": "string",
  "password": "string"
}

Response:
{
  "id": 1,
  "username": "string",
  "email": "string",
  "is_2fa_enabled": false,
  "created_at": "2024-01-01T00:00:00Z"
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="logout" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Logout</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`POST /auth/logout

Response:
{
  "message": "Successfully logged out"
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="refresh" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atualizar Token</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`POST /auth/refresh

Request Body:
{
  "refresh_token": "string"
}

Response:
{
  "access_token": "new_token_here",
  "expires_in": 3600,
  "token_type": "bearer"
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="2fa" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Configurar 2FA</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`POST /auth/2fa/setup

Response:
{
  "secret": "JBSWY3DPEHPK3PXP",
  "qr_code": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  "backup_codes": ["123456", "234567", "345678"]
}`}
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Verificar 2FA</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`POST /auth/2fa/verify

Request Body:
{
  "totp_code": "123456"
}

Response:
{
  "message": "2FA verified successfully",
  "backup_codes": ["123456", "234567", "345678"]
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Endpoints do Cofre */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {text.vault.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stats" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="stats">Estatísticas</TabsTrigger>
                    <TabsTrigger value="list">Listar</TabsTrigger>
                    <TabsTrigger value="create">Criar</TabsTrigger>
                    <TabsTrigger value="update">Atualizar</TabsTrigger>
                  </TabsList>

                  <TabsContent value="stats" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Obter Estatísticas do Cofre</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`GET /vault/stats

Response:
{
  "total_passwords": 47,
  "weak_passwords": 3,
  "duplicate_passwords": 2,
  "strong_passwords": 42,
  "security_score": 8.5,
  "last_backup": "2024-01-01T00:00:00Z"
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="list" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Listar Senhas</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`GET /vault/passwords?folder=Work&search=github&limit=10&offset=0

Response:
[
  {
    "id": "uuid-string",
    "title": "GitHub",
    "username": "user@example.com",
    "password": "encrypted_password",
    "url": "https://github.com",
    "notes": "Work account",
    "folder": "Work",
    "tags": ["work", "development"],
    "strength": "strong",
    "is_favorite": false,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
]`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="create" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Adicionar Senha</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`POST /vault/passwords

Request Body:
{
  "title": "string",
  "username": "string",
  "password": "string",
  "url": "string", // Opcional
  "notes": "string", // Opcional
  "folder": "string", // Opcional
  "tags": ["string"], // Opcional
  "is_favorite": false // Opcional
}

Response:
{
  "id": "uuid-string",
  "title": "GitHub",
  "username": "user@example.com",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="update" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Atualizar Senha</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`PUT /vault/passwords/{id}

Request Body: (Mesma estrutura do POST, todos os campos opcionais)
{
  "title": "Updated Title",
  "notes": "Updated notes"
}

Response:
{
  "id": "uuid-string",
  "title": "Updated Title",
  "username": "user@example.com",
  "updated_at": "2024-01-01T00:00:00Z"
}`}
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Deletar Senha</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`DELETE /vault/passwords/{id}

Response:
{
  "message": "Password deleted successfully"
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Endpoints de Backup */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  {text.backup.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Criar Backup</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`POST /vault/backup

Request Body:
{
  "include_settings": true,
  "format": "json", // json, csv
  "encryption": true
}

Response:
{
  "backup_id": "uuid-string",
  "filename": "fortivault_backup_20240101.json.enc",
  "size_bytes": 1024,
  "created_at": "2024-01-01T00:00:00Z",
  "download_url": "/vault/backup/download/uuid-string"
}`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Listar Backups</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`GET /vault/backups

Response:
[
  {
    "id": "uuid-string",
    "filename": "fortivault_backup_20240101.json.enc",
    "size_bytes": 1024,
    "backup_type": "manual",
    "created_at": "2024-01-01T00:00:00Z"
  }
]`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Restaurar Backup</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`POST /vault/backup/restore

Request Body: (multipart/form-data)
file: backup_file.json.enc
master_password: string

Response:
{
  "message": "Backup restored successfully",
  "restored_passwords": 47,
  "restored_folders": 5
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Códigos de Status */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  {text.status.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">Códigos de Sucesso</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          200
                        </Badge>
                        <span className="text-sm">Sucesso</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          201
                        </Badge>
                        <span className="text-sm">Criado</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Códigos de Erro</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          400
                        </Badge>
                        <span className="text-sm">Requisição inválida</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          401
                        </Badge>
                        <span className="text-sm">Não autorizado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          403
                        </Badge>
                        <span className="text-sm">Proibido</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          404
                        </Badge>
                        <span className="text-sm">Não encontrado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          429
                        </Badge>
                        <span className="text-sm">Muitas requisições</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          500
                        </Badge>
                        <span className="text-sm">Erro interno do servidor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tratamento de Erros */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{text.errors.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Formato de Erro Padrão</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`{
  "error": "validation_error",
  "message": "The request contains invalid data",
  "details": {
    "field": "password",
    "code": "too_short",
    "message": "Password must be at least 12 characters"
  },
  "timestamp": "2024-01-01T00:00:00Z",
  "request_id": "req-uuid"
}`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Códigos de Erro Comuns</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">invalid_credentials</Badge>
                          <span className="text-sm">Credenciais inválidas</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">token_expired</Badge>
                          <span className="text-sm">Token expirado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">2fa_required</Badge>
                          <span className="text-sm">2FA obrigatório</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">validation_error</Badge>
                          <span className="text-sm">Erro de validação</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">not_found</Badge>
                          <span className="text-sm">Recurso não encontrado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">rate_limit_exceeded</Badge>
                          <span className="text-sm">Limite de taxa excedido</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exemplos de Uso */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  {text.examples.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="javascript" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>

                  <TabsContent value="javascript" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Cliente API TypeScript</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`// Cliente API TypeScript
class FortiVaultAPI {
  private baseUrl = 'http://127.0.0.1:8000'
  private token: string | null = null

  async login(username: string, password: string, totpCode?: string) {
    const response = await fetch(\`\${this.baseUrl}/auth/login\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, totp_code: totpCode })
    })
    
    const data = await response.json()
    if (response.ok) {
      this.token = data.access_token
    }
    return data
  }

  async getPasswords() {
    const response = await fetch(\`\${this.baseUrl}/vault/passwords\`, {
      headers: { 
        'Authorization': \`Bearer \${this.token}\`,
        'Content-Type': 'application/json'
      }
    })
    
    return response.json()
  }
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="python" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Cliente Python</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`import requests

class FortiVaultAPI:
    def __init__(self, base_url="http://127.0.0.1:8000"):
        self.base_url = base_url
        self.token = None
    
    def login(self, username, password, totp_code=None):
        data = {"username": username, "password": password}
        if totp_code:
            data["totp_code"] = totp_code
            
        response = requests.post(f"{self.base_url}/auth/login", json=data)
        if response.status_code == 200:
            self.token = response.json()["access_token"]
        return response.json()
    
    def get_passwords(self):
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(f"{self.base_url}/vault/passwords", headers=headers)
        return response.json()`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="curl" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Comandos cURL</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`# Login
curl -X POST "http://127.0.0.1:8000/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{"username": "user", "password": "pass"}'

# Obter senhas
curl -X GET "http://127.0.0.1:8000/vault/passwords" \\
  -H "Authorization: Bearer YOUR_TOKEN"

# Adicionar senha
curl -X POST "http://127.0.0.1:8000/vault/passwords" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"title": "GitHub", "username": "user", "password": "pass"}'`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Links Úteis */}
            <Card>
              <CardHeader>
                <CardTitle>{text.links.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Documentação Interativa</Badge>
                      <code className="text-sm">http://127.0.0.1:8000/docs</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">OpenAPI Schema</Badge>
                      <code className="text-sm">http://127.0.0.1:8000/openapi.json</code>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Health Check</Badge>
                      <code className="text-sm">http://127.0.0.1:8000/health</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Métricas</Badge>
                      <code className="text-sm">http://127.0.0.1:8000/metrics</code>
                    </div>
                  </div>
                </div>

                <Alert className="mt-6">
                  <Api className="h-4 w-4" />
                  <AlertDescription>
                    <strong>📡 API Documentation v2.0</strong> - Mantenha suas integrações seguras e atualizadas!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      <Footer lang={lang} />
    </div>
  )
}
