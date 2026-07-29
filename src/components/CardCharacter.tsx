import type { Characters } from "../types/CharacterTypes";

export default function CardCharacter({
  name,
  id,
  biography,
  image,
  connections,
  appearance,
}: Characters) {
  const alignmentStyles = {
    good: "p-2.5 bg-blue-400 text-center",
    bad: "p-2.5 bg-red-700 text-center",
    neutral: "p-2.5 bg-slate-400 text-center",
    null: "p-2.5 bg-slate-700 text-center",
  };

  return (
    <article className="min-w-37.5 max-w-50 max-h-149 border-4 bg-slate-800 text-white">
      <div className="w-50 h-50">
        <img
          src={image.url.replace("https://www.superherodb.com", "/images")}
          alt={name}
        />
      </div>
      <div className="p-2.5">
        <p className="font-outfit text-center mb-2.5 text-lg">{name}</p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 flex-wrap">
            <div className={alignmentStyles[biography.alignment]}>
              {biography.alignment}
            </div>
            <div className="border-slate-700 border-2 p-2.5 text-sm text-center">
              {connections["group-affiliation"].split(/[,;]+/)[0]}
            </div>
            <div className="border-slate-700 border-2 p-2.5 text-sm text-center">
              {appearance.race === "null"
                ? "Raça desconhecida"
                : appearance.race}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
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
