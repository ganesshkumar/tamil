import { toCheer } from './cheer';
import { toThalai } from './thalai';
import { ThalaiType } from './types';

describe("check ஆசிரியத்தளை", () => {
  it("நேரொன்றிய ஆசிரியத்தளை", () => {
    const firstWord = "காமர்";
    const secondWord = "சேவடி";

    const result = toThalai(toCheer(firstWord), toCheer(secondWord));

    expect(result.value).toBe(ThalaiType.NERONDRIA_AASIRIYATHTHALAI);
  });

  it("நிரையொன்றிய ஆசிரியத்தளை", () => {
    const firstWord = "தாமரை";
    const secondWord = "புரையும்";

    const result = toThalai(toCheer(firstWord), toCheer(secondWord));

    expect(result.value).toBe(ThalaiType.NIRAIONDRIA_AASIRIYATHTHALAI);
  });
});
