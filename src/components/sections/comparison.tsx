"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Card } from "@/components/ui/card"

const options = [
  {
    title: "Seed Solutions",
    highlights: true,
    features: {
      "⏱️ Tempo para contratar": "Imediato",
      "🧠 Nível de Experiência": "Time especializado em IA",
      "💬 Comunicação": "Suporte premium",
      "🚀 Primeira Entrega": "14 dias",
      "📝 Rescisão": "Sem multa, garantia de 60 dias"
    }
  },
  {
    title: "Freelancers",
    features: {
      "⏱️ Tempo para contratar": "1-2 semanas",
      "🧠 Nível de Experiência": "Variável",
      "💬 Comunicação": "Limitada",
      "🚀 Primeira Entrega": "2-4 meses",
      "📝 Rescisão": "Multa contratual"
    }
  },
  {
    title: "Fazer Internamente",
    features: {
      "⏱️ Tempo para contratar": "1-3 meses",
      "🧠 Nível de Experiência": "Curva de aprendizado longa",
      "💬 Comunicação": "Falhas de comunicação",
      "🚀 Primeira Entrega": "3-6 meses",
      "📝 Rescisão": "Custos com demissão"
    }
  },
  {
    title: "Outras Agências",
    features: {
      "⏱️ Tempo para contratar": "2-3 semanas",
      "🧠 Nível de Experiência": "Generalista",
      "💬 Comunicação": "Horário comercial",
      "🚀 Primeira Entrega": "30 dias",
      "📝 Rescisão": "Multa contratual"
    }
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function Comparison() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Compare as Opções
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Descubra por que a Seed Solutions é a escolha ideal para sua empresa
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex"
            >
              <Card className={`p-6 w-full ${option.highlights ? 'ring-2 ring-[#2aa3e9] shadow-lg' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${option.highlights ? 'text-[#2aa3e9]' : 'text-gray-900'}`}>
                    {option.title}
                  </h3>
                  {option.highlights && (
                    <span className="inline-block bg-blue-100 text-[#2aa3e9] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Recomendado
                    </span>
                  )}
                </div>
                
                <div className="space-y-4">
                  {Object.entries(option.features).map(([key, value], featureIndex) => (
                    <div key={featureIndex} className="flex flex-col">
                      <span className="text-sm font-medium text-gray-500 mb-1">
                        {key}
                      </span>
                      <span className={`text-sm ${option.highlights ? 'text-[#2aa3e9] font-medium' : 'text-gray-600'}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
