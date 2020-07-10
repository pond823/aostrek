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
results = simpleFight.fight(unitA.baseSize, unitA, dice)

console.log(chalk.red(unitA.name+" scores "))
results.forEach(result => {
    console.log("  "+result.name +" hits "+result.thatHit+" times and wounds "+result.thatWounded+" times, each doing "+result.damage+" damage at rend -"+result.rend)
});






