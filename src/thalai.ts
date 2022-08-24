import StateMachine from 'javascript-state-machine';
import { AsaiType, Cheer, Thalai, ThalaiType } from './types';

const getThalaiStateMachine = () => {
  return new StateMachine({
    init: 'NONE',
    transitions: [
      // 1-Asai Cheer
      {name: 'NER', from: 'NONE', to: 'NER'},
      {name: 'NIRAI', from: 'NONE', to: 'NIRAI'},
      // 2-Asai Cheer
    ]
  });
}

export const toThalai = (first: Cheer, second: Cheer): Thalai => {
  let thalaiType = ThalaiType.NOT_POPULATED;
  if (first.cheerOrder === 2) {
    if (first.asaiList[first.asaiList.length -1].value === second.asaiList[0].value) {
      if (second.asaiList[0].value === AsaiType.NER) {
        thalaiType = ThalaiType.NERONDRIA_AASIRIYATHTHALAI;
      } else if (second.asaiList[0].value === AsaiType.NIRAI) {
        thalaiType = ThalaiType.NIRAIONDRIA_AASIRIYATHTHALAI;
      }
    }
  }

  return {
    firstCheer: first,
    secondCheer: second,
    value: thalaiType,
  }
}
