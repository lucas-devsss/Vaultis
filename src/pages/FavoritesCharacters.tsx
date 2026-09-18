import FavoritesHeader from "../components/pages/favorites/FavoritesHeader";
import CardCharacter from "../components/character/CardCharacter";
import { useContext } from "react";
import { CharacterContext } from "../context/characterContext";

export default function FavoritesCharacters() {
  const { favoritesCharacter } = useContext(CharacterContext);

  return (
    <>
      <FavoritesHeader />
      <section className="px-8 pt-40 pb-8 bg-slate-900 h-full min-h-dvh">
        <p className="text-slate-500 mb-2.5 font-outfit">Your recruits</p>

        {favoritesCharacter.length === 0 && (
          <>
            <img
              src="src/assets/noFavorites.png"
              alt=""
              className="w-80 m-auto"
            />
            <p className="text-slate-500 text-center">No one recruited yet</p>
          </>
        )}
        {favoritesCharacter.length >= 1 && (
          <div className="grid gap-2.5 grid-cols-[repeat(auto-fit,minmax(150px,150px))] ">
            {favoritesCharacter.map((a) => (
              <CardCharacter
                key={a.id}
                name={a.name}
                id={a.id}
                biography={a.biography}
                images={a.images}
                connections={a.connections}
                appearance={a.appearance}
                page={"favorites"}
              ></CardCharacter>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
