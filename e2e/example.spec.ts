import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://app:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/I've Watched App/);
});