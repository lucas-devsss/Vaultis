# 🦸 Vaultis

---

## 🧩 About the project

Vaultis is a SPA web application that consumes the [Akabab Superhero API](https://akabab.github.io/superhero-api/), rendering a catalog with 731 characters between heroes and villains. The user can browse the catalog, view detailed data for each character, search by name in real time, and favorite the ones they want to recruit to their team. The list loads progressively: more characters are rendered as the user clicks the "Load more" button, avoiding loading everything into the screen at once.

---

## 🎯 Project goal

- Practice API consumption with Fetch and async/await
- Work with routing using React Router
- Understand in practice how React handles asynchronous requests
- Learn to handle request errors
- Type requests with TypeScript

---

## 📋 Features

- Catalog with all characters from the API, loaded progressively as the user clicks "Load more"
- Character search by name through a search bar in the header
- Loading indicator while data is being fetched from the API
- Individual details page for each character
- Recruit/unrecruit character functionality
- Favorites page
- Favorites persistence via localStorage
- 404 page for nonexistent routes
- Request error handling, with a dedicated error screen on the details page
- Global favorites state via Context API (CharacterContext), eliminating prop drilling
- Components organized by responsibility (common, character, loading, and page-specific)

---

## 🚀 Technologies used

- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Akabab Superhero API**
- **Git & GitHub**

---

## 📁 Folder structure

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

## 🧠 Technical decisions

**API migration**

The project initially used the SuperHero API, which required an individual request per character, setting up a Vite proxy to work around CORS blocks, token-based authentication, and handling failures when loading images hosted behind Cloudflare protection. Due to infrastructure limitations that caused the app to crash during bulk loading (infinite scroll), the data source was migrated to the Akabab Superhero API. This change eliminated the need for token authentication and made it possible to fetch all 731 characters in a single request, speeding up the initial load and definitively solving the image display issues.

**Removing Infinite Scroll**

Initially, new characters were rendered via infinite scroll, loading more data as the user scrolled the page. However, this overloaded the site with constant requests to the API every time new characters were loaded, and the previous API's structure didn't provide the support needed for this feature to work well. With the migration to the Akabab Superhero API, which delivers all characters in a single request, this feature was removed — rendering new characters is now done by slicing the array already loaded, which eliminated the request overhead and simplified the code by removing the Intersection Observer logic.

**Context API over Prop Drilling**

Initially, the project fully relied on passing data and functions via prop drilling between components. However, as the application grew and more components started consuming the same data, this approach became repetitive, tedious, and hard to maintain across multiple levels of the component hierarchy. To solve this scalability bottleneck, I chose to use the Context API, centralizing access to global data.

**Error handling on the details page**

Initially, any failure while fetching a character's data (whether a request error or a nonexistent character) resulted in a redirect to the 404 page, taking the user out of the context they were in. To improve the experience, this approach was replaced with rendering an error component (`DetailsError`) directly on the details page, keeping the header visible — so the user still has access to search and their favorited recruits, and can try again without having to go back to the catalog.

---

## 🏗️ Architecture

The application's logic is concentrated in custom hooks and a global Context, keeping components focused on the visual layer:

- **`useCharacter`** — manages the central character state: the full list (`charactersData`), the paginated visible list (`characters`), favorites (`favoritesCharacter`), and the add/remove favorite function (`addFavoriteCharacter`)
- **`useFetchCharacters`** — isolates the calls to the Akabab Superhero API (`getFetchCharacters`, `getCharacterDetails`) and exposes the loading (`loading`, `loadingId`) and error (`characterError`, `detailsErrorMsg`) states
- **`CharacterContext`** — globally provides `favoritesCharacter`, `addFavoriteCharacter`, and `removeFavoriteCharacter`, avoiding prop drilling specifically for the favorites logic. Components like `CardCharacter`, `CardInput`, and `DetailsCharacter` consume the Context to know whether a character has already been recruited and to trigger the recruit/unrecruit action, while the character's other data (name, image, biography, etc.) continue to be received via props as usual
- **`storage.ts`** — persistence layer responsible for saving and retrieving favorites from localStorage

---

## 🧠 Learnings

- **API consumption at scale** — handling a base of 731 characters loaded all at once and deriving pagination and search locally from it

- **Custom hooks and their scope** — separating data logic (`useCharacter`, `useFetchCharacters`) from the components' visual layer, and understanding in practice that each instance of a custom hook is independent: two components calling the same hook don't share state with each other, the same way instances of a class don't share properties

- **Typing with TypeScript** — modeling the character types coming from the API (camelCase fields, image structure)

- **Context API as a solution, not just an identified problem** — understanding that when several similar pieces of information are consumed by different components via prop drilling, the Context API greatly simplifies maintenance; and that it's worth evaluating, even before starting a project, whether the data structure calls for prop drilling or Context API from the start

- **Routing and error states** — rendering individual data from a dynamic route (`:id`), and evolving from a simple approach (redirecting to 404 on any failure) to rendering a specific error component, keeping the user within the page's context instead of pulling them out of it

- **Loading states for UX** — creating loading skeletons so the user understands that something is being processed, instead of seeing a frozen or blank screen

- **Local pagination** — loading more characters on demand from an array already fetched, without relying on new requests

- **Scope planning and technical risk management** — realizing that, before adding or scaling a feature, it's worth evaluating the available resources and the cost of cutting something if it doesn't work out; also learning to recognize when difficulty implementing something might come from the chosen tool or data source (as was the case with the API migration), and that it's worth investing time in finding a simpler alternative to integrate instead of insisting on a piece that keeps causing friction

---

## ⚙️ How to run the project

Clone the repository:

```bash
git clone https://github.com/[your-username]/vaultis
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 👨‍💻 Author

Made with 💙 by **Caio Lucas**

🔗 [GitHub](https://github.com/lucas-devsss)
💼 [LinkedIn](https://www.linkedin.com/in/lucas-devsss/)
