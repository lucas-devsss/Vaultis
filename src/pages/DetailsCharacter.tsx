import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetchCharacters from "../services/useFetchCharacters";
import type { Characters } from "../types/CharacterTypes";
import DetailsHeader from "../components/DetailsHeader";
import AlignmentBadge from "../components/AlignmentBadge";

function DetailsCharacter() {
  const paramsId = useParams();
  const { getCharacterDetails, loadingId, getFetchCharacters } =
    useFetchCharacters();
  const [characterDetails, setCharacterDetails] = useState<Characters>();
  const [characters, setCharacters] = useState<Characters[]>();

  useEffect(() => {
    async function getDetails() {
      try {
        if (paramsId.id) {
          const data = await getCharacterDetails(paramsId.id);
          setCharacterDetails(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    async function getCharacters() {
      try {
        const data = await getFetchCharacters();
        if (data) {
          setCharacters(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getCharacters();
    getDetails();
  }, [paramsId]);

  console.log(characterDetails);
  if (loadingId) {
    return <h1>Is loading...</h1>;
  }
  if (characterDetails && characters) {
    return (
      <>
        <DetailsHeader charactersData={characters} />
        <section className="px-8 py-50 bg-slate-900 min-h-dvh flex flex-col gap-8 md:flex-row">
          <div className="w-full max-w-112.5 max-h-137.5 self-center md:self-auto">
            <img
              className="w-full max-h-full object-cover object-top"
              src={characterDetails.images.lg}
              alt={characterDetails.name}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center flex-col md:flex-row md:justify-between">
              <p className="font-bebas text-[60px] text-white text-center">
                {characterDetails.name}
              </p>
              <button className="px-6 py-4 font-bebas w-full max-w-50 text-2xl bg-red-700 border-3 border-transparent duration-150 hover:border-yellow-300 cursor-pointer">
                Recrutar
              </button>
            </div>
            <div className="flex gap-2.5 justify-center items-center md:justify-start">
              <p className="font-bebas text-[40px] text-slate-200">
                {characterDetails.biography.publisher}
              </p>
              <AlignmentBadge
                content={characterDetails.biography.alignment}
                unknownContent="Status desconhecido"
              />
            </div>
            <div className="border-y-2 border-slate-400 mt-2">
              <div>
                <p className="text-slate-500 font-bebas text-2xl">Codinomes</p>
                <p className="text-slate-300 text-[20px] mb-1.5 border-b-2 border-slate-400">
                  {characterDetails.biography.alterEgos}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl ">Gênero</p>
                <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
                  {characterDetails.appearance.gender}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl">Raça</p>
                <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
                  {characterDetails.appearance.race}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl">
                  Nome Completo
                </p>
                <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
                  {characterDetails.biography.fullName}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl">
                  Local de Nascimento
                </p>
                <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
                  {characterDetails.biography.placeOfBirth}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl">
                  Primeira Aparição
                </p>
                <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
                  {characterDetails.biography.firstAppearance}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl">
                  Grupo Afiliado
                </p>
                <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
                  {characterDetails.connections.groupAffiliation}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl">
                  Base de Operações
                </p>
                <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
                  {characterDetails.work.base}
                </p>
              </div>
              <div>
                <p className="text-slate-500 font-bebas text-2xl">Trabalhos</p>
                <p className="text-slate-300 text-[20px] mb-2">
                  {characterDetails.work.occupation}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailsCharacter;
