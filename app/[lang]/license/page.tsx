import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Check, X, AlertTriangle, ExternalLink, Scale, Building, Users, Code } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface LicensePageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function LicensePage({ params }: LicensePageProps) {
  const { lang } = await params
  const t = {
    pt: {
      title: "Licença MIT",
      subtitle: "Entenda os termos de uso e distribuição do FortiVault",
      overview: {
        title: "Visão Geral da Licença",
        description:
          "O FortiVault é licenciado sob a Licença MIT, uma das licenças de software livre mais permissivas e amplamente utilizadas.",
      },
      permissions: {
        title: "Permissões",
        commercial: "Uso comercial permitido",
        modify: "Modificação permitida",
        distribute: "Distribuição permitida",
        private: "Uso privado permitido",
        sublicense: "Sublicenciamento permitido",
      },
      conditions: {
        title: "Condições",
        include: "Incluir aviso de copyright",
        includeLicense: "Incluir texto da licença",
      },
      limitations: {
        title: "Limitações",
        liability: "Sem responsabilidade",
        warranty: "Sem garantia",
      },
      commercial: {
        title: "Uso Comercial",
        description: "Você pode usar o FortiVault comercialmente, mas com algumas considerações importantes:",
        allowed: "O que é permitido:",
        allowedItems: [
          "Usar o FortiVault em ambiente corporativo",
          "Integrar o FortiVault em produtos comerciais",
          "Oferecer suporte comercial para o FortiVault",
          "Criar versões modificadas para uso comercial",
        ],
        restrictions: "Restrições importantes:",
        restrictionItems: [
          "Não é permitido simplesmente copiar e redistribuir como 'FortiVault'",
          "Redistribuições devem ter sua própria identidade/marca",
          "Funcionalidades devem condizer com a proposta da redistribuição",
          "Deve manter os avisos de copyright originais",
        ],
      },
      redistribution: {
        title: "Redistribuição",
        description: "Se você quiser redistribuir o FortiVault ou criar uma versão derivada:",
        requirements: "Requisitos obrigatórios:",
        requirementItems: [
          "Criar sua própria identidade visual e nome",
          "Adicionar funcionalidades que justifiquem a redistribuição",
          "Manter todos os avisos de copyright",
          "Incluir uma cópia da licença MIT",
          "Deixar claro que é baseado no FortiVault original",
        ],
      },
      examples: {
        title: "Exemplos de Uso",
        good: "✅ Usos Permitidos",
        goodItems: [
          "Empresa XYZ usa FortiVault internamente para gerenciar senhas",
          "Desenvolvedor cria 'SecurePass Pro' baseado no FortiVault com funcionalidades empresariais",
          "Consultoria oferece instalação e suporte do FortiVault",
          "Universidade usa FortiVault modificado para pesquisa",
        ],
        bad: "❌ Usos Não Permitidos",
        badItems: [
          "Redistribuir FortiVault sem modificações como 'MeuVault'",
          "Remover créditos e avisos de copyright",
          "Vender FortiVault original sem adicionar valor",
          "Usar a marca 'FortiVault' em produtos derivados",
        ],
      },
      fullLicense: {
        title: "Texto Completo da Licença",
        viewGithub: "Ver no GitHub",
      },
      contact: {
        title: "Dúvidas sobre Licenciamento",
        description: "Tem dúvidas sobre como usar o FortiVault em seu projeto? Entre em contato conosco!",
        contactUs: "Fale Conosco",
      },
    },
    en: {
      title: "MIT License",
      subtitle: "Understand the terms of use and distribution of FortiVault",
      overview: {
        title: "License Overview",
        description:
          "FortiVault is licensed under the MIT License, one of the most permissive and widely used free software licenses.",
      },
      permissions: {
        title: "Permissions",
        commercial: "Commercial use allowed",
        modify: "Modification allowed",
        distribute: "Distribution allowed",
        private: "Private use allowed",
        sublicense: "Sublicensing allowed",
      },
      conditions: {
        title: "Conditions",
        include: "Include copyright notice",
        includeLicense: "Include license text",
      },
      limitations: {
        title: "Limitations",
        liability: "No liability",
        warranty: "No warranty",
      },
      commercial: {
        title: "Commercial Use",
        description: "You can use FortiVault commercially, but with some important considerations:",
        allowed: "What is allowed:",
        allowedItems: [
          "Use FortiVault in corporate environment",
          "Integrate FortiVault into commercial products",
          "Offer commercial support for FortiVault",
          "Create modified versions for commercial use",
        ],
        restrictions: "Important restrictions:",
        restrictionItems: [
          "You cannot simply copy and redistribute as 'FortiVault'",
          "Redistributions must have their own identity/brand",
          "Features must align with the redistribution's purpose",
          "Must maintain original copyright notices",
        ],
      },
      redistribution: {
        title: "Redistribution",
        description: "If you want to redistribute FortiVault or create a derivative version:",
        requirements: "Mandatory requirements:",
        requirementItems: [
          "Create your own visual identity and name",
          "Add features that justify the redistribution",
          "Maintain all copyright notices",
          "Include a copy of the MIT license",
          "Make it clear that it's based on the original FortiVault",
        ],
      },
      examples: {
        title: "Usage Examples",
        good: "✅ Allowed Uses",
        goodItems: [
          "Company XYZ uses FortiVault internally for password management",
          "Developer creates 'SecurePass Pro' based on FortiVault with enterprise features",
          "Consultancy offers FortiVault installation and support",
          "University uses modified FortiVault for research",
        ],
        bad: "❌ Not Allowed Uses",
        badItems: [
          "Redistribute FortiVault without modifications as 'MyVault'",
          "Remove credits and copyright notices",
          "Sell original FortiVault without adding value",
          "Use 'FortiVault' brand in derivative products",
        ],
      },
      fullLicense: {
        title: "Full License Text",
        viewGithub: "View on GitHub",
      },
      contact: {
        title: "Licensing Questions",
        description: "Have questions about how to use FortiVault in your project? Contact us!",
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
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
              <Scale className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
            <p className="text-xl text-muted-foreground">{text.subtitle}</p>
          </div>

          {/* Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                {text.overview.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{text.overview.description}</p>
            </CardContent>
          </Card>

          {/* License Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <Check className="h-5 w-5 mr-2" />
                  {text.permissions.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Building className="h-4 w-4 mr-2 text-green-500" />
                    {text.permissions.commercial}
                  </li>
                  <li className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-green-500" />
                    {text.permissions.modify}
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    {text.permissions.distribute}
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-green-500" />
                    {text.permissions.private}
                  </li>
                  <li className="flex items-center">
                    <Scale className="h-4 w-4 mr-2 text-green-500" />
                    {text.permissions.sublicense}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {text.conditions.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    {text.conditions.include}
                  </li>
                  <li className="flex items-center">
                    <Scale className="h-4 w-4 mr-2 text-blue-500" />
                    {text.conditions.includeLicense}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <X className="h-5 w-5 mr-2" />
                  {text.limitations.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    {text.limitations.liability}
                  </li>
                  <li className="flex items-center">
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    {text.limitations.warranty}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Commercial Use */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Building className="h-6 w-6 mr-2 text-primary" />
                {text.commercial.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{text.commercial.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    {text.commercial.allowed}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {text.commercial.allowedItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    {text.commercial.restrictions}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {text.commercial.restrictionItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Redistribution */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="h-6 w-6 mr-2 text-primary" />
                {text.redistribution.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{text.redistribution.description}</p>

              <Alert className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>{text.redistribution.requirements}</strong>
                </AlertDescription>
              </Alert>

              <ul className="space-y-3">
                {text.redistribution.requirementItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">{index + 1}</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">{text.examples.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">{text.examples.good}</h4>
                  <ul className="space-y-3">
                    {text.examples.goodItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">{text.examples.bad}</h4>
                  <ul className="space-y-3">
                    {text.examples.badItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-4 w-4 text-red-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full License */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                {text.fullLicense.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-6 rounded-lg font-mono text-sm mb-6">
                <pre className="whitespace-pre-wrap">
                  {`MIT License

Copyright (c) 2024 FortiVault

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                </pre>
              </div>

              <Button variant="outline" asChild>
                <Link href="https://github.com/LyeZinho/FortiVault/blob/main/LICENSE" target="_blank">
                  <FileText className="h-4 w-4 mr-2" />
                  {text.fullLicense.viewGithub}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{text.contact.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{text.contact.description}</p>
              <Button size="lg" asChild>
                <Link href={`/${lang}/contact`}>
                  <FileText className="h-5 w-5 mr-2" />
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
