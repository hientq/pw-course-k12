import { test } from "@playwright/test";

test("register", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 1", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("enter basic information", async () => {
    await page.locator("//input[@id='username']").fill("tranquanghien");
    await page
      .locator("//input[@id='email']")
      .fill("tranquanghienict@gmail.com");
    await page.locator("//input[@id='male']").check();
    await page.locator("//input[@id='cooking']").click();
    await page
      .locator("//select[@id='interests']")
      .selectOption({ label: "Sports" });
    await page
      .locator("//select[@id='country']")
      .selectOption({ label: "Canada" });
    await page
      .locator("//input[@id='dob']")
      .pressSequentially("12231997", { delay: 100 });
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("data-test/playwright-image.png");

    await page
      .locator("//textarea[@id='bio']")
      .fill("Tran Quang Hien, 21 years old, lives in Da Nang");

    await page
      .locator(
        "//label[text()='Newsletter:']/following-sibling::div/div[@class='tooltip']"
      )
      .hover();
    await page.locator("//input[@id='newsletter']").setChecked(true);
    await page
      .locator("//input[@id='toggleOption']/following-sibling::span")
      .click();
  });

  await test.step("Submit register", async () => {
    let registerBtn = page.locator("//button[@type='submit']");
    await registerBtn.click();
  });
});
