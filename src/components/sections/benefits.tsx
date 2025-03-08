"use client"

import { Card } from "@/components/ui/card"
import { LucideBarChart3, MessagesSquare, Timer } from "lucide-react"
import { motion } from "framer-motion"

const benefitsData = [
  {
    icon: <MessagesSquare className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Atendimento Inteligente 24/7",
    description: "Ofereça respostas precisas e personalizadas aos seus clientes a qualquer momento, garantindo satisfação imediata."
  },
  {
    icon: <LucideBarChart3 className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Aumente seu Faturamento",
    description: "Revolucione seu atendimento com IA e veja suas conversões aumentarem significativamente."
  },
  {
    icon: <Timer className="h-12 w-12 text-[#2aa3e9]" />,
    title: "Produtividade Elevada",
    description: "Libere sua equipe de tarefas repetitivas e permita que eles foquem no que realmente importa."
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
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: -20 
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

export function Benefits() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mb-4">
            Transforme seu Atendimento ao Cliente
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Revolucione a experiência dos seus clientes com nossa solução de IA personalizada
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefitsData.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg">
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
