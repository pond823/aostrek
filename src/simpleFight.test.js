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

test('a unit of Saurus Warriors total wounds inflicted count rolling just 6s is 20', () => {

    dice = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
    warriors = units.getUnitByName(`Saurus Warriors`)
    result = simpleFight.fight(warriors.baseSize, warriors, dice)
    expect(result[0].thatWounded).toBe(10)
    expect(result[1].thatWounded).toBe(10)
    
})