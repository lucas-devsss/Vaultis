import { useState } from "react";

export default function useFetchCharacters() {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_TOKEN;

  async function getFetchCharacters(range: number) {
    try {
      setLoading(true);
      const response = await fetch(`api/api.php/${apiKey}/${range}`);
      const data = await response.json();
      if (data.response === "success") {
        return data;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function getFetchMoreCharacters(range: number) {
    try {
      setLoadingMore(true);

      const response = await fetch(`api/api.php/${apiKey}/${range}`);
      const data = await response.json();
      if (data.response === "success") {
        return data;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingMore(false);
    }
  }

  async function getSearchCharacters(value: string) {
    try {
      setSearchLoading(true);
      const response = await fetch(`api/api.php/${apiKey}/search/${value}`);
      const data = await response.json();
      if (data.response === "success") {
        return data;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSearchLoading(false);
    }
  }
  return {
    getFetchCharacters,
    loading,
    getFetchMoreCharacters,
    loadingMore,
    getSearchCharacters,
    searchLoading,
  };
}
