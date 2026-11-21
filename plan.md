# Plano de Desenvolvimento — Site Brilhin

## 1. Objetivo do projeto

Desenvolva um site institucional e comercial para a **Brilhin — Limpeza Residencial e Pós-Obra**, seguindo fielmente o mockup e a identidade visual fornecidos.

O site deverá apresentar os serviços da empresa e permitir que os clientes solicitem agendamentos selecionando o tipo de limpeza, o tamanho do imóvel e uma data desejada.

Após preencher o formulário, o cliente será direcionado ao WhatsApp corporativo com uma mensagem contendo as informações selecionadas.

### Requisitos obrigatórios

- Aplicação exclusivamente frontend.
- Hospedagem no **GitHub Pages**.
- Sem backend, banco de dados ou autenticação.
- Desenvolvida em React, Vite e TypeScript.
- Layout responsivo para desktop e dispositivos móveis.
- Utilização das imagens, logotipos e demais arquivos visuais existentes na pasta `assets` do projeto.
- Não utilizar imagens genéricas da internet para substituir os arquivos fornecidos.
- Integração direta com WhatsApp, sem APIs externas.
- Código organizado e preparado para publicação automática no GitHub Pages.

---

## 2. Tecnologias

Utilizar as seguintes tecnologias:

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React para ícones
- date-fns para manipulação de datas
- React Hooks para estado dos formulários
- GitHub Actions para publicação no GitHub Pages

Não implementar:

- Backend em Node.js, Express ou qualquer outra tecnologia.
- Firebase, Supabase ou bancos de dados.
- APIs de agendamento.
- Painel administrativo.
- Sistemas de login.

Node.js poderá ser utilizado exclusivamente para instalação de dependências, desenvolvimento local e geração do build.

---

## 3. Identidade visual e arquivos de imagem

O desenvolvimento deverá seguir rigorosamente o plano de marca e o mockup da Brilhin.

### Paleta de cores

| Cor | Código |
|---|---|
| Azul-marinho | #003A70 |
| Turquesa | #00B8BB |
| Cinza suave | #D9DEE3 |
| Branco | #FFFFFF |

Utilizar fontes em estilo Script nos elementos decorativos e Montserrat nos textos de interface.

### Utilização da pasta assets

**IMPORTANTE: Todas as imagens dos serviços, os logotipos e os demais arquivos gráficos já estarão disponíveis na pasta `assets` do projeto.**

Antes de desenvolver os componentes, examine o conteúdo da pasta `assets` e identifique os arquivos disponíveis.

Requisitos:

1. Utilizar as imagens reais fornecidas para os serviços de limpeza.
2. Utilizar o logotipo oficial da Brilhin, preservando suas características.
3. Utilizar os materiais disponíveis para compor o Hero, os cards e as demais seções.
4. Não substituir as fotografias fornecidas por imagens de bancos de imagens.
5. Não recriar ou alterar o logotipo.
6. Preservar as proporções originais das fotografias.
7. Utilizar `object-fit: cover` quando necessário, evitando distorções.
8. Caso uma imagem não seja encontrada, identificar a ausência e utilizar um placeholder temporário, sem inventar arquivos ou caminhos.

Priorizar a utilização direta dos arquivos existentes.

As imagens públicas poderão ser organizadas em `public/assets`, permitindo seu carregamento correto no GitHub Pages.

Não alterar os nomes dos arquivos existentes sem necessidade.

---

## 4. Estrutura da página

Criar uma aplicação de página única com navegação por âncoras.

### 4.1. Cabeçalho

Incluir:

- Logotipo oficial da Brilhin.
- Início.
- Serviços.
- Solicitar Orçamento.
- Sobre a Brilhin.
- Contato.
- Botão de destaque "Agendar pelo WhatsApp".

O botão deverá direcionar o usuário para o formulário de solicitação.

O cabeçalho deverá ser responsivo, com menu hambúrguer em dispositivos móveis.

### 4.2. Hero

Criar uma seção inicial com a identidade do mockup.

Título:

**Limpeza residencial e pós-obra com qualidade e confiança.**

