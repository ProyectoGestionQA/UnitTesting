import Box from '../js/class/Box';
import BoxManager from '../js/class/BoxManager'
const boxManager = new BoxManager();

test('is can change box shape false', () => {
    const box = boxManager.boxes[0][0];
    expect(box.init(0)).toBe(false);
});

test('is filled box true', () => {
    const box = boxManager.boxes[0][0];
    expect(box.init(1)).toBe(true);
});