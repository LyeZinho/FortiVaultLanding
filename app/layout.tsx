import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FortiVault - Decentralized Password Manager",
  description: "Secure, offline-first password manager with P2P sync, 2FA authentication and advanced encryption.",
  keywords: "password manager, security, encryption, 2FA, offline, decentralized",
  authors: [{ name: "FortiVault Team" }],
  openGraph: {
    title: "FortiVault - Decentralized Password Manager",
    description: "Secure, offline-first password manager with P2P sync, 2FA authentication and advanced encryption.",
    type: "website",
    url: "https://fortivault.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
