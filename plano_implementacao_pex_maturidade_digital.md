# Plano de Implementação — Plataforma Web de Diagnóstico de Maturidade Digital para Pequenas Empresas

## 1. Visão geral do projeto

### Nome do projeto

**Plataforma Web de Diagnóstico de Maturidade Digital para Pequenas Empresas**

### Organização executora

**[Nome da sua empresa de consultoria de tecnologia]**

### Área do curso relacionada

Ciência da Computação, com foco em desenvolvimento web, diagnóstico tecnológico, segurança digital, consultoria tecnológica e aplicação prática de soluções digitais para pequenos negócios.

### Resumo

O projeto consiste no desenvolvimento de uma aplicação web gratuita que permite que pequenas empresas avaliem seu nível de maturidade digital por meio de um questionário interativo. A plataforma calcula uma pontuação, classifica o negócio em um nível de maturidade e apresenta recomendações práticas para melhoria em áreas como presença digital, atendimento, processos internos, segurança, dados, automação e experiência do cliente.

A proposta é que a empresa de consultoria de tecnologia desenvolva uma solução acessível para apoiar pequenos negócios que ainda não possuem clareza sobre seus principais pontos fracos no uso da tecnologia.

---

## 2. Justificativa

Muitas pequenas empresas utilizam tecnologia de forma limitada, informal ou desorganizada. É comum que negócios locais dependam apenas de WhatsApp, redes sociais, planilhas soltas e processos manuais, sem uma visão clara sobre segurança digital, presença online, organização de dados, atendimento ao cliente e oportunidades de automação.

Esse cenário pode gerar perda de produtividade, falhas de comunicação, baixa presença digital, dificuldade de crescimento, riscos de segurança e tomada de decisão pouco estruturada.

A plataforma proposta busca oferecer um diagnóstico inicial simples, acessível e educativo, permitindo que pequenos empreendedores identifiquem pontos de melhoria e recebam recomendações práticas sem depender, inicialmente, de uma consultoria formal ou de conhecimento técnico avançado.

---

## 3. Situação-problema

Pequenas empresas geralmente não sabem avaliar o próprio nível de maturidade digital. Mesmo quando usam ferramentas digitais, muitas vezes não possuem critérios para entender se esses recursos estão sendo utilizados de forma segura, eficiente e estratégica.

### Problema central

**Pequenos negócios possuem dificuldade para identificar seus principais gargalos tecnológicos e priorizar melhorias digitais viáveis para sua realidade.**

### Exemplos de problemas derivados

- Ausência de site ou página institucional.
- Dependência exclusiva de redes sociais.
- Atendimento desorganizado pelo WhatsApp.
- Falta de backup de informações importantes.
- Uso de senhas fracas ou compartilhadas.
- Ausência de autenticação em dois fatores.
- Falta de controle de pedidos, clientes ou estoque.
- Processos internos muito manuais.
- Pouca clareza sobre indicadores do negócio.
- Baixa acessibilidade e experiência digital para clientes.

---

## 4. Objetivos

### Objetivo geral

Desenvolver uma plataforma web gratuita para auxiliar pequenas empresas a avaliarem seu nível de maturidade digital, identificando pontos fortes, fragilidades e recomendações iniciais de melhoria tecnológica.

### Objetivos específicos

- Criar um questionário objetivo sobre práticas digitais de pequenos negócios.
- Classificar o nível de maturidade digital com base nas respostas do usuário.
- Apresentar recomendações práticas por categoria avaliada.
- Desenvolver uma interface simples, responsiva e acessível.
- Disponibilizar a ferramenta publicamente na web.
- Gerar evidências do projeto para documentação acadêmica do PEX.

---

## 5. Público-alvo

O público-alvo do projeto são pequenas empresas, microempresas, profissionais autônomos, prestadores de serviço e negócios locais que desejam entender melhor como utilizam tecnologia em suas operações.

### Exemplos de público

- Pequenos comércios.
- Prestadores de serviço.
- Clínicas pequenas.
- Salões de beleza.
- Academias.
- Restaurantes e lanchonetes.
- Lojas locais.
- Profissionais autônomos.
- Negócios familiares.

---

## 6. Escopo do MVP

### O que o projeto deve ter

