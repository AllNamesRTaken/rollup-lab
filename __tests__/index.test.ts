import { add } from "../src/index"

describe("Simple expression tests", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });
});