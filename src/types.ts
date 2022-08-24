export type Letter = string;

export enum AlavuType {
  NOT_POPULATED,
  KURIL,
  NEDIL,
  OTRU,
}

export type Alavu = {
  letter: Letter;
  value: AlavuType;
}

export enum AsaiType {
  NOT_POPULATED,
  NER,
  NIRAI,
}

export type Asai = {
  part: Alavu[];
  value: AsaiType
}

export enum CheerType { 
  NOT_POPULATED,
  NER,
  NIRAI,
  THEMA,
  PULIMA,
  KARUVILAM,
  KOOVILAM,
  THEMAANGAI,
  THEMAANGANI,
  PULIMAANGAI,
  PULIMAANGANI,
  KARUVILANGAI,
  KARUVILANGANI,
  KOOVILANGAI,
  KOOVILANGANI,
  THEMAANDTHANPOO,
  THEMAANDTHANNIZHAL,
  THEMAANARUMBOO,
  THEMAANARUNIZHAL,
  PULIMAANDTHANPOO,
  PULIMAANDTHANNIZHAL,
  PULIMAANARUMBOO,
  PULIMAANARUNIZHAL,
  KARUVILANDTHANPOO,
  KARUVILANDTHANNIZHAL,
  KARUVILANARUMBOO,
  KARUVILANARUNIZHAL,
  KOOVILANDTHANPOO,
  KOOVILANDTHANNIZHAL,
  KOOVILANARUMBOO,
  KOOVILANARUNIZHAL,
}

export type Cheer = {
  asaiList: Asai[];
  value: CheerType;
  cheerOrder: number;
}

export enum ThalaiType {
  NOT_POPULATED,
  NERONDRIA_AASIRIYATHTHALAI,
  NIRAIONDRIA_AASIRIYATHTHALAI,
}

export type Thalai = {
  firstCheer: Cheer;
  secondCheer: Cheer;
  value: ThalaiType;
}