1. Página inicial explicando o objetivo da plataforma.
2. Página ou seção com informações sobre maturidade digital.
3. Questionário de diagnóstico com perguntas organizadas por categoria.
4. Sistema de pontuação baseado nas respostas.
5. Classificação final do nível de maturidade digital.
6. Resultado por categoria.
7. Recomendações automáticas com base na pontuação.
8. Tela final com resumo do diagnóstico.
9. Opção de copiar ou imprimir o resultado.
10. Layout responsivo para desktop e celular.
11. Página “Sobre o projeto” explicando o vínculo com o PEX.

### O que fica fora do MVP

- Login de usuários.
- Banco de dados.
- Dashboard administrativo.
- Integração com pagamento.
- Coleta obrigatória de dados pessoais.
- Envio automático de e-mail.
- Área de clientes.
- IA generativa.
- Relatórios em PDF com biblioteca externa.

O objetivo é manter o projeto simples, funcional e fácil de entregar.

---

## 7. Stack recomendada

### Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS ou CSS Modules

### Validação e organização de dados

- Zod, opcional
- Dados das perguntas em arquivo TypeScript local
- Cálculo de pontuação no frontend

### Deploy

- Vercel

### Versionamento

- Git
- GitHub

### Qualidade

- ESLint
- Prettier
- TypeScript strict mode

### Testes opcionais

- Vitest para testar cálculo de pontuação
- React Testing Library para componentes principais

---

## 8. Arquitetura sugerida

```txt
src/
  app/
    App.tsx
    routes.tsx
  components/
    Button.tsx
    Card.tsx
    Container.tsx
    ProgressBar.tsx
    RadioGroup.tsx
    ResultBadge.tsx
    SectionTitle.tsx
  data/
    questions.ts
    recommendations.ts
  features/
    diagnostic/
      DiagnosticForm.tsx
      DiagnosticQuestion.tsx
      DiagnosticResult.tsx
      diagnostic.types.ts
      scoring.ts
  pages/
    HomePage.tsx
    DiagnosticPage.tsx
    ResultPage.tsx
    AboutPage.tsx
  styles/
    globals.css
  main.tsx
```

---

## 9. Modelo conceitual da aplicação

### Categorias avaliadas

1. Presença digital
2. Atendimento e relacionamento com clientes
3. Processos internos
4. Segurança digital
5. Dados e backup
6. Automação e produtividade
7. Experiência do cliente e acessibilidade

### Escala de resposta

Cada pergunta pode usar uma escala de 0 a 3 pontos:

- **0 pontos:** Não existe ou não é feito.
- **1 ponto:** Existe de forma informal ou muito básica.
- **2 pontos:** Existe parcialmente, mas pode melhorar.
- **3 pontos:** Existe de forma organizada e consistente.

### Pontuação total

Com 30 perguntas, a pontuação máxima será de 90 pontos.

### Níveis de maturidade

- **0 a 29 pontos:** Maturidade inicial
- **30 a 54 pontos:** Maturidade básica
- **55 a 74 pontos:** Maturidade intermediária
- **75 a 90 pontos:** Maturidade avançada

---

## 10. Questionário do diagnóstico

### Categoria 1 — Presença digital

#### 1. A empresa possui site ou página institucional própria?

- 0: Não possui.
- 1: Possui apenas rede social.
- 2: Possui uma página simples, mas incompleta ou desatualizada.
- 3: Possui site ou página bem organizada, atualizada e com informações essenciais.

#### 2. A empresa possui perfil atualizado no Google, como Google Business Profile?

- 0: Não possui.
- 1: Possui, mas está incompleto ou desatualizado.
- 2: Possui informações básicas preenchidas.
- 3: Possui perfil completo, atualizado, com fotos, horário e formas de contato.

#### 3. A empresa utiliza redes sociais de forma estratégica?

- 0: Não utiliza.
- 1: Utiliza sem frequência ou sem planejamento.
- 2: Publica com alguma regularidade, mas sem estratégia clara.
- 3: Possui frequência, identidade visual e conteúdo alinhado ao negócio.

#### 4. A empresa possui domínio próprio ou e-mail profissional?

- 0: Não possui.
- 1: Usa apenas e-mail pessoal ou gratuito.
- 2: Possui domínio ou e-mail profissional, mas usa pouco.
- 3: Possui domínio e e-mail profissional em uso ativo.

