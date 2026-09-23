import { useState } from "react";

export default function useFetchCharacters() {
  const [loading, setLoading] = useState(true);
  const [loadingId, setLoadingId] = useState(false);
  const [characterError, setCharacterError] = useState<string | null>(null);
  const [DetailsErrorMsg, setDetailsErrorMsg] = useState<string | null>(null);

  async function getFetchCharacters() {
    try {
      setLoading(true);
      setCharacterError(null);
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json",
      );
      if (!response.ok) {
        throw new Error("Failed to load characters");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      setCharacterError("Something went wrong while loading characters.");
    } finally {
      setLoading(false);
    }
  }

  async function getCharacterDetails(id: string) {
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
      const data = await response.json();
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
    DetailsErrorMsg,
  };
}
