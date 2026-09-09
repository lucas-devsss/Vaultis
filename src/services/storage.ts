import type { Characters } from "../types/CharacterTypes";

export function saveCharacter(characters: Characters[]) {
  if (characters) {
    localStorage.setItem("characters", JSON.stringify(characters));
  }
}

export function getCharacter() {
  const favoriteCharacters = localStorage.getItem("characters");
  if (favoriteCharacters) {
    return JSON.parse(favoriteCharacters) as Characters[];
  }
  return [];
}
