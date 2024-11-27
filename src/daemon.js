import { Character } from "./char.js";

class Daemon extends Character {
	constructor(name) {
		super(name, "Daemon", 100, 1, 10, 40)
	}
}

export const daemon = new Daemon("Демон");
