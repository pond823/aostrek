const chalk = require('chalk')

function dice(diceArray) {
    if (diceArray.length > 0 ) {
        process.stdout.write(" [ ")
        diceArray.forEach(element => {
            process.stdout.write(element+" ")
        });
        process.stdout.write("]")
    }

}

module.exports = {dice}
