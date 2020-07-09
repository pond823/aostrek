const chalk = require('chalk')
const units = require('./units')
const clone = require('clone')

const rl = require("readline-sync");


console.log(chalk.red("Age Of Sigmar Battle Simulator"))

units.displayUnitNames()

var unitA, uniB


index = rl.question(`Select 1st unit`)
unitA = units.getUnitByIndex(index)
index = rl.question(`Select 2nd unit`)
unitB = units.getUnitByIndex(index)

console.log(unitA)
console.log(unitB)



