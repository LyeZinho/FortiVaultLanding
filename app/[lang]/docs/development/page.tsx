import type { Metadata } from "next"
import DevelopmentPageClient from "./DevelopmentPageClient"

interface DevelopmentPageProps {
  params: Promise<{
    lang: string
  }>
}

export const metadata: Metadata = {
  title: "Desenvolvimento - FortiVault",
  description: "Guia completo para desenvolvedores contribuindo com o FortiVault",
}

export default async function DevelopmentPage({ params }: DevelopmentPageProps) {
  return <DevelopmentPageClient params={await params} />
}
