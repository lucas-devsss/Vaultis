import { useEffect } from "react";
import CardCharacter from "../components/CardCharacter";
import useCharacter from "../hooks/useCharacter";
import SkeletonCard from "../components/SkeletonCard";
import CatalogHeader from "../components/CatalogHeader";

export function CatalogCharacters() {
  const {
    loading,
    charactersData,
    getCharacters,
    characters,
    loadMoreCharacters,
  } = useCharacter();

  useEffect(() => {
    getCharacters();
  }, []);

  const skelCardsRange = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

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
      <CatalogHeader charactersData={charactersData} />
      <section className="px-8 pt-40 bg-slate-900 h-full min-h-dvh">
        <p className="text-slate-500 mb-2.5 font-outfit">
          Recrutas disponiveis
        </p>
        <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ">
          {characters.map((a) => (
            <CardCharacter
              key={a.id}
              name={a.name}
              id={a.id}
              biography={a.biography}
              images={a.images}
              connections={a.connections}
              appearance={a.appearance}
            ></CardCharacter>
          ))}
        </div>

        <div className="w-full h-28 flex justify-center items-center">
          <button
            className="font-bebas text-[22px] tracking-wider px-10 py-3.5 border-[1.5px] border-blue-400 text-blue-400 rounded-md bg-transparent hover:bg-blue-400 hover:text-slate-900 transition-all duration-150 active:scale-98 cursor-pointer"
            onClick={() => loadMoreCharacters(20)}
          >
            Carregar mais
          </button>
        </div>
      </section>
    </>
  );
}
