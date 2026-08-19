import { useState } from "react";

export default function useFetchCharacters() {
  const [loading, setLoading] = useState(true);

  async function getFetchCharacters() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json",
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return {
    getFetchCharacters,
    loading,
  };
}
