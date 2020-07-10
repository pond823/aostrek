const units = require("./units")

function hit(attacks, attack, dice) {
    hits = []

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
    results = []
    unit.attacks.forEach(attack => {
        
        hits = hit(inCombat, attack, dice )
        wounds = wound(hits, attack, dice ) 
        result = {
            name : attack.weapon,
            thatHit : hits,
            thatWounded : wounds,
            damage : attack.damage,
            rend : attack.rend
        }
        results.push(result)

    }); 
    return results;


}

module.exports = {hit, wound, fight}