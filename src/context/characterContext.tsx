import { createContext } from "react";
import type { Characters } from "../types/CharacterTypes";

interface CharacterContext {
  favoritesCharacter: Characters[];
  removeFavoriteCharacter(id: string): void;
  addFavoriteCharacter(character: Characters): void;
}

export const CharacterContext = createContext<CharacterContext>(
  {} as CharacterContext,
);
