<!-- MEGABRAIN:INICIO -->

## Contexto pessoal (memória persistente)

Fatos duráveis sobre o usuário, acumulados em conversas anteriores e
gerados por `memoria init`. Use-os quando forem pertinentes, sem recitá-los
de volta. Se algo aqui for contradito durante a conversa, o que o usuário
disser agora vale mais — e não invente fatos que não estejam nesta lista.

### Projeto — trabalhos e projetos em andamento
- Portfolio pessoal (repo meuportifolio) e React com TypeScript, Vite, Tailwind, shadcn/ui e animacoes GSAP ScrollTrigger
- Publica no Netlify: portfoliodevaqn.netlify.app (portfolio), devaqncurriculo.netlify.app (curriculo) e centraldecontatodevaqn.netlify.app
- Publica utilitarios open-source em TypeScript no GitHub, focados no mercado brasileiro (CPF, CNPJ, Pix, EAN-13)
- Desenvolve e expande o ecossistema Severus Barber, incluindo o app mobile Flutter, o site cliente em Next.js e o painel web staff em Flutter Web.
- Desenvolve um e-commerce de tabacaria utilizando Next.js, Supabase, Tailwind e Mercado Pago (Checkout Pro).

### Preferencia — gostos, estilo de resposta, ferramentas preferidas
- Monta a camada de UI sempre com o mesmo conjunto: shadcn/ui sobre Radix, lucide-react para icones, clsx com tailwind-merge no utilitario cn, class-variance-authority para variantes, sonner para toasts e next-themes para tema escuro
- Prefere realizar deploy e hospedagem de aplicações web em plataformas como Netlify e Vercel, utilizando Git, GitHub, GitHub Actions, Nginx, Postman, Docker e Terraform em DevOps.
- Usa TypeScript com configuração estrita obrigatoriamente para o desenvolvimento de back-ends, APIs, automações, bots, painéis internos e projetos modernos.
- Se posiciona profissionalmente como Back-End Developer - APIs, Automação e IA, preferindo estruturar APIs em Node.js utilizando Express ou Fastify para microsserviços e aplicações web.
- Usa pnpm e monorepos com Turborepo para gerenciar múltiplos pacotes e aplicações.
- Adota testes automatizados nativos do Node (node:test) ou Vitest dependendo do projeto, utilizando preferencialmente Vitest como ferramenta padrão para escrita e execução de testes.
- Gosta de estruturar projetos de forma modular, separando responsabilidades em diretórios como src/modules, integrations, services e repositories.
- Em aplicações web complementares a bots, frequentemente prefere HTML e JavaScript puro (Vanilla JS) para painéis leves ou interfaces simples sem frameworks pesados.
- Prefere testes rigorosos, lint, typecheck e build verdes em todos os projetos antes de considerá-los finalizados.
- Prefere abordagens baseadas em ELT com transformações em SQL puro gerenciadas diretamente no banco de dados em vez de processamento pesado em memória.
- Identidade visual propria usada em GitHub, portfolio e curriculo: gradiente escuro #0f0c29 a #302b63 com acento violeta #a78bfa, fontes Space Grotesk e JetBrains Mono
- Prefere um design premium, elegante e contido para interfaces, evitando estilo 'HUD de videogame' em favor de uma estética quase-preta neutra com acentos violeta discretos.
- Gera interfaces e textos de aplicativos voltados para o público brasileiro, aplicando formatação de moeda (R$) e máscaras de dados locais.

### Pessoal — contexto pessoal duradouro (onde mora, formação, família)
- Organiza os repositorios em Desktop/todos projetos git, agrupados por dominio: produtos-whatsapp, saas-gestao, agendamento-servicos, food-delivery, sites-clientes, portfolios-pessoais, ferramentas-dev, estudos-senai, experimentos
- Formacao: Tecnico em Analise e Desenvolvimento de Sistemas pelo SENAI-PE (jun/2024 a dez/2025) e Bacharelado em ADS na UNIFBV, em andamento
- Nome completo Pedro Miguel Aquino Costa Gomes, de Recife-PE. Contato: pedromiguelaqn@gmail.com, WhatsApp (81) 99819-1625, github.com/devaqn, linkedin.com/in/pedro-miguel
- Atende pequenos negocios locais brasileiros: barbearia, restaurante, tabacaria, consultorio, academia

