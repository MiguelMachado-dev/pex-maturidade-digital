import type {
  DiagnosticOption,
  DiagnosticQuestion,
} from '../features/diagnostic/types';

const optionScores = [0, 1, 2, 3] as const;

function createOptions(
  descriptions: readonly [string, string, string, string],
): DiagnosticOption[] {
  return optionScores.map((score) => ({
    id: String(score),
    label: `${score} ponto${score === 1 ? '' : 's'}`,
    description: descriptions[score],
    score,
  }));
}

export const questions: DiagnosticQuestion[] = [
  {
    id: 'q01-site-institucional',
    categoryId: 'digital-presence',
    title: 'A empresa possui site ou página institucional própria?',
    options: createOptions([
      'Não possui.',
      'Possui apenas rede social.',
      'Possui uma página simples, mas incompleta ou desatualizada.',
      'Possui site ou página bem organizada, atualizada e com informações essenciais.',
    ]),
  },
  {
    id: 'q02-google-business-profile',
    categoryId: 'digital-presence',
    title:
      'A empresa possui perfil atualizado no Google, como Google Business Profile?',
    options: createOptions([
      'Não possui.',
      'Possui, mas está incompleto ou desatualizado.',
      'Possui informações básicas preenchidas.',
      'Possui perfil completo, atualizado, com fotos, horário e formas de contato.',
    ]),
  },
  {
    id: 'q03-redes-sociais',
    categoryId: 'digital-presence',
    title: 'A empresa utiliza redes sociais de forma estratégica?',
    options: createOptions([
      'Não utiliza.',
      'Utiliza sem frequência ou sem planejamento.',
      'Publica com alguma regularidade, mas sem estratégia clara.',
      'Possui frequência, identidade visual e conteúdo alinhado ao negócio.',
    ]),
  },
  {
    id: 'q04-dominio-email-profissional',
    categoryId: 'digital-presence',
    title: 'A empresa possui domínio próprio ou e-mail profissional?',
    options: createOptions([
      'Não possui.',
      'Usa apenas e-mail pessoal ou gratuito.',
      'Possui domínio ou e-mail profissional, mas usa pouco.',
      'Possui domínio e e-mail profissional em uso ativo.',
    ]),
  },
  {
    id: 'q05-informacoes-online',
    categoryId: 'digital-presence',
    title:
      'As informações principais da empresa estão fáceis de encontrar online?',
    options: createOptions([
      'Não estão disponíveis.',
      'Estão espalhadas e difíceis de encontrar.',
      'Estão disponíveis, mas poderiam estar mais organizadas.',
      'Estão claras, completas e fáceis de acessar.',
    ]),
  },
  {
    id: 'q06-whatsapp-business',
    categoryId: 'customer-service',
    title: 'A empresa utiliza WhatsApp Business ou ferramenta equivalente?',
    options: createOptions([
      'Não utiliza WhatsApp para atendimento.',
      'Usa WhatsApp comum de forma informal.',
      'Usa WhatsApp Business com recursos básicos.',
      'Usa WhatsApp Business com catálogo, mensagens automáticas e organização de contatos.',
    ]),
  },
  {
    id: 'q07-processo-atendimento',
    categoryId: 'customer-service',
    title: 'A empresa possui processo definido para responder clientes?',
    options: createOptions([
      'Não possui processo.',
      'Responde conforme consegue, sem padrão.',
      'Possui alguma organização, mas ainda depende muito de improviso.',
      'Possui fluxo claro para atendimento, acompanhamento e retorno.',
    ]),
  },
  {
    id: 'q08-historico-clientes',
    categoryId: 'customer-service',
    title: 'A empresa registra histórico de clientes ou atendimentos?',
    options: createOptions([
      'Não registra.',
      'Registra manualmente de forma desorganizada.',
      'Registra em planilha ou ferramenta simples.',
      'Registra em sistema, CRM ou processo bem estruturado.',
    ]),
  },
  {
    id: 'q09-formulario-digital',
    categoryId: 'customer-service',
    title:
      'A empresa possui formulário digital para contato, orçamento ou solicitação?',
    options: createOptions([
      'Não possui.',
      'Recebe tudo por mensagem livre.',
      'Usa formulário simples em alguns casos.',
      'Usa formulário bem definido e integrado ao processo de atendimento.',
    ]),
  },
  {
    id: 'q10-feedbacks-clientes',
    categoryId: 'customer-service',
    title:
      'A empresa acompanha reclamações, dúvidas ou feedbacks dos clientes?',
    options: createOptions([
      'Não acompanha.',
      'Acompanha informalmente.',
      'Registra alguns feedbacks.',
      'Possui processo para registrar, analisar e agir sobre feedbacks.',
    ]),
  },
  {
    id: 'q11-controle-vendas-pedidos',
    categoryId: 'internal-processes',
    title: 'A empresa possui controle digital de vendas, pedidos ou serviços?',
    options: createOptions([
      'Não possui controle digital.',
      'Usa anotações manuais ou mensagens soltas.',
      'Usa planilhas ou ferramentas simples.',
      'Usa sistema ou processo digital organizado.',
    ]),
  },
  {
    id: 'q12-controle-estoque-agenda',
    categoryId: 'internal-processes',
    title:
      'A empresa possui controle de estoque, agenda ou tarefas quando aplicável?',
    options: createOptions([
      'Não possui controle.',
      'Controla manualmente.',
      'Controla em planilha ou aplicativo simples.',
      'Controla com ferramenta adequada e rotina de atualização.',
    ]),
  },
  {
    id: 'q13-documenta-processos',
    categoryId: 'internal-processes',
    title: 'A empresa documenta processos importantes?',
    options: createOptions([
      'Não documenta.',
      'Depende do conhecimento de uma pessoa.',
      'Possui algumas instruções ou documentos soltos.',
      'Possui processos documentados e acessíveis.',
    ]),
  },
  {
    id: 'q14-ferramentas-organizacao',
    categoryId: 'internal-processes',
    title:
      'A empresa usa ferramentas digitais para organização da equipe ou rotina?',
    options: createOptions([
      'Não usa.',
      'Usa apenas mensagens informais.',
      'Usa agenda, planilha ou aplicativo simples.',
      'Usa ferramentas de gestão de tarefas, agenda ou colaboração de forma consistente.',
    ]),
  },
  {
    id: 'q15-indicadores-negocio',
    categoryId: 'internal-processes',
    title: 'A empresa acompanha indicadores básicos do negócio?',
    options: createOptions([
      'Não acompanha.',
      'Acompanha de memória ou informalmente.',
      'Acompanha alguns dados em planilhas.',
      'Acompanha indicadores de forma recorrente e organizada.',
    ]),
  },
  {
    id: 'q16-senhas-fortes',
    categoryId: 'digital-security',
    title: 'A empresa utiliza senhas fortes e diferentes para cada serviço?',
    options: createOptions([
      'Não utiliza.',
      'Usa senhas fracas ou repetidas.',
      'Usa algumas senhas fortes, mas sem padrão claro.',
      'Usa senhas fortes, diferentes e bem gerenciadas.',
    ]),
  },
  {
    id: 'q17-dois-fatores',
    categoryId: 'digital-security',
    title:
      'A empresa utiliza autenticação em dois fatores nos principais serviços?',
    options: createOptions([
      'Não utiliza.',
      'Utiliza apenas em um serviço.',
      'Utiliza em alguns serviços importantes.',
      'Utiliza nos principais serviços, como e-mail, banco, redes sociais e sistemas.',
    ]),
  },
  {
    id: 'q18-controle-acessos',
    categoryId: 'digital-security',
    title: 'A empresa controla quem tem acesso às contas e sistemas?',
    options: createOptions([
      'Não controla.',
      'Compartilha acessos de forma informal.',
      'Possui algum controle, mas ainda compartilha senhas em alguns casos.',
      'Possui controle claro de acessos e permissões.',
    ]),
  },
  {
    id: 'q19-orientacao-golpes',
    categoryId: 'digital-security',
    title: 'A empresa orienta colaboradores sobre golpes digitais?',
    options: createOptions([
      'Não orienta.',
      'Orienta apenas quando ocorre algum problema.',
      'Faz orientações informais de tempos em tempos.',
      'Possui orientações claras sobre golpes, links suspeitos, Pix e e-mails falsos.',
    ]),
  },
  {
    id: 'q20-dispositivos-atualizados',
    categoryId: 'digital-security',
    title: 'Os dispositivos utilizados pela empresa são mantidos atualizados?',
    options: createOptions([
      'Não há cuidado com atualizações.',
      'Atualiza apenas quando o dispositivo exige.',
      'Atualiza com alguma frequência.',
      'Mantém sistemas, aplicativos e dispositivos atualizados regularmente.',
    ]),
  },
  {
    id: 'q21-backup-informacoes',
    categoryId: 'data-backup',
    title: 'A empresa realiza backup de informações importantes?',
    options: createOptions([
      'Não realiza.',
      'Faz cópias ocasionais e manuais.',
      'Possui backup parcial em nuvem ou dispositivo externo.',
      'Possui rotina de backup organizada e testada.',
    ]),
  },
  {
    id: 'q22-localizacao-dados',
    categoryId: 'data-backup',
    title: 'A empresa sabe onde estão armazenados seus dados importantes?',
    options: createOptions([
      'Não sabe claramente.',
      'Os dados ficam espalhados em celulares, mensagens e computadores.',
      'Os dados estão parcialmente organizados.',
      'Os dados estão centralizados e organizados.',
    ]),
  },
  {
    id: 'q23-dados-clientes',
    categoryId: 'data-backup',
    title: 'A empresa tem cuidado com dados de clientes?',
    options: createOptions([
      'Não possui cuidado específico.',
      'Guarda dados sem padrão claro.',
      'Possui alguma preocupação com privacidade.',
      'Coleta apenas o necessário e mantém os dados com cuidado e organização.',
    ]),
  },
  {
    id: 'q24-recuperacao-informacoes',
    categoryId: 'data-backup',
    title:
      'A empresa consegue recuperar informações importantes em caso de perda de aparelho ou conta?',
    options: createOptions([
      'Não conseguiria.',
      'Teria muita dificuldade.',
      'Conseguiria recuperar parte das informações.',
      'Conseguiria recuperar as principais informações por meio de backups e acessos seguros.',
    ]),
  },
  {
    id: 'q25-automatiza-tarefas',
    categoryId: 'automation-productivity',
    title: 'A empresa automatiza tarefas repetitivas?',
    options: createOptions([
      'Não automatiza.',
      'Automatiza muito pouco.',
      'Automatiza algumas tarefas simples.',
      'Usa automações para reduzir trabalho manual recorrente.',
    ]),
  },
  {
    id: 'q26-modelos-prontos',
    categoryId: 'automation-productivity',
    title:
      'A empresa usa modelos prontos para mensagens, propostas ou documentos?',
    options: createOptions([
      'Não usa.',
      'Copia mensagens antigas manualmente.',
      'Usa alguns modelos simples.',
      'Possui modelos organizados e reutilizáveis.',
    ]),
  },
  {
    id: 'q27-integra-ferramentas',
    categoryId: 'automation-productivity',
    title: 'A empresa integra ferramentas digitais entre si?',
    options: createOptions([
      'Não integra.',
      'Usa ferramentas separadas sem conexão.',
      'Possui algumas integrações simples.',
      'Possui integrações úteis entre atendimento, formulários, planilhas, agenda ou sistemas.',
    ]),
  },
  {
    id: 'q28-tecnologia-economiza-tempo',
    categoryId: 'automation-productivity',
    title: 'A empresa usa tecnologia para economizar tempo operacional?',
    options: createOptions([
      'Não usa.',
      'Usa pouco, sem planejamento.',
      'Usa algumas ferramentas que ajudam na rotina.',
      'Usa tecnologia de forma clara para reduzir retrabalho e melhorar produtividade.',
    ]),
  },
  {
    id: 'q29-experiencia-cliente',
    categoryId: 'customer-experience',
    title: 'A experiência digital do cliente é simples e clara?',
    options: createOptions([
      'O cliente precisa perguntar quase tudo.',
      'Algumas informações existem, mas são confusas.',
      'A experiência é razoável, mas pode melhorar.',
      'O cliente encontra informações, contato e próximos passos com facilidade.',
    ]),
  },
  {
    id: 'q30-canais-mobile',
    categoryId: 'customer-experience',
    title: 'Os canais digitais da empresa funcionam bem no celular?',
    options: createOptions([
      'Não funcionam bem ou não existem.',
      'Funcionam com dificuldade.',
      'Funcionam de forma aceitável.',
      'Funcionam bem, com navegação simples e informações claras.',
    ]),
  },
];
