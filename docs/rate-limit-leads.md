# Rate limit do envio público de leads

O endpoint público `POST /api/leads` possui uma proteção inicial de rate limit em memória.

## Regra atual

- Limite: 5 envios.
- Janela: 10 minutos.
- Escopo: IP aproximado do cliente, resolvido por `x-forwarded-for`, `x-real-ip` ou fallback `unknown`.
- Endpoint protegido: apenas `POST /api/leads`.

Quando o limite é excedido, a API retorna:

- HTTP `429 Too Many Requests`;
- corpo JSON com `success: false`;
- header `Retry-After`;
- headers informativos `X-RateLimit-Limit`, `X-RateLimit-Remaining` e `X-RateLimit-Reset`.

## Validação manual

1. Enviar até 5 payloads válidos para `POST /api/leads` usando o mesmo IP.
2. Confirmar respostas `201` enquanto houver limite disponível.
3. Enviar o sexto payload dentro da mesma janela de 10 minutos.
4. Confirmar resposta `429`.

Exemplo de payload válido:

```json
{
  "name": "Pessoa Teste",
  "email": "teste@example.com",
  "message": "Mensagem de teste com detalhes suficientes.",
  "source": "contact"
}
```

## Limitações conhecidas

Essa proteção usa memória do processo Node.js. Em ambientes serverless, múltiplas instâncias ou reinícios podem manter contadores separados. Para produção com tráfego real, priorize uma solução compartilhada e persistente, como Redis, Upstash, Vercel KV, WAF/CDN ou proteção equivalente na borda.

## Impacto esperado

- Não altera o banco.
- Não exige migration.
- Não altera autenticação.
- Não altera `GET /api/leads`.
- Não altera `PATCH /api/leads/:id`.
