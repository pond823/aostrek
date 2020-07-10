
const units = require("./units");


test('get 1st unit, which should be Chaos Marauders', () => {

    unit = units.getUnitByIndex(1)

    expect(unit.name).toBe(`Chaos Marauders with Barbarian Axes`)
})

test('get Chaos Knights by name', () => {

    unit = units.getUnitByName(`Chaos Knights with Ensorcelled Weapon`)

    expect(unit.name).toBe(`Chaos Knights with Ensorcelled Weapon`)
})

test('get Saurus Warriors first attack', () => {

    unit = units.getUnitByName(`Saurus Warriors`)

    expect(unit.attacks[0].weapon).toBe(`Celestite Club`)
})
