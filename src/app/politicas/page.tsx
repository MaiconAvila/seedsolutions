"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Footer } from "@/components/sections/footer"

export default function PoliticasPage() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Background pontilhado */}
      <div className="fixed top-0 left-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10">
        <div className="container px-4 md:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-[#2aa3e9] hover:text-[#1d8af0] mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Voltar para página inicial
            </Link>

            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Política de Privacidade
            </motion.h1>

            <div className="space-y-12">
              <div className="inline-block bg-blue-50 rounded-lg px-4 py-2">
                <p className="text-[#2aa3e9] font-medium">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              <section className="bg-white rounded-lg p-8 shadow-sm border space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  1. Introdução
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A Seed Solutions está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais.
                </p>
              </section>

              <section className="bg-white rounded-lg p-8 shadow-sm border space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  2. Coleta de Informações
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Coletamos informações que você nos fornece diretamente, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                  <li>Informações de contato (nome, e-mail, telefone)</li>
                  <li>Informações da empresa</li>
                  <li>Dados de uso do serviço</li>
                </ul>
              </section>

              <section className="bg-white rounded-lg p-8 shadow-sm border space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  3. Uso das Informações
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Personalizar sua experiência</li>
                  <li>Comunicar atualizações e informações importantes</li>
                  <li>Garantir a segurança de nossos serviços</li>
                </ul>
              </section>

              <section className="bg-white rounded-lg p-8 shadow-sm border space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  4. Proteção de Dados
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                  <li>Criptografia de dados</li>
                  <li>Clusters de servidores dedicados</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo</li>
                </ul>
              </section>

              <section className="bg-white rounded-lg p-8 shadow-sm border space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  5. Seus Direitos
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Você tem direito a:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações imprecisas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Optar por não receber comunicações de marketing</li>
                </ul>
              </section>

              <section className="bg-white rounded-lg p-8 shadow-sm border space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  6. Contato
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Para questões sobre privacidade ou exercício de seus direitos, entre em contato conosco através dos canais oficiais disponíveis em nosso site.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
