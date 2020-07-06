const doesjestwork = require('./doesjestwork');

test('test that jest', () => {
  expect(doesjestwork(1)).toBe(`yes`);
});

