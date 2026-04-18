import { test, expect } from "@playwright/test"

test.only("1. Dropdown test", async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.getByPlaceholder("Name").fill("Venkat")
    await page.locator("//*[@id='email']").fill("venkey402@gmail.com")
    await page.locator("#state").selectOption({ label: "Andhra Pradesh" })
    let states = await page.locator("#state").textContent()
    console.log("states" + states);
    await expect(states.includes("")).toBeTruthy()
    await page.locator("//*[@class='interest'][text()='SQL']/..//input").check()
    await page.locator("#hobbies").selectOption(["Playing", "Swimming"])

    await page.waitForTimeout(3000)
})