import type { Characters } from "../types/CharacterTypes";
import HeaderComponent from "./Header";
import InputHeader from "./InputHeader";

interface catalogHeaderProps {
  charactersData: Characters[];
}

export default function CatalogHeader({ charactersData }: catalogHeaderProps) {
  return (
    <HeaderComponent>
      <h1 className="font-bebas text-4xl text-white">Vaultis</h1>
      <InputHeader charactersData={charactersData} />
      <button className="px-6 py-3 max-w-62.5 text-sm font-outfit uppercase bg-gray-700 text-white box-border border-4 duration-300 rounded-md border-transparent hover:border-red-500 hover:text-red-500 cursor-pointer">
        meus recrutas
      </button>
    </HeaderComponent>
  );
}