Subtítulo:

"Deixe seu lar impecável ou seu imóvel pronto para uso com o cuidado e a praticidade que você merece."

Adicionar:

- Imagem principal disponível na pasta `assets`.
- Botão "Solicitar orçamento".
- Destaques de confiança, praticidade e qualidade.
- Elementos visuais em turquesa e azul-marinho.

O botão deverá rolar suavemente até o formulário.

### 4.3. Nossos Serviços

Criar quatro cards utilizando as respectivas imagens presentes na pasta `assets`.

**Limpeza Tradicional**

Limpeza de manutenção para deixar sua casa organizada, limpa e agradável no dia a dia.

**Limpeza Pesada**

Limpeza profunda para ambientes que precisam de atenção especial, com cuidado nos detalhes.

**Limpeza Pós-Obra**

Limpeza especializada para remover poeira e resíduos após construções e reformas.

**Limpeza Pós-Mudança**

Preparação do imóvel antes ou depois de uma mudança, com limpeza completa dos ambientes.

Cada card deverá conter:

- Imagem do serviço.
- Ícone representativo.
- Nome.
- Descrição curta.
- Botão "Solicitar serviço".

Ao clicar, o sistema deverá selecionar automaticamente o serviço correspondente no formulário e rolar até ele.

Os cards devem ter dimensões consistentes, sombras suaves e bordas arredondadas.

---

## 5. Formulário de solicitação

Criar um formulário interativo dividido em etapas.

Título: **Solicite seu orçamento online**

Subtítulo: "Escolha o serviço, informe o tamanho do imóvel e selecione a data desejada."

### Etapa 1 — Serviço

Permitir a seleção de um único serviço:

- Limpeza Tradicional
- Limpeza Pesada
- Limpeza Pós-Obra
- Limpeza Pós-Mudança

Destacar o serviço selecionado em turquesa.

### Etapa 2 — Metragem do imóvel

Disponibilizar as categorias:

- Até 50 m²
- 51 a 100 m²
- 101 a 150 m²
- 151 a 200 m²
- Acima de 200 m²

A seleção deverá ser única e obrigatória.

Não calcular preços automaticamente.

### Etapa 3 — Características

Solicitar:

**Tipo de imóvel:**
- Apartamento
- Casa
- Outro

**Quantidade de quartos:**
- 1
- 2
- 3
- 4 ou mais

**Quantidade de banheiros:**
- 1
- 2
- 3
- 4 ou mais

**Bairro ou região:**

Campo de texto para informar onde o serviço será realizado.

Não solicitar endereço completo.

### Etapa 4 — Data

Criar um calendário responsivo com as seguintes funcionalidades:

- Exibir o mês atual.
- Navegar entre meses.
- Selecionar uma data.
- Impedir datas anteriores à atual.
- Bloquear datas configuradas como indisponíveis.
- Destacar a data selecionada em turquesa.

Criar um arquivo `src/config/availability.ts` para configurar:

- Dias da semana habilitados.
- Datas bloqueadas.
- Antecedência mínima.
- Limite de dias futuros.

Não criar integrações com calendários externos.

Como a aplicação não terá backend, o sistema deverá informar:

"A data selecionada está sujeita à confirmação de disponibilidade pela equipe Brilhin."

Não apresentar uma solicitação como reserva confirmada.

### Etapa 5 — Resumo

Exibir os dados selecionados:

- Serviço
- Metragem
- Tipo de imóvel
- Quartos
- Banheiros
- Bairro
- Data desejada

Adicionar o botão:

**Solicitar pelo WhatsApp**

Validar os campos obrigatórios antes de habilitar o botão.

---

## 6. Integração com WhatsApp

A integração deverá funcionar sem backend.

Criar:

`src/config/contact.ts`

Nele, definir o número corporativo da empresa, configurável em formato internacional.

Não utilizar números fictícios como dados reais.

O redirecionamento deverá utilizar:

`https://wa.me/NUMERO?text=MENSAGEM`

Gerar a mensagem dinamicamente com os dados do formulário e utilizar `encodeURIComponent()`.

