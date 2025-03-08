"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, ArrowRight, PhoneCall } from "lucide-react"

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
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function Guarantee() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-4 md:p-12 bg-white shadow-xl relative overflow-hidden rounded-lg">
            <motion.div variants={itemVariants} className="absolute top-0 right-0 p-6">
              <Shield className="h-16 w-16 text-[#2aa3e9] opacity-10" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-8 w-8 text-[#2aa3e9]" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Garantia de Satisfação
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Se o agente de IA não melhorar a satisfação do atendimento em pelo menos 20% nos primeiros 30 dias, você recebe 100% do seu investimento de volta.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-[#2aa3e9] mt-1" />
                    <p className="text-gray-600">Período de avaliação de 30 dias</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-[#2aa3e9] mt-1" />
                    <p className="text-gray-600">Métricas transparentes de desempenho</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-[#2aa3e9] mt-1" />
                    <p className="text-gray-600">Reembolso integral garantido</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gray-50 p-4 md:p-8 rounded-lg space-y-6"
              >
                <p className="text-2xl text-center font-bold text-gray-800">
                  Retorno esperado de 10x sobre o investimento
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="w-full h-12 text-lg bg-[#2aa3e9] hover:bg-[#1d8af0] text-white"
                    onClick={() => {
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Entre em contato agora <PhoneCall className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
                
                <p className="text-sm text-center text-gray-500">
                  Vagas limitadas - Apenas 3 clientes por mês
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600">
            Transforme seu atendimento ao cliente com confiança e segurança
          </p>
        </motion.div>
      </div>
    </section>
  )
}
