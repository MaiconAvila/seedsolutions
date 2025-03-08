"use client"

import { motion } from "framer-motion"
import { Server, Users, Zap, ArrowRight, PhoneCall } from "lucide-react"
import { Button } from "../ui/button"

const steps = [
  {
    icon: <Users className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Seleção Exclusiva",
    description: "Processo criterioso de seleção limitado a apenas 3 clientes por mês para garantir atendimento premium."
  },
  {
    icon: <Server className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Servidor Dedicado",
    description: "Cluster exclusivo para seu negócio, garantindo máximo desempenho e segurança dos seus dados."
  },
  {
    icon: <Zap className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Implementação Rápida",
    description: "Setup ágil e personalizado de toda a sua estrutura para começar a transformar seu atendimento imediatamente."
  },
  {
    icon: <ArrowRight className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Acompanhamento Contínuo",
    description: "Suporte contínuo e avaliações regulares para garantir a satisfação do cliente."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const arrowVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.4
    }
  }
}

export function HowItWorks() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Um processo simplificado e eficiente para transformar seu atendimento ao cliente
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg h-full border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10"
                >
                  <ArrowRight className="h-8 w-8 text-[#2aa3e9]" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#2aa3e9] font-semibold">
            Comece sua transformação digital hoje mesmo!
          </p>
        </motion.div>
        <div className="flex justify-center mt-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="w-72 h-12 text-lg bg-[#2aa3e9] hover:bg-[#1d8af0] text-white"
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Entre em contato agora <PhoneCall className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
