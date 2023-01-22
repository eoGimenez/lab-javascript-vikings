// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        if (damage !== 0) this.health -= damage;
        }
    }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        if (damage >= this.health) {
            return `${this.name} has died in act of combat`;
        }
        this.health -= damage;
        return `${this.name} has received ${damage} points of damage`;
/*         if (damage !== 0) this.health -= damage;
        if (damage < this.health) {
            return `${this.name} has received ${damage} points of damage`;
        } else  if  (damage >= this.health)  {
            return `${this.name} has died in act of combat`;
        } */
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }
    receiveDamage(damage) { 
        if (damage >= this.health) {
            return `A Saxon has died in combat`;
        }
        this.health -= damage;
        return `A Saxon has received ${damage} points of damage`;
        /* if (damage !== 0) this.health -= damage; 
        if (damage > this.health) {
            return `A Saxon has received ${damage} points of damage`;
        } else if (damage > this.health) {
            return `A Saxon has died in combat`;
        } */
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
addViking(Viking) {
    this.vikingArmy.push(Viking); 
    }
addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
    }

vikingAttack () {
    //let resultado1 = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)].attack()) 
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)]
    let randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)]
    let resultado1 = randomSaxon.receiveDamage(randomViking.attack()) 
     if (resultado1 >= randomSaxon.health) { 
        this.saxonArmy.forEach(function(soldier, i){ 
            if (soldier.health <= 0) {
                this.saxonArmy.splice(i , 1)
            }
        })    
    } 
/*     for (i = 0; i < this.saxonArmy.length; i++) {
      if (this.saxonArmy[i].health <= 0) {
          this.saxonArmy.splice(i, 1)
      }
  }  */   
    return resultado1;
    } 
saxonAttack() {
    let resultado2 = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)].attack())
    this.vikingArmy.forEach(function(Vikingo, i){ 
        if (Vikingo.health <= 0) {
            this.vikingArmy.splice(i , 1)
        }
    })    
/*        for (i = 0; i < this.vikingArmy.length; i++) {
        if (this.vikingArmy[i].health <= 0) {
            this.vikingArmy.splice(i, 1)
        }
    }   */     
    return resultado2;
    }
showStatus() {
    if (!this.vikingArmy.length) {
        return `Saxons have fought for their lives and survived another day...`
    } else if (!this.saxonArmy.length) {
        return `Vikings have won the war of the century!`
    } else return `Vikings and Saxons are still in the thick of battle.`
    }
}
