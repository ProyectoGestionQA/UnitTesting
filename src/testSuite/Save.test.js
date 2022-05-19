import Save from "../js/class/Save";

test('is game complete, true', () => {
    const save = new Save(1);
    expect(save.setIsGameComplete(true)).toBe(true);
});

test('is game complete, false', () => {
    const save = new Save(1);
    expect(save.setIsGameComplete(false)).toBe(false);
});

test('set maxClicks to 10', () => {
    const save = new Save(1);
    expect(save.setMaxClick(10)).toBe(10);
});

test('set maxLevels to 8', () => {
    const save = new Save(1);
    expect(save.setMaxLevel(8)).toBe(8);
});

test('is possible to click next', () => {
    const save = new Save(12);
    expect(save.isCanClickNext(3)).toBe(true);
});

test('is possible to increase max level', () => {
    const save = new Save(12);
    expect(save.isCanIncreaseClick(3)).toBe(false);
});