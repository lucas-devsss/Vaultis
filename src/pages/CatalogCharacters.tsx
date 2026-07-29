import { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import CardCharacter from "../components/CardCharacter";
import type { Characters } from "../types/CharacterTypes";

export function CatalogCharacters() {
  const [dataState, setDataState] = useState<Characters[]>([]);
  const [getFetch, loading] = useFetch();
  useEffect(() => {
    const initialC = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const getCharacters = async () => {
      if (typeof getFetch === "function") {
        const data = await Promise.all(initialC.map((id) => getFetch(id)));
        setDataState(data);
        console.log(data);
      }
    };
    getCharacters();
  }, []);
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="grid gap-2.5 grid-cols-8 px-8 ">
      {dataState.map((a) => (
        <CardCharacter
          key={a.id}
          name={a.name}
          id={a.id}
          biography={a.biography}
          image={a.image}
          connections={a.connections}
          appearance={a.appearance}
        ></CardCharacter>
      ))}
    </div>
  );
}
