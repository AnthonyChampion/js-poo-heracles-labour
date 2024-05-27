
const { Fighter } = require("./src/Fighter");

const heracles = new Fighter(
    "🗡️Heracles", 20, 6
);

const nemeanLion = new Fighter(
    "🦁Nemean Lion", 11, 13
);


let round = 1;

while (heracles.isAlive() && nemeanLion.isAlive()) {

    console.log(`\n Round ${round}:\n `)
    heracles.fight(nemeanLion);

    if (nemeanLion.isAlive()) {
        nemeanLion.fight(heracles);
    }

    round++;

}

