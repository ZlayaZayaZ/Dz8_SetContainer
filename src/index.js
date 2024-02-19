export class Character {
    constructor (name) {
        this.name = name;
    }
}

export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error('character ear exists');
        }
        this.members.add(character);
        return this.members;
    }
    addAll(...heros) {
        for (const hero of heros) {
            this.members.add(hero)
          }
          return this.members;
    }
    toArray() {
        let result = [];
        this.members.forEach(member => result.push(member));
        return result;
    }
}
