import { useEffect } from "react";
import CardCharacter from "../components/CardCharacter";
import { useRef } from "react";
import useCharacter from "../hooks/useCharacter";

export function CatalogCharacters() {
  const {
    loading,
    loadingMore,
    charactersData,
    isFetched,
    isFetching,
    getCharacters,
    getMoreCharacters,
    setIsFetching,
    loadNextIds,
  } = useCharacter();

  const targetRef = useRef(null);

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching.current) {
          setIsFetching(true);
          loadNextIds(10);
          getMoreCharacters().then(() => {
            setIsFetching(false);
          });
        }
      },
      { threshold: 0.1 },
    );

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
        {charactersData.map((a) => (
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
