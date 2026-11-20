import {test, expect, Locator} from '@playwright/test';
test('Concept of Handling Web Tables', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const loginLink: Locator = page.locator('a[href="/login"]');
    await loginLink.click();
    await page.fill('input#Email', 'testuser@example.com');
    // Fill in the password field
    await page.fill('input#Password', 'password123');
    await page.locator('input.login-button').click();

});