import { test } from "@playwright/test";

test("add products to cart", async ({ page }) => {
  await test.step("navigate to page Playwright material", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click on lesson 2", async () => {
    await page.locator("//a[@href='02-xpath-product-page.html']").click();
  });

  await test.step("add product 1 to cart with quantity 2", async () => {
    await page
      .locator(
        "//div[@class='product-name' and text()='Product 1']/following-sibling::button[text()='Add to Cart']"
      )
      .click({ clickCount: 2 });
  });

  await test.step("add product 2 to cart with quantity 3", async () => {
    await page
      .locator(
        "//div[@class='product-name' and text()='Product 2']/following-sibling::button[text()='Add to Cart']"
      )
      .click({ clickCount: 3 });
  });

  await test.step("add product 3 to cart with quantity 1", async () => {
    await page
      .locator(
        "//div[@class='product-name' and text()='Product 3']/following-sibling::button[text()='Add to Cart']"
      )
      .click({ clickCount: 1 });
  });
});
