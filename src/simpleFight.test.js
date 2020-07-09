const simpleFight = require(`./simpleFight`)
const units = require(`./units`)



test('a unit of Saurus Warriors to hit count rolling just 4s is 10', () => {

    dice = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    warriors = units.getUnitByName(`Saurus Warriors`)
    hits = simpleFight.hit(warriors.baseSize, warriors.attacks[0], dice)
    expect(hits).toBe(10)
})

test('a unit of Saurus Warriors to wound count rolling just 4s is 10', () => {

    dice = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    warriors = units.getUnitByName(`Saurus Warriors`)
    wounds = simpleFight.wound(warriors.baseSize, warriors.attacks[0], dice)
    expect(hits).toBe(10)
})