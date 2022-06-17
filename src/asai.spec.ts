import { isNer, isNirai, toAsaiList } from './asai';
import { NER, NIRAI } from './rule';

describe('check asai list', () => {
  it ('ஆ', () => {
    const asaiList = toAsaiList('ஆ');
    expect(asaiList[0]).toBe(NER);
  });

  it ('தொழார்', () => {
    const asaiList = toAsaiList('தொழார்');
    expect(asaiList[0]).toBe(NIRAI);
  });

  it ('கூவிளம்', () => {
    const asaiList = toAsaiList('கூவிளம்');
    expect(asaiList[0]).toBe(NER);
    expect(asaiList[1]).toBe(NIRAI);
  });
  
  it ('புளிமாங்கனி', () => {
    const asaiList = toAsaiList('புளிமாங்கனி');
    expect(asaiList[0]).toBe(NIRAI);
    expect(asaiList[1]).toBe(NER);
    expect(asaiList[2]).toBe(NIRAI);
  });
});

describe('check ner', () => {
  it('அ is ner', () => {
    expect(isNer('அ')).toBeTruthy();
  });

  it('க is ner', () => {
    expect(isNer('க')).toBeTruthy();
  });

  it('ஆ is ner', () => {
    expect(isNer('ஆ')).toBeTruthy();
  });

  it('பூ is ner', () => {
    expect(isNer('பூ')).toBeTruthy();
  });

  it('அன் is ner', () => {
    expect(isNer('அன்')).toBeTruthy();
  });

  it('விண் is ner', () => {
    expect(isNer('விண்')).toBeTruthy();
  });

  it('ஆள் is ner', () => {
    expect(isNer('ஆள்')).toBeTruthy();
  });

  it('தீர் is ner', () => {
    expect(isNer('தீர்')).toBeTruthy();
  });

  it('அடி is not ner', () => {
    expect(isNer('அடி')).toBeFalsy();
  });

  it('மன is not ner', () => {
    expect(isNer('மன')).toBeFalsy();
  });

  it('அடா is not ner', () => {
    expect(isNer('அடா')).toBeFalsy();
  });

  it('புகா is not ner', () => {
    expect(isNer('புகா')).toBeFalsy();
  });

  it('அடர் is not ner', () => {
    expect(isNer('அடர்')).toBeFalsy();
  });

  it('திகில் is not ner', () => {
    expect(isNer('திகில்')).toBeFalsy();
  });

  it('அதால் is not ner', () => {
    expect(isNer('அதால்')).toBeFalsy();
  });

  it('தொழார் is not ner', () => {
    expect(isNer('தொழார்')).toBeFalsy();
  });
});

describe('check nirai', () => {
  it('அ is not nirai', () => {
    expect(isNirai('அ')).toBeFalsy();
  });

  it('க is not nirai', () => {
    expect(isNirai('க')).toBeFalsy();
  });

  it('ஆ is not nirai', () => {
    expect(isNirai('ஆ')).toBeFalsy();
  });

  it('பூ is not nirai', () => {
    expect(isNirai('பூ')).toBeFalsy();
  });

  it('அன் is not nirai', () => {
    expect(isNirai('அன்')).toBeFalsy();
  });

  it('விண் is not nirai', () => {
    expect(isNirai('விண்')).toBeFalsy();
  });

  it('ஆள் is not nirai', () => {
    expect(isNirai('ஆள்')).toBeFalsy();
  });

  it('தீர் is not nirai', () => {
    expect(isNirai('தீர்')).toBeFalsy();
  });

  it('அடி is nirai', () => {
    expect(isNirai('அடி')).toBeTruthy();
  });

  it('மன is nirai', () => {
    expect(isNirai('மன')).toBeTruthy();
  });

  it('அடா is nirai', () => {
    expect(isNirai('அடா')).toBeTruthy();
  });

  it('புகா is nirai', () => {
    expect(isNirai('புகா')).toBeTruthy();
  });

  it('அடர் is nirai', () => {
    expect(isNirai('அடர்')).toBeTruthy();
  });

  it('திகில் is nirai', () => {
    expect(isNirai('திகில்')).toBeTruthy();
  });

  it('அதால் is nirai', () => {
    expect(isNirai('அதால்')).toBeTruthy();
  });

  it('தொழார் is nirai', () => {
    expect(isNirai('தொழார்')).toBeTruthy();
  });
});
