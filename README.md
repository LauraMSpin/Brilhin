# Brilhin — Limpeza Residencial e Pós-Obra

Site institucional com formulário de orçamento que envia o cliente ao WhatsApp com a mensagem pronta.
100% frontend (React + Vite + TypeScript + Tailwind CSS), publicado no GitHub Pages.

Endereço: **https://lauramspin.github.io/Brilhin/**

## Rodar localmente

```bash
npm install
npm run dev       # desenvolvimento: http://localhost:5173/Brilhin/
npm run build     # gera a pasta dist
npm run preview   # testa o build: http://localhost:4173/Brilhin/
```

## O que editar (sem mexer no layout)

| Arquivo | O que controla |
|---|---|
| `src/config/contact.ts` | Número do WhatsApp, Instagram (vazio = oculto), região atendida |
| `src/config/services.ts` | Nomes, descrições, imagens e **preços "a partir de"** (`priceFrom: null` = oculto) |
| `src/config/availability.ts` | Dias da semana atendidos, datas bloqueadas, antecedência mínima, limite futuro |
| `public/assets/` | Imagens. Para trocar por versões melhores, mantenha os mesmos nomes de arquivo |

Exemplo de preço: `priceFrom: 150` exibe "A partir de R$ 150" no card e no resumo, sempre com o aviso de que o
valor final é combinado pelo WhatsApp.

## Publicação no GitHub Pages

1. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** (só uma vez).
2. Faça push na branch `main`. O workflow `.github/workflows/deploy.yml` gera o build e publica.
3. Acompanhe em **Actions**.

### Observações importantes

- O caminho base é `/Brilhin/` (com **B maiúsculo**, igual ao nome do repositório). Se renomear o repositório,
  atualize `vite.config.ts` e as URLs `og:` em `index.html`.
- Para usar domínio próprio no futuro: crie `public/CNAME` com o domínio, troque o base para `/`
  (ou faça o build com `BASE_PATH=/`) e atualize as URLs `og:` do `index.html`.
- Os nomes de arquivos e pastas diferenciam maiúsculas de minúsculas no GitHub Pages: use sempre `public/assets/`.
- Os arquivos JS/CSS gerados vão para `dist/static/`, separados das imagens em `dist/assets/`.
