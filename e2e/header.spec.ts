import {test, expect} from '@playwright/test'

test.describe('header', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')
  })

  test('renders "I\'ve Watched App" heading', async ({page}) => {
    await expect(page.getByRole('heading', {level: 1, name: /I've Watched App/})).toBeVisible()
  })

  test('renders "Track your Animes, TV Series and Movies progress!" description', async ({page}) => {
    await expect(page.getByText(/Track your Animes, TV Series and Movies progress!/)).toBeVisible()
  })
})
