import type { image } from "../types/CharacterTypes";

interface CardInputProps {
  name: string;
  image: image;
  id: string;
}

export default function CardInput({ name, image, id }: CardInputProps) {
  return (
    <article className="max-w-225 flex">
      <div className="w-50 min-h-50">
        <img
          className="w-ful h-full"
          src={image.url.replace("https://www.superherodb.com", "/images")}
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-2.5 shrink-0">
        <p className="font-outfit text-lg text-white">{name}</p>
        <button className="px-6 py-4 font-bebas text-2xl bg-red-700 text-white border-3 border-transparent duration-150 hover:border-yellow-300 cursor-pointer">
          Recrutar
        </button>
        <button className="px-6 py-4 font-bebas text-xl text-white border-3 border-red-700 hover:bg-yellow-300 hover:text-red-900 hover:border-red-900 duration-150 cursor-pointer">
          Ver dados
        </button>
      </div>
    </article>
  );
}
