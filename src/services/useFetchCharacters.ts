import { useState } from "react";
import type { Characters } from "../types/CharacterTypes";

export default function useFetchCharacters() {
  const [loading, setLoading] = useState(true);
  const [loadingId, setLoadingId] = useState(false);
  const [characterError, setCharacterError] = useState<string | null>(null);
  const [detailsErrorMsg, setDetailsErrorMsg] = useState<string | null>(null);

  async function getFetchCharacters(): Promise<Characters[]> {
    try {
      setLoading(true);
      setCharacterError(null);
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json",
      );
      if (!response.ok) {
        throw new Error("Failed to load characters");
      }
      const data = (await response.json()) as Characters[];
      return data;
    } catch (e) {
      console.log(e);
      setCharacterError("Something went wrong while loading characters.");
      return [];
    } finally {
      setLoading(false);
    }
  }

  async function getCharacterDetails(id: number): Promise<Characters | null> {
    try {
      setLoadingId(true);
      setDetailsErrorMsg(null);
      const response = await fetch(
        `https://akabab.github.io/superhero-api/api/id/${id}.json`,
      );
      if (!response.ok) {
        if (response.status === 404) {
          setDetailsErrorMsg(
            "Something went wrong while loading this character.",
          );
          return null;
        }
        throw new Error("Failed to load character");
      }
      const data = (await response.json()) as Characters;
      return data;
    } catch (e) {
      console.log(e);
      setDetailsErrorMsg("Something went wrong while loading this character.");
      return null;
    } finally {
      setLoadingId(false);
    }
  }

  return {
    getFetchCharacters,
    loading,
    getCharacterDetails,
    loadingId,
    characterError,
    detailsErrorMsg,
  };
}
