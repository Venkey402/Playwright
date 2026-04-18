import { test, expect } from '@playwright/test';

test('1.Create customer using codegen feature of playwright', async ({ page }) => {
  await page.goto('https://demo.guru99.com/V1/index.php');
  await page.locator('input[name="uid"]').click();
  await page.locator('input[name="uid"]').fill('mngr658308');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('uruvara');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('link', { name: 'New Customer' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Venk');
  await page.getByRole('radio').first().check();
  await page.locator('#dob').press('Tab');
  await page.locator('#dob').fill('1999-02-01');
  await page.locator('textarea[name="addr"]').click();
  await page.locator('textarea[name="addr"]').fill('s/o Ra');
  await page.locator('input[name="city"]').click();
  await page.locator('input[name="city"]').fill('hyderabad');
  await page.locator('input[name="state"]').click();
  await page.locator('input[name="state"]').fill('Telangana');
  await page.locator('input[name="pinno"]').click();
  await page.locator('input[name="pinno"]').fill('555555');
  await page.locator('input[name="emailid"]').click();
  await page.locator('input[name="emailid"]').fill('a@b.com');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('input[name="telephoneno"]').click();
  await page.locator('input[name="telephoneno"]').fill('9999999999');
  await page.getByRole('button', { name: 'Submit' }).click();
});