#### 5. As informações principais da empresa estão fáceis de encontrar online?

- 0: Não estão disponíveis.
- 1: Estão espalhadas e difíceis de encontrar.
- 2: Estão disponíveis, mas poderiam estar mais organizadas.
- 3: Estão claras, completas e fáceis de acessar.

### Categoria 2 — Atendimento e relacionamento com clientes

#### 6. A empresa utiliza WhatsApp Business ou ferramenta equivalente?

- 0: Não utiliza WhatsApp para atendimento.
- 1: Usa WhatsApp comum de forma informal.
- 2: Usa WhatsApp Business com recursos básicos.
- 3: Usa WhatsApp Business com catálogo, mensagens automáticas e organização de contatos.

#### 7. A empresa possui processo definido para responder clientes?

- 0: Não possui processo.
- 1: Responde conforme consegue, sem padrão.
- 2: Possui alguma organização, mas ainda depende muito de improviso.
- 3: Possui fluxo claro para atendimento, acompanhamento e retorno.

#### 8. A empresa registra histórico de clientes ou atendimentos?

- 0: Não registra.
- 1: Registra manualmente de forma desorganizada.
- 2: Registra em planilha ou ferramenta simples.
- 3: Registra em sistema, CRM ou processo bem estruturado.

#### 9. A empresa possui formulário digital para contato, orçamento ou solicitação?

- 0: Não possui.
- 1: Recebe tudo por mensagem livre.
- 2: Usa formulário simples em alguns casos.
- 3: Usa formulário bem definido e integrado ao processo de atendimento.

#### 10. A empresa acompanha reclamações, dúvidas ou feedbacks dos clientes?

- 0: Não acompanha.
- 1: Acompanha informalmente.
- 2: Registra alguns feedbacks.
- 3: Possui processo para registrar, analisar e agir sobre feedbacks.

### Categoria 3 — Processos internos

#### 11. A empresa possui controle digital de vendas, pedidos ou serviços?

- 0: Não possui controle digital.
- 1: Usa anotações manuais ou mensagens soltas.
- 2: Usa planilhas ou ferramentas simples.
- 3: Usa sistema ou processo digital organizado.

#### 12. A empresa possui controle de estoque, agenda ou tarefas quando aplicável?

- 0: Não possui controle.
- 1: Controla manualmente.
- 2: Controla em planilha ou aplicativo simples.
- 3: Controla com ferramenta adequada e rotina de atualização.

#### 13. A empresa documenta processos importantes?

- 0: Não documenta.
- 1: Depende do conhecimento de uma pessoa.
- 2: Possui algumas instruções ou documentos soltos.
- 3: Possui processos documentados e acessíveis.

#### 14. A empresa usa ferramentas digitais para organização da equipe ou rotina?

- 0: Não usa.
- 1: Usa apenas mensagens informais.
- 2: Usa agenda, planilha ou aplicativo simples.
- 3: Usa ferramentas de gestão de tarefas, agenda ou colaboração de forma consistente.

#### 15. A empresa acompanha indicadores básicos do negócio?

- 0: Não acompanha.
- 1: Acompanha de memória ou informalmente.
- 2: Acompanha alguns dados em planilhas.
- 3: Acompanha indicadores de forma recorrente e organizada.

### Categoria 4 — Segurança digital

#### 16. A empresa utiliza senhas fortes e diferentes para cada serviço?

- 0: Não utiliza.
- 1: Usa senhas fracas ou repetidas.
- 2: Usa algumas senhas fortes, mas sem padrão claro.
- 3: Usa senhas fortes, diferentes e bem gerenciadas.

#### 17. A empresa utiliza autenticação em dois fatores nos principais serviços?

- 0: Não utiliza.
- 1: Utiliza apenas em um serviço.
- 2: Utiliza em alguns serviços importantes.
- 3: Utiliza nos principais serviços, como e-mail, banco, redes sociais e sistemas.

#### 18. A empresa controla quem tem acesso às contas e sistemas?

- 0: Não controla.
- 1: Compartilha acessos de forma informal.
- 2: Possui algum controle, mas ainda compartilha senhas em alguns casos.
- 3: Possui controle claro de acessos e permissões.

#### 19. A empresa orienta colaboradores sobre golpes digitais?

