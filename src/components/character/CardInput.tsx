import type { Characters } from "../../types/CharacterTypes";
import LinkData from "../common/LinkData";
import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import RecruitButton from "../common/RecruitButton";

interface CardInputProps {
  character: Characters;
}

export default function CardInput({ character }: CardInputProps) {
  const { addFavoriteCharacter, removeFavoriteCharacter, favoritesCharacter } =
    useContext(CharacterContext);

  return (
    <article className="max-w-225 flex m-2 ">
      <div className="w-50 max-h-70">
        <img
          className="w-ful h-full"
          src={character.images.sm}
          alt={character.name}
        />
      </div>
      <div className="flex flex-col gap-2.5 shrink-0">
        <p className="font-outfit text-lg text-white">{character.name}</p>
        {favoritesCharacter.some((a) => character.id === a.id) ? (
          <RecruitButton
            onDesrecruit={() => removeFavoriteCharacter(character.id)}
          />
        ) : (
          <RecruitButton onRecruit={() => addFavoriteCharacter(character)} />
        )}
        <LinkData characterId={character.id} />
      </div>
    </article>
  );
}
