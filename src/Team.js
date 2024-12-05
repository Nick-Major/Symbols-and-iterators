export default class Team {
    constructor(...args) {
      this.characters = args;
    }
  
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.characters.length) {
            return {
              value: this.characters[index++],
              done: false,
            };
          }
  
          return { done: true };
        },
      };
    }
  }