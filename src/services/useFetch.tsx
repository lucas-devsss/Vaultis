import { useState } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  async function getFetch(range: number) {
    try {
      setLoading(true);
      const apiKey = import.meta.env.VITE_API_TOKEN;
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
  async function getFetchMore(range: number) {
    try {
      setLoadingMore(true);
      const apiKey = import.meta.env.VITE_API_TOKEN;
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

  return [getFetch, loading, getFetchMore, loadingMore];
}
