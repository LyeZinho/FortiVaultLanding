import Link from "next/link"
import { Shield } from "lucide-react"

interface FooterProps {
  lang?: string
}

export function Footer({ lang = "pt" }: FooterProps) {
  const t = {
    pt: {
      tagline: "Gerenciador de senhas descentralizado e seguro para todos.",
      product: "Produto",
      features: "Recursos",
      download: "Download",
      changelog: "Changelog",
      roadmap: "Roadmap",
      developers: "Desenvolvedores",
      docs: "Documentação",
      api: "API Reference",
      github: "GitHub",
      contributing: "Contribuir",
      support: "Suporte",
      issues: "Issues",
      discussions: "Discussões",
      discord: "Discord",
      email: "Email",
      license: "Licença",
      about: "Sobre",
      contact: "Contato",
      copyright: "Licenciado sob MIT License. Desenvolvido com ❤️ para a comunidade.",
    },
    en: {
      tagline: "Decentralized and secure password manager for everyone.",
      product: "Product",
      features: "Features",
      download: "Download",
      changelog: "Changelog",
      roadmap: "Roadmap",
      developers: "Developers",
      docs: "Documentation",
      api: "API Reference",
      github: "GitHub",
      contributing: "Contributing",
      support: "Support",
      issues: "Issues",
      discussions: "Discussions",
      discord: "Discord",
      email: "Email",
      license: "License",
      about: "About",
      contact: "Contact",
      copyright: "Licensed under MIT License. Built with ❤️ for the community.",
    },
  }

  const text = t[lang as keyof typeof t] || t.pt

  return (
    <footer className="py-12 px-4 bg-muted/50 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">FortiVault</span>
            </div>
            <p className="text-muted-foreground">{text.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{text.product}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href={`/${lang}#features`} className="hover:text-foreground transition-colors">
                  {text.features}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/download`} className="hover:text-foreground transition-colors">
                  {text.download}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/LyeZinho/FortiVault/releases"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                >
                  {text.changelog}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/LyeZinho/FortiVault/projects"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                >
                  {text.roadmap}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{text.developers}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href={`/${lang}/docs`} className="hover:text-foreground transition-colors">
                  {text.docs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/docs/api-reference`} className="hover:text-foreground transition-colors">
                  {text.api}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/LyeZinho/FortiVault"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                >
                  {text.github}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/docs/contributing`} className="hover:text-foreground transition-colors">
                  {text.contributing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{text.support}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/LyeZinho/FortiVault/issues"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                >
                  {text.issues}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/LyeZinho/FortiVault/discussions"
                  className="hover:text-foreground transition-colors"
                  target="_blank"
                >
                  {text.discussions}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-foreground transition-colors">
                  {text.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/license`} className="hover:text-foreground transition-colors">
                  {text.license}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FortiVault. {text.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
