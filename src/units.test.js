
const units = require("./units");


test('get 1st unit, which should be Chaos Marauders', () => {

    unit = units.getUnitByIndex(1)

    expect(unit.name).toBe(`Chaos Marauders`)
})

test('get Stabbas by name', () => {

    unit = units.getUnitByName(`Stabbas`)

    expect(unit.name).toBe(`Stabbas`)
})

test('get Saurus Warriors first attack', () => {

    unit = units.getUnitByName(`Saurus Warriors`)

    expect(unit.attacks[0].weapon).toBe(`Celestite Club`)
})
