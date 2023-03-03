export interface Country {
  name: Name;
  topLevelDomain: string[];
  capital: string;
  region: string;
  subregion: string;
  continent: string;
  population: number;
  borders: string[];
  currencies: Currency;
  languages: Language[];
  flags: Flag;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  name: string;
  nativeName: string;
}

export interface Flag {
  alt: string;
  png: string;
  svg: string;
}
