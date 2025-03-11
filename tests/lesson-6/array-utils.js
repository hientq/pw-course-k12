// map()
let myNumbers = [3, 4, 2, 1, 5, 11];
let myDoubleNumbers = myNumbers.map((val) => val * 2);
console.log(myDoubleNumbers);

// filter()
let myRandomNumbers = [2, 6, 11, 97];

function isPrime(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }
  return true;
}
let myLuckyNumbers = myRandomNumbers.filter((val) => isPrime(val));
console.log(myLuckyNumbers);

// find()

let myHobbies = ["sleeping", "yoga", "eating", "running", "testing", "coding"];
let myTop = myHobbies.find((item) => item.trim().includes("test"));

console.log("My top hobby is", myTop);

// reduce()
let dice = [1, 2, 3, 4, 5, 6];
let sum = dice.reduce((total, currentVal) => total + currentVal, 0);
console.log(sum);

// some()
let myStuffs = ["book", "laptop", "chocolate bar", "pen", "pencil", "shoes"];
console.log(
  "Do I have a pencil?",
  myStuffs.some((item) => item.includes("pencil"))
);
console.log(
  "Do I have a hat?",
  myStuffs.some((item) => item.includes("hat"))
);

// every()

let myListNumbers = [11, 2, 97, 100];

console.log(
  "All numbers are prime?",
  myListNumbers.every((number) => isPrime(number))
);

// push()
let myTasks = ["coding", "exercise", "testing", "sleeping"];
if (myTasks.length < 5) {
  myTasks.push("playing");
}
console.log(myTasks);

// shift()
let exercises = ["running", "stretching", "martial art", "lift weight"];
exercises.shift();
console.log(exercises);

// sort()
let myChildsAge = [2, 10, 15, 4];

console.log(myChildsAge.sort((a, b) => a - b));
console.log(myChildsAge.sort((a, b) => b - a));
