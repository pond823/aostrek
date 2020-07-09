const chalk = require('chalk')

units = [
    {
        faction : "Slaves To The Darkness", 
        units : [
            {
                name : "Chaos Marauders",
                type : "Infantry",
                baseSize : 20,
            },
            {
                name : "Chaos Warriors",
                type : "Infantry",
                baseSize : 5
            },
            {
                name : "Chaos Knights",
                type : "Cavalry",
                baseSize : 5
            },
            {
                name : "Chaos Lord",
                type : "Infantry",
                baseSize : 1
            }

        ]
    }, 
    {
        faction : "Gloomspite Gits", 
        units : [
            {
                name : "Stabbas",
                type : "Infantry",
                baseSize : 20,
  
            },
            {
                name : "Squid Riders",
                type : "Infantry",
                baseSize : 5
            },
            {
                name : "Troggoth",
                type : "Cavalry",
                baseSize : 5
            },
            {
                name : "Gloomspite Gitlord",
                type : "Infantry",
                baseSize : 1
            }

        ]
    },
    {
        faction : "Seraphon", 
        units : [
            {
                name : "Saurus Warriors",
                type : "Infantry",
                baseSize : 10,
                attacks : [
                    {
                        weapon : "Celestite Club",
                        Range : 1,
                        attacks : 1,
                        toHit : 4,
                        toWound : 3,
                        rend : 1,
                        damage : 1
                    },
                    {
                        weapon : "Powerful Jaws",
                        Range : 1,
                        attacks : 1,
                        toHit : 5,
                        toWound : 4,
                        rend : 0,
                        damage : 1
                    }
                ]

                
            }
        ]
    }

]
function displayUnitNames() {
    i =0
    units.forEach(factions => {
        console.log(chalk.blue(factions.faction))
        factions.units.forEach(unit => {
            i++
            console.log(i+" "+chalk.green(unit.name))        
        });
        }
    );
}

function getUnitByIndex(index) {
    i =0
    unitFound={}
    units.forEach(factions => {
        factions.units.forEach(unit => {
            i++
            if (index == i) {
                unitFound=unit
            }     
        });
        }
    );
    return unitFound
}

function getUnitByName(name) {

    unitFound={}
    units.forEach(factions => {
        factions.units.forEach(unit => {
            if (unit.name == name) {
                unitFound=unit
            }     
        });
        }
    );
    return unitFound
}



module.exports={units, displayUnitNames, getUnitByIndex, getUnitByName}