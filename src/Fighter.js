const MAX_LIFE = 100;
class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }



    fight(enemy) {
        const damage = Math.floor(Math.random() * this.strength) + 1;
        const actualDamage = Math.max(damage - enemy.dexterity, 0);
        enemy.life = Math.max(enemy.life - actualDamage, 0);
        console.log(`${this.name} attacks ${enemy.name} for ${actualDamage} damage.`)
    }

    RandomDamage(max) {
        return Math.floor(Math.random() * max + 1);
    }

    isAlive() {
        return this.life > 0;
    }
}

module.exports = { Fighter };

