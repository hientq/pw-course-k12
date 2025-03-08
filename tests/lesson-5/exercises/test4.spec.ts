import { test } from "@playwright/test";

test("add and search notes", async ({ page }) => {
  // Data test
  let notes = [
    {
      title: "Bài toán năng lượng cho AI",
      content:
        "Trí thông minh nhân tạo (AI) đang trở thành một phần không thể thiếu trong nhiều lĩnh vực, nhưng sự phát triển của nó cũng đi kèm với những thách thức lớn về nguồn cung năng lượng",
    },
    {
      title: "Chip Trung Quốc đạt xung nhịp 100 GHz không cần điện",
      content:
        "Chip quang học mới có thể đạt tốc độ xung nhịp 100 GHz, trong khi hiện nay, các chip truyền thống sử dụng điện thường có tốc độ xung nhịp 2-3 GHz, cao nhất cũng chỉ khoảng 6 GHz,",
    },
    {
      title: "FAA điều tra vụ nổ tàu vũ trụ Starship",
      content:
        "Cục Hàng không Liên bang (FAA) tiến hành điều tra nguyên nhân khiến chuyến bay thử thứ 8 của Starship kết thúc với phương tiện bị phá hủy, ảnh hưởng đến giao thông hàng không.",
    },
    {
      title: "Máy bay vũ trụ có thể bay vòng quanh Trái Đất trong 95 phút",
      content:
        "Công ty Radian Aerospace ở Seattle, Washington, đang phát triển máy bay vũ trụ có thể di chuyển ở tốc độ 28.968 km/h và chở hành khách vòng quanh thế giới trong chưa đầy hai giờ.",
    },
    {
      title: "Hai nhà khoa học nữ được trao giải thưởng Kovalevskaia 2024",
      content:
        "PGS Nguyễn Minh Tân và PGS Đặng Thị Mỹ Dung được trao giải thưởng Kovalevskaia năm 2024 vì có thành tích xuất sắc trong nghiên cứu khoa học và ứng dụng vào thực tiễn",
    },
    {
      title: "Vụ nổ tàu Starship tạo cơn mưa mảnh vỡ trên quần đảo Bahamas",
      content:
        "Tầng trên của hệ thống phóng Starship phát nổ trong lần thử nghiệm thứ tám đã tạo ra cơn mưa mảnh vỡ giống mưa sao băng trên bầu trời Bahamas và Florida.",
    },
    {
      title: "Bệnh nhân bị liệt điều khiển cánh tay robot bằng suy nghĩ",
      content:
        "Nhóm nghiên cứu tại Đại học California San Francisco, Mỹ, giúp một người đàn ông bị liệt điều khiển cánh tay robot thông qua thiết bị chuyển tiếp tín hiệu từ não đến máy tính, Interesting Engineering hôm 6/3 đưa tin. Anh có thể cầm nắm, di chuyển và thả rơi đồ vật chỉ bằng cách tưởng tượng bản thân làm những hành động đó.",
    },
    {
      title: "Đề xuất nhiều chính sách gỡ khó cho hàng hóa nhập khẩu",
      content:
        "Bộ Khoa học và Công nghệ đề xuất giảm thủ tục kiểm tra chất lượng với hàng hóa có mức độ rủi ro trung bình - thấp, chuyển sang hậu kiểm để tạo thuận lợi cho doanh nghiệp.",
    },
    {
      title: "Khánh Hòa thí điểm 440 ha vùng nuôi biển công nghệ cao",
      content:
        "Thông tin được UBND tỉnh Khánh Hòa và Quỹ Thiện Tâm (Tập đoàn Vingroup) công bố chiều 7/3. Đề án được Thủ tướng phê duyệt vào tháng 1, thời gian thí điểm nuôi công nghệ cao đến hết năm 2029.",
    },
    {
      title: "Robot hình người tiên tiến nhất thế giới",
      content:
        "Phát triển bởi công ty Engineered Arts của Anh, Ameca thường được mô tả là robot hình người tiên tiến nhất thế giới. Tương tác giống người thật của nó khiến khách tham quan vừa thích thú vừa đề phòng, nêu bật sự tiến hóa nhanh chóng của trí tuệ nhân tạo (AI) và công nghệ robot.",
    },
  ];
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("click on lesson 4", async () => {
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
  });
  await test.step("add 10 notes", async () => {
    for (let note of notes) {
      await page.locator("//input[@id='note-title']").fill(note.title);
      await page.locator("//textarea[@id='note-content']").fill(note.content);
      await page.locator("//button[@id='add-note']").click();
    }
  });

  await test.step("search note", async () => {
    // Waiting 3 seconds before search note
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='search']").fill(notes[9].title);
  });
});
