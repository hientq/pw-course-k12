let age = 10;

if (age < 1) {
  console.log("Error! Please enter age >= 1!");
} else if (age < 8) {
  console.log("Free ticket!");
} else if (age >= 8 && age <= 14) {
  console.log("Ticket price is 50000 VND!");
} else if (age > 14) {
  console.log("Ticket price is 80000 VND!");
}
