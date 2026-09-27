# 🦸 Vaultis

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

- Catálogo com todos os personagens da API, carregado aos poucos conforme o usuário clica em "Carregar mais"
- Busca de personagem por nome através de barra de pesquisa no header
- Indicador de carregamento enquanto os dados da API são buscados
- Página de detalhes individual de cada personagem
- Funcionalidade de recrutar/desrecrutar personagens
- Página de Favoritos
- Persistência dos favoritos no localStorage
- Página 404 para rotas inexistentes
- Tratamento de erros de requisição, com tela de erro dedicada na página de detalhes
- Estado global de favoritos via Context API (CharacterContext), eliminando o prop drilling
- Componentes organizados por responsabilidade (comuns, de personagem, de loading e por página)

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
 ┣ 📜 App.tsx
 ┣ 📂 assets/
 ┃ ┗ 🖼️ noFavorites.png
 ┣ 📂 components/
 ┃ ┣ 📂 character/
 ┃ ┃ ┣ 📜 AlignmentBadge.tsx
 ┃ ┃ ┣ 📜 BadgeComponent.tsx
 ┃ ┃ ┣ 📜 CardCharacter.tsx
 ┃ ┃ ┣ 📜 CardInput.tsx
 ┃ ┃ ┗ 📜 FieldInfo.tsx
 ┃ ┣ 📂 common/
 ┃ ┃ ┣ 📜 Header.tsx
 ┃ ┃ ┣ 📜 InputHeader.tsx
 ┃ ┃ ┣ 📜 LinkData.tsx
 ┃ ┃ ┗ 📜 RecruitButton.tsx
 ┃ ┣ 📂 pages/
 ┃ ┃ ┣ 📂 catalog/
 ┃ ┃ ┃ ┗ 📜 CatalogHeader.tsx
 ┃ ┃ ┣ 📂 details/
 ┃ ┃ ┃ ┣ 📜 DetailsError.tsx
 ┃ ┃ ┃ ┗ 📜 DetailsHeader.tsx
 ┃ ┃ ┗ 📂 favorites/
 ┃ ┃ ┃ ┗ 📜 FavoritesHeader.tsx
 ┃ ┗ 📂 skeletons/
 ┃ ┃ ┣ 📜 SkeletonCard.tsx
 ┃ ┃ ┗ 📜 SkeletonDetails.tsx
 ┣ 📂 context/
 ┃ ┗ 📜 characterContext.tsx
 ┣ 📂 hooks/
 ┃ ┗ 📜 useCharacter.ts
 ┣ 📜 index.css
 ┣ 📜 main.tsx
 ┣ 📂 pages/
 ┃ ┣ 📜 CatalogCharacters.tsx
 ┃ ┣ 📜 DetailsCharacter.tsx
 ┃ ┣ 📜 FavoritesCharacters.tsx
 ┃ ┗ 📜 NotFound.tsx
 ┣ 📂 services/
 ┃ ┣ 📜 storage.ts
 ┃ ┗ 📜 useFetchCharacters.ts
 ┗ 📂 types/
 ┃ ┗ 📜 CharacterTypes.ts
