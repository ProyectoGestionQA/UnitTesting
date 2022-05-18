import Counter from '../js/class/Counter/Counter';
import globalData from '../js/const/globalData';

test('adds 1 to counter', () => {
    const levelCounter = new Counter(globalData.ids.levelCounter);
    expect(levelCounter.increaseCounter()).toBe(1);
});
