import type { DiagnosticCategory } from '../features/diagnostic/types';

export const categories: DiagnosticCategory[] = [
  {
    id: 'digital-presence',
    name: 'Presença digital',
    shortName: 'Presença',
    description:
      'Avalia se a empresa é encontrada com facilidade na internet e mantém informações básicas atualizadas.',
  },
  {
    id: 'customer-service',
    name: 'Atendimento e relacionamento com clientes',
    shortName: 'Atendimento',
    description:
      'Analisa a organização dos canais de atendimento, registros de clientes e uso de feedbacks.',
  },
  {
    id: 'internal-processes',
    name: 'Processos internos',
    shortName: 'Processos',
    description:
      'Verifica como a empresa controla vendas, estoque, tarefas, documentos e indicadores básicos.',
  },
  {
    id: 'digital-security',
    name: 'Segurança digital',
    shortName: 'Segurança',
    description:
      'Observa cuidados com senhas, autenticação, acessos, golpes digitais e atualização de dispositivos.',
  },
  {
    id: 'data-backup',
    name: 'Dados e backup',
    shortName: 'Dados',
    description:
      'Avalia organização, proteção e recuperação de informações importantes do negócio.',
  },
  {
    id: 'automation-productivity',
    name: 'Automação e produtividade',
    shortName: 'Automação',
    description:
      'Mede o uso de tecnologia para reduzir tarefas repetitivas e economizar tempo operacional.',
  },
  {
    id: 'customer-experience',
    name: 'Experiência do cliente e acessibilidade',
    shortName: 'Experiência',
    description:
      'Analisa se os canais digitais são simples, claros e fáceis de usar, principalmente no celular.',
  },
];
