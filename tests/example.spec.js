// @ts-check
const { test, expect } = require('@playwright/test');
const { request } = require('https');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//GET API testing
test('GET /products/1', async({ page }) => {
  const response = await request.get('https://fakestoreapi.com/products/1');
  const body = await response.json();

  //check response status is passed
  expect(response.ok()).toBeTruthy(); 
  // Check HTTP status code
  expect(response.status()).toBe(200); 
  // Console the response body
  console.log(body);
});