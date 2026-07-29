import { useState } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState(true);
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
  return [getFetch, loading];
}