- 0: Não orienta.
- 1: Orienta apenas quando ocorre algum problema.
- 2: Faz orientações informais de tempos em tempos.
- 3: Possui orientações claras sobre golpes, links suspeitos, Pix e e-mails falsos.

#### 20. Os dispositivos utilizados pela empresa são mantidos atualizados?

- 0: Não há cuidado com atualizações.
- 1: Atualiza apenas quando o dispositivo exige.
- 2: Atualiza com alguma frequência.
- 3: Mantém sistemas, aplicativos e dispositivos atualizados regularmente.

### Categoria 5 — Dados e backup

#### 21. A empresa realiza backup de informações importantes?

- 0: Não realiza.
- 1: Faz cópias ocasionais e manuais.
- 2: Possui backup parcial em nuvem ou dispositivo externo.
- 3: Possui rotina de backup organizada e testada.

#### 22. A empresa sabe onde estão armazenados seus dados importantes?

- 0: Não sabe claramente.
- 1: Os dados ficam espalhados em celulares, mensagens e computadores.
- 2: Os dados estão parcialmente organizados.
- 3: Os dados estão centralizados e organizados.

#### 23. A empresa tem cuidado com dados de clientes?

- 0: Não possui cuidado específico.
- 1: Guarda dados sem padrão claro.
- 2: Possui alguma preocupação com privacidade.
- 3: Coleta apenas o necessário e mantém os dados com cuidado e organização.

#### 24. A empresa consegue recuperar informações importantes em caso de perda de aparelho ou conta?

- 0: Não conseguiria.
- 1: Teria muita dificuldade.
- 2: Conseguiria recuperar parte das informações.
- 3: Conseguiria recuperar as principais informações por meio de backups e acessos seguros.

### Categoria 6 — Automação e produtividade

#### 25. A empresa automatiza tarefas repetitivas?

- 0: Não automatiza.
- 1: Automatiza muito pouco.
- 2: Automatiza algumas tarefas simples.
- 3: Usa automações para reduzir trabalho manual recorrente.

#### 26. A empresa usa modelos prontos para mensagens, propostas ou documentos?

- 0: Não usa.
- 1: Copia mensagens antigas manualmente.
- 2: Usa alguns modelos simples.
- 3: Possui modelos organizados e reutilizáveis.

#### 27. A empresa integra ferramentas digitais entre si?

- 0: Não integra.
- 1: Usa ferramentas separadas sem conexão.
- 2: Possui algumas integrações simples.
- 3: Possui integrações úteis entre atendimento, formulários, planilhas, agenda ou sistemas.

#### 28. A empresa usa tecnologia para economizar tempo operacional?

- 0: Não usa.
- 1: Usa pouco, sem planejamento.
- 2: Usa algumas ferramentas que ajudam na rotina.
- 3: Usa tecnologia de forma clara para reduzir retrabalho e melhorar produtividade.

### Categoria 7 — Experiência do cliente e acessibilidade

#### 29. A experiência digital do cliente é simples e clara?

- 0: O cliente precisa perguntar quase tudo.
- 1: Algumas informações existem, mas são confusas.
- 2: A experiência é razoável, mas pode melhorar.
- 3: O cliente encontra informações, contato e próximos passos com facilidade.

#### 30. Os canais digitais da empresa funcionam bem no celular?

- 0: Não funcionam bem ou não existem.
- 1: Funcionam com dificuldade.
- 2: Funcionam de forma aceitável.
- 3: Funcionam bem, com navegação simples e informações claras.

---

## 11. Resultado final

### Maturidade inicial

A empresa possui baixa estrutura digital e depende principalmente de processos manuais ou informais. A prioridade deve ser organizar presença digital básica, canais de atendimento, senhas, backup e controle mínimo de informações.

### Maturidade básica

A empresa já utiliza algumas ferramentas digitais, mas ainda de forma parcial ou pouco integrada. A prioridade deve ser padronizar processos, melhorar atendimento, fortalecer segurança e organizar dados.

### Maturidade intermediária

A empresa possui boa base digital, mas ainda pode evoluir em automação, análise de indicadores, integração de ferramentas e experiência do cliente.

### Maturidade avançada

A empresa utiliza tecnologia de forma consistente e estratégica. A prioridade passa a ser otimização, automação avançada, análise de dados, segurança contínua e melhoria da experiência digital.

---

## 12. Recomendações automáticas por categoria

