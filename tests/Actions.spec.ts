
import { test, expect } from '@playwright/test';

test('Actions all methods', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Fill the form
    await page.getByPlaceholder('Enter Name').fill('Test Automation');
    await page.locator('#email').fill('test@example.com');
    await page.getByPlaceholder('Enter Phone').fill('988583492');
    await page.locator('#textarea').fill('90 Feet Road Mahim, Mumbai');

    // Verify the Male radio button
    const maleRadio = page.locator('#male');
await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
await expect(maleRadio).not.toBeChecked();
await maleRadio.check();

await expect(maleRadio).toBeChecked();

    // Verify the Thursday checkbox
    const thursdayCheckbox = page.getByLabel('Thursday');
    await expect(thursdayCheckbox).toBeEnabled();
    await expect(thursdayCheckbox).not.toBeChecked();
    await thursdayCheckbox.check();
    await expect(thursdayCheckbox).toBeChecked();

});
