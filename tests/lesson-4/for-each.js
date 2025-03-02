let hobbies = ["yoga", "running", "coding", "sleeping", "eating"];

// Su dung loop forEach duyet mang

hobbies.forEach((value, index) => {
  console.log(`${value} has position as index ${index}`);
});

// Change values in an array
hobbies.forEach((value, index) => {
  if (value == "yoga") {
    hobbies[index] = "yoga flow";
  } else if (value == "coding") {
    hobbies[index] = "coding test automation";
  }
});

console.log(hobbies);
