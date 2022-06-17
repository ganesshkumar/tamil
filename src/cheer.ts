import { toAsaiList } from "./asai";
import StateMachine from 'javascript-state-machine';

const getCheerStateMachine = () => {
  return new StateMachine({
    init: 'NONE',
    transitions: [
      // 1-Asai Cheer
      {name: 'NER', from: 'NONE', to: 'NER'},
      {name: 'NIRAI', from: 'NONE', to: 'NIRAI'},
      // 2-Asai Cheer
      {name: 'NER', from: 'NER', to: 'THEMA'},
      {name: 'NER', from: 'NIRAI', to: 'PULIMA'},
      {name: 'NIRAI', from: 'NIRAI', to: 'KARUVILAM'},
      {name: 'NIRAI', from: 'NER', to: 'KOOVILAM'},
      // 3-Asai Cheer
      {name: 'NER', from: 'THEMA', to: 'THEMAANGAI'},
      {name: 'NIRAI', from: 'THEMA', to: 'THEMAANGANI'},
      {name: 'NER', from: 'PULIMA', to: 'PULIMAANGAI'},
      {name: 'NIRAI', from: 'PULIMA', to: 'PULIMAANGANI'},
      {name: 'NER', from: 'KARUVILAM', to: 'KARUVILANGAI'},
      {name: 'NIRAI', from: 'KARUVILAM', to: 'KARUVILANGANI'},
      {name: 'NER', from: 'KOOVILAM', to: 'KOOVILANGAI'},
      {name: 'NIRAI', from: 'KOOVILAM', to: 'KOOVILANGANI'},
      // 4-Asai Cheer
      {name: 'NER', from: 'THEMAANGAI', to: 'THEMAANDTHANPOO'},
      {name: 'NIRAI', from: 'THEMAANGAI', to: 'THEMAANDTHANNIZHAL'},
      {name: 'NER', from: 'THEMAANGANI', to: 'THEMAANARUMBOO'},
      {name: 'NIRAI', from: 'THEMAANGANI', to: 'THEMAANARUNIZHAL'},
      {name: 'NER', from: 'PULIMAANGAI', to: 'PULIMAANDTHANPOO'},
      {name: 'NIRAI', from: 'PULIMAANGAI', to: 'PULIMAANDTHANNIZHAL'},
      {name: 'NER', from: 'PULIMAANGANI', to: 'PULIMAANARUMBOO'},
      {name: 'NIRAI', from: 'PULIMAANGANI', to: 'PULIMAANARUNIZHAL'},
      {name: 'NER', from: 'KARUVILANGAI', to: 'KARUVILANDTHANPOO'},
      {name: 'NIRAI', from: 'KARUVILANGAI', to: 'KARUVILANDTHANNIZHAL'},
      {name: 'NER', from: 'KARUVILANGANI', to: 'KARUVILANARUMBOO'},
      {name: 'NIRAI', from: 'KARUVILANGANI', to: 'KARUVILANARUNIZHAL'},
      {name: 'NER', from: 'KOOVILANGAI', to: 'KOOVILANDTHANPOO'},
      {name: 'NIRAI', from: 'KOOVILANGAI', to: 'KOOVILANDTHANNIZHAL'},
      {name: 'NER', from: 'KOOVILANGANI', to: 'KOOVILANARUMBOO'},
      {name: 'NIRAI', from: 'KOOVILANGANI', to: 'KOOVILANARUNIZHAL'},
    ]
  });
}

export const isOrasaichcheer = (word: string) => toAsaiList(word).length === 1;

export const isErasaichcheer = (word: string) => toAsaiList(word).length === 2;

export const isMoovasaichcheer = (word: string) => toAsaiList(word).length === 3;

export const isNaalasaichcheer = (word: string) => toAsaiList(word).length === 4;

export const toCheer = (word: string) => {
  let asaiList = toAsaiList(word);

  const cheer = {
    asaiList: [...asaiList],
    cheer: '',
    cheerOrder: asaiList.length
  };
  
  const fsm = getCheerStateMachine();
  let nextAsai = asaiList.shift();
  while((asaiList && asaiList.length > 0) || nextAsai) {
    if (nextAsai && fsm.can(nextAsai)) {
      fsm[nextAsai.toLowerCase()]();
      nextAsai = asaiList.shift();
    } else {
      break;
    }
  }

  if (asaiList && asaiList.length === 0) {
    cheer.cheer = fsm.state;
  }

  return cheer;
};