### Presença digital

- Criar ou atualizar uma página institucional.
- Manter endereço, telefone, horário e serviços sempre visíveis.
- Atualizar o Google Business Profile.
- Organizar redes sociais com informações claras.
- Usar domínio e e-mail profissional quando possível.

### Atendimento e relacionamento

- Utilizar WhatsApp Business.
- Criar mensagens automáticas para dúvidas frequentes.
- Usar etiquetas ou categorias para organizar contatos.
- Criar formulário de orçamento ou contato.
- Registrar feedbacks e reclamações.

### Processos internos

- Digitalizar controles de pedidos, vendas, agenda ou estoque.
- Criar planilhas padronizadas quando ainda não houver sistema.
- Documentar processos importantes.
- Definir responsáveis por cada rotina.
- Acompanhar indicadores simples mensalmente.

### Segurança digital

- Usar senhas fortes e diferentes.
- Ativar autenticação em dois fatores.
- Evitar compartilhar senhas por mensagens.
- Revisar acessos de ex-funcionários ou terceiros.
- Orientar pessoas da empresa sobre golpes digitais.

### Dados e backup

- Centralizar arquivos importantes.
- Fazer backup em nuvem ou dispositivo externo.
- Testar recuperação de dados periodicamente.
- Evitar deixar informações importantes apenas em celulares.
- Coletar apenas dados necessários dos clientes.

### Automação e produtividade

- Criar modelos de mensagens e propostas.
- Automatizar respostas frequentes.
- Usar formulários para coletar informações repetitivas.
- Integrar ferramentas simples, como formulário e planilha.
- Reduzir tarefas manuais repetitivas.

### Experiência do cliente e acessibilidade

- Facilitar acesso a contato, serviços, localização e horários.
- Garantir boa navegação no celular.
- Usar linguagem simples.
- Evitar excesso de informações espalhadas.
- Tornar o caminho do cliente mais direto até o atendimento ou compra.

---

## 13. Fluxo de navegação

1. Usuário acessa a página inicial.
2. Usuário lê o objetivo do diagnóstico.
3. Usuário clica em “Iniciar diagnóstico”.
4. Usuário responde as perguntas por categoria.
5. Sistema mostra progresso do questionário.
6. Usuário finaliza o diagnóstico.
7. Sistema calcula pontuação geral e por categoria.
8. Sistema exibe o nível de maturidade digital.
9. Sistema apresenta recomendações gerais e específicas.
10. Usuário pode copiar ou imprimir o resultado.

---

## 14. Telas necessárias

### Página inicial

Conteúdo:

- Nome do projeto.
- Breve explicação sobre maturidade digital.
- Benefícios do diagnóstico.
- Botão para iniciar.

### Página de diagnóstico

Conteúdo:

- Perguntas agrupadas por categoria.
- Barra de progresso.
- Opções de resposta.
- Botões de avançar e voltar.

### Página de resultado

Conteúdo:

- Pontuação total.
- Nível de maturidade.
- Descrição do nível.
- Resultado por categoria.
- Recomendações práticas.
- Botão para copiar resultado.
- Botão para imprimir.

### Página sobre o projeto

Conteúdo:

- Objetivo acadêmico.
- Relação com Ciência da Computação.
- Organização responsável.
- Público beneficiado.
- Explicação de que o diagnóstico é educativo e inicial.

---

## 15. Modelo de dados sugerido

```ts
type DiagnosticCategory =
  | 'digital_presence'
  | 'customer_service'
  | 'internal_processes'
  | 'cybersecurity'
  | 'data_backup'
  | 'automation_productivity'
  | 'customer_experience'

type DiagnosticOption = {
  label: string
  value: number
}

type DiagnosticQuestion = {
  id: string
  category: DiagnosticCategory
  title: string
  options: DiagnosticOption[]
}

type DiagnosticAnswer = {
  questionId: string
  value: number
}

type CategoryScore = {
  category: DiagnosticCategory
  score: number
  maxScore: number
  percentage: number
}

type DiagnosticResult = {
  totalScore: number
  maxScore: number
  percentage: number
  level: 'initial' | 'basic' | 'intermediate' | 'advanced'
  categoryScores: CategoryScore[]
}
```

---

## 16. Regras de pontuação

### Cálculo total

