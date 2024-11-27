import { bowerman } from "./bowerman.js";
import { daemon } from "./daemon.js";
import { swordsman } from "./swordsman.js";

class Team {
    constructor(...characters) {
        this.arrOfCharacters = [...characters];
    }
}

let team = new Team(bowerman, daemon, swordsman);

for(const char of team) {
    console.log(char);
}

