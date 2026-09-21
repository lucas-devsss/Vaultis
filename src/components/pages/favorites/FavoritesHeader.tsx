import { Link } from "react-router";
import HeaderComponent from "../../common/Header";
import InputHeader from "../../common/InputHeader";
import { MoveLeft } from "lucide-react";

export default function FavoritesHeader() {
  return (
    <>
      <HeaderComponent>
        <Link
          to={"/"}
          className="font-bebas text-white text-2xl duration-150 hover:text-yellow-300 active:scale-95 "
        >
          Go back to recruit
          <MoveLeft />
        </Link>
        <InputHeader />
      </HeaderComponent>
      ;
    </>
  );
}
