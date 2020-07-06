const chalk = require('chalk')

units = [
    {
        faction : "Slaves To The Darkness", 
        units : [
            {
                name : "Chaos Marauders",
                type : "Infantry",
                base_size : 20
            },
            {
                name : "Chaos Warriors",
                type : "Infantry",
                base_size : 5
            },
            {
                name : "Chaos Knights",
                type : "Cavalry",
                base_size : 5
            },
            {
                name : "Chaos Lord",
                type : "Infantry",
                base_size : 1
            }

        ]
    }, 
    {
        faction : "Gloomspite Gits", 
        units : [
            {
                name : "Stikkas",
                type : "Infantry",
                base_size : 20
            },
            {
                name : "Squid Riders",
                type : "Infantry",
                base_size : 5
            },
            {
                name : "Troggoth",
                type : "Cavalry",
                base_size : 5
            },
            {
                name : "Gloomspite Gitlord",
                type : "Infantry",
                base_size : 1
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
        console.log(chalk.blue(factions.faction))
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



module.exports={units, displayUnitNames, getUnitByIndex}