### Exemplo de mensagem

Olá! Gostaria de solicitar um orçamento com a Brilhin! 🧹✨

*Serviço:* Limpeza Pós-Obra

*Metragem:* 101 a 150 m²

*Tipo de imóvel:* Apartamento

*Quartos:* 3

*Banheiros:* 2

*Bairro:* [Bairro informado]

*Data desejada:* 25/11/2026

Poderiam confirmar a disponibilidade e informar o orçamento?

Ao clicar no botão, abrir uma nova aba para o WhatsApp, mantendo os dados do formulário na página original.

O envio efetivo da mensagem será realizado pelo próprio cliente no WhatsApp.

---

## 7. Seções complementares

### Por que escolher a Brilhin?

Criar quatro cards de benefícios:

**Equipe preparada:** Profissionais preparados para cuidar do seu ambiente.

**Produtos adequados:** Cuidados e produtos adequados para diferentes superfícies.

**Pontualidade:** Organização e respeito aos horários combinados.

**Atendimento rápido:** Solicite seu orçamento de maneira prática pelo WhatsApp.

Utilizar ícones lineares em turquesa.

### Sobre a Brilhin

Criar uma apresentação institucional curta e elegante, destacando a proposta da empresa.

Utilizar uma imagem apropriada da pasta `assets`, quando disponível.

Não inventar depoimentos, certificações, números de clientes ou tempo de experiência.

### Rodapé

Incluir:

- Logotipo Brilhin.
- WhatsApp corporativo.
- Instagram, quando configurado.
- Região atendida, quando configurada.
- Links de navegação.
- Direitos autorais com ano automático.

O rodapé deverá utilizar fundo azul-marinho e detalhes turquesa.

---

## 8. Responsividade e experiência do usuário

A aplicação deve ser desenvolvida com abordagem mobile-first.

### Desktop

- Menu horizontal.
- Hero em duas colunas.
- Cards de serviços distribuídos horizontalmente.
- Formulário visualmente organizado.

### Tablet

- Cards em duas colunas.
- Formulário adaptado à resolução.

### Mobile

- Menu hambúrguer.
- Cards empilhados.
- Formulário com etapas progressivas.
- Botões com largura confortável.
- Calendário adaptado à tela.
- Nenhuma rolagem horizontal.

Adicionar:

- Navegação suave.
- Microanimações discretas.
- Estados de hover e focus.
- Indicadores de seleção.
- Validação amigável.
- Acessibilidade por teclado.
- Textos alternativos nas imagens.

---

## 9. Estrutura de arquivos

Organizar o projeto da seguinte forma:

```text
brilhin/
├── public/
│   ├── assets/
│   │   ├── [logo original]
│   │   ├── [imagens dos serviços]
│   │   └── [demais imagens fornecidas]
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── BookingForm.tsx
│   │   ├── PropertySizeSelector.tsx
│   │   ├── PropertyDetails.tsx
│   │   ├── DateSelector.tsx
│   │   ├── BookingSummary.tsx
│   │   ├── Benefits.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── config/
│   │   ├── contact.ts
│   │   ├── availability.ts
│   │   └── services.ts
│   ├── utils/
│   │   ├── whatsapp.ts
│   │   └── dateUtils.ts
│   ├── types/
│   │   └── booking.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

**Atenção:** a estrutura da pasta `assets` é apenas ilustrativa. A IA deverá identificar os arquivos reais existentes no projeto e referenciá-los corretamente, preservando seus nomes sempre que possível.

---

## 10. Hospedagem obrigatória no GitHub Pages

**O site será hospedado exclusivamente no GitHub Pages.**

Portanto, toda a arquitetura deverá ser compatível com hospedagem estática.

A aplicação deverá gerar arquivos HTML, CSS e JavaScript que possam ser publicados sem servidor backend.

### Configuração do Vite

Configurar corretamente o parâmetro `base` no `vite.config.ts`.

Se o site estiver hospedado em:

`https://usuario.github.io/brilhin/`

A base da aplicação deverá ser:

`/brilhin/`

