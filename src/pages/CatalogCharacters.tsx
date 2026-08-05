import { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import CardCharacter from "../components/CardCharacter";
import type { Characters } from "../types/CharacterTypes";
import { useRef } from "react";

export function CatalogCharacters() {
  const [dataState, setDataState] = useState<Characters[]>([]);
  const [getFetch, loading, getFetchMore, loadingMore] = useFetch();
  const [isFetched, setFetched] = useState(false);
  const targetRef = useRef<null | HTMLDivElement>(null);
  const nextId = useRef(20);
  const initialC = useRef([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const isFetching = useRef(false);
  useEffect(() => {
    const getCharacters = async () => {
      if (typeof getFetch === "function") {
        const data = await Promise.all(
          initialC.current.map((id) => getFetch(id)),
        );
        setDataState(data);
        setFetched(true);
      }
    };
    getCharacters();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching.current) {
          isFetching.current = true;
          initialC.current = [];
          for (let i = nextId.current + 1; i <= nextId.current + 10; i++) {
            initialC.current.push(i);
          }
          nextId.current = initialC.current[initialC.current.length - 1];
          getMoreCharacters().then(() => {
            isFetching.current = false;
          });
        }
      },
      { threshold: 0.1 },
    );

    const getMoreCharacters = async () => {
      if (typeof getFetchMore === "function") {
        const data = await Promise.all(
          initialC.current.map((id) => getFetchMore(id)),
        );
        setDataState((prev) => [...prev, ...data]);
      }
    };
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.disconnect();
      }
    };
  }, [isFetched]);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-8 ">
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
      {loadingMore && (
        <div className="w-25 h-25">
          <p>Carregando...</p>
        </div>
      )}
      <div ref={targetRef} className="w-5 h-5"></div>
    </>
  );
}
