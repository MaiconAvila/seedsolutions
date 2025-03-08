"use client"

import { motion } from "framer-motion"
import { Bot, Server, BarChart2, HeadphonesIcon, PuzzleIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: <Bot className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Agente de IA Personalizado",
    description: "Atendimento ao cliente inteligente e personalizado que melhora a experiência e impulsiona conversões.",
    highlight: "Agente de IA"
  },
  {
    icon: <Server className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Cluster Dedicado",
    description: "Servidor exclusivo para seu negócio, garantindo performance máxima e segurança de dados.",
    highlight: "Cluster"
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Relatórios Detalhados",
    description: "Acompanhamento mensal do desempenho dos agentes para melhoria contínua da experiência.",
    highlight: "Relatórios"
  },
  {
    icon: <HeadphonesIcon className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Suporte Premium",
    description: "Equipe especializada em IA disponível para solucionar qualquer desafio técnico imediatamente.",
    highlight: "Suporte"
  },
  {
    icon: <PuzzleIcon className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Integrações Personalizadas",
    description: "Conexão com softwares adicionais de sua escolha para uma experiência totalmente integrada.",
    highlight: "Integrações"
  },
  {
    icon: <PuzzleIcon className="h-12 w-12 text-[#2aa3e9]" />,
    title: "WhatsApp",
    description: "Conexão com o WhatsApp para atendimento direto e personalizado com seus clientes.",
    highlight: "WhatsApp"
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

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function Features() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background gradiente e pontilhado */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mb-4">
            Recursos
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Uma solução completa para revolucionar seu atendimento ao cliente
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex"
            >
              <Card className="p-8 flex flex-col w-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group rounded-lg">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6"
                >
                  {feature.icon}
                </motion.div>
                
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-blue-100 text-[#2aa3e9] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  whileHover={{ opacity: 0.05 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