### Decisao — decisões já tomadas e suas razões
- Decidiu manter privados os repositorios dos SaaS maiores (AI Sales OS, AI Customer Support OS, painel DevOps); nos cards de portfolio eles aparecem como case study, sem link para o codigo

### Contexto tecnico — stack, ambiente, versões, convenções de código
- Distribuicao real do codigo em 117 repositorios: TypeScript domina (1496 .tsx + 1045 .ts), seguido de JavaScript (570), Dart (343 - Flutter e volume relevante), Python (136), C# (32) e Java (4)
- Usa react-router-dom em SPAs com Vite (16 repositorios), reservando o Next.js App Router para projetos full-stack
- Usa date-fns para manipulacao de datas em vez de bibliotecas mais pesadas (19 repositorios)
- Usa Zod para validacao de schema em praticamente todo projeto Node/TypeScript: aparece em 30 dos 117 repositorios, e o mais recorrente depois do proprio TypeScript
- Usa pino para logging estruturado em back-ends Node (18 repositorios)
- Tem base em C#/.NET e Java pelos estudos no SENAI: 6 repositorios .NET com solucao e projeto (SENAI011, SENAI-UC11, Senaicruduser, login-e-cors, Atividade_Senai_Portifolio) e um e-commerce em Java
- Em projetos frontend web, utiliza React com Vite e TypeScript, Next.js (App Router) como framework full-stack de escolha, Tailwind, HTML e CSS, com componentes baseados em Radix UI (shadcn/ui).
- Faz integrações recorrentes com a API do Mercado Pago e Stripe para processamento de pagamentos, Pix e e-commerce.
- Utiliza Python 3.10+ com ferramentas de IA e LLMs (como Claude, GPT-4o e SDK oficial google-genai para Gemini), além de abordagens de RAG em seus projetos.
- Desenvolve scripts de automação, ferramentas utilitárias e bots utilizando Python (incluindo Selenium) e ecossistemas Node.js.
- Utiliza o ecossistema Fastify, Prisma associado a PostgreSQL ou SQLite, Zod e Tailwind CSS em aplicações full-stack e monorepos, além de Next.js.
- Usa Zustand para gerenciamento de estado global e persistência em aplicações frontend.
- Usa GitHub Actions para configurar pipelines de CI/CD, automações e validações de lint, typecheck, testes e build automático em repositórios.
- Usa Baileys (@whiskeysockets/baileys ou baileys) como biblioteca padrão para automação e integração com o WhatsApp, com deploy em VPS via PM2 e Nginx.
- Usa node:sqlite no lugar de better-sqlite3 quando o ambiente não possui a toolchain C++ nativa.
- Adota variáveis de ambiente padronizadas como APP_BASE_URL (evitando BASE_URL reservada pelo Vite) e tratamento estrito para booleanos em variáveis de ambiente.
- Utiliza o Firebase (Auth, Firestore, Storage, Cloud Functions) como backend principal e banco de dados em múltiplos projetos de aplicativos.
- Trabalha com arquitetura de monorepo contendo pacotes compartilhados, Cloud Functions, aplicação web (React) e aplicação mobile (Expo/React Native).
- Integra processamento de pagamentos com Stripe utilizando PaymentIntent e PaymentElement/PaymentSheet.
- Usa Flutter com Dart e Firebase para o desenvolvimento de aplicativos móveis multiplataforma, combinando com SQLite local.
- Usa Windows, VS Code, Linux, Ubuntu, Bash, PowerShell, Docker, Android Studio, Kali Linux e Eclipse como sistemas e ambientes de desenvolvimento.
- Integra Pix por multiplos provedores: Mercado Pago, Asaas e Pluggy (Open Finance)
- Em projetos web recentes usa Next.js com Supabase (Postgres com RLS) no lugar do Firebase
- Adota ESLint para linting de código JavaScript e TypeScript.
- Emprega SQLite com suporte a FTS5 para armazenamento local estruturado e busca otimizada de fatos.

<!-- MEGABRAIN:FIM -->
