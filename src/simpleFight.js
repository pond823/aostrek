const units = require("./units")

function hit(attacks, attack, dice) {
    hits = 0

    for (i=0; i<attacks; i++) {
        if (dice[i]>=attack.toHit ) {
            hits++
        }

    }
    return hits
}

function wound(hits, unit, dice) {
    wounds = 0

    for (i=0; i<hits; i++) {
        if (dice[i]>=unit.ws ) {
            wounds++
        }

    }
    return wounds
}

module.exports = {hit, wound}