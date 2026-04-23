# Ervário

Blog e plataforma educacional sobre cannabis — plantio, cultivo, consumo
consciente e um catálogo biológico de strains (AK-47, Purple Haze, Blue Dream,
OG Kush, Northern Lights e mais).

## Stack

- [Astro 5](https://astro.build) — SSG + ilhas
- [Tailwind CSS 4](https://tailwindcss.com)
- [MDX](https://mdxjs.com) para posts do blog e fichas de strains
- Content Collections tipadas com `zod`

## Como rodar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # serve dist/
```

## Estrutura

```
src/
├── components/      # Header, Footer, cards, age gate
├── content/
│   ├── blog/        # posts em .mdx
│   └── strains/     # fichas biológicas em .mdx
├── layouts/         # BaseLayout.astro
├── pages/
│   ├── index.astro        # home
│   ├── blog/              # listagem + [slug]
│   ├── strains/           # catálogo + [slug]
│   ├── sobre.astro
│   └── aviso-legal.astro
├── styles/globals.css     # Tailwind + tema
└── content.config.ts      # schema das collections
```

## Adicionando conteúdo

### Novo post
Crie um arquivo em `src/content/blog/meu-post.mdx` com o front-matter:

```yaml
---
title: "Título"
description: "Resumo"
pubDate: 2026-05-01
category: cultivo   # plantio | cultivo | consumo | cultura | ciencia
tags: [tag1, tag2]
author: "Equipe Ervário"
readingTime: 5
---
```

### Nova strain
Crie um arquivo em `src/content/strains/minha-strain.mdx` seguindo o schema
em `src/content.config.ts`.

### Adicionar foto real a uma strain

Cada strain exibe por padrão uma **ilustração gerada em SVG** (gradiente +
inicial + folha) baseada no tipo e na cor. Para substituir por uma foto
real:

1. Coloque a foto em `public/strains/` (ex.: `public/strains/ak-47.jpg`).
   Recomendado: proporção 20:11, pelo menos 800px de largura, JPEG/WebP.
2. No front-matter da strain, adicione:

   ```yaml
   image: "/strains/ak-47.jpg"
   ```

3. Salve e recarregue — a foto substitui o placeholder automaticamente.

## Aviso

Projeto educacional, destinado a maiores de 18 anos. Leia o `aviso-legal` no
site. No Brasil, cultivo recreativo é ilegal; uso medicinal requer
autorização da Anvisa ou judicial.
