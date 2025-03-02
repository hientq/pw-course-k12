let arrNumbers = [3, 5, 2, 1, 97, 4];

for (let number of arrNumbers) {
  if (number % 2 == 0) {
    continue;
  }

  console.log(number);
}

for (let number of arrNumbers) {
  if (number == 1) {
    break;
  }
  console.log(number);
}
