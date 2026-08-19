import { useState } from "react";
import useFetchCharacters from "../services/useFetchCharacters";
import type { Characters } from "../types/CharacterTypes";

export default function useCharacter() {
  const [charactersData, setCharactersData] = useState<Characters[]>([]);
  const { getFetchCharacters, loading } = useFetchCharacters();
  const [rangeCharacters, setRangeCharacters] = useState(20);
  const characters = charactersData.slice(0, rangeCharacters);

  async function getCharacters() {
    if (typeof getFetchCharacters === "function") {
      const data = await getFetchCharacters();
      setCharactersData(data);
    }
  }

  function loadMoreCharacters(range: number) {
    setRangeCharacters((prev) => prev + range);
  }

  return {
    charactersData,
    loading,
    getCharacters,
    characters,
    loadMoreCharacters,
  };
}
