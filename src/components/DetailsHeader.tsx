import { Link } from "react-router";
import HeaderComponent from "./Header";
import InputHeader from "./InputHeader";
import type { Characters } from "../types/CharacterTypes";

interface DetailsHeaderProps {
  charactersData: Characters[];
}

export default function DetailsHeader({ charactersData }: DetailsHeaderProps) {
  return (
    <HeaderComponent>
      <Link to={"/"} className="font-bebas text-white text-2xl ">
        Recrutar
      </Link>
      <InputHeader charactersData={charactersData} />
      <button className="px-6 py-3 max-w-62.5 text-sm font-outfit uppercase bg-gray-700 text-white box-border border-4 duration-300 rounded-md border-transparent hover:border-red-500 hover:text-red-500 cursor-pointer">
        meus recrutas
      </button>
    </HeaderComponent>
  );
}
