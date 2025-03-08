"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      className="w-full py-12 bg-gray-50 border-t relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/seed.svg"
            alt="Need AI Solutions Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <div className="flex items-center space-x-6 text-sm">
            <Link 
              href="/politicas" 
              className="text-[#2aa3e9] transition-colors font-medium px-4 py-2 rounded-lg bg-blue-50"
            >
              Política de Privacidade
            </Link>
          </div>
          <div className="text-sm text-gray-500 text-center sm:flex items-center space-x-1">
            <span className="font-medium">©</span>
            <motion.span
              key={currentYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-medium"
            >
              {currentYear}
            </motion.span>
            <span>Todos os direitos reservados por</span>
            <span className="text-[#2aa3e9] font-semibold">NEED AI SOLUTIONS LTDA</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </motion.footer>
  )
}
