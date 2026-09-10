// import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { CatalogCharacters } from "./pages/CatalogCharacters";
import DetailsCharacter from "./pages/DetailsCharacter";
import useCharacter from "./hooks/useCharacter";
import { CharacterContext } from "./context/characterContext";
import FavoritesCharacters from "./pages/FavoritesCharacters";
import NotFound from "./pages/NotFound";

function App() {
  const {
    loading,
    getCharacters,
    characters,
    loadMoreCharacters,
    addFavoriteCharacter,
    favoritesCharacter,
    removeFavoriteCharacter,
  } = useCharacter();

  return (
    <>
      <CharacterContext.Provider
        value={{
          addFavoriteCharacter,
          removeFavoriteCharacter,
          favoritesCharacter,
        }}
      >
        <BrowserRouter>
          <Outlet></Outlet>

          <Routes>
            <Route
              path="/"
              element={
                <CatalogCharacters
                  loadMoreCharacters={loadMoreCharacters}
                  loading={loading}
                  characters={characters}
                  getCharacters={getCharacters}
                />
              }
            ></Route>
            <Route path=":id" element={<DetailsCharacter />} />
            <Route path="recruits" Component={FavoritesCharacters} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
      </CharacterContext.Provider>
    </>
  );
}

export default App;
