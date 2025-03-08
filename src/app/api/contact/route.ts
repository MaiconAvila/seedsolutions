import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema completo correspondente ao formulário
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
});

export async function POST(request: NextRequest) {
  try {
    // Obter e validar os dados
    const data = await request.json();
    
    // Log mais detalhado
    console.log('Dados recebidos do formulário:', JSON.stringify(data, null, 2));
    
    // Verificar se WEBHOOK_URL está configurado e logar seu valor
    console.log('WEBHOOK_URL configurada:', process.env.WEBHOOK_URL || 'NÃO CONFIGURADO');
    
    // Modo de desenvolvimento sem webhook configurado
    if (process.env.NODE_ENV === 'development' && !process.env.WEBHOOK_URL) {
      console.log('Modo desenvolvimento - sem webhook definido');
      return NextResponse.json(
        { success: true, message: 'Dados recebidos com sucesso (modo desenvolvimento)' }, 
        { status: 200 }
      );
    }
    
    const validatedData = formSchema.parse(data);
    
    // Verificar se WEBHOOK_URL está configurado
    if (!process.env.WEBHOOK_URL) {
      console.error('WEBHOOK_URL não configurado no ambiente');
      throw new Error('WEBHOOK_URL não configurado');
    }
    
    // Log antes de enviar
    console.log('Enviando dados para webhook:', process.env.WEBHOOK_URL);
    
    try {
      // Enviar para webhook com timeout e mais opções
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
      
      const response = await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${process.env.WEBHOOK_SECRET || ''}`,
          'X-Source': 'need-solutions-website'
        },
        body: JSON.stringify({
          ...validatedData,
          submittedAt: new Date().toISOString(),
        }),
        signal: controller.signal,
        // Adicionando mais opções para resolver problemas de rede
        cache: 'no-cache',
        mode: 'cors',
        redirect: 'follow',
      });
      
      clearTimeout(timeoutId);
      
      // Log da resposta do webhook
      console.log(`Resposta do webhook: ${response.status} ${response.statusText}`);
      
      if (!response.ok) {
        const responseText = await response.text().catch(() => 'Não foi possível ler a resposta');
        console.error(`Erro do webhook: ${response.status} ${response.statusText}`, responseText);
        throw new Error(`Webhook error: ${response.status}`);
      }
      
      // Log de sucesso
      console.log('Dados enviados com sucesso para o webhook');

      return NextResponse.json(
        { success: true, message: 'Dados recebidos com sucesso' }, 
        { status: 200 }
      );
    } catch (webhookError: any) {
      console.error('Erro ao enviar para webhook:', webhookError);
      throw new Error(`Falha ao enviar para webhook: ${webhookError.message}`);
    }
    
  } catch (error: any) {
    console.error('Erro de processamento:', error);
    
    // Mensagem de erro mais informativa em ambiente de desenvolvimento
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Erro: ${error.message || 'Desconhecido'}` 
      : 'Erro ao processar solicitação';
    
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 422 }
    );
  }
}