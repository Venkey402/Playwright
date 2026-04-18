import { test, expect } from "@playwright/test"

test("1.Keyboard actions", async function ({ page }) {
    await page.goto("https://www.google.com/")
    await page.locator("//*[@title='Search']").fill("Mukesh otwani")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(3000)

}
)