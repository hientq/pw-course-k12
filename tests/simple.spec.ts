import { test, expect } from "@playwright/test";

test("has heading", async ({ page }) => {
  // Go to Facebook homepage
  await page.goto("https://www.facebook.com/");
  await expect(page).toHaveTitle(/Faceook – log in or sign up/);
});
