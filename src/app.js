import { bowerman } from "./bowerman.js";
import { daemon } from "./daemon.js";
import { swordsman } from "./swordsman.js";

class Team {
    constructor(...characters) {
        this.listOfCharacters = {
            characters: [...characters],
            [Symbol.iterator]() {
                let index = 0;
                return {
                    next: () => {
                        if (index < this.characters.length) {
                            return {
                                value: this.characters[index++],
                                done: false
                            };
                        } else {
                            return {value: undefined, done: true};
                        }
                    }
                };
            }
        };
    }
};



let team = new Team(bowerman, daemon, swordsman);

for (let char of team.listOfCharacters) {
    console.log(char);
    
}
