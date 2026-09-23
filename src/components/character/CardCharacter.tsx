import BadgeComponent from "./BadgeComponent";
import AlignmentBadge from "./AlignmentBadge";
import LinkData from "../common/LinkData";
import type { Characters } from "../../types/CharacterTypes";
import RecruitButton from "../common/RecruitButton";
import { CharacterContext } from "../../context/characterContext";
import { useContext } from "react";

interface CardCharacterProps {
  character: Characters;
  page: "favorites" | "catalog";
}

export default function CardCharacter({ character, page }: CardCharacterProps) {
  const { name, id, biography, images, connections, appearance } = character;
  const { addFavoriteCharacter, removeFavoriteCharacter, favoritesCharacter } =
    useContext(CharacterContext);
  if (page === "favorites") {
    return (
      <article className=" flex flex-col max-h-175 bg-slate-800 text-white box-border">
        <div className="w-full max-h-70 shrink-0">
          <img className="w-full h-full" src={images.md} alt={name} />
        </div>
        <div className="p-2.5 flex flex-col flex-1 min-h-0 box-border justify-between">
          <p className="font-outfit text-center mb-2.5 text-lg">{name}</p>
          <div className="flex flex-1 flex-col gap-6 justify-between ">
            <div className="flex flex-col gap-3">
              <AlignmentBadge
                content={biography.alignment}
                unknownContent={"Alignment not found"}
              />
              <BadgeComponent
                content={connections["groupAffiliation"].split(/[,;]+/)[0]}
                unknownContent="Group not found"
              />
              <BadgeComponent
                content={appearance.race}
                unknownContent="Race not found"
              />
            </div>
            <div className="flex flex-col gap-2.5 shrink-0">
              <RecruitButton onDesrecruit={() => removeFavoriteCharacter(id)} />
              <LinkData characterId={id} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (favoritesCharacter.some((a) => a.id === id)) {
    return (
      <div className="flex flex-col min-h-175 max-h-175 justify-center p-2.5 gap-1.5 bg-slate-800">
        <p className="text-white flex flex-col text-center">
          <span>{name}</span>
          <span className="font-bold">Already recruited</span>
        </p>
        <RecruitButton onDesrecruit={() => removeFavoriteCharacter(id)} />
        <LinkData characterId={id} />
      </div>
    );
  }

  return (
    <article className=" flex flex-col max-h-175 bg-slate-800 text-white box-border">
      <div className="w-full max-h-70 shrink-0">
        <img className="w-full h-full" src={images.md} alt={name} />
      </div>
      <div className="p-2.5 flex flex-col flex-1 min-h-0 box-border justify-between">
        <p className="font-outfit text-center mb-2.5 text-lg">{name}</p>
        <div className="flex flex-1 flex-col gap-6 justify-between ">
          <div className="flex flex-col gap-3">
            <AlignmentBadge
              content={biography.alignment}
              unknownContent={"Alignment not found"}
            />
            <BadgeComponent
              content={connections["groupAffiliation"].split(/[,;]+/)[0]}
              unknownContent="Group not found"
            />
            <BadgeComponent
              content={appearance.race}
              unknownContent="Race not found"
            />
          </div>
          <div className="flex flex-col gap-2.5 shrink-0">
            <RecruitButton onRecruit={() => addFavoriteCharacter(character)} />
            <LinkData characterId={id} />
          </div>
        </div>
      </div>
    </article>
  );
}
