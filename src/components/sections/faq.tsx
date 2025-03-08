"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como a Seed Solutions pode ajudar o meu negócio?",
    answer: "Podemos transformar seu atendimento ao cliente com agentes de IA personalizados que oferecem respostas precisas 24/7. Nossa solução não apenas melhora a satisfação do cliente, mas também libera sua equipe para focar em atividades estratégicas, resultando em um aumento significativo na eficiência e produtividade do seu negócio."
  },
  {
    question: "Quanto tempo leva para implementar a solução?",
    answer: "Todo o processo de implementação, incluindo a personalização do agente de IA e a configuração do servidor dedicado, é realizado em até 14 dias. Utilizamos uma abordagem ágil que permite que você comece a ver os benefícios rapidamente, mantendo a qualidade e a precisão do serviço."
  },
  {
    question: "Qual a garantia oferecida?",
    answer: "Oferecemos uma garantia de satisfação de 30 dias: se o agente de IA não melhorar a satisfação do atendimento em pelo menos 20% neste período, você recebe 100% do seu investimento de volta. Isso demonstra nossa confiança na eficácia da solução."
  },
  {
    question: "Como a solução é desenvolvida?",
    answer: "Nossa solução é desenvolvida por uma equipe especializada em IA, que personaliza o agente de acordo com as necessidades específicas do seu negócio. Utilizamos tecnologias avançadas e garantimos um cluster de servidor dedicado para máximo desempenho e segurança."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte premium com uma equipe especializada em IA, pronta para resolver qualquer desafio técnico imediatamente. Mantemos uma comunicação clara e constante para garantir que sua solução esteja sempre funcionando perfeitamente."
  },
  {
    question: "O que acontece se houver algum problema?",
    answer: "Nossa equipe monitora o sistema continuamente e responde imediatamente a qualquer problema detectado. Com o servidor dedicado e suporte, garantimos uma resolução rápida e eficiente para manter seu atendimento funcionando sem interrupções."
  },
  {
    question: "Preciso de conhecimentos técnicos?",
    answer: "Não é necessário nenhum conhecimento técnico. Nossa solução é projetada para ser intuitiva e fácil de usar. Além disso, fornecemos treinamento completo para sua equipe e documentação detalhada sobre todas as funcionalidades."
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

export function FAQ() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background gradiente e pontilhado */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-80" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Tire suas dúvidas sobre nossa solução de atendimento com IA
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <AccordionItem value={`item-${index}`} className="bg-white px-6 rounded-lg shadow-sm border">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
        </motion.div>
      </div>
    </section>
  )
}
