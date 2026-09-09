import { useEffect, useState } from "react";
import useFetchCharacters from "../services/useFetchCharacters";
import type { Characters } from "../types/CharacterTypes";
import { getCharacter, saveCharacter } from "../services/storage";

export default function useCharacter() {
  const [charactersData, setCharactersData] = useState<Characters[]>([]);
  const { getFetchCharacters, loading } = useFetchCharacters();
  const [rangeCharacters, setRangeCharacters] = useState(20);
  const characters = charactersData.slice(0, rangeCharacters);
  const [favoritesCharacter, setFavoritesCharacter] =
    useState<Characters[]>(getCharacter);

  useEffect(() => {
    saveCharacter(favoritesCharacter);
  }, [favoritesCharacter]);

  async function getCharacters() {
    if (typeof getFetchCharacters === "function") {
      const data = await getFetchCharacters();
      setCharactersData(data);
    }
  }

  function loadMoreCharacters(range: number) {
    setRangeCharacters((prev) => prev + range);
  }

  function addFavoriteCharacter(character: Characters) {
    setFavoritesCharacter((prev) => [...prev, character]);
  }

  function removeFavoriteCharacter(id: string) {
    setFavoritesCharacter((prev) => prev.filter((a) => a.id !== id));
  }

  return {
    charactersData,
    loading,
    getCharacters,
    characters,
    loadMoreCharacters,
    addFavoriteCharacter,
    favoritesCharacter,
    removeFavoriteCharacter,
  };
}
