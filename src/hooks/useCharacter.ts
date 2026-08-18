import { useState, useRef } from "react";
import useFetchCharacters from "../services/useFetchCharacters";
import type { Characters } from "../types/CharacterTypes";

export default function useCharacter() {
  const [charactersData, setCharactersData] = useState<Characters[]>([]);
  const { getFetchCharacters, loading, getFetchMoreCharacters, loadingMore } =
    useFetchCharacters();
  const [isFetched, setFetched] = useState(false);
  const nextId = useRef(20);
  const initialC = useRef([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const isFetching = useRef(false);

  async function getCharacters() {
    if (typeof getFetchCharacters === "function") {
      const data = await getFetchCharacters();
      setCharactersData(data);
      console.log(data);
      setFetched(true);
    }
  }

  async function getMoreCharacters() {
    if (typeof getFetchMoreCharacters === "function") {
      const data = await Promise.all(
        initialC.current.map((id) => getFetchMoreCharacters(id)),
      );
      setCharactersData((prev) => [...prev, ...data]);
    }
  }

  function setIsFetching(value: boolean) {
    isFetching.current = value;
  }

  function loadNextIds(value: number) {
    initialC.current = [];
    for (let i = nextId.current + 1; i <= nextId.current + value; i++) {
      initialC.current.push(i);
    }
    nextId.current = initialC.current[initialC.current.length - 1];
  }

  return {
    charactersData,
    loading,
    loadingMore,
    isFetched,
    isFetching,
    getCharacters,
    getMoreCharacters,
    setIsFetching,
    loadNextIds,
  };
}
