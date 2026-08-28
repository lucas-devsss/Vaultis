import { useEffect, useRef, useState } from "react";
import CardInput from "./CardInput";
import type { Characters } from "../types/CharacterTypes";
import useFetchCharacters from "../services/useFetchCharacters";

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
      <input
        type="text"
        name=""
        placeholder="Pesquisar personagens"
        id=""
        value={input}
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
        className=" w-full text-slate-400 p-2.5 rounded-lg bg-gray-700"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="bg-slate-600 h-137.5 w-full absolute px-6 py-2.5 overflow-y-auto grid">
          {status === "initial" && filteredCharacters.length === 0 ? (
            <p className="font-bebas text-center self-center text-3xl text-slate-200">
              Pesquise seu recruta
            </p>
          ) : (
            ""
          )}
          {status === "void" && (
            <p className="font-bebas text-center self-center text-3xl text-slate-200">
              Parece que seu recruta fugiu :(
            </p>
          )}

          {filteredCharacters.length > 0 &&
            filteredCharacters.map((a) => (
              <CardInput key={a.id} name={a.name} images={a.images} id={a.id} />
            ))}
        </div>
      )}
    </div>
  );
}
