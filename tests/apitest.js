// @ts-check
const { test, expect } = require('@playwright/test');
const { request } = require('https');

//Testing GET API
test('GET /products/1', async ({ request }) => {
    const response = await request.get('https://fakestoreapi.com/products/1');
    const body = await response.json();
  
    //check response status is passed
    expect(response.ok()).toBeTruthy(); 
    // Check HTTP status code
    expect(response.status()).toBe(200); 
    // Console the response body
    console.log(body); 
  });

  //Testing for POST API
  test('POST', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data:  {  
        "name": "James",  
        "job": "leader"  
      } , 
    });
    const body = await response.json();
  
    //check response status is passed
    expect(response.ok()).toBeTruthy(); 
    // Check HTTP status code
    expect(response.status()).toBe(200); 
    // Console the response body
    console.log(body); 
  });