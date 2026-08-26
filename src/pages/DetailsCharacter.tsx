import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetchCharacters from "../services/useFetchCharacters";
import type { Characters } from "../types/CharacterTypes";

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
  }, []);
  console.log(characterDetails);

  return <h1>DetailsCharacter page :)</h1>;
}

export default DetailsCharacter;
