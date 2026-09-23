export interface Characters {
  name: string;
  id: number;
  biography: biography;
  images: images;
  connections: connections;
  appearance: appearance;
  work: work;
}

export interface biography {
  fullName: string;
  alterEgos: string;
  placeOfBirth: string;
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

export interface connections {
  groupAffiliation: string;
}

export interface appearance {
  race: string;
  gender: string;
}

export interface work {
  occupation: string;
  base: string;
}
