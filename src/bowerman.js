import { Character } from "./char.js";

class Bowerman extends Character {
	constructor(name) {
		super(name, "Bowman", 100, 1, 25, 25)
	}
}

export const bowerman = new Bowerman("Лучник");
