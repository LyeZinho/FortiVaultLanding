import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Cloud, Server, Monitor, Shield, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsSearch } from "@/components/docs-search"

interface DeploymentPageProps {
  params: Promise<{
    lang: string
  }>
}

export const metadata: Metadata = {
  title: "Deployment - FortiVault",
  description: "Guia completo para fazer deploy do FortiVault em diferentes ambientes",
}

export default async function DeploymentPage({ params }: DeploymentPageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "Guia de Deployment",
      subtitle: "Documentação completa para fazer deploy do FortiVault em diferentes ambientes",
      overview: {
        title: "Visão Geral",
        description: "O FortiVault pode ser implantado de várias formas",
      },
      docker: {
        title: "Deploy com Docker",
        description: "Método recomendado para produção",
      },
      cloud: {
        title: "Deploy em Cloud Providers",
        description: "Configuração para AWS, DigitalOcean e outros",
      },
      selfhosted: {
        title: "Self-Hosted",
        description: "Servidores próprios ou Raspberry Pi",
      },
      desktop: {
        title: "Desktop App",
        description: "Aplicação desktop empacotada com Electron",
      },
      production: {
        title: "Configurações de Produção",
        description: "Otimizações e configurações para ambiente de produção",
      },
      monitoring: {
        title: "Monitoramento e Logs",
        description: "Configuração de monitoramento e coleta de logs",
      },
      checklist: {
        title: "Checklist de Deploy",
        description: "Lista de verificação para deploy seguro",
      },
    },
    en: {
      title: "Deployment Guide",
      subtitle: "Complete documentation for deploying FortiVault in different environments",
      overview: {
        title: "Overview",
        description: "FortiVault can be deployed in several ways",
      },
      docker: {
        title: "Docker Deployment",
        description: "Recommended method for production",
      },
      cloud: {
        title: "Cloud Providers Deployment",
        description: "Configuration for AWS, DigitalOcean and others",
      },
      selfhosted: {
        title: "Self-Hosted",
        description: "Own servers or Raspberry Pi",
      },
      desktop: {
        title: "Desktop App",
        description: "Desktop application packaged with Electron",
      },
      production: {
        title: "Production Settings",
        description: "Optimizations and settings for production environment",
      },
      monitoring: {
        title: "Monitoring and Logs",
        description: "Monitoring setup and log collection",
      },
      checklist: {
        title: "Deployment Checklist",
        description: "Verification checklist for secure deployment",
      },
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar lang={lang} currentPath="/docs/deployment" />

          <main className="flex-1 max-w-4xl">
            <div className="mb-8">
              <DocsSearch lang={lang} />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">🚀 {text.title}</h1>
              <p className="text-xl text-muted-foreground">{text.subtitle}</p>
            </div>

            {/* Visão Geral */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  {text.overview.title}
                </CardTitle>
                <CardDescription>{text.overview.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Desenvolvimento Local</Badge>
                      <span className="text-sm">Para desenvolvimento e testes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Docker</Badge>
                      <span className="text-sm">Containerização para facilitar deploy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">VPS/Cloud</Badge>
                      <span className="text-sm">Servidores virtuais (DigitalOcean, AWS, etc.)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Self-hosted</Badge>
                      <span className="text-sm">Servidores próprios ou Raspberry Pi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Desktop</Badge>
                      <span className="text-sm">Aplicação desktop empacotada</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deploy com Docker */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  {text.docker.title}
                </CardTitle>
                <CardDescription>{text.docker.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="compose" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="compose">Docker Compose</TabsTrigger>
                    <TabsTrigger value="dockerfile">Dockerfiles</TabsTrigger>
                    <TabsTrigger value="nginx">Nginx Config</TabsTrigger>
                  </TabsList>

                  <TabsContent value="compose" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">docker-compose.yml</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: fortivault-backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_PATH=/app/data/vault.db
      - SECRET_KEY=\${SECRET_KEY}
      - DEBUG=false
    volumes:
      - vault_data:/app/data
      - backup_data:/app/backups
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    container_name: fortivault-frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:8000
      - NODE_ENV=production
    depends_on:
      - backend
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    container_name: fortivault-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - frontend
      - backend
    restart: unless-stopped

volumes:
  vault_data:
  backup_data:`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="dockerfile" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Backend Dockerfile</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`# backend/Dockerfile
FROM python:3.11-slim

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

# Configurar diretório de trabalho
WORKDIR /app

# Copiar e instalar dependências Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código fonte
COPY . .

# Criar diretórios necessários
RUN mkdir -p data backups logs

# Expor porta
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \\
    CMD curl -f http://localhost:8000/health || exit 1

# Comando de inicialização
CMD ["python", "main.py"]`}
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Frontend Dockerfile</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`# Dockerfile.frontend
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm e dependências
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build da aplicação
RUN pnpm build

# Imagem de produção
FROM node:18-alpine AS runner

WORKDIR /app

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="nginx" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">nginx.conf</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`events {
    worker_connections 1024;
}

http {
    upstream backend {
        server backend:8000;
    }

    upstream frontend {
        server frontend:3000;
    }

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=auth:10m rate=5r/m;
    limit_req_zone $binary_remote_addr zone=api:10m rate=30r/m;

    server {
        listen 80;
        server_name your-domain.com;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name your-domain.com;

        # SSL Configuration
        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;
        ssl_protocols TLSv1.2 TLSv1.3;

        # Security Headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        # Frontend
        location / {
            proxy_pass http://frontend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Backend API
        location /api/ {
            limit_req zone=api burst=10 nodelay;
            
            proxy_pass http://backend/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Deploy em Cloud Providers */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  {text.cloud.title}
                </CardTitle>
                <CardDescription>{text.cloud.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="aws" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="aws">AWS EC2</TabsTrigger>
                    <TabsTrigger value="digitalocean">DigitalOcean</TabsTrigger>
                  </TabsList>

                  <TabsContent value="aws" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Configuração da Instância</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`# Launch EC2 instance (Ubuntu 22.04 LTS)
# Security Group: Allow ports 22 (SSH), 80 (HTTP), 443 (HTTPS)

# Conectar via SSH
ssh -i your-key.pem ubuntu@your-ec2-ip

# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker ubuntu

# Instalar Docker Compose
sudo apt install docker-compose-plugin`}
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">2. Configuração de SSL</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`# Instalar Certbot para Let's Encrypt
sudo apt install certbot

# Obter certificado SSL
sudo certbot certonly --standalone -d your-domain.com

# Configurar renovação automática
sudo crontab -e
# Adicionar linha:
# 0 12 * * * /usr/bin/certbot renew --quiet`}
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">3. Deploy da Aplicação</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`# Clone e configure
git clone https://github.com/LyeZinho/FortiVault.git
cd FortiVault

# Configure SSL no nginx.conf
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ./ssl/cert.pem
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ./ssl/key.pem

# Configure ambiente
cp .env.example .env
nano .env

# Deploy
docker compose up -d`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="digitalocean" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Script de Instalação Automatizada</h4>
                      <div className="bg-muted p-4 rounded-md">
                        <code className="text-sm">
                          {`#!/bin/bash
# install-fortivault.sh

set -e

echo "🚀 Instalando FortiVault no DigitalOcean..."

# Atualizar sistema
apt update && apt upgrade -y

# Instalar dependências
apt install -y curl git ufw

# Configurar firewall
ufw allow ssh
ufw allow http
ufw allow https
ufw --force enable

# Instalar Docker
curl -fsSL https://get.docker.com | sh
systemctl enable docker

# Clone do repositório
cd /opt
git clone https://github.com/LyeZinho/FortiVault.git
cd FortiVault

# Configurar ambiente
cp .env.example .env
echo "SECRET_KEY=$(openssl rand -base64 32)" >> .env

# Iniciar aplicação
docker-compose up -d

echo "✅ FortiVault instalado com sucesso!"
echo "🌐 Acesse: http://$(curl -s ifconfig.me)"`}
                        </code>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Self-Hosted */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  {text.selfhosted.title}
                </CardTitle>
                <CardDescription>{text.selfhosted.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-2">Configuração Raspberry Pi</h4>
                  <div className="bg-muted p-4 rounded-md">
                    <code className="text-sm">
                      {`#!/bin/bash
# setup-raspberry-pi.sh

echo "🍓 Configurando FortiVault no Raspberry Pi..."

# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker pi

# Otimizar para ARM
echo "gpu_mem=16" | sudo tee -a /boot/config.txt

# Clone e configure
cd /home/pi
git clone https://github.com/LyeZinho/FortiVault.git
cd FortiVault

# Use imagens ARM
sed -i 's/python:3.11-slim/python:3.11-slim-arm64v8/g' backend/Dockerfile
sed -i 's/node:18-alpine/node:18-alpine-arm64v8/g' Dockerfile.frontend

# Deploy
docker-compose up -d

echo "✅ FortiVault executando no Raspberry Pi!"`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Desktop App */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  {text.desktop.title}
                </CardTitle>
                <CardDescription>{text.desktop.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Configuração Electron</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`# Instalar dependências Electron
npm install --save-dev electron electron-builder

# package.json
{
  "main": "electron/main.js",
  "scripts": {
    "electron": "electron .",
    "electron:dev": "ELECTRON_IS_DEV=true electron .",
    "dist": "electron-builder",
    "pack": "electron-builder --publish=never"
  },
  "build": {
    "appId": "com.fortivault.app",
    "productName": "FortiVault",
    "directories": {
      "buildResources": "build"
    },
    "files": [
      "out/**/*",
      "electron/**/*",
      "backend/**/*"
    ],
    "mac": {
      "icon": "build/icon.icns",
      "category": "public.app-category.productivity"
    },
    "win": {
      "icon": "build/icon.ico",
      "target": "nsis"
    },
    "linux": {
      "icon": "build/icon.png",
      "target": "AppImage"
    }
  }
}`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">electron/main.js</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`const { app, BrowserWindow, shell } = require('electron')
const path = require('path')
const isDev = process.env.ELECTRON_IS_DEV === 'true'

let mainWindow
let backendProcess

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: path.join(__dirname, '../build/icon.png')
  })

  // Start backend
  if (!isDev) {
    const spawn = require('child_process').spawn
    backendProcess = spawn('python', ['backend/main.py'], {
      cwd: path.join(__dirname, '..')
    })
  }

  // Load app
  const startUrl = isDev 
    ? 'http://localhost:3000' 
    : \`file://\${path.join(__dirname, '../out/index.html')}\`
  
  mainWindow.loadURL(startUrl)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (backendProcess) {
    backendProcess.kill()
  }
  if (process.platform !== 'darwin') {
    app.quit()
  }
})`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configurações de Produção */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {text.production.title}
                </CardTitle>
                <CardDescription>{text.production.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Variáveis de Ambiente</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`# .env.production
NODE_ENV=production
SECRET_KEY=your-super-secret-key-32-chars-min
DATABASE_PATH=/app/data/vault.db
ALLOWED_ORIGINS=https://your-domain.com,https://www.your-domain.com
DEBUG=false
LOG_LEVEL=warning

# SSL/TLS
SSL_CERT_PATH=/etc/ssl/certs/cert.pem
SSL_KEY_PATH=/etc/ssl/private/key.pem

# Rate Limiting
RATE_LIMIT_PER_MINUTE=60
RATE_LIMIT_BURST=100

# Backup
AUTO_BACKUP_ENABLED=true
BACKUP_RETENTION_DAYS=30
BACKUP_ENCRYPTION=true

# Monitoring
SENTRY_DSN=your-sentry-dsn
METRICS_ENABLED=true`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Otimizações de Performance</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`# nginx-prod.conf - Configurações adicionais
http {
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;

    # Browser caching
    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options DENY always;
    add_header X-Content-Type-Options nosniff always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monitoramento e Logs */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  {text.monitoring.title}
                </CardTitle>
                <CardDescription>{text.monitoring.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Docker Compose com Monitoramento</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`# docker-compose.monitoring.yml
version: '3.8'

services:
  # ... serviços existentes ...

  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus

  grafana:
    image: grafana/grafana
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana

  loki:
    image: grafana/loki
    ports:
      - "3100:3100"
    volumes:
      - loki_data:/loki

volumes:
  prometheus_data:
  grafana_data:
  loki_data:`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Script de Backup Automático</h4>
                    <div className="bg-muted p-4 rounded-md">
                      <code className="text-sm">
                        {`#!/bin/bash
# backup-script.sh

BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)
VAULT_DB="/app/data/vault.db"

# Criar backup
sqlite3 $VAULT_DB ".backup \${BACKUP_DIR}/vault_\${DATE}.db"

# Comprimir
gzip "\${BACKUP_DIR}/vault_\${DATE}.db"

# Upload para cloud (opcional)
if [ ! -z "$AWS_S3_BUCKET" ]; then
    aws s3 cp "\${BACKUP_DIR}/vault_\${DATE}.db.gz" "s3://$AWS_S3_BUCKET/backups/"
fi

# Limpar backups antigos (manter 30 dias)
find $BACKUP_DIR -name "vault_*.db.gz" -mtime +30 -delete

echo "Backup criado: vault_\${DATE}.db.gz"`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist de Deploy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {text.checklist.title}
                </CardTitle>
                <CardDescription>{text.checklist.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">✅ Pré-Deploy</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Testes passando em CI/CD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Variáveis de ambiente configuradas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">SSL/TLS configurado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Firewall configurado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Backup configurado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Monitoramento configurado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Domínio apontando para servidor</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">✅ Pós-Deploy</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Health checks passando</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">SSL funcionando</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Backup testado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Logs sendo coletados</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Métricas sendo coletadas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Notificações configuradas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Documentação atualizada</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert className="mt-6">
                  <Rocket className="h-4 w-4" />
                  <AlertDescription>
                    <strong>🚀 Deploy realizado com sucesso!</strong> Seu FortiVault está pronto para produção com
                    segurança e escalabilidade.
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
