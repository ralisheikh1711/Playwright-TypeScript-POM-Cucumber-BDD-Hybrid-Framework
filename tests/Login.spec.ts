import{ test, expect } from '@playwright/test';

test('Login Functuonality', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
//Enter the username and password
await page.locator('#user-name').fill('standard_user');
await page.fill('#password', 'secret_sauce');
//Click on the login button
await page.locator('.submit-button').click();

const title=await page.title();
await expect(title).toBe('Swag Labs12');

    

})