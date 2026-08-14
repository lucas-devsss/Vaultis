import { useEffect, useRef, useState } from "react";
import useFetchCharacters from "../services/useFetchCharacters";
import CardInput from "./CardInput";
import Loading from "./Loading";
import type { Characters } from "../types/CharacterTypes";

export default function InputHeader() {
  const [input, setInput] = useState<string>("");
  const { getSearchCharacters, searchLoading } = useFetchCharacters();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchCharacters, setSearchCharacters] = useState<Characters[]>([]);
  const [status, setStatus] = useState<"initial" | "void" | "searching">(
    "initial",
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (input.trim() === "" && searchCharacters.length === 0) {
      return;
    }
    async function fetchSearchCharacters() {
      setSearchCharacters([]);
      setStatus("searching");
      const data = await getSearchCharacters(input);
      if (!data) {
        console.log("abacaxi");
        setStatus("void");
        setSearchCharacters([]);
        return;
      }
      if (data.results) {
        setSearchCharacters(data.results);
      }
    }
    fetchSearchCharacters();
  }, [input]);

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
          if (e.currentTarget.value.trim() === "") {
            setStatus("initial");
            setSearchCharacters([]);
          }
        }}
        className=" w-full text-slate-400 p-2.5 rounded-lg bg-gray-700"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="bg-slate-600 h-137.5 w-full absolute px-6 py-2.5 overflow-y-auto">
          {status === "initial" && searchCharacters.length === 0
            ? "Pesquise seu recruta"
            : ""}
          {status === "void" && "Parece que seu recruta fugiu :("}
          {searchLoading && <Loading />}
          {searchCharacters.length > 0 &&
            searchCharacters.map((a) => (
              <CardInput key={a.id} name={a.name} image={a.image} id={a.id} />
            ))}
        </div>
      )}
    </div>
  );
}
