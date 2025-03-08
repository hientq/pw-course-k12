# TỔNG HỢP KIẾN THỨC BUỔI 5

1. DOM
2. Selector
3. Playwright basic syntax

## 1. DOM

Document Object Model là interface giúp tương tác với các element thông qua ngôn ngữ lập trình như JavaScript

### Cấu trúc của một element

`<p class='text'>Hello Playwright</p>`

- Thẻ mở: `<p class='text'>`
- Nội dun text: `Hello Playwright`
- Thẻ đóng: `</p>`
- Thuộc tính `class='text'`

### Các thẻ HTML thường gặp

- Thẻ `<div>` (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ `<h1></h1>` đến `<h6></h6>` (viết tắt của heading): dùng để tạo ra các header phân cấp
  theo thứ tự từ lớn đến bé.
- Thẻ `<form></form>`: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

## 2. Selector

Xpath = XML Path

Có hai loại gồm:

- Tuyệt đối: đi dọc theo cây DOM - bắt đầu bằng `/`
  - Ví dụ: `/html/body/div/input[1]`
- Tương đối: tìm dựa vào đặc tính - bắt đầu bằng `//`
  - Ví dụ: `//input[@id='email']`

Nên dùng loại Xpath tương đối

## 3. Playwright basic syntax

### a. test

Là đơn vị cơ bản để khai báo một test

Ví dụ: `test('<title của test case>', async ({page}) => { // Code của test });`

### b. step

Là đơn vị nhỏ hơn test, để khai báo từng step của test case

Ví dụ: `await test.step('<title của step>', async () => { // Code của step});`

Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.

### c. Basic actions

- Navigate: `await page.goto('https://pw-practice.playwrightvn.com/');`
- Click:
  - Single click: `await page.locator("//button").click();`
  - Double click: `await page.locator("//button").dblclick();`
  - Right click: `await page.locator("//button").click({ button: 'right'});`
  - Click with modifier: `await page.locator("//button").click({modifiers: ['Shift'],})`
- Input:
  - fill: `page.locator("//input").fill('Playwright Viet Nam');`
  - pressSequentially: `page.locator("//input").pressSequentially('Playwright Viet Nam', { delay: 100,});`
- Radio/Checkbox:
  - Kiểm tra radio/checkbox đã được check: `await page.locator("//input[@id='male']").isChecked();`
  - Check radio/checkbox: `await page.locator("//input[@id='male']").check();`
  - Set radio/checkbox được check và uncheck: `await page.locator("//input[@id='male']").setChecked(true hoặc false);`
- Dropdown:
  - Chọn một option theo attribute value: `await page.locator("//select[@id='country']").selectOption({ value: "uk" });`
  - Chọn một option theo label:`await page.locator("//select[@id='country']").selectOption({ label: "Canada" });`
- Upload file: `await page.locator("//input[@id='profile']").setInputFiles("<path của file muốn upload>");});`

# Kết thúc
