import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Proteção básica para API routes
export function middleware(request: NextRequest) {
  // Aplicar apenas às rotas da API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next();
    
    // Adicionar cabeçalhos de segurança
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    
    // Prevenir CSRF usando verificação de Origin/Referer
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'https://seedsolutions.com', 
      // Em desenvolvimento
      'http://localhost:3000'
    ];
    
    if (!origin || !allowedOrigins.includes(origin)) {
      // Origin inválido - você pode optar por rejeitar a solicitação
      // ou apenas registrar para análise
      console.warn(`Requisição de origem desconhecida: ${origin}`);
    }
    
    return response;
  }
}

export const config = {
  matcher: '/api/:path*',
};