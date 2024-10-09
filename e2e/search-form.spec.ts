import {test, expect} from '@playwright/test'
import {watchItemFixture} from '../fixtures'

test.describe('search form', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')
  })

  test('renders a form for search items', async ({page}) => {
    await expect(page.getByRole('form')).toBeVisible()
  })

  test.describe('when searching', () => {
    test.describe('when has matches', () => {
      test('shows items that match search', async ({page}) => {
        await page.route('*/**/api/shows/search*', async route => {
          const json = {
            data: [watchItemFixture],
          }
          await route.fulfill({json})
        })

        await page.getByPlaceholder(/type anything/i).fill('matrix')
        await expect(page.getByRole('listitem')).toHaveCount(1)
      })

      test('matched items have an "add" button', async ({page}) => {
        await page.route('*/**/api/shows/search*', async route => {
          const json = {
            data: [watchItemFixture],
          }
          await route.fulfill({json})
        })

        await page.getByPlaceholder(/type anything/i).fill('matrix')
        const listItem = page.getByRole('listitem')
        await expect(listItem.getByRole('button', {name: /add/i})).toBeVisible()
      })

      test('clicking on "add" button calls add watched api', async ({page}) => {
        const searchTerm = watchItemFixture.title
        const reqSearchPromise = page.route(
          '*/**/api/shows/search*',
          async route => {
            const json = {
              data: [watchItemFixture],
            }
            await route.fulfill({json})
          }
        )

        const reqPromise = page.waitForRequest('*/**/api/shows/watched_items')
        await page.getByPlaceholder(/type anything/i).fill(searchTerm)
        await reqSearchPromise
        const listItem = page
          .getByRole('listitem')
          .filter({has: page.getByText(searchTerm)})
        await listItem.getByRole('button', {name: /add/i}).click()
        const req = await reqPromise
        expect(req.failure()).toBeFalsy()
      })
    })

    test.describe('when has not matches', () => {
      test('renders a message', async ({page}) => {
        await page.route('*/**/api/shows/search*', async route => {
          const json = {
            data: [],
          }
          await route.fulfill({json})
        })

        await expect(page.getByText(/no results found/i)).not.toBeVisible()
        await page.getByPlaceholder(/type anything/i).fill('matrix')
        await expect(page.getByText(/no results found/i)).toBeVisible()
      })
    })
  })
})
