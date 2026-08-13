import { useEffect, useState } from "react";
import useFetchCharacters from "../services/useFetchCharacters";
import CardInput from "./CardInput";

export default function InputHeader() {
  const [input, setInput] = useState<string>("");
  const { getSearchCharacters, searchLoading } = useFetchCharacters();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchCharacters, setSearchCharacters] = useState([]);

  useEffect(() => {
    const time = setTimeout(() => {
      getSearchCharacters(input).then((data) =>
        setSearchCharacters(data?.results),
      );
      console.log(searchCharacters);
    }, 1000);
    return () => clearTimeout(time);
  }, [input]);

  return (
    <div
      className=" row-2 col-span-full sm:row-auto sm:col-auto relative"
      onMouseLeave={() => setIsOpen(false)}
    >
      <input
        type="text"
        name=""
        placeholder="Pesquisar personagens"
        id=""
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        className=" w-full text-slate-400 p-2.5 rounded-lg bg-gray-700"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="bg-slate-600 h-137.5 w-full absolute px-6 py-2.5 overflow-y-auto">
          {typeof searchCharacters === "undefined" ||
          searchCharacters.length === 0
            ? ""
            : searchCharacters.map((a) => (
                <CardInput name={a.name} image={a.image} id={a.id} />
              ))}
        </div>
      )}
    </div>
  );
}
