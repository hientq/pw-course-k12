// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì
function calculateBMI(height, weight) {
  return weight / (height * height);
}

function finalResultBasedOnBMI(BMI) {
  if (BMI < 18.5) {
    return "Thieu can";
  }

  if (BMI < 25) {
    return "Binh thuong";
  }

  if (BMI < 30) {
    return "Thua can";
  }

  if (BMI >= 30) {
    return "Beo phi";
  }
}

let student = {
  name: "Tran Quang Hien",
  height: 1.74,
  weight: 68,
};

console.log(
  `BMI of student name ${student.name} is ${calculateBMI(
    student.height,
    student.weight
  )}`
);

console.log(
  `Final result based on BMI : ${finalResultBasedOnBMI(
    calculateBMI(student.height, student.weight)
  )}`
);

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
// chuyển đổi.
// Biết công thức chuyển đổi:

// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let celsius = 35;
let fahrenheit = 104;
console.log(
  "Convert celsisus to farenheit: ",
  convertCelsiusToFahrenheit(celsius)
);

console.log(
  "Convert farenheit to celsisus: ",
  convertFahrenheitToCelsius(fahrenheit)
);

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.
let myLuckyNumbers = [23, 1, 21, 26];
function sumNumberElementArray(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

console.log(
  "Sum of all numbers in the array = ",
  sumNumberElementArray(myLuckyNumbers)
);

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○ Số 0, số 1 không phải số nguyên tố.
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

let arrNumbers = [2, 5, 11, 25, 99, 100, 22, 97];

function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

for (let i of arrNumbers) {
  if (!isPrimeNumber(i)) {
    continue;
  } else {
    console.log(`${i} is a prime number.`);
  }
}

// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
// người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail

let students = [
  { name: "Tran Quang Hien", email: "tranquanghienict@gmail.com" },
  { name: "Nguyen Van A", email: "nguyenvana@gmail.com" },
  { name: "Nguyen Phu Gia", email: "giaphu@yahoo.com" },
  { name: "Tran Binh", email: "tranbinh@outlook.com" },
];

function updateEmail(name, newEmail) {
  for (let student of students) {
    if (student.name == name) {
      student.email = newEmail;
    }
  }
}
updateEmail("Nguyen Van A", "anguyen@test.com");
console.log(students);

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}

let myStudents = [
  { name: "Tran Quang Hien", score: 30 },
  { name: "Ngo Dong Soc", score: 100 },
  { name: "Khoac Khu Benh", score: 85 },
  { name: "Luu Ba On", score: 109 },
];

function averageScore(students) {
  let averageScore = 0;
  let amount = students.length;
  let sum = 0;
  for (let student of myStudents) {
    sum += student.score;
  }
  return sum / (1.0 * amount);
}

console.log("Average score of all student is ", averageScore(myStudents));

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
// “product 1”, price: 100 }

let products = [
  { name: "Milk USA", price: 100 },
  { name: "Chocolate Thailand", price: -10 },
  { name: "Pancake Vietnam", price: 300 },
];

function allProductPriceGreaterThanZero(products) {
  let allGreaterThanZero = true;
  for (let i of products) {
    if (i.price < 0) {
      allGreaterThanZero = false;
    }
  }
  return allGreaterThanZero;
}

console.log(
  "Are all products have price > 0? ",
  allProductPriceGreaterThanZero(products)
);

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối.

let store = { name: "Dyna Clothes", openTime: 9, closedTime: 21 };
let currentTime = 22;

function isStoreOpen(store, currentTime) {
  let isOpen = true;
  if (currentTime < store.openTime || currentTime > store.closedTime) {
    isOpen = false;
  }
  return isOpen;
}

console.log("Is store still open? " + isStoreOpen(store, 12));

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.

let age = 10;
function ticketPriceBasedOnAge(age) {
  if (age < 5) {
    return 0;
  }

  if (age >= 6 && age <= 17) {
    return 50000;
  }

  if (age >= 18) {
    return 100000;
  }
}

console.log("Ticket price is ", ticketPriceBasedOnAge(age));

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
// switch...case để xử lý.

let month = 11;

function monthInText(month) {
  let result = "";
  switch (month) {
    case 1:
      result = "January";
      break;
    case 2:
      result = "Febuary";
      break;
    case 3:
      result = "March";
      break;
    case 4:
      result = "April";
      break;
    case 5:
      result = "May";
      break;
    case 6:
      result = "June";
      break;
    case 7:
      result = "July";
      break;
    case 8:
      result = "August";
      break;
    case 9:
      result = "September";
      break;
    case 10:
      result = "October";
      break;
    case 11:
      result = "November";
      break;
    case 12:
      result = "December";
      break;
    default:
      result = "Invalid input!";
      break;
  }
  return result;
}

console.log(`Month ${month} in text: ${monthInText(month)}.`);

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
//   6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).
let score = 5;
function resultBasedOnScore(score) {
  if (score < 5) {
    return "Yeu";
  }

  if (score >= 5 && score < 6.5) {
    return "Trung binh";
  }

  if (score >= 6.5 && score < 8) {
    return "Kha";
  }

  if (score > 8) {
    return "Gioi";
  }
}

console.log("Result = ", resultBasedOnScore(score));
// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
//   (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)

let currentDegree = 20;
function weatherBasedOnDegree(degree) {
  if (degree < 20) {
    return "Lanh";
  }

  if (degree >= 20 && degree < 30) {
    return "Mat";
  }

  if (degree >= 30) {
    return "Nong";
  }
}

console.log("Hom nay thoi tiet", weatherBasedOnDegree(currentDegree));
