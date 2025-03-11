import { test } from "@playwright/test";

test("todo page", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("click on lesson 3", async () => {
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  });

  await test.step("add 100 todos", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });
  await test.step("delete odd todos", async () => {
    page.on("dialog", async (dialog) => dialog.accept());
    for (let i = 1; i <= 100; i++) {
      if (i % 2 == 0) {
        continue;
      } else {
        await page
          .locator(
            `//ul[@id='task-list']//span[text()='Todo ${i}']/following-sibling::div/button[text()='Delete']`
          )
          .click();
        console.log(`Deleted Todo ${i}`);
      }
    }
  });
});
