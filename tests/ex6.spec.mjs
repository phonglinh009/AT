import { test } from '@playwright/test';

test('Intercept network requests', async ({ page }) => {
  // Log and continue all network requests
  await page.route('**', route => {
    console.log(route.request().url());
    route.continue();
  });
  await page.goto('https://preprod-big-revamp-v1.k8s.propzy.asia/');
});