const AMOUNT = -1;
let result = "";
if (AMOUNT > 0) {
  result = "Giá trị bạn nhập là số dương";
} else if (AMOUNT < 0) {
  result = "Giá trị bạn nhập là số âm";
} else {
  result = "Giá trị bạn nhập là số 0";
}

console.log(result);