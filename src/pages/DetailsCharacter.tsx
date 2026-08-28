import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetchCharacters from "../services/useFetchCharacters";
import type { Characters } from "../types/CharacterTypes";
import DetailsHeader from "../components/DetailsHeader";
import AlignmentBadge from "../components/AlignmentBadge";
import FieldInfo from "../components/FieldInfo";

function DetailsCharacter() {
  const paramsId = useParams();
  const { getCharacterDetails, loadingId } = useFetchCharacters();
  const [characterDetails, setCharacterDetails] = useState<Characters>();

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
    getDetails();
  }, [paramsId]);

  console.log(characterDetails);
  if (loadingId) {
    return <h1>Is loading...</h1>;
  }
  if (characterDetails) {
    return (
      <>
        <DetailsHeader />
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
            <div className="border-t-2 border-slate-400 mt-2">
              <FieldInfo
                title="alter egos"
                content={characterDetails.biography.alterEgos}
              />
              <FieldInfo
                title="gender"
                content={characterDetails.appearance.gender}
              />
              <FieldInfo
                title="race"
                content={characterDetails.appearance.race}
              />
              <FieldInfo
                title="full name"
                content={characterDetails.biography.fullName}
              />
              <FieldInfo
                title="place of birth"
                content={characterDetails.biography.placeOfBirth}
              />

              <FieldInfo
                title="first appearance"
                content={characterDetails.biography.firstAppearance}
              />
              <FieldInfo
                title="group affiliation"
                content={characterDetails.connections.groupAffiliation}
              />
              <FieldInfo
                title="work base"
                content={characterDetails.work.base}
              />
              <FieldInfo
                title="occupations"
                content={characterDetails.work.occupation}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailsCharacter;
