const chalk = require('chalk')
const units = require('./units')

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.red("Age Of Sigmar Battle Simulator"))

units.displayUnitNames();

rl.question("Select a unit? ", function(index) {
    console.log(units.getUnitByIndex(index))
})

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});