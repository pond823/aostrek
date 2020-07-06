
const units = require("./units");


test('get 1st unit, which should be Chaos Marauders', () => {

    unit = units.getUnitByIndex(1);

    expect(unit.name).toBe(`Chaos Marauders`); 
});
