export interface Characters {
  name: string;
  id: string;
  biography: biography;
  images: images;
  connections: connections;
  appearance: appearance;
}

interface biography {
  fullName: string;
  alterEgos: string;
  placeBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: alignment;
}

export type alignment = "good" | "bad" | "neutral" | "null" | "-";

export interface images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface connections {
  groupAffiliation: string;
}

interface appearance {
  race: string;
}
