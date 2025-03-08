"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Users, Award } from "lucide-react"

const stats = [
  {
    icon: <TrendingUp className="h-8 w-8 text-[#2aa3e9]" />,
    value: "20%",
    label: "Aumento Mínimo",
    description: "na satisfação do cliente em 30 dias"
  },
  {
    icon: <Clock className="h-8 w-8 text-[#2aa3e9]" />,
    value: "24/7",
    label: "Disponibilidade",
    description: "atendimento ininterrupto"
  },
  {
    icon: <Users className="h-8 w-8 text-[#2aa3e9]" />,
    value: "3",
    label: "Clientes por Mês",
    description: "para garantir atendimento premium."
  },
  {
    icon: <Award className="h-8 w-8 text-[#2aa3e9]" />,
    value: "10x",
    label: "ROI Médio",
    description: "retorno sobre investimento"
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
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export function SocialProof() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mb-4">
          Impacto real da nossa solução
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Potencialize seus resultados com uma solução comprovadamente eficaz
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex"
            >
              <Card className="p-8 w-full bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-50 p-3">
                    {stat.icon}
                  </div>
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  >
                    <span className="text-4xl font-bold text-[#2aa3e9]">
                      {stat.value}
                    </span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
