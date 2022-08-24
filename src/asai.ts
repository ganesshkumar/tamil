import StateMachine from 'javascript-state-machine';
import { toAlavu, toLetters } from "./letters";
import { Alavu, AlavuType, Asai, AsaiType } from "./types";

const getAsaiStateMachine = () => {
  return new StateMachine({
    init: 'NONE',
    transitions: [
      {name: 'KURIL', from: 'NONE', to: 'NER_1'},
      {name: 'OTRU', from: 'NER_1', to: 'NER_2'},
      {name: 'KURIL', from: 'NER_1', to: 'NIRAI_1'},
      {name: 'OTRU', from: 'NIRAI_1', to: 'NIRAI_2'},
      {name: 'NEDIL', from: 'NER_1', to: 'NIRAI_3'},
      {name: 'OTRU', from: 'NIRAI_3', to: 'NIRAI_4'},
      {name: 'NEDIL', from: 'NONE', to: 'NER_3'},
      {name: 'OTRU', from: 'NER_3', to: 'NER_4'},
    ]
  });
}

export const getRulesByLetters = (word: string) => {
  return toAlavu(toLetters(word));
}

export const toAsaiList = (word: string): Asai[] => {
  const asaiList: Asai[] = [];

  let alavuList = toAlavu(toLetters(word)).filter(letter => !!letter);
  let nextAlavu = alavuList.shift();
  let part: Alavu[] = [];

  while ((alavuList && alavuList.length > 0) || nextAlavu) {
    const fsm = getAsaiStateMachine();

    while(nextAlavu && fsm.can(AlavuType[nextAlavu.value])) {
      fsm[AlavuType[nextAlavu.value].toLowerCase()]();
      part.push(nextAlavu);
      nextAlavu = alavuList.shift();
    }

    const asai = AsaiType[fsm.state.split('_')[0] as keyof typeof AsaiType];
    asaiList.push({
      value: asai,
      part: [...part]
    });
    part = [];
  }

  return asaiList;
}

export const isNer = (word: string) => {
  const asai = toAsaiList(word);
  return asai.length === 1 && asai[0].value === AsaiType.NER;
}

export const isNirai = (word: string) => {
  const asai = toAsaiList(word);
  return asai.length === 1 && asai[0].value === AsaiType.NIRAI;
}
