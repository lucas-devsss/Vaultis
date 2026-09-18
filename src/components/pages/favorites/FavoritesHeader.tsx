import { Link } from "react-router";
import HeaderComponent from "../../common/Header";
import InputHeader from "../../common/InputHeader";

export default function FavoritesHeader() {
  return (
    <>
      <HeaderComponent>
        <Link
          to={"/"}
          className="font-bebas text-white text-2xl duration-150 hover:text-yellow-300 active:scale-95 "
        >
          Go back to recruit
        </Link>
        <InputHeader />
        <button className="px-6 py-3 max-w-62.5 text-sm font-outfit uppercase  text-white box-border border-4 border-gray-700 duration-300 rounded-md  hover:border-red-500 hover:text-red-500 cursor-pointer">
          Ver missão
        </button>
      </HeaderComponent>
      ;
    </>
  );
}
