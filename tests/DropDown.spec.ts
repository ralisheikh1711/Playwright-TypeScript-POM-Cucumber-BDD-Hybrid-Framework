import{test, expect} from '@playwright/test';
test('COncept of All kind of DropDowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //1. Select the specific dropdown by its label text and verify that it is selected.
    const dropdown=page.getByLabel('Country');
   // await dropdown.selectOption('Canada'); // Visible Text

    await dropdown.selectOption({value: 'uk'}); // By using Value attribute
    await expect(dropdown).toHaveValue('uk');

   // await dropdown.selectOption({index: 3}); // By using Index
//    await dropdown.selectOption({label: 'Japan'}); // By using Label
//    await expect(dropdown).toHaveValue('japan');

   
await page.waitForTimeout(3000);

});
