import {test, expect, Locator} from '@playwright/test';
test('Concept of Handling Web Tables', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const products:Locator = page.locator('.product-item ');

//Innner text vs Context Text
//Inner text is the text content of an element, including all child elements, while context text is the text content of an element without including any child elements. In other words, inner text includes all the text within an element, while context text only includes the text that is directly within the element itself.
//Context text is useful when you want to extract the text content of an element without including any child elements, while inner text is useful when you want to extract all the text content of an element, including any child elements.

console.log(await products.nth(2).innerText());
console.log(await products.nth(2).textContent());

});