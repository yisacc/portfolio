import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://yisaccaberham.vercel.app/");
  await page.getByRole("link", { name: "Yisacc Aberham" }).click();
  await page.getByRole("link", { name: "Projects" }).click();
  await page.getByRole("link", { name: "About" }).click();

  await page.getByRole("heading", { name: "About Yisacc Aberham" }).click();
  await page
    .getByRole("img", { name: "Screenshot of the dHealth signer app." })
    .click();
  await page
    .getByText(
      "I am a software engineer with 5 years of experience in the software industry. My"
    )
    .click();
  await page.getByRole("heading", { name: "Just the highlights" }).click();
  await page
    .getByRole("heading", { name: "My favorite technologies include:" })
    .click();
  await page
    .getByText("ReactReact NativeTypescriptNext.jsNode.NETGraphQL...")
    .click();
  await page.getByRole("link", { name: "Yisacc Aberham" }).click();
  await page.getByText("Yisacc Aberham.", { exact: true }).click();
  await page.getByRole('heading', { name: 'I\'m a front-end developer.' }).click();
  await page.getByRole('heading', { name: 'Projects I\'m proud of' }).click();
  await page.getByTestId("contact-me").click();
  await page.getByRole("link", { name: "email me" }).click();
});