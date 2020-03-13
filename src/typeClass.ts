// Kek di java Sob, keren

//ini syntax pertama
export class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let biodata = new User("Juan Daniel");

// Syntax kedua
// Bisa kek gini Langsung sob, Hemat Line
export class Users {
  constructor(public name: string) {
    this.name = name;
  }
}
