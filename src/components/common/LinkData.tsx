import { Link } from "react-router";

interface LinkDataProps {
  characterId: number;
}

export default function LinkData({ characterId }: LinkDataProps) {
  return (
    <Link
      to={`/${characterId}`}
      className="px-6 py-4 font-bebas text-center text-xl border-3 text-white border-red-700 hover:bg-yellow-300 hover:text-red-900 hover:border-red-900 duration-150 cursor-pointer"
    >
      see data
    </Link>
  );
}
