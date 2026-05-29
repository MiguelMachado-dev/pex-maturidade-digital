import type {
  CategoryRecommendation,
  MaturityLevel,
} from '../features/diagnostic/types';

export const maturityLevels: MaturityLevel[] = [
  {
    id: 'initial',
    name: 'Maturidade inicial',
    minScore: 0,
    maxScore: 29,
    description:
      'A empresa possui baixa estrutura digital e depende principalmente de processos manuais ou informais. A prioridade deve ser organizar presença digital básica, canais de atendimento, senhas, backup e controle mínimo de informações.',
  },
  {
    id: 'basic',
    name: 'Maturidade básica',
    minScore: 30,
    maxScore: 54,
    description:
      'A empresa já utiliza algumas ferramentas digitais, mas ainda de forma parcial ou pouco integrada. A prioridade deve ser padronizar processos, melhorar atendimento, fortalecer segurança e organizar dados.',
  },
  {
    id: 'intermediate',
    name: 'Maturidade intermediária',
    minScore: 55,
    maxScore: 74,
    description:
      'A empresa possui boa base digital, mas ainda pode evoluir em automação, análise de indicadores, integração de ferramentas e experiência do cliente.',
  },
  {
    id: 'advanced',
    name: 'Maturidade avançada',
    minScore: 75,
    maxScore: 90,
    description:
      'A empresa utiliza tecnologia de forma consistente e estratégica. A prioridade passa a ser otimização, automação avançada, análise de dados, segurança contínua e melhoria da experiência digital.',
  },
];

export const categoryRecommendations: CategoryRecommendation[] = [
  {
    categoryId: 'digital-presence',
    title: 'Fortalecer presença digital',
    recommendations: [
      'Criar ou atualizar uma página institucional.',
      'Manter endereço, telefone, horário e serviços sempre visíveis.',
      'Atualizar o Google Business Profile.',
      'Organizar redes sociais com informações claras.',
      'Usar domínio e e-mail profissional quando possível.',
    ],
  },
  {
    categoryId: 'customer-service',
    title: 'Organizar atendimento e relacionamento',
    recommendations: [
      'Utilizar WhatsApp Business.',
      'Criar mensagens automáticas para dúvidas frequentes.',
      'Usar etiquetas ou categorias para organizar contatos.',
      'Criar formulário de orçamento ou contato.',
      'Registrar feedbacks e reclamações.',
    ],
  },
  {
    categoryId: 'internal-processes',
    title: 'Digitalizar processos internos',
    recommendations: [
      'Digitalizar controles de pedidos, vendas, agenda ou estoque.',
      'Criar planilhas padronizadas quando ainda não houver sistema.',
      'Documentar processos importantes.',
      'Definir responsáveis por cada rotina.',
      'Acompanhar indicadores simples mensalmente.',
    ],
  },
  {
    categoryId: 'digital-security',
    title: 'Melhorar segurança digital',
    recommendations: [
      'Usar senhas fortes e diferentes.',
      'Ativar autenticação em dois fatores.',
      'Evitar compartilhar senhas por mensagens.',
      'Revisar acessos de ex-funcionários ou terceiros.',
      'Orientar pessoas da empresa sobre golpes digitais.',
    ],
  },
  {
    categoryId: 'data-backup',
    title: 'Proteger dados e backups',
    recommendations: [
      'Centralizar arquivos importantes.',
      'Fazer backup em nuvem ou dispositivo externo.',
      'Testar recuperação de dados periodicamente.',
      'Evitar deixar informações importantes apenas em celulares.',
      'Coletar apenas dados necessários dos clientes.',
    ],
  },
  {
    categoryId: 'automation-productivity',
    title: 'Ganhar produtividade com automação',
    recommendations: [
      'Criar modelos de mensagens e propostas.',
      'Automatizar respostas frequentes.',
      'Usar formulários para coletar informações repetitivas.',
      'Integrar ferramentas simples, como formulário e planilha.',
      'Reduzir tarefas manuais repetitivas.',
    ],
  },
  {
    categoryId: 'customer-experience',
    title: 'Simplificar a experiência do cliente',
    recommendations: [
      'Facilitar acesso a contato, serviços, localização e horários.',
      'Garantir boa navegação no celular.',
      'Usar linguagem simples.',
      'Evitar excesso de informações espalhadas.',
      'Tornar o caminho do cliente mais direto até o atendimento ou compra.',
    ],
  },
];
