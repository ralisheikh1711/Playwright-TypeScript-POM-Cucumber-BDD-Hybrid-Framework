import {test, expect} from '@playwright/test';
test('Built-in locators', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  //getByRole is a built-in locator that allows you to locate an element by its ARIA role. In this case, we are locating the login button by its role "button" and verifying that it is visible on the page.
  await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();

  //getByText is a built-in locator that allows you to locate an element by its text content. In this case, we are locating the "Swag Labs" text on the page and verifying that it is visible.
  await expect(page.getByText('Swag Labs')).toBeVisible();

  //getByRole is a built-in locator that allows you to locate an element by its ARIA role. In this case, we are locating the login button by its role "button" and verifying that it is visible on the page.
  await expect(page.getByLabel('Username')).toBeVisible();

  //getByLabel is a built-in locator that allows you to locate an element by its associated label text. In this case, we are locating the password input field by its label text "Password" and verifying that it is visible on the page.
  await expect(page.getByLabel('Password')).toBeVisible();

  //getByPlaceholder is a built-in locator that allows you to locate an element by its placeholder text. In this case, we are locating the password input field by its placeholder text "Password" and verifying that it is visible on the page.
  await expect(page.getByPlaceholder('Password')).toBeVisible();

//CSS Selector is a built-in locator that allows you to locate an element using a CSS selector. In this case, we are locating the username input field by its CSS selector "#user-name" and verifying that it is visible on the page.
 await expect(page.locator('#user-name')).toBeVisible();

 //CSS Selector is a built-in locator that allows you to locate an element using a CSS selector. In this case, we are locating the password input field by its CSS selector "#password" and verifying that it is visible on the page.
 await expect(page.locator('.submit-button')).toBeVisible();

 const title = await page.title();
  await expect(title).toBe('Swag Labs');

});