const chalk = require('chalk')
const units = require('./units')
//const clone = require('clone')

const rl = require("readline-sync")
const simpleFight = require('./simpleFight')
const diceBag = require('./diceBag')
const outputFormat = require(`./outputFormat`)
const { save } = require('./simpleFight')

console.log(chalk.red("Age Of Sigmar Battle Simulator"))

units.displayUnitNames()

var unitA, unitB

index = rl.question(`Select attacking unit? `)
unitA = units.getUnitByIndex(index)
index = rl.question(`Select defending unit? `)
unitB = units.getUnitByIndex(index)


results = simpleFight.fight(unitA.baseSize, unitA, diceBag(100))

console.log(chalk.red(unitA.name+" fights against "+unitB.name))
results.forEach(result => {
    process.stdout.write("  "+result.name +" hits "+result.thatHit.result+" times")
    outputFormat.dice(result.thatHit.dice)
    process.stdout.write("\n  and wounds "+result.thatWounded.result+" times, each doing "+result.damage+" damage at rend -"+result.rend)
    outputFormat.dice(result.thatWounded.dice)
    saves = simpleFight.save(unitB.baseSize,unitB, result.thatWounded.result, result.damage, result.rend, diceBag(result.thatWounded.result+1))
    process.stdout.write("\n  "+saves.died+" "+unitB.name+" died from this attack" ) 
    if (saves.wounds > 0) {
        process.stdout.write (" and one took "+saves.wounds+" wounds")
    }
    outputFormat.dice(saves.dice)
    console.log()


});






