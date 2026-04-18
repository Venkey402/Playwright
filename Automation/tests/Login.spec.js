import {test,expect} from "@playwright/test"

test("1. test", async function({page}){

 await page.goto("https://demo.guru99.com/")
 let pagetitle = await page.title()
 console.log("Page title is : ",pagetitle); 
 expect(pagetitle).toBe("Guru99 Bank Home Page")
 await page.screenshot()
})

test("2.test",async function name({page}) {
  await  page.goto("https://demo.guru99.com/")
})

test("3.test - expect", async function({page})
{
    expect(100).toBe(100)
    expect("Venkat").toContain("nkat")
    expect(10>1).toBeTruthy();
    expect(10>20).toBeFalsy();
})

test("4.test - expect- false", async function({page}) {
    expect(100).toBe(101)
})