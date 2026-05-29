# Plataforma de Diagnóstico de Maturidade Digital

Aplicação web gratuita e educativa para ajudar pequenas empresas a avaliarem seu nível de maturidade digital. O usuário responde a um questionário com 30 perguntas, recebe uma pontuação geral, vê o resultado por categoria e obtém recomendações práticas de melhoria.

## Objetivo social e acadêmico

Este projeto foi desenvolvido como parte de uma iniciativa PEX, aproximando desenvolvimento web, diagnóstico tecnológico e orientação prática para pequenos negócios. A ferramenta busca apoiar microempresas, prestadores de serviço, autônomos e negócios locais que usam tecnologia de forma limitada ou informal.

O diagnóstico é inicial e educativo. Ele não substitui uma consultoria especializada, mas ajuda a identificar prioridades de melhoria.

## Funcionalidades

- Página inicial com explicação do diagnóstico.
- Questionário com 30 perguntas organizadas por categoria.
- Respostas com pontuação de 0 a 3 pontos.
- Progresso do questionário.
- Persistência temporária das respostas com `sessionStorage`.
- Cálculo automático da pontuação total, até 90 pontos.
- Classificação em quatro níveis:
  - maturidade inicial;
  - maturidade básica;
  - maturidade intermediária;
  - maturidade avançada.
- Resultado por categoria.
- Destaque das 3 prioridades de melhoria.
- Recomendações práticas por categoria.
- Cópia do resultado para a área de transferência.
- Impressão do resultado.
- Página Sobre com vínculo ao PEX e aviso educativo.
- Layout responsivo e navegação acessível por teclado.

## Categorias avaliadas

1. Presença digital.
2. Atendimento e relacionamento com clientes.
3. Processos internos.
4. Segurança digital.
5. Dados e backup.
6. Automação e produtividade.
7. Experiência do cliente e acessibilidade.

## Tecnologias

- React.
- TypeScript.
- Vite.
- React Router.
- Vitest.
- ESLint.
- Prettier.

## Como rodar localmente

Pré-requisitos:

- Node.js 24 ou superior.
- npm.

Instale as dependências:

```bash
npm install
```

Rode o projeto em modo desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Pré-visualize a versão de produção:

```bash
npm run preview
```

## Scripts disponíveis

```bash
npm run dev           # inicia o servidor de desenvolvimento
npm run build         # valida TypeScript e gera build de produção
npm run preview       # pré-visualiza o build
npm run test          # executa testes automatizados
npm run lint          # executa ESLint
npm run format        # formata arquivos com Prettier
npm run format:check  # verifica formatação
```

## Estrutura principal

```txt
src/
  app/
  components/
  data/
  features/diagnostic/
  pages/
  styles/
```

## Privacidade

A aplicação não exige login e não solicita dados pessoais. As respostas do questionário ficam salvas apenas temporariamente no navegador, usando `sessionStorage`, para permitir continuar o diagnóstico durante a sessão.

## Deploy

O projeto pode ser publicado no Netlify como uma aplicação Vite padrão.

Configurações sugeridas:

- Build command: `npm run build`
- Publish directory: `dist`
- Install command: `npm install`

## Evidências sugeridas para o PEX

- Print da página inicial.
- Print do questionário em andamento.
- Print da tela de resultado.
- Print da versão mobile.
- Link do repositório GitHub.
- Link do deploy publicado.

## Verificação atual

O projeto foi validado com:

```bash
npm run format:check
npm run test
npm run lint
npm run build
```
