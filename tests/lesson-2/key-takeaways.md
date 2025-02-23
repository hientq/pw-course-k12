# TỔNG HỢP KIẾN THỨC BUỔI 2
1. Version Control System
2. Git
3. JavaScript

## 1. Version Control System
Là hệ thống quản lý các phiên bản của một project, được phân thành 3 loại cơ bản: 
- Local Version Control System
- Centralize Version Control System
- Distributed Version Control System

## 2. Git
Là distributed control version system, free và open source. Được viết bởi Linus Torvalds
#### Git three states
- Working Directory: Các file mới, hoặc các file có thay đổi
- Staging Area: Các file được chọn để được commit
- Repository: Các commit
#### Các câu lệnh cơ bản
- git init: Khởi tạo git cho project hiện tại
- git status: Kiểm tra status các file mới, hoặc các file có thay đổi
- git add: Thêm các file vào Staging Area
- git commit -m <'message'>: Commit các file ở Staging Area
- git log: Tra lịch sử commit
#### Git commit convention
Giúp cho team làm việc theo quy tắc, commit message rõ ràng và chuyên nghiệp

- *Cú pháp*

`<type>: <short_description>`

- *type*
1. chore: sửa nhỏ lẻ, xóa các file không dùng tới, ...
2. feat: thêm tính năng mới, test case mới
3. fix: sửa lỗi trước đó

- *short_description*

Mô tả ngắn gọn
(50 kí tự), tiếng Anh hoặc tiếng Việt
không dấu.

## 3. JavaScript
Là ngôn ngữ lập trình ra đời năm 1995 bởi Brendan Eich
### Chạy trên browser engine
- Edge: Chaka
- Firefox: SpiderMonkey
- Chrome: V8
### Chạy trên máy tính
- Cần NodeJS runtime
### In ra dòng chữ "Hello World"
`console.log("Hello World");`
### Khai báo biến với các từ khóa let, var, const
`let amount = 3`

`var days = 10`

`const BROWSER = "Chrome"`
### Các kiểu dữ liệu
- String
- Number
- Bigint
- Boolean
- Undefined
- Null
- Symbol
- Object.
### Toán tử so sánh
- So sánh hơn kém: >, <
- So sánh bằng: ==, ===,!=, !==, >=, <=
### Toán tử một ngôi
- `i++` : Tăng i lên một, tương đương với `i = i + 1`
- `i--` : Giảm i xuống một, tương đương với `i = i - 1`
### Toán tử số học
- `+`: Cộng
- `-`: Trừ
- `*`: Nhân
- `/`: Chia lấy nguyên
- `%`: Chia lấy dư
- `**`: Lũy thừa
- `++`: Tăng lên một
- `--`: Giảm xuống một
#### Ví dụ
`let currentYear = 2025;`

`let yearOfBirth = 2004;`

`let age = currentYear - yearOfBirth;`

`console.log("Age: " + age);`
### Câu lệnh điền kiện if else
- Conditional = điều kiện, dùng để kiểm tra
có nên thực hiện một đoạn logic không.
- Cú pháp: `if(điều kiện) { //code }`, nếu điều kiện đúng sẽ thực thi code
#### Ví dụ
`let age = 18;`

`if(age > 18) { console.log("You are an adult!");}`
### Vòng lặp for
- Dùng để thực hiện một đoạn logic một
số lần nhất định
- Cú pháp: `for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {// code }`
#### Ví dụ
`for(let i = 1; i < 10; i++){ console.log("Hello World");}`
### VS Code
Format code: 
- Mac OS: Option + Shift + F
- Windows: Alt + Shif + F
---
## Kết thúc