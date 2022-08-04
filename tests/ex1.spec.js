const { test, expect } = require('@playwright/test');

test('ex1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Testing');
});