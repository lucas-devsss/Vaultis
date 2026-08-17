import type { Characters } from "../types/CharacterTypes";
import BadgeComponent from "./BadgeComponent";
import AlignmentBadge from "./AlignmentBadge";
export default function CardCharacter({
  name,
  id,
  biography,
  image,
  connections,
  appearance,
}: Characters) {
  console.log(id);
  return (
    <article className=" flex flex-col max-h-166.25  bg-slate-800 text-white box-border">
      <div className="w-full min-h-50 shrink-0">
        <img
          className="w-ful h-full"
          src={image.url.replace("https://www.superherodb.com", "/images")}
          alt={name}
        />
      </div>
      <div className="p-2.5 flex flex-col flex-1 min-h-0 box-border justify-between">
        <p className="font-outfit text-center mb-2.5 text-lg">{name}</p>
        <div className="flex flex-1 flex-col gap-6 justify-between ">
          <div className="flex flex-col gap-3">
            <AlignmentBadge
              content={biography.alignment}
              unknownContent={"Status desconhecido"}
            />
            <BadgeComponent
              content={connections["group-affiliation"].split(/[,;]+/)[0]}
              unknownContent="Grupo desconhecido"
            />
            <BadgeComponent
              content={appearance.race}
              unknownContent="Raça desconhecida"
            />
          </div>
          <div className="flex flex-col gap-2.5 shrink-0">
            <button className="px-6 py-4 font-bebas text-2xl bg-red-700 border-3 border-transparent duration-150 hover:border-yellow-300 cursor-pointer">
              Recrutar
            </button>
            <button className="px-6 py-4 font-bebas text-xl border-3 border-red-700 hover:bg-yellow-300 hover:text-red-900 hover:border-red-900 duration-150 cursor-pointer">
              Ver dados
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
