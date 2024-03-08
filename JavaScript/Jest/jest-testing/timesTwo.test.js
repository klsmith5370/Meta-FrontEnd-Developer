const timesTwo = require('./timesTwo');

// Write the first test
describe('timesTwo function', () => {
    test('returns the number times 2', () => {
        expect(timesTwo(10)).toBe(20)
    });
});