- Somar o valor de todas as respostas.
- Calcular percentual com base na pontuação máxima.
- Definir o nível final conforme a faixa de pontuação.

### Cálculo por categoria

- Somar respostas da categoria.
- Calcular percentual da categoria.
- Exibir categorias mais fortes e mais fracas.

### Categorias prioritárias

As categorias com menor percentual devem aparecer como prioridade de melhoria.

Exemplo:

- Segurança digital: 35%
- Dados e backup: 40%
- Atendimento: 50%

Nesse caso, a plataforma deve destacar segurança digital, dados e atendimento como prioridades.

---

## 17. Critérios de aceite

### Funcionais

- O usuário consegue iniciar o diagnóstico.
- O usuário consegue responder todas as perguntas.
- O sistema calcula a pontuação total corretamente.
- O sistema calcula a pontuação por categoria corretamente.
- O sistema classifica o nível de maturidade corretamente.
- O sistema mostra recomendações compatíveis com o resultado.
- O usuário consegue copiar ou imprimir o resultado.
- A aplicação funciona em desktop e celular.

### Não funcionais

- A aplicação deve ser responsiva.
- A interface deve ser simples e intuitiva.
- O conteúdo deve usar linguagem acessível para pessoas não técnicas.
- O diagnóstico não deve solicitar dados sensíveis.
- O carregamento deve ser rápido.
- O projeto deve estar disponível por link público.

---

## 18. Plano de implementação

### Etapa 1 — Estrutura inicial

- Criar projeto com React, TypeScript e Vite.
- Configurar estrutura de pastas.
- Criar rotas principais.
- Criar layout base.
- Criar componentes reutilizáveis.

### Etapa 2 — Conteúdo e dados

- Criar arquivo de perguntas.
- Criar arquivo de recomendações.
- Definir categorias.
- Definir níveis de maturidade.
- Validar textos para linguagem simples.

### Etapa 3 — Questionário

- Criar tela de diagnóstico.
- Renderizar perguntas por categoria.
- Controlar respostas no estado da aplicação.
- Exibir progresso.
- Permitir voltar e avançar.
- Validar se todas as perguntas foram respondidas.

### Etapa 4 — Cálculo de resultado

- Implementar soma de pontuação.
- Implementar cálculo por categoria.
- Implementar classificação final.
- Implementar identificação de categorias prioritárias.
- Testar regras de pontuação.

### Etapa 5 — Tela de resultado

- Exibir pontuação geral.
- Exibir nível de maturidade.
- Exibir descrição do nível.
- Exibir resultado por categoria.
- Exibir recomendações gerais.
- Exibir recomendações por categoria fraca.
- Adicionar botão de copiar resultado.
- Adicionar botão de imprimir.

### Etapa 6 — Página institucional

- Criar página inicial.
- Criar página sobre o projeto.
- Explicar objetivo social e acadêmico.
- Explicar público beneficiado.
- Explicar que o diagnóstico é inicial e educativo.

### Etapa 7 — Revisão e deploy

- Revisar responsividade.
- Revisar textos.
- Testar no celular.
- Testar fluxo completo.
- Fazer deploy na Vercel.
- Atualizar README.
- Separar prints para o relatório.

---

## 19. Cronograma sugerido

### Semana 1 — Planejamento e estrutura

- Definir nome final do projeto.
- Preencher documentação acadêmica inicial.
- Criar estrutura do projeto.
- Criar layout base.
- Criar dados das perguntas.

### Semana 2 — Desenvolvimento principal

- Implementar questionário.
- Implementar navegação entre perguntas.
- Implementar cálculo de resultado.
- Implementar tela de resultado.

### Semana 3 — Polimento e conteúdo

- Criar página inicial.
- Criar página sobre.
- Revisar recomendações.
- Melhorar responsividade.
- Testar fluxo completo.

### Semana 4 — Finalização acadêmica

- Fazer deploy.
- Criar README.
- Tirar prints.
- Coletar evidências.
- Escrever relatório final.
- Anexar Termo de Autorização assinado.

---

## 20. Evidências para o PEX

### Evidências técnicas

- Link do projeto publicado.
- Link do repositório no GitHub.
- Prints da página inicial.
- Prints do questionário.
- Prints da tela de resultado.
- Prints da versão mobile.
- README do projeto.

### Evidências acadêmicas

