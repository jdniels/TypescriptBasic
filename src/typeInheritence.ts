export class User {
  constructor(public name: string, public age: number) {}

  setName(name: string) {
    this.name = name;
  }
  getName = (): string => {
    return this.name;
  };
  setAge(age: number) {
    this.age = age;
  }
  getAge = (): number => {
    return this.age;
  };
}

class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write
    };
  }
}

let admin = new Admin("Juan", 20);
admin.getAge();
