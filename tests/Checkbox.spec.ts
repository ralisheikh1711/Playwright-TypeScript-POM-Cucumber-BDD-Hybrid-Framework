import{test, expect, Locator} from '@playwright/test';

test('Checkboxes', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/'); 
    
    //1. Select the specific checkbox by its label text and verify that it is checked.
    const thursdayCheckbox = page.getByLabel('Thursday');
    await thursdayCheckbox.check();
    await expect(thursdayCheckbox).toBeChecked();

    //2. Uncheck the specific checkbox by its label text and verify that it is not checked.
    await thursdayCheckbox.uncheck();
    await expect(thursdayCheckbox).not.toBeChecked();
    
    //3. Check the all checkboxes on the page and verify that they are all checked.

    // const allCheckboxes = page.locator('input[type="checkbox"]');
    // const checkboxCount = await allCheckboxes.count();
    // for (let i = 0; i < checkboxCount; i++) {
    //     const checkbox = allCheckboxes.nth(i);
    //     await checkbox.check();
    //     await expect(checkbox).toBeChecked();
    // }

    const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
        'Saturday', 'Sunday'];
        const checkboxes:Locator[]= days.map(day => page.getByLabel(day));
        expect(checkboxes.length).toBe(7);
        for(const checkbox of checkboxes){
           await checkbox.check();
           await expect(checkbox).toBeChecked();

        }

        //4. Uncheck last 3checkboxes and verify that they are not checked.
        for(const checkbox of checkboxes.slice(-3)){
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        await page.waitForTimeout(3000);
    });