Se estiver hospedado na raiz de um domínio personalizado, utilizar a base `/`.

Garantir que imagens, scripts e arquivos de estilo sejam carregados corretamente em ambas as possibilidades.

Utilizar `import.meta.env.BASE_URL` na construção dos caminhos de arquivos públicos da pasta `assets`, sempre que necessário.

Não utilizar caminhos absolutos que causem erros quando o site estiver publicado em um subdiretório.

### Publicação automática

Criar um workflow do GitHub Actions:

`.github/workflows/deploy.yml`

Esse workflow deverá:

1. Ser executado automaticamente a cada push na branch principal.
2. Configurar o ambiente Node.js.
3. Instalar as dependências.
4. Executar `npm run build`.
5. Publicar o conteúdo da pasta `dist` no GitHub Pages.

Utilizar as ações oficiais do GitHub Pages e configurar as permissões necessárias para publicação.

A configuração deverá ser compatível com a opção **GitHub Actions** nas configurações do Pages do repositório.

### Comandos de desenvolvimento

O projeto deverá funcionar localmente com:

```bash
npm install
npm run dev
```

E gerar a versão de produção com:

```bash
npm run build
npm run preview
```

A versão publicada deverá funcionar mesmo sem qualquer servidor Node.js ativo.

### Requisitos especiais

- Não utilizar rotas que dependam de configuração de servidor.
- Priorizar navegação por âncoras.
- Garantir que o acesso direto à página funcione.
- Não utilizar APIs privadas.
- Não incluir segredos ou credenciais no frontend.
- Garantir que todos os assets sejam copiados corretamente para o build.
- Testar a aplicação com o mesmo caminho-base que será usado no GitHub Pages.

---

## 11. SEO e performance

Implementar:

- Título e descrição da página.
- Favicon da Brilhin.
- Metatags Open Graph.
- HTML semântico.
- Imagens otimizadas.
- Lazy loading para imagens secundárias.
- Fontes otimizadas.
- Componentes leves.
- Layout sem deslocamentos inesperados.
- Boa performance em dispositivos móveis.

Não incluir dependências desnecessárias.

---

## 12. Critérios de aceitação

O projeto somente estará concluído quando:

- A identidade visual seguir o mockup.
- O logotipo original estiver preservado.
- As imagens dos serviços forem carregadas diretamente da pasta `assets`.
- Nenhuma imagem do projeto estiver distorcida.
- Todos os serviços forem apresentados corretamente.
- A seleção de serviço funcionar.
- O formulário validar os dados.
- O calendário bloquear datas inválidas.
- O resumo apresentar as informações selecionadas.
- O botão do WhatsApp gerar a mensagem correta.
- A aplicação funcionar em dispositivos móveis.
- Não existir dependência de backend.
- O build de produção funcionar.
- Os caminhos das imagens funcionarem no GitHub Pages.
- O workflow do GitHub Actions estiver configurado.
- O site puder ser publicado em hospedagem estática.
- O console não apresentar erros.

---

## 13. Entrega esperada

Entregar:

1. Projeto React completo.
2. Código TypeScript organizado.
3. Layout fiel ao mockup.
4. Integração funcional com WhatsApp.
5. Formulário responsivo.
6. Calendário configurável.
7. Reutilização dos arquivos da pasta `assets`.
8. Workflow de deploy para GitHub Pages.
9. README com instruções de instalação, configuração e publicação.
10. Aplicação pronta para produção.

### Instrução final para a IA desenvolvedora

**Não entregue somente um mockup ou uma página estática sem funcionalidades.**

Implemente o site completo e funcional.

O projeto deve ser 100% frontend, utilizar a identidade visual e as imagens existentes na pasta `assets` e estar preparado para hospedagem automática no GitHub Pages.

Não criar backend, banco de dados ou funcionalidades que exijam servidores próprios.

A experiência deverá ser moderna, elegante, intuitiva e especialmente otimizada para usuários de smartphones.

**Prioridades:** fidelidade ao mockup, uso correto dos materiais da marca, facilidade de agendamento e funcionamento confiável no GitHub Pages.
