const units = require("./units")

function hit(attacks, attack, dice) {
    var hits = {result :0}
    hits.dice =[]
    for (i=0; i<attacks; i++) {
        hits.dice.push(dice[i])
        if (dice[i]>=attack.toHit ) {
            hits.result++
        }
    }
    return hits
}

function wound(hits, attack, dice) {
    var wounds = {result : 0}
    wounds.dice =[]
    for (i=0; i<hits; i++) {
       wounds.dice.push(dice[i])
        if (dice[i]>=attack.toWound ) {
            wounds.result++
        }

    }

    return wounds
}

function fight(inCombat, unit, dice) {
    var results = []
    unit.attacks.forEach(attack => {
  
        var hits = hit(attack.attacks * inCombat, attack, dice )
        var wounds = wound(hits.result, attack, dice ) 
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

function save(baseSize, unit, wounds, damage, rend, dice) {
    var result = {died: 0}
    var fails =0
    result.dice=[]
    
    for (i=0 ; i< wounds ; i++) {
        result.dice.push(dice[i])
        if (dice[i]<(unit.save+rend)) {
            fails++
        }
    }

    var totalDamage = fails * damage
    if (totalDamage> 0) {
        result.died = Math.floor(totalDamage / unit.wounds)
        if (result.died > baseSize) {
            result.died = baseSize
        }
        result.wounds = totalDamage % unit.wounds
    }
    return result
}

module.exports = {hit, wound, fight, save}