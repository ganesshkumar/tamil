import { isKuril, isNedil, isOtru, toLetters } from './letters';

describe('check kuril', () => {
  it('க் is not kuril', () => {
    expect(isKuril('க்')).toBeFalsy();
  });

  it('க is kuril', () => {
    expect(isKuril('க')).toBeTruthy();
  });

  it('கா is not kuril', () => {
    expect(isKuril('கா')).toBeFalsy();
  });
});

describe('check nedil', () => {
  it('க் is not nedil', () => {
    expect(isNedil('க்')).toBeFalsy();
  });

  it('க is not nedil', () => {
    expect(isNedil('க')).toBeFalsy();
  });

  it('கா is nedil', () => {
    expect(isNedil('கா')).toBeTruthy();
  });
});


describe('check otru', () => {
  it('க் is otru', () => {
    expect(isOtru('க்')).toBeTruthy();
  });

  it('க is not otru', () => {
    expect(isOtru('க')).toBeFalsy();
  });

  it('கா is not otru', () => {
    expect(isOtru('கா')).toBeFalsy();
  });
});

describe('check splitting words to letters', () => {
  it('ஆ', () => {
    const letters = toLetters('ஆ');
    expect(letters.length).toBe(1);
    expect(letters[0]).toBe('ஆ');
  });

  it('விண்', () => {
    const letters = toLetters('விண்');
    expect(letters.length).toBe(2);
    expect(letters[0]).toBe('வி');
    expect(letters[1]).toBe('ண்');
  });

  it('தொழார்', () => {
    const letters = toLetters('தொழார்');
    expect(letters.length).toBe(3);
    expect(letters[0]).toBe('தொ');
    expect(letters[1]).toBe('ழா');
    expect(letters[2]).toBe('ர்');
  });
})
