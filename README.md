# Henrry Cell — protótipo de site institucional

**[Ver funcionando](https://henrycelldemo.netlify.app)**

Demo de vendas para a Henrry Cell (assistência técnica iPhone/Xiaomi, Piedade
e Cajueiro Seco). Conteúdo baseado no perfil [@henrry.cell](https://instagram.com/henrry.cell)
no Instagram — não é o site oficial da marca.

## Stack

React + TypeScript + Vite + Tailwind CSS + shadcn/ui (Button, Badge, Card),
`class-variance-authority` para variantes, `clsx`/`tailwind-merge` no `cn`,
`lucide-react` para ícones, `next-themes` para claro/escuro.

## Rodar local

```bash
npm install
npm run dev
```

## Build e deploy (Netlify)

```bash
npm run build
```

Publica a pasta `dist/`. O `netlify.toml` já está configurado (build command,
publish dir e redirect de SPA).

## Estrutura

- `src/data/content.ts` — todo o conteúdo real (serviços, lojas, stats). Editar
  aqui antes de trocar por dados do site oficial (WhatsApp real, etc.).
- `src/components/` — uma seção por arquivo (`Hero`, `Services`, `Stores`...).
- `src/components/ui/` — primitives de shadcn/ui.