```

---

## 🧠 Decisões técnicas

**Migração de API**

O projeto inicialmente utilizava a SuperHero API, o que exigia uma requisição individual por personagem, a criação de um proxy no Vite para contornar bloqueios de CORS, autenticação via Token e o tratamento de falhas de carregamento de imagens hospedadas sob proteção da Cloudflare. Devido a limitações de infraestrutura que causavam quedas na aplicação durante o carregamento em massa (infinite scroll), a fonte de dados foi migrada para a Akabab Superhero API. Essa mudança eliminou a necessidade de autenticação por token e permitiu buscar todos os 731 personagens em uma única requisição, acelerando o carregamento inicial e resolvendo definitivamente os problemas de exibição de imagens.

**Removação do Infinite Scroll**

Inicialmente, a renderização de novos personagens seria feita via infinite scroll, carregando mais dados conforme o usuário rolava a página. Porém, isso sobrecarregava o site com requisições constantes à API sempre que novos personagens eram carregados, e a estrutura da API anterior não dava o suporte necessário para essa feature funcionar bem. Com a migração para a Akabab Superhero API, que entrega todos os personagens em uma única requisição, escolhi por remover essa funcionalidade — a renderização de novos personagens passou a ser feita por fatiamento do array já carregado, o que eliminou a sobrecarga de requisições e simplificou o código, removendo a lógica do Intersection Observer.

**Context API ante a Prop Drilling**
Inicialmente, o projeto adotou totalmente a passagem de dados e funções via prop drilling entre os componentes. No entanto, conforme a aplicação cresceu e novos componentes passaram a consumir os mesmos dados, essa abordagem se tornou repetitiva, cansativa e de difícil manutenção ao longo de múltiplos níveis hierárquicos. Para resolver esse gargalo de escalabilidade, escolhi utilizar a Context API, centralizando o acesso aos dados globais.

**Tratamento de erro na página de detalhes**

Inicialmente, qualquer falha ao buscar os dados de um personagem (seja erro de requisição, seja um personagem inexistente) resultava em um redirecionamento para a página 404, tirando o usuário do contexto em que ele estava. Para melhorar a experiência, essa abordagem foi substituída pela renderização de um componente de erro (`DetailsError`) diretamente na página de detalhes, mantendo o header visível — assim o usuário continua com acesso à busca e aos seus recrutas favoritados, podendo tentar novamente sem precisar voltar ao catálogo.

---


## 🏗️ Arquitetura

A lógica da aplicação é concentrada em hooks customizados e em um Context global, mantendo os componentes focados na camada visual:

- **`useCharacter`** — gerencia o estado central dos personagens: lista completa (`charactersData`), lista paginada exibida (`characters`), favoritos (`favoritesCharacter`) e a função de adicionar/remover favorito (`addFavoriteCharacter`)
- **`useFetchCharacters`** — isola as chamadas à Akabab Superhero API (`getFetchCharacters`, `getCharacterDetails`) e expõe os estados de carregamento (`loading`, `loadingId`) e de erro (`characterError`, `detailsErrorMsg`)
- **`CharacterContext`** — disponibiliza globalmente `favoritesCharacter`, `addFavoriteCharacter` e `removeFavoriteCharacter`, evitando prop drilling especificamente para a lógica de favoritos. Componentes como `CardCharacter`, `CardInput` e `DetailsCharacter` consomem o Context para saber se um personagem já foi recrutado e para disparar a ação de recrutar/desrecrutar, enquanto os demais dados do personagem (nome, imagem, biografia etc.) continuam sendo recebidos via props normalmente
- **`storage.ts`** — camada de persistência responsável por salvar e recuperar os favoritos do localStorage

---

## 🧠 Aprendizados

- **Consumo de API em escala** — lidar com uma base de 731 personagens carregada de uma vez e derivar paginação e busca localmente a partir dela
  
- **Hooks customizados e seu escopo** — separar a lógica de dados (`useCharacter`, `useFetchCharacters`) da camada visual dos componentes, e entender na prática que cada instância de um hook customizado é independente: dois componentes chamando o mesmo hook não compartilham estado entre si, do mesmo jeito que instâncias de uma classe não compartilham propriedades
  
- **Tipagem com TypeScript** — modelar os tipos dos personagens vindos da API (campos em camelCase, estrutura de imagens)
  
- **Context API como solução, não só como problema identificado** — entender que, quando várias informações semelhantes são consumidas por componentes diferentes via prop drilling, a Context API simplifica bastante a manutenção; e que vale a pena avaliar antes mesmo de começar um projeto se a estrutura de dados pede prop drilling ou Context API desde o início
  
- **Roteamento e estados de erro** — renderizar dados individuais a partir de uma rota dinâmica (`:id`), e evoluir de um tratamento simples (redirecionar para 404 em qualquer falha) para renderizar um componente de erro específico, mantendo o usuário no contexto da página em vez de tirá-lo dela
  
- **Estados de loading para UX** — criar skeletons de carregamento para que o usuário entenda que algo está sendo processado, em vez de ver a tela travada ou em branco
  
- **Paginação local** — carregar mais personagens sob demanda a partir de um array já buscado, sem depender de novas requisições
  
- **Planejamento de escopo e gestão de risco técnico** — perceber que, antes de adicionar ou escalar uma feature, vale avaliar os recursos disponíveis e o custo de cortar algo caso não funcione; também aprender a reconhecer quando a dificuldade em implementar algo pode vir da ferramenta ou fonte de dados escolhida (como foi o caso da migração de API), e que vale investir tempo procurando uma alternativa mais simples de integrar em vez de insistir em uma peça que está gerando atrito constante


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

## 👨‍💻 Autor

Feito com 💙 por **Caio Lucas**

🔗 [GitHub](https://github.com/lucas-devsss)
💼 [LinkedIn](https://www.linkedin.com/in/lucas-devsss/)
