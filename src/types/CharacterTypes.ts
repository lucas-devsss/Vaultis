export interface Characters {
  name: string;
  id: string;
  biography: biography;
  image: image;
  connections: connections;
  appearance: appearance;
}

interface biography {
  fullName: string;
  alterEgos: string;
  placeBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

interface image {
  url: string;
}

interface connections {
  "group-affiliation": string;
}

interface appearance {
  race: string;
}
