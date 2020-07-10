const chalk = require('chalk')
const units = require('./units')
const clone = require('clone')

const rl = require("readline-sync");
const simpleFight = require('./simpleFight');
const diceBag = require('./diceBag');

console.log(chalk.red("Age Of Sigmar Battle Simulator"))

units.displayUnitNames()

var unitA, uniB


index = rl.question(`Select attacking unit? `)
unitA = units.getUnitByIndex(index)
//index = rl.question(`Select defending unit? `)
//unitB = units.getUnitByIndex(index)

dice = diceBag(100) 
wounds = simpleFight.fight(unitA.baseSize, unitA, dice)

console.log(chalk.red(unitA.name+" inflicts "+wounds+" wounds"))






