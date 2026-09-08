import { Link } from "react-router";
import HeaderComponent from "./Header";
import InputHeader from "./InputHeader";
import { CharacterContext } from "../context/characterContext";
import { useContext } from "react";

export default function DetailsHeader() {
  const { favoritesCharacter } = useContext(CharacterContext);

  return (
    <HeaderComponent>
      <Link to={"/"} className="font-bebas text-white text-2xl ">
        Recrutar
      </Link>
      <InputHeader />
      <Link
        to={"/recruits"}
        className="px-6 py-3 max-w-62.5 text-sm font-outfit uppercase bg-gray-700 text-white box-border border-4 duration-300 rounded-md border-transparent hover:border-red-500 hover:text-red-500 cursor-pointer"
      >
        meus recrutas ({favoritesCharacter.length})
      </Link>
    </HeaderComponent>
  );
}
