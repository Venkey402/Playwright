import { test, expect } from "@playwright/test"

test("1. Update naukri account's profile summary", async function ({ page }) {

    await page.goto("https://www.naukri.com/");

    await page.setViewportSize({ width: 1920, height: 1080 })

    await page.locator("[title='Jobseeker Login']").click();

    await page.getByPlaceholder("Enter your active Email ID / Username").fill("venkey402@gmail.com")

    await page.getByPlaceholder("Enter your password").fill("9030196907")

    await page.locator(".loginButton").click()

    expect(page.getByTitle("Venkat Mamidi")).toBeTruthy()

    await page.locator(".view-profile-wrapper a").click()



    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.getByRole("button", { name: "Update resume" }).click()
    ]);

    await fileChooser.setFiles("C:\\Venkat_Personal\\Playwright\\Automation\\Venkatarao_Mamidi.pdf");

    await page.locator(".resumeHeadline  .edit").click()
    
    const resumeHeadline = "13.5 Years experience in automation testing using selenium with java, playwright manual testing and API testing using RestAssured"

    const currentResumeHeadline = await page.locator("#resumeHeadlineTxt").textContent()

    if (resumeHeadline === currentResumeHeadline) {

        await page.locator("#resumeHeadlineTxt").fill(resumeHeadline + ".")

    } else {
        await page.locator("#resumeHeadlineTxt").fill(resumeHeadline)
    }

    await page.locator("//button[text()='Save']").click()

    expect(page.getByText("Resume Headline has been successfully saved.")).toBeTruthy()

    await page.close()
}

)