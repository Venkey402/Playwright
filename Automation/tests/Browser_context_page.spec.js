import {test,expect} from "@playwright/test"
test("1. Test browser only", async function({browser}){
const context = browser.newContext()

})

test("2. Test browser-context only", async function({browser}){
const context = await browser.newContext()
const page = await context.newPage();
})

test.only("3. Test browser-context-page only", async function({browser}){
const context = await browser.newContext()
const page = await context.newPage();
await page.setViewportSize({width:1920,height:1080})
await page.goto("https://playwright.dev/docs/test-reporters#custom-reporters")
await page.pause()
})