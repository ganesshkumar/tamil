import { isErasaichcheer, isMoovasaichcheer, isNaalasaichcheer, isOrasaichcheer, toCheer } from './cheer';
import { KARUVILAM, KARUVILANARUMBOO, KARUVILANARUNIZHAL, KARUVILANDTHANNIZHAL, KARUVILANDTHANPOO, KARUVILANGAI, KARUVILANGANI, KOOVILAM, KOOVILANARUMBOO, KOOVILANARUNIZHAL, KOOVILANDTHANNIZHAL, KOOVILANDTHANPOO, KOOVILANGAI, KOOVILANGANI, NER, NIRAI, PULIMA, PULIMAANARUMBOO, PULIMAANARUNIZHAL, PULIMAANDTHANNIZHAL, PULIMAANDTHANPOO, PULIMAANGAI, PULIMAANGANI, THEMA, THEMAANARUMBOO, THEMAANARUNIZHAL, THEMAANDTHANNIZHAL, THEMAANDTHANPOO, THEMAANGAI, THEMAANGANI } from './rule';

describe('check 1-asai cheer', () => {
  it ('நாள்', () => {
    const cheer = toCheer('நாள்');
    expect(cheer.cheerOrder).toBe(1);
    expect(cheer.asaiList.length).toBe(1);
    expect(cheer.cheer).toBe(NER);
    expect(isOrasaichcheer('நாள்')).toBe(true);
  });

  it ('மலர்', () => {
    const cheer = toCheer('மலர்');
    expect(cheer.cheerOrder).toBe(1);
    expect(cheer.asaiList.length).toBe(1);
    expect(cheer.cheer).toBe(NIRAI);
  });
});

describe('check 2-asai cheer', () => {
  it ('தேமா', () => {
    const cheer = toCheer('தேமா');
    expect(cheer.cheerOrder).toBe(2);
    expect(cheer.asaiList.length).toBe(2);
    expect(cheer.cheer).toBe(THEMA);
    expect(isErasaichcheer('தேமா')).toBeTruthy();
  });

  it ('புளிமா', () => {
    const cheer = toCheer('புளிமா');
    expect(cheer.cheerOrder).toBe(2);
    expect(cheer.asaiList.length).toBe(2);
    expect(cheer.cheer).toBe(PULIMA);
  });

  it ('கருவிளம்', () => {
    const cheer = toCheer('கருவிளம்');
    expect(cheer.cheerOrder).toBe(2);
    expect(cheer.asaiList.length).toBe(2);
    expect(cheer.cheer).toBe(KARUVILAM);
  });

  it ('கூவிளம்', () => {
    const cheer = toCheer('கூவிளம்');
    expect(cheer.cheerOrder).toBe(2);
    expect(cheer.asaiList.length).toBe(2);
    expect(cheer.cheer).toBe(KOOVILAM);
  });
});

describe('check 3-asai cheer', () => {
  it ('தேமாங்காய்', () => {
    const cheer = toCheer('தேமாங்காய்');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(THEMAANGAI);
    expect(isMoovasaichcheer('தேமாங்காய்')).toBeTruthy();
  });

  it ('தேமாங்கனி', () => {
    const cheer = toCheer('தேமாங்கனி');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(THEMAANGANI);
  });

  it ('புளிமாங்காய்', () => {
    const cheer = toCheer('புளிமாங்காய்');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(PULIMAANGAI);
  });

  it ('புளிமாங்கனி', () => {
    const cheer = toCheer('புளிமாங்கனி');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(PULIMAANGANI);
  });

  it ('கருவிளங்காய்', () => {
    const cheer = toCheer('கருவிளங்காய்');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(KARUVILANGAI);
  });

  it ('கருவிளங்கனி', () => {
    const cheer = toCheer('கருவிளங்கனி');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(KARUVILANGANI);
  });

  it ('கூவிளங்காய்', () => {
    const cheer = toCheer('கூவிளங்காய்');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(KOOVILANGAI);
  });

  it ('கூவிளங்கனி', () => {
    const cheer = toCheer('கூவிளங்கனி');
    expect(cheer.cheerOrder).toBe(3);
    expect(cheer.asaiList.length).toBe(3);
    expect(cheer.cheer).toBe(KOOVILANGANI);
  });
});

describe('check 4-asai cheer', () => {
  it ('தேமாந்தண்பூ', () => {
    const cheer = toCheer('தேமாந்தண்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(THEMAANDTHANPOO);
    expect(isNaalasaichcheer('தேமாந்தண்பூ')).toBeTruthy();
  });

  it ('தேமாந்தண்ணிழல்', () => {
    const cheer = toCheer('தேமாந்தண்ணிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(THEMAANDTHANNIZHAL);
  });

  it ('தேமாநறும்பூ', () => {
    const cheer = toCheer('தேமாநறும்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(THEMAANARUMBOO);
  });

  it ('தேமாநறுநிழல்', () => {
    const cheer = toCheer('தேமாநறுநிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(THEMAANARUNIZHAL);
  });

  it ('புளிமாந்தண்பூ', () => {
    const cheer = toCheer('புளிமாந்தண்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(PULIMAANDTHANPOO);
  });

  it ('புளிமாந்தண்ணிழல்', () => {
    const cheer = toCheer('புளிமாந்தண்ணிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(PULIMAANDTHANNIZHAL);
  });

  it ('புளிமாநறும்பூ', () => {
    const cheer = toCheer('புளிமாநறும்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(PULIMAANARUMBOO);
  });

  it ('புளிமாநறுநிழல்', () => {
    const cheer = toCheer('புளிமாநறுநிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(PULIMAANARUNIZHAL);
  });

  it ('கருவிளந்தண்பூ', () => {
    const cheer = toCheer('கருவிளந்தண்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KARUVILANDTHANPOO);
  });

  it ('கருவிளந்தண்ணிழல்', () => {
    const cheer = toCheer('கருவிளந்தண்ணிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KARUVILANDTHANNIZHAL);
  });

  it ('கருவிளநறும்பூ', () => {
    const cheer = toCheer('கருவிளநறும்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KARUVILANARUMBOO);
  });

  it ('கருவிளநறுநிழல்', () => {
    const cheer = toCheer('கருவிளநறுநிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KARUVILANARUNIZHAL);
  });

  it ('கூவிளந்தண்பூ', () => {
    const cheer = toCheer('கூவிளந்தண்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KOOVILANDTHANPOO);
  });

  it ('கூவிளந்தண்ணிழல்', () => {
    const cheer = toCheer('கூவிளந்தண்ணிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KOOVILANDTHANNIZHAL);
  });

  it ('கூவிளநறும்பூ', () => {
    const cheer = toCheer('கூவிளநறும்பூ');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KOOVILANARUMBOO);
  });

  it ('கூவிளநறுநிழல்', () => {
    const cheer = toCheer('கூவிளநறுநிழல்');
    expect(cheer.cheerOrder).toBe(4);
    expect(cheer.asaiList.length).toBe(4);
    expect(cheer.cheer).toBe(KOOVILANARUNIZHAL);
  });
});