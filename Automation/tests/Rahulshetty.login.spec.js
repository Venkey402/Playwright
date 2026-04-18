import { test, expect } from "@playwright/test"

test.skip("1. Register to rahul shetty academy", async function ({ page }) {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

    await page.getByText("Register here").click()

    await page.locator("#firstName").fill("ximit")

    await page.locator("#lastName").fill("mittal")

    await page.locator("#userEmail").fill("ximit36912@fpxnet.com")

    await page.locator("#userMobile").fill("9030196908")

    await page.locator("[formcontrolname='occupation']").selectOption({ label: "Engineer" })

    await page.locator("[value='Male']").check()

    await page.locator("#userPassword").fill("V3nk3y402")

    await page.locator("#confirmPassword").fill("V3nk3y402")

    await page.locator("//*[text()=' I am 18 year or Older ']/..//input").check()

    await page.locator("#login").click()

    await page.pause()

})

test.only("2. Login to rahul shetty academy", async function ({ page }) {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

    await page.locator("#userEmail").fill("ximit36912@fpxnet.com")

    await page.locator("#userPassword").fill("V3nk3y402")

    await page.locator("#login").click()

    // const cardTitle = await page.locator(".card b").first().textContent()
    await page.waitForLoadState("networkidle")
    const cardTitleArr = await page.locator(".card b").allTextContents()

    const item = "ADIDAS ORIGINAL"

    await page.locator(`//*[@class='card-body']//*[text()='${item}']/../..//*[contains(text(),'Add To Cart')]`).click()

    await page.locator("//button[@routerlink='/dashboard/cart']").click()

    expect(await page.locator(".cartSection h3").textContent()).toBe(item)

    await page.locator("//button[contains(@class,'btn-primary') and text()='Checkout']").click()

    await page.locator("[value = '4542 9931 9292 2293']").fill("1233 4566 7777 7777")

    await page.locator(".input.ddl").first().selectOption({ label: "08" })

    await page.locator(".input.ddl").last().selectOption({ label: "08" })

    await page.locator("//*[contains(text(),'CVV Code')]/../input").fill("967")

    await page.locator("//*[contains(text(),'Name on Card')]/../input").fill("Rahul shetty")

    await page.locator("//*[contains(text(),'Apply Coupon')]/../input").fill("Rahul shetty academy")

    await page.getByPlaceholder("Select Country").pressSequentially("indi")

    await page.waitForLoadState("networkidle")

    const opts = await page.locator("//section/button")

    for (let i = 0; i < opts.count(); i++) {
       const text= await opts.nth(i).textContent()

       console.log(text);
       
       if(text===" India")
       {
        await opts.nth(i).click()
        break;
       }
    }

    await page.locator("//*[@class='actions']//*[contains(text(),'Place Order')]").click()

})