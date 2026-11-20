
import { test, expect } from '@playwright/test';

test('homepage has the correct title', async ({ page }) => {
  // Navigate to the Playwright website
  await page.goto('https://playwright.dev/');

  // Verify that the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});
