# Backlog de Tarefas — Plataforma de Diagnóstico de Maturidade Digital

Backlog priorizado com base no arquivo `plano_implementacao_pex_maturidade_digital.md`.

---

## P0 — Fundação do projeto

1. **Criar projeto React + TypeScript + Vite**
   - Inicializar app.
   - Ativar TypeScript strict.
   - Configurar scripts de dev/build/preview.

2. **Configurar qualidade**
   - ESLint.
   - Prettier.
   - Organização básica de imports.
   - Build sem erros.

3. **Definir estrutura de pastas**

```txt
src/
  app/
  components/
  data/
  features/diagnostic/
  pages/
  styles/
```

4. **Configurar rotas principais**
   - `/` Página inicial.
   - `/diagnostico` Questionário.
   - `/resultado` Resultado.
   - `/sobre` Sobre o projeto.

5. **Criar layout base**
   - Header.
   - Container.
   - Navegação simples.
   - Layout responsivo.

---

## P1 — Dados do diagnóstico

6. **Criar tipos TypeScript**
   - `DiagnosticCategory`.
   - `DiagnosticQuestion`.
   - `DiagnosticOption`.
   - `DiagnosticAnswer`.
   - `DiagnosticResult`.
   - `CategoryScore`.

7. **Cadastrar categorias**
   - Presença digital.
   - Atendimento.
   - Processos internos.
   - Segurança digital.
   - Dados e backup.
   - Automação.
   - Experiência do cliente.

8. **Cadastrar as 30 perguntas**
   - Arquivo sugerido: `src/data/questions.ts`.
   - Cada pergunta deve ter 4 opções de 0 a 3 pontos.

9. **Cadastrar recomendações**
   - Arquivo sugerido: `src/data/recommendations.ts`.
   - Recomendações por categoria.
   - Descrições dos níveis de maturidade.

---

## P1 — Motor de pontuação

10. **Implementar cálculo total**
    - Somar todas as respostas.
    - Calcular percentual geral.
    - Retornar pontuação máxima de 90.

11. **Implementar classificação final**
    - 0–29: maturidade inicial.
    - 30–54: maturidade básica.
    - 55–74: maturidade intermediária.
    - 75–90: maturidade avançada.

12. **Implementar cálculo por categoria**
    - Somar pontos por categoria.
    - Calcular percentual por categoria.
    - Identificar categorias fortes e fracas.

13. **Implementar prioridades de melhoria**
    - Ordenar categorias pelo menor percentual.
    - Destacar as 3 categorias com menor pontuação.

14. **Criar testes do cálculo**
    - Testar pontuação mínima.
    - Testar pontuação máxima.
    - Testar cada faixa de maturidade.
    - Testar cálculo por categoria.

---

## P1 — Questionário

15. **Criar página de diagnóstico**
    - Exibir uma pergunta por vez ou por categoria.
    - Mostrar título da categoria.
    - Mostrar opções de resposta.

16. **Controlar respostas**
    - Guardar respostas no estado da aplicação.
    - Permitir alterar respostas anteriores.
    - Validar pergunta obrigatória antes de avançar.

17. **Criar navegação**
    - Botão “Voltar”.
    - Botão “Avançar”.
    - Botão “Finalizar diagnóstico”.

18. **Criar barra de progresso**
    - Exibir progresso por número de perguntas respondidas.
    - Exemplo: `12 de 30 perguntas`.

19. **Persistir respostas temporariamente**
    - Usar `sessionStorage`, se necessário.
    - Guardar apenas dados mínimos.
    - Não coletar dados pessoais.

---

## P1 — Resultado

20. **Criar página de resultado**
    - Pontuação total.
    - Percentual geral.
    - Nível de maturidade.
    - Descrição do nível.

21. **Exibir resultado por categoria**
    - Nome da categoria.
    - Pontuação.
    - Percentual.
    - Barra visual simples.

22. **Exibir recomendações**
    - Recomendações gerais.
    - Recomendações das categorias mais fracas.
    - Linguagem simples e prática.

23. **Adicionar copiar resultado**
    - Gerar texto resumido.
    - Copiar para área de transferência.

24. **Adicionar impressão**
    - Usar `window.print()`.
    - Ajustar CSS para impressão.

---

## P2 — Páginas institucionais

25. **Criar página inicial**
    - Explicar o objetivo da plataforma.
    - Explicar benefícios.
    - Botão “Iniciar diagnóstico”.

26. **Criar seção sobre maturidade digital**
    - Explicar o conceito em linguagem simples.
    - Mostrar categorias avaliadas.

27. **Criar página Sobre o projeto**
    - Explicar vínculo com o PEX.
    - Objetivo acadêmico.
    - Público beneficiado.
    - Aviso de que o diagnóstico é educativo e inicial.

---

## P2 — UX, acessibilidade e responsividade

28. **Aplicar layout responsivo**
    - Desktop.
    - Tablet.
    - Celular.

29. **Melhorar acessibilidade**
    - Labels em inputs.
    - Contraste adequado.
    - Navegação por teclado.
    - Botões com texto claro.

30. **Revisar linguagem**
    - Evitar termos técnicos desnecessários.
    - Usar frases curtas.
    - Manter tom educativo.

---

## P3 — Finalização

31. **Atualizar README**
    - Descrição do projeto.
    - Funcionalidades.
    - Tecnologias.
    - Como rodar localmente.
    - Objetivo social/acadêmico.

32. **Testar fluxo completo**
    - Iniciar diagnóstico.
    - Responder perguntas.
    - Gerar resultado.
    - Copiar resultado.
    - Imprimir resultado.

33. **Testar build**
    - Rodar `npm run build`.
    - Corrigir erros TypeScript ou lint.

34. **Preparar deploy**
    - Publicar na Vercel.
    - Conferir link público.
    - Testar versão publicada.

35. **Separar evidências para o PEX**
    - Print da home.
    - Print do questionário.
    - Print do resultado.
    - Print mobile.
    - Link do GitHub.
    - Link do deploy.

---

## Ordem recomendada de execução

1. Projeto base.
2. Tipos e dados.
3. Pontuação.
4. Questionário.
5. Resultado.
6. Páginas institucionais.
7. Responsividade.
8. README.
9. Deploy.
10. Evidências do PEX.
