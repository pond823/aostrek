function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function rollDice(number) {
    results = []
    for (i=0; i<number; i++) {
        results.push(getRandomInt(5)+1)
    }

    return results
}
module.exports = rollDice;
