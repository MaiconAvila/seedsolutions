"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { ArrowRight, Check, Loader2 } from "lucide-react"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Nome muito curto" }),
  lastName: z.string().min(2, { message: "Sobrenome muito curto" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  isDecisionMaker: z.string(),
  
  companyName: z.string().min(2, { message: "Nome da empresa muito curto" }),
  companySector: z.string().min(2, { message: "Por favor, preencha o setor" }),
  companyDescription: z.string().min(10, { message: "Descrição muito curta" }),
  employeeCount: z.string(),
  companyWebsite: z.string().url({ message: "URL inválida" }).optional().or(z.literal("")),
  monthlyRevenue: z.string(),
  
  serviceChannels: z.string().min(2, { message: "Por favor, preencha os canais" }),
  currentChallenges: z.string().min(10, { message: "Por favor, descreva seus desafios" }),
  usesAI: z.string(),
  currentAISolution: z.string().optional(),
  mainObjective: z.string().min(5, { message: "Por favor, descreva seu objetivo" }),
  
  referralSource: z.string(),
  idealSolution: z.string().min(10, { message: "Descrição muito curta" }).optional(),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      isDecisionMaker: "sim",
      companyName: "",
      companySector: "",
      companyDescription: "",
      employeeCount: "",
      companyWebsite: "",
      monthlyRevenue: "",
      serviceChannels: "",
      currentChallenges: "",
      usesAI: "não",
      currentAISolution: "",
      mainObjective: "",
      referralSource: "",
      idealSolution: "",
    },
  })
  
  const usesAI = form.watch("usesAI")
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar formulário');
      }
      
      // Sucesso
      setIsSubmitted(true);
    } catch (error) {
      // Tratar erro (mostrar mensagem ao usuário)
      console.error('Erro:', error);
      // Aqui você pode atualizar o estado para mostrar uma mensagem de erro
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container max-w-4xl mx-auto px-4 text-center"
        >
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recebemos sua solicitação!</h2>
            <p className="text-gray-600 mb-6">
              Nossa equipe analisará suas informações e entrará em contato em até 24 horas
              úteis para discutir como podemos ajudar sua empresa a transformar o atendimento ao cliente.
            </p>
            <Button 
              variant="outline" 
              className="border-[#2aa3e9] text-[#2aa3e9] hover:bg-blue-50"
              onClick={() => setIsSubmitted(false)}
            >
              Voltar ao formulário
            </Button>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="contato" className="w-full py-24  relative overflow-hidden">
      <div className="absolute inset-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Vamos transformar seu atendimento ao cliente?
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Preencha o formulário abaixo para sabermos mais sobre sua empresa e seus desafios.
            Nossa equipe entrará em contato em até 24 horas úteis.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Seção 1: Informações Pessoais */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Suas informações</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sobrenome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu sobrenome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="exemplo@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="isDecisionMaker"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Você é o tomador de decisão?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row gap-4 mt-2"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="sim" />
                              </FormControl>
                              <FormLabel className="font-normal">Sim</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="não" />
                              </FormControl>
                              <FormLabel className="font-normal">Não</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Seção 2: Informações da Empresa */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sobre sua empresa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Nome da empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Empresa S.A." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companySector"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Setor da empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Varejo, Tecnologia, Saúde" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyDescription"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>O que sua empresa faz?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Explique resumidamente o que a empresa faz" 
                            {...field}
                            className="resize-none h-24"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employeeCount"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Quantos colaboradores?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 colaboradores</SelectItem>
                            <SelectItem value="6-10">6-10 colaboradores</SelectItem>
                            <SelectItem value="11-50">11-50 colaboradores</SelectItem>
                            <SelectItem value="51-100">51-100 colaboradores</SelectItem>
                            <SelectItem value="100+">100+ colaboradores</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyWebsite"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Site da empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="https://suaempresa.com.br" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="monthlyRevenue"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Faturamento mensal</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<10k">Menos de 10 mil</SelectItem>
                            <SelectItem value="10k-25k">De 10 a 25 mil</SelectItem>
                            <SelectItem value="25k-50k">De 25 a 50 mil</SelectItem>
                            <SelectItem value="50k-100k">De 50 a 100 mil</SelectItem>
                            <SelectItem value="100k-200k">De 100 a 200 mil</SelectItem>
                            <SelectItem value="200k+">Acima de 200 mil</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Seção 3: Atendimento ao Cliente */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sobre o atendimento ao cliente</h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="serviceChannels"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Principais canais de atendimento</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: telefone, WhatsApp, email, chat online" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="currentChallenges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Desafios atuais no atendimento</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Ex: tempo de resposta, insatisfação do cliente" 
                            {...field}
                            className="resize-none h-24"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="usesAI"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Já utiliza IA no atendimento?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row gap-4 mt-2"
                            >
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="sim" />
                                </FormControl>
                                <FormLabel className="font-normal">Sim</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="não" />
                                </FormControl>
                                <FormLabel className="font-normal">Não</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {usesAI === "sim" && (
                      <FormField
                        control={form.control}
                        name="currentAISolution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Qual solução de IA utiliza?</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: chatbots, automação, análise" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                  <FormField
                    control={form.control}
                    name="mainObjective"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objetivo principal com IA no atendimento</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Reduzir custos, aumentar a satisfação" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Separator />

              {/* Seção 4: Informações Adicionais */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações adicionais</h3>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Como ficou sabendo da nossa empresa?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="indicacao">Indicação</SelectItem>
                            <SelectItem value="pesquisa">Pesquisa na Internet</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="facebook">Facebook</SelectItem>
                            <SelectItem value="google">Google</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="idealSolution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Se pudesse descrever a solução ideal, como ela seria?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva a solução dos seus sonhos" 
                            {...field}
                            className="resize-none h-32"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full md:w-auto py-6 bg-[#2aa3e9] hover:bg-[#259ad8] text-white flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar informações
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}