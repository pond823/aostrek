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

function wound(hits, attack, dice) {
    wounds = 0

    for (i=0; i<hits; i++) {
        if (dice[i]>=attack.toWound ) {
            wounds++
        }

    }
    return wounds
}

function fight(inCombat, unit, dice) {
    wounds =0
    unit.attacks.forEach(attack => {
        hits = hit(inCombat, attack, dice )
        wounds+= wound(hits, attack, dice ) 
    }); 
    
    return wounds;


}

module.exports = {hit, wound, fight}