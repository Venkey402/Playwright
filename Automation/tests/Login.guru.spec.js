import {test,expect} from "@playwright/test"

test("1. Login to guru 99.com",async function ({page}) {
    await page.goto("https://demo.guru99.com/V1/index.php")
    page.setViewportSize({width:1920,height:1080})
    await page.locator("//*[@name='uid']").type("mngr658308")
    await page.locator("//*[@name='password']").type("uruvara")
    await page.locator("//*[@name='btnLogin']").click(); 
    // await page.waitForTimeout(2000)    
    await page.waitForURL()
    await expect(page).toHaveTitle("GTPL Bank Manager HomePage")
    let is = await page.url()
    expect(is.includes("Managerhomepage")).toBeTruthy()
    // await page.waitForTimeout(5000)    
})