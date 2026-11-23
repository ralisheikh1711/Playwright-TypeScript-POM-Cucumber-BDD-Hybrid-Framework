import {expect, test} from '@playwright/test';
test('Concept of Handling Dialog Box', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //There are three types of dialog boxes in JavaScript: alert, confirm, and prompt. Each type of dialog box serves a different purpose and has different behavior.
    //Alert: An alert dialog box is used to display a message to the user. It typically contains a message and an OK button. When the user clicks the OK button, the dialog box is dismissed, and the user can continue interacting with the web page.
    //Confirm: A confirm dialog box is used to ask the user for confirmation before proceeding with an action. It typically contains a message and two buttons: OK and Cancel. When the user clicks the OK button, the action is confirmed, and when the user clicks the Cancel button, the action is canceled.
    //Prompt: A prompt dialog box is used to ask the user for input. It typically contains a message, an input field, and two buttons: OK and Cancel. When the user enters a value in the input field and clicks the OK button, the value is returned to the web page. If the user clicks the Cancel button, no value is returned.  
    
    //Enable Alert Handling
    // page.on('dialog', dialog =>{
    //     console.log('Dailog Type is:', dialog.type()) //Type of dialog box (alert, confirm, prompt)
    //      expect(dialog.type()).toContain('alert') //Assertion to verify the type of dialog box
    //     console.log('Dailog Text is:', dialog.message()) //Text of dialog box
    //     expect(dialog.message()).toContain('I am an alert box!') //Assertion to verify the text of dialog box
    //      dialog.accept()
    //     });

    //1. Simple Alert Box (Automatically handled by Playwright)
    await page.locator('#alertBtn').click();
    await page.waitForTimeout(5000);

    //2. Confirmation Alert Box (Automatically handled by Playwright)
        await page.locator('#confirmBtn').click();
        await page.waitForTimeout(5000);
            // The confirmation alert box is handled by the page.on('dialog') listener.
});