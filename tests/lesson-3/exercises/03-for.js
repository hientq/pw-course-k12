const myHobbies = ["coding", "eating", "dancing", "running"];
myHobbies.push("sleeping");

console.log(myHobbies);

// 1. Tính tổng từ 1 đến 100.
function sumRange(startNumber, endNumber) {
  if (startNumber > endNumber) {
    console.error("Error! Please make sure startNumber < endNumber!");
    return undefined;
  }

  let sum = 0;
  let amountOfPairNumber = (endNumber - startNumber) / (1.0 * 1) + 1;
  return ((startNumber + endNumber) * amountOfPairNumber) / (1.0 * 2);
}

let startNumber = 1;
let endNumber = 100;
console.log(
  `Sum of range between ${startNumber} and ${endNumber} = ${sumRange(
    startNumber,
    endNumber
  )}`
);
// 2. In bảng cửu chương từ 2 đến 9.
function multiplicationTable(numberTable) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numberTable} = ${i * numberTable}`);
  }
}

for (let i = 2; i <= 9; i++) {
  multiplicationTable(i);
  console.log("-------------------");
}
// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let oddNumbers = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}
console.log(oddNumbers);
// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user-1@example.com, user2@example.com, ..., user10@example.com).
let listOfEmails = [];
function generateEmails(basedUserName, amount) {
  let emails = [];
  for (let i = 1; i <= amount; i++) {
    emails.push("user".concat(i).concat("@example.com"));
  }
  return emails;
}

listOfEmails = generateEmails("hien", 10);
console.log(listOfEmails);
// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}

let incomeEachMonth = [
  { month: 1, total: 100 },
  { month: 2, total: 200 },
  { month: 3, total: 100 },
  { month: 4, total: 200 },
  { month: 5, total: 100 },
  { month: 6, total: 200 },
  { month: 7, total: 100 },
  { month: 8, total: 300 },
  { month: 9, total: 400 },
  { month: 10, total: 200 },
  { month: 11, total: 150 },
  { month: 12, total: 90 },
];

function totalYearIncome(incomeEachMonth) {
  let sum = 0;
  for (let temp of incomeEachMonth) {
    sum += temp.total;
  }
  return sum;
}

console.log("Total income of a year: ", totalYearIncome(incomeEachMonth));
