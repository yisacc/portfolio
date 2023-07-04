import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Yisacc AberhamProjectsAboutContactLinkedinGithubResume').click();
  await page.getByRole('heading', { name: 'I\'m a front-end developer.' }).click();
  await page.getByText('Passionate MERN stack developer specializing in React.js, Next.JS, Typescript, H').click();
  await page.getByText('Currently, I\'m working on personal startup( Hi-Trust Tutor) & I\'m front-end ment').click();
  await page.getByText('Currently, I\'m working on personal startup( Hi-Trust Tutor) & I\'m front-end ment').click();
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('heading', { name: 'Projects I\'m proud of' }).click();
  await page.getByRole('heading', { name: 'Latest Project' }).click();
  await page.getByRole('heading', { name: 'dHealth Signer app' }).click();
  await page.getByText('The dHealth signer app is a non custodial client (wallet) that allows users to i').click();
  await page.getByText('Latest ProjectdHealth Signer appThe dHealth signer app is a non custodial client').click();
  await page.getByRole('img', { name: 'Screenshot of dHealth Signer app' }).click();
  await page.getByRole('heading', { name: 'Assemble Connect Tenant Portal' }).click();
  await page.getByRole('img', { name: 'Screenshot of Assemble Connect Tenant Portal' }).click();
  await page.getByText('Redux').first().click();
  await page.getByRole('article').filter({ hasText: 'WAVEOC ProjectAssemble Connect Tenant Portal Assemble connect provides utility s' }).getByRole('heading', { name: 'Technologies used include:' }).click();
  await page.getByText('WAVEOC ProjectAssemble Connect Tenant Portal Assemble connect provides utility s').click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByText('Contact meI\'m always interested in hearing about new technologies, updates and j').click();
  await page.getByRole('link', { name: 'email me' }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole("link", { name: "Projects" }).click();
  await page.getByRole("link", { name: "Contact" }).click();
  const page2Promise = page.waitForEvent("popup");
  await page
    .getByRole("heading", { name: "Linkedin" })
    .getByRole("link", { name: "Linkedin" })
    .click();
  const page1 = await page1Promise;
  await page.getByRole('heading', { name: 'About Yisacc Aberham' }).click();
  await page.getByRole('heading', { name: 'Just the highlights' }).click();
  await page.getByText('I am a software engineer with 5 years of experience in the software industry. My').click();
  await page.getByText('Just the highlightsI am a software engineer with 5 years of experience in the so').click();
  await page.getByRole('img', { name: 'Screenshot of the dHealth signer app.' }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('list', { name: 'links' }).getByRole('link', { name: 'Linkedin' }).click();
  const page5 = await page5Promise;
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('heading', { name: 'Linkedin' }).getByRole('link', { name: 'Linkedin' }).click();
  const page6 = await page6Promise;
  const page7Promise = page.waitForEvent('popup');
  await page.getByRole('heading', { name: 'Github' }).getByRole('link', { name: 'Github' }).click();
  const page7 = await page7Promise;
  const page8Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Resume' }).click();
  const page8 = await page8Promise;
});