let person = {
  name: "Tran Quang Hien",
  age: 21,
  hobbies: ["sleeping", "eating", "music", "yoga", "running"],
};

// Su dung for..in loop de duyet qua cac key cua object
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
