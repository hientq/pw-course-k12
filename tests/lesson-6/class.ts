// let myNumber: number = 10;
// console.log(myNumber);

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  printMyInfo() {
    let result = `My name is ${person1.name}, I am ${person1.age} years old and my best hobby is ${person1.hobbies[1]}`;
    return result;
  }

  saySomething(message: string) {
    console.log(`${this.name} said that '${message}'`);
  }
}

const person1: Person = new Person("Tran Quang Hien", 21, [
  "sleeping",
  "yoga",
  "eating",
  "coding",
]);

console.log(person1.printMyInfo());
person1.saySomething("I love coding!");