- Carta de Apresentação preenchida.
- Termo de Autorização assinado.
- Descrição da organização.
- Situação-problema identificada.
- Análise crítica do problema.
- Fatores-chave da intervenção.
- Estratégia inicial de solução.
- Relatório final do PEX.

### Evidências opcionais

- Formulário de feedback.
- Respostas de 3 a 5 pequenos negócios testando a ferramenta.
- Print de divulgação da ferramenta.
- Depoimento curto de alguém que testou.

---

## 21. Como preencher a análise da situação no relatório

### Contexto da organização

A organização atua na área de consultoria e desenvolvimento de soluções tecnológicas. Durante a análise do contexto de atuação, foi identificada uma oportunidade de apoiar pequenos negócios que possuem dificuldades para compreender sua própria maturidade digital e priorizar melhorias tecnológicas.

### Problema identificado

Pequenas empresas muitas vezes utilizam recursos digitais sem planejamento, com processos manuais, baixa segurança, pouca organização de dados e ausência de diagnóstico sobre seus pontos de melhoria. Isso dificulta a tomada de decisão e limita o uso estratégico da tecnologia.

### Causa raiz

A principal causa identificada é a falta de conhecimento técnico acessível e de ferramentas simples que ajudem pequenos empreendedores a avaliarem sua realidade digital sem depender imediatamente de consultorias complexas ou soluções caras.

### Fatores-chave

- Baixo conhecimento técnico em pequenos negócios.
- Uso informal de ferramentas digitais.
- Falta de segurança básica.
- Falta de padronização de processos.
- Dependência de WhatsApp, redes sociais e planilhas.
- Ausência de indicadores e diagnóstico estruturado.

### Estratégia de solução

Desenvolver uma plataforma web gratuita e acessível que permita a pequenos negócios responderem um questionário de diagnóstico, receberem uma classificação de maturidade digital e visualizarem recomendações práticas de melhoria.

---

## 22. README sugerido

### Título

Plataforma Web de Diagnóstico de Maturidade Digital para Pequenas Empresas

### Descrição

Aplicação web desenvolvida como projeto de extensão em Ciência da Computação. A ferramenta permite que pequenos negócios avaliem seu nível de maturidade digital por meio de um questionário interativo e recebam recomendações práticas para melhoria.

### Funcionalidades

- Diagnóstico interativo.
- Pontuação por categoria.
- Classificação de maturidade digital.
- Recomendações automáticas.
- Resultado compartilhável.
- Interface responsiva.

### Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS ou CSS Modules
- Vercel

### Objetivo social

Apoiar pequenos negócios na identificação de fragilidades tecnológicas e na adoção de práticas digitais mais organizadas, seguras e eficientes.

---

## 23. Definição de pronto

O projeto pode ser considerado pronto quando:

- Todas as perguntas estiverem cadastradas.
- O questionário puder ser respondido do início ao fim.
- A pontuação final estiver funcionando.
- As recomendações forem exibidas corretamente.
- A aplicação estiver responsiva.
- O deploy estiver publicado.
- O README estiver completo.
- Os prints estiverem separados.
- O relatório final tiver a descrição do problema, análise e solução proposta.
- O Termo de Autorização estiver assinado.

---

## 24. Versão mínima aceitável

Se o prazo estiver curto, entregar apenas:

1. Página inicial.
2. Questionário com 20 a 30 perguntas.
3. Cálculo de pontuação.
4. Resultado final.
5. Recomendações gerais.
6. Deploy público.
7. README.
8. Prints para relatório.

Isso já é suficiente para caracterizar uma solução tecnológica aplicada ao problema identificado.

---

## 25. Melhor narrativa para defender o projeto

Este projeto foi desenvolvido a partir da identificação de uma necessidade recorrente observada no contexto de consultoria tecnológica: pequenos negócios muitas vezes não possuem clareza sobre seu nível de maturidade digital e, por isso, têm dificuldade em priorizar melhorias em presença online, atendimento, processos internos, segurança e organização de dados.

A plataforma proposta atua como uma ferramenta educativa e diagnóstica, permitindo que pequenos empreendedores avaliem sua situação atual e recebam recomendações iniciais de forma simples, acessível e gratuita. Dessa forma, o projeto conecta conhecimentos de Ciência da Computação a uma necessidade prática da comunidade empresarial local.
