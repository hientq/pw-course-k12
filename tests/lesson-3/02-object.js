let employee = {
  name: "Tran Quang Hien",
  age: 27,
  isMarried: false,
  amount_balance: 10000,
};

function isPerfectMan(targetObject) {
  let result = false;
  if (!targetObject.isMarried && targetObject.amount_balance > 9000) {
    result = true;
  }
  return result;
}

let finalResult = isPerfectMan(employee);
if (!finalResult) {
  console.log(`${employee.name} is not a perfect man to marry!`);
} else {
  console.log(`${employee.name} is a pefect man to marry!`);
}
