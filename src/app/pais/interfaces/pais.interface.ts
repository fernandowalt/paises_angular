export interface Country {
  flags: Flags;
  coatOfArms: Flags;
  name: Name;
  cca2: string;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  spa: Spa;
}

interface Spa {
  official: string;
  common: string;
}

interface Flags {
  png: string;
  svg: string;
}
