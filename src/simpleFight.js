const units = require("./units")

function hit(attacks, attack, dice) {
    var hits = []

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
    var results = []
    unit.attacks.forEach(attack => {
        
        hits = hit(inCombat, attack, dice )
        wounds = wound(hits, attack, dice ) 
        var result = {
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

function save(baseSize, unit, wounds, damage, dice) {
    var result = {died: 0}
    fails =0
    for (i=0 ; i< wounds ; i++) {
        if (dice[i]<unit.save) {
            fails++
        }
    }
    console.log("fails "+fails)
    totalDamage = fails * damage
    console.log("td "+totalDamage)
    if (totalDamage> 0) {
        result.died = Math.floor(totalDamage / unit.wounds)
        if (result.died > baseSize) {
            result.died = baseSize
        }
    }
    return result
}

module.exports = {hit, wound, fight, save}