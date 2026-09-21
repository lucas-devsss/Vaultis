import { useEffect, useRef, useState } from "react";
import CardInput from "../character/CardInput";
import type { Characters } from "../../types/CharacterTypes";
import useFetchCharacters from "../../services/useFetchCharacters";
import { Search } from "lucide-react";

export default function InputHeader() {
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [CharactersData, setCharactersData] = useState<Characters[]>([]);
  const { getFetchCharacters } = useFetchCharacters();

  useEffect(() => {
    async function getCharacters() {
      const data = await getFetchCharacters();
      if (data) {
        setCharactersData(data);
      }
    }
    getCharacters();
  }, []);

  const filteredCharacters =
    input.trim() === ""
      ? []
      : CharactersData.filter((c) =>
          c.name.toLowerCase().startsWith(input.toLowerCase()),
        );

  const status =
    input.trim() === ""
      ? "initial"
      : filteredCharacters.length === 0
        ? "void"
        : "searching";

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=" row-2 col-span-full sm:row-auto sm:col-auto relative"
    >
      <div className="relative">
        <input
          type="text"
          name=""
          placeholder="Search recruits"
          id=""
          value={input}
          onChange={(e) => {
            setInput(e.currentTarget.value);
          }}
          className=" w-full peer text-slate-400 p-2.5 rounded-lg bg-gray-700 border-3 border-transparent duration-150 hover:border-slate-500 focus:border-purple-700 outline-none"
          onClick={() => setIsOpen(true)}
        />
        <Search className="absolute top-3 right-3 text-slate-500 peer-focus:text-slate-400 transition-colors" />
      </div>
      {isOpen && (
        <div className="bg-slate-600 h-137.5 w-full absolute px-6 py-2.5 overflow-y-auto grid">
          {status === "initial" && filteredCharacters.length === 0 ? (
            <p className="font-bebas text-center self-center text-3xl text-slate-200">
              Search for recruits
            </p>
          ) : (
            ""
          )}
          {status === "void" && (
            <p className="font-bebas text-center self-center text-3xl text-slate-200">
              Recruit not located :/
            </p>
          )}

          {filteredCharacters.length > 0 &&
            filteredCharacters.map((a) => <CardInput character={a} />)}
        </div>
      )}
    </div>
  );
}
