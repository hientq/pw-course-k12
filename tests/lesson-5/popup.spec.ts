import { test } from "@playwright/test";

test("handle confirm dialog", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 3", async () => {
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  });

  await test.step("add a task", async () => {
    await page.locator("//input[@id='new-task']").fill("Task 1 by Hien");
    await page.locator("//button[@id='add-task']").click();
  });

  await test.step("delete task", async () => {
    page.on("dialog", async (dialog) => dialog.accept());
    await page.locator("//button[text()='Delete']").click();
  });
});
