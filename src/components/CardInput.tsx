import type { images } from "../types/CharacterTypes";
import LinkData from "./LinkData";
interface CardInputProps {
  name: string;
  images: images;
  id: string;
}

export default function CardInput({ name, images, id }: CardInputProps) {
  return (
    <article className="max-w-225 flex m-2 ">
      <div className="w-50 max-h-70">
        <img className="w-ful h-full" src={images.sm} alt={name} />
      </div>
      <div className="flex flex-col gap-2.5 shrink-0">
        <p className="font-outfit text-lg text-white">{name}</p>
        <button className="px-6 py-4 font-bebas text-2xl bg-red-700 text-white border-3 border-transparent duration-150 hover:border-yellow-300 cursor-pointer">
          Recrutar
        </button>
        <LinkData characterId={id} />
      </div>
    </article>
  );
}
