import {test,expect} from "@playwright/test"

test.only("1. Dropdown test", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.waitForTimeout(3000)
})