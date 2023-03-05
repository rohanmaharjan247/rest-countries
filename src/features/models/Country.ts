export interface Country {
  name: Name;
  tld: string[]; // top level domain
  capital: string;
  region: string;
  subregion: string;
  continent: string;
  population: number;
  borders: string[];
  currencies: Currency;
  languages: Language;
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
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface Language {
  [key: string]: string;
}

export interface Flag {
  alt: string;
  png: string;
  svg: string;
}
