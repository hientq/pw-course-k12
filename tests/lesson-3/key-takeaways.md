# TỔNG HỢP KIẾN THỨC BUỔI 3
1. Git
2. JavaScript
## 1. Git
### Các câu lệnh
- git log : Xem lịch sử các commit
- git commit --amend : Sửa nội dung commit gần nhất.
- git commit --amend -m <'message'> : Sửa short message của commit gần nhất.
- git restore --staged <'file'> : Đưa file từ vùng Staging Area về lại vùng Working Directory.
- git reset HEAD~1 : Undo 1 commit, đưa các file đã commit về lại vùng Working Directory.
- git branch <'branch_name'> : Tạo nhánh mới.
- git checkout <'branch_name'> : Chuyển con trỏ HEAD đến nhánh.
- git checkout -b <'branch_name> : Đồng thời tạo nhánh và chuyển con trỏ HEAD đến nhánh.
### Sử dụng file .gitignore
Dùng để bỏ qua các file mà không muốn Git theo dõi
- Ignore file: <'file_name'>
- Ignore folder: <'folder-name'>/
## 2. JavaScript
### a. Conventions
 Code theo quy tắc, theo 1 format để dễ nhìn và người khác dễ dàng đọc code
 #### Ví dụ
 - snake_case
 - kebab-case : Dùng cho tên file
 - camelCase : Dùng cho tên biến
 - PascalCase : Dùng cho tên class
### b. console.log
- `console.log('My name is Hien');` : Sử dụng dấu nháy đơn
- `console.log("My country is Vietnam");` : Sử dụng dấy nháy kép
- ```console.log(`My name is ${student.name}`)``` : Sử dụng backtick
### c. Object
Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào
cùng một biến hoặc hằng số
#### Ví dụ
`let student = {name: 'Hien', age: 20};`

`console.log('My name is ' + student.name);`
### d. Logical Operators
Sử dụng trong các biểu thức trả về kiểu dữ liệu boolean
- && : cả 2 vế của mệnh đề đều đúng
- !! : một trong 2 vế của mệnh là đúng
- ! : đảo ngược giá trị của mệnh đề
#### Ví dụ
`let number = 12;`

`let isEvenAndGreaterThanTwo = (number % 2 == 0) && (number > 2);`

`console.log(isEvenAndGreaterThanTwo);` -> Trả về true
### e. Array
Là cấu trúc dữ liệu dùng để lưu trữ một dãy các giá trị liên tiếp
#### Khai báo
`let myHobbies = ['reading', 'running', 'testing'];`
#### Truy xuất mảng theo index
`myHobbies[1]` tương đương với giá trị `'running'`
### f. Function
Hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
#### Khai báo và gọi hàm
```
function isEvenNumber (number) {
    return number % 2 == 0;
}

console.log(isEvenNumber(4));
```
---
## Kết thúc
