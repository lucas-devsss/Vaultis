# 🦸 Vaultis
 
> ⚠️ Projeto em desenvolvimento ativo — este README reflete o estado atual e será atualizado conforme novas features forem concluídas.
 
---
 
## 🧩 Sobre o projeto

O Vaultis é uma aplicação web SPA que consome a [Akabab Superhero API](https://akabab.github.io/superhero-api/), renderizando um catálogo com 731 personagens entre heróis e vilões. O usuário pode navegar pelo catálogo, ver os dados detalhados de cada personagem, buscar por nome em tempo real e favoritar os que quiser recrutar para sua equipe. A lista é carregada aos poucos: mais personagens são renderizados conforme o usuário clica no botão "Carregar mais", evitando carregar tudo de uma vez na tela.
 
 
---
 
## 🎯 Objetivo do projeto
 
- Praticar consumo de API com Fetch e async/await
- Trabalhar roteamento com React Router
- Entender na prática como o React lida com requisições assíncronas
- Aprender a tratar erros de requisição
- Tipar requisições com Typescript
---
 
## 📋 Funcionalidades
 
### ✅ Concluídas
- Catálogo com todos os personagens da API, carregado aos poucos conforme o usuário clica em "Carregar mais"
- Busca de personagem por nome através de barra de pesquisa no header
- Indicador de carregamento enquanto os dados da API são buscados
- Página de detalhes individual de cada personagem

### 🚧 Em andamento
- Funcionalidade de recrutar/desrecrutar personagens
- Página de Favoritos
- Persistência para salvar os favoritos
  
### 📝 Planejadas para o MVP
- Filtro de personagens por alinhamento (Good/Bad/Neutral) e por editora
- Página inicial/missão com fundo animado em Canvas
- Página 404 para rotas inexistentes
- Persistência dos favoritos no localStorage
---
 

 
 
## 🚀 Tecnologias utilizadas
 
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Akabab Superhero API**
- **Git & GitHub**
---
 
## 📁 Estrutura de pastas
 
```
📂 src/
 ┣ 📂 components/
 ┃ ┣ 📜 CardCharacter
 ┃ ┣ 📜 CardInput
 ┃ ┣ 📜 SkeletonCard
 ┃ ┣ 📜 AlignmentBadge
 ┃ ┣ 📜 BadgeComponent
 ┃ ┣ 📜 InfoComponent
 ┃ ┣ 📜 LinkData
 ┃ ┣ 📜 Loading
 ┃ ┣ 📜 Header
 ┃ ┣ 📜 CatalogHeader
 ┃ ┣ 📜 DetailsHeader
 ┃ ┗ 📜 InputHeader
 ┣ 📂 hooks/
 ┃ ┗ 📜 useCharacter.ts
 ┣ 📂 pages/
 ┃ ┣ 📜 CatalogCharacters
 ┃ ┣ 📜 DetailsCharacter
 ┃ ┗ 📜 FavoritesCharacters
 ┣ 📂 services/
 ┃ ┗ 📜 useFetchCharacters.ts
 ┣ 📂 types/
 ┗ ┗ 📜 CharacterTypes.ts
 
```
---

## 🧠 Decisões técnicas
 
**Migração de API**

O projeto inicialmente utilizava a SuperHero API, o que exigia uma requisição individual por personagem, a criação de um proxy no Vite para contornar bloqueios de CORS, autenticação via Token e o tratamento de falhas de carregamento de imagens hospedadas sob proteção da Cloudflare. Devido a limitações de infraestrutura que causavam quedas na aplicação durante o carregamento em massa (infinite scroll), a fonte de dados foi migrada para a Akabab Superhero API. Essa mudança eliminou a necessidade de autenticação por token e permitiu buscar todos os 731 personagens em uma única requisição, acelerando o carregamento inicial e resolvendo definitivamente os problemas de exibição de imagens.
 
**Removação do Infinite Scroll**

Inicialmente, a renderização de novos personagens seria feita via infinite scroll, carregando mais dados conforme o usuário rolava a página. Porém, isso sobrecarregava o site com requisições constantes à API sempre que novos personagens eram carregados, e a estrutura da API anterior não dava o suporte necessário para essa feature funcionar bem. Com a migração para a Akabab Superhero API, que entrega todos os personagens em uma única requisição, escolhi por remover essa funcionalidade — a renderização de novos personagens passou a ser feita por fatiamento do array já carregado, o que eliminou a sobrecarga de requisições e simplificou o código, removendo a lógica do Intersection Observer.
 
**Context API ante a Prop Drilling**
Inicialmente, o projeto adotou totalmente a passagem de dados e funções via prop drilling entre os componentes. No entanto, conforme a aplicação cresceu e novos componentes passaram a consumir os mesmos dados, essa abordagem se tornou repetitiva, cansativa e de difícil manutenção ao longo de múltiplos níveis hierárquicos. Para resolver esse gargalo de escalabilidade, escolhi utilizar a Context API, centralizando o acesso aos dados globais.
 
---
 

 
## 🏗️ Arquitetura
 
A lógica da aplicação é concentrada em hooks customizados, mantendo os componentes focados na camada visual:
 
- **`useCharacter`** — gerencia o estado central dos personagens: lista completa (`charactersData`), lista paginada exibida (`characters`), favoritos (`favoritesCharacter`) e a função de adicionar/remover favorito (`addFavoriteCharacter`)
- **`useFetchCharacters`** — isola a chamada à Akabab Superhero API (`getFetchCharacters`) e expõe o estado de carregamento (`loading`)
- Os componentes de página (`CatalogCharacters`, `DetailsCharacter`, `FavoritesCharacters`) consomem esses hooks e distribuem dados e funções via props para os componentes visuais, como `CardCharacter`, `CardInput` e `InputHeader`.
 
---
 
## 🧠 Aprendizados
 
- **Consumo de API em escala** — lidar com uma base de 731 personagens carregada de uma vez e derivar paginação e busca localmente a partir dela
- **Hooks customizados** — separar a lógica de dados (`useCharacter`, `useFetchCharacters`) da camada visual dos componentes
- **Tipagem com TypeScript** — modelar os tipos dos personagens vindos da API (campos em camelCase, estrutura de imagens)
- **Identificação de débitos técnicos** — reconhecer na prática quando prop drilling e requisições redundantes pedem uma solução como Context API, mesmo antes de implementá-la
- **Planejamento de MVP** — separar o que já está pronto, o que está em andamento e o que é essencial para considerar o projeto entregável
---
 
## ⚙️ Como executar o projeto
 
Clone o repositório:
```bash
git clone https://github.com/[seu-usuario]/vaultis
```
 
Instale as dependências:
```bash
npm install
```
 
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
 
---
 
## 🧭 Roadmap
 
Este é o repositório ativo do projeto — o README será atualizado conforme as funcionalidades planejadas forem implementadas, até o fechamento do MVP.
 
---
 
## 👨‍💻 Autor
 
Feito com 💙 por **Caio Lucas**
 
🔗 [GitHub](https://github.com/lucas-devsss)
💼 [LinkedIn](https://www.linkedin.com/in/lucas-devsss/)
