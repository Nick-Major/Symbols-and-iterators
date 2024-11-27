import { Character } from "./char.js";

class Swordsman extends Character {
	constructor(name) {
		super(name, "Swordsman", 100, 1, 40, 10)
	}
}

export const swordsman = new Swordsman("Мечник");
