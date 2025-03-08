import { test } from "@playwright/test";

test("navigate and click", async ({ page }) => {
  await test.step("navigate to page Playwright", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("click on lesson 1", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });
});

test("handle mouse event - single click", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 5", async () => {
    await page.locator("//a[@href='018-mouse.html']").click();
  });

  await test.step("single click on button", async () => {
    await page.locator("//div[@id='clickArea']").click();
  });
});

test("handle mouse event - double click", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 5", async () => {
    await page.locator("//a[@href='018-mouse.html']").click();
  });

  await test.step("double click on button", async () => {
    await page.locator("//div[@id='clickArea']").dblclick();
  });
});

test("handle mouse event - right click", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("click on lesson 5", async () => {
    await page.locator("//a[@href='018-mouse.html']").click();
  });
  await test.step("right click on button", async () => {
    await page.locator("//div[@id='clickArea']").click({ button: "right" });
  });
});

test("handle mouse event - modifier", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("click on lesson 5", async () => {
    await page.locator("//a[@href='018-mouse.html']").click();
  });
  await test.step("left click with modifier on button", async () => {
    await page
      .locator("//div[@id='clickArea']")
      .click({ modifiers: ["Shift"] });
  });
});

test("handle mouse event - count click", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("click on lesson 5", async () => {
    await page.locator("//a[@href='018-mouse.html']").click();
  });

  await test.step("click on button 10 times", async () => {
    await page.locator("//div[@id='clickArea']").click({ clickCount: 10 });
  });
});

test("handle input - fill", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 1", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("fill text into input username", async () => {
    await page.locator("//input[@id='username']").fill("tranquanghien");
  });
});

test("handle input - press sequentially", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 1", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("fill text into input username", async () => {
    await page
      .locator("//input[@id='username']")
      .pressSequentially("tranquanghien", { delay: 1000 });
  });
});

test("handle checkbox", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 1", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("check the checkbox gender male", async () => {
    let isChecked = await page.locator("//input[@id='male']").isChecked();
    console.log("Before checking", isChecked);
    await page.locator("//input[@id='male']").check();
    isChecked = await page.locator("//input[@id='male']").isChecked();
    console.log("After checking", isChecked);
  });

  await test.step("check the checkbox hobby traveling", async () => {
    await page.locator("//input[@id='traveling']").setChecked(true);
  });

  await test.step("wait for 5 seconds", async () => {
    await page.waitForTimeout(5000);
  });

  await test.step("uncheck the checkbox hobby traveling", async () => {
    await page.locator("//input[@id='traveling']").setChecked(false);
  });
});

test("handle dropdown", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 1", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("select option UK at input Country", async () => {
    await page.locator("//select[@id='country']").selectOption({ value: "uk" });
  });

  await test.step("wait for 3 seconds", async () => {
    await page.waitForTimeout(3000);
  });

  await test.step("select option Canada at input Country", async () => {
    await page
      .locator("//select[@id='country']")
      .selectOption({ label: "Canada" });
  });
});

test("handle upload files", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 1", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("upload an image into field Profile picture", async () => {
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("data-test/playwright-image.png");
  });
});
