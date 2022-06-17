import { letterRule, toLetters } from "./letters";
import { NER, NIRAI } from './rule';
import StateMachine from 'javascript-state-machine';

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
  return toLetters(word).map(letter => letterRule(letter));
}

export const toAsaiList = (word: string): string[] => {
  const asai: string[] = [];

  let letters = getRulesByLetters(word).filter(letter => !!letter);
  let nextLetter = letters.shift();

  while ((letters && letters.length > 0) || nextLetter) {
    const fsm = getAsaiStateMachine();

    while(nextLetter && fsm.can(nextLetter)) {
      fsm[nextLetter.toLowerCase()]();
      nextLetter = letters.shift();
    }

    asai.push(fsm.state.split('_')[0]);
  }

  return asai;
}

// export const isOrasaichcheer = (word: string) => toAsaiList(word).length === 1;

export const isNer = (word: string) => {
  const asai = toAsaiList(word);
  return asai.length === 1 && asai[0] === NER;
}

export const isNirai = (word: string) => {
  const asai = toAsaiList(word);
  return asai.length === 1 && asai[0] === NIRAI;
}
