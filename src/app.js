import { bowerman } from "./bowerman.js";
import { daemon } from "./daemon.js";
import { swordsman } from "./swordsman.js";
import Team from "./Team.js";


let team = new Team(bowerman, daemon, swordsman);

for (let char of team.characters) {
    console.log(char);
}
