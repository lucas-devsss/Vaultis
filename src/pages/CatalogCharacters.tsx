import { useEffect } from "react";
import CardCharacter from "../components/CardCharacter";
import { useRef } from "react";
import useCharacter from "../hooks/useCharacter";
import SkeletonCard from "../components/SkeletonCard";
import CatalogHeader from "../components/CatalogHeader";

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

  const skelCardsRange = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

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
    return (
      <div className="bg-slate-900 px-8 py-2 h-full min-h-dvh grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ">
        {skelCardsRange.map((a) => (
          <SkeletonCard key={a} />
        ))}
      </div>
    );
  }
  return (
    <>
      <CatalogHeader />
      <section className="px-8 bg-slate-900 h-full min-h-dvh">
        <p className="text-slate-500 font-outfit">Recrutas disponiveis</p>
        <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ">
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
        <div ref={targetRef} className="w-5 h-5"></div>
        {loadingMore && (
          <div className="w-25 h-25">
            <p>Carregando...</p>
          </div>
        )}
      </section>
    </>
  );
}
