import {test, expect} from '@playwright/test'

test.describe('search form', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/')
  })

  test('renders a form for search items', async ({page}) => {
    await expect(page.getByRole('form')).toBeVisible()
  })

  test.describe('when searching', () => {
    test('shows items that match search', async ({page}) => {
      await page.route('*/**/api/search*', async route => {
        const json = {
          data: [
            {
              tmdbId: 0,
              posterUrl:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5KGQEaE519pOD9DltmWBo6OcuH1.jpg',
              releaseYear: '2016',
              title: 'title',
              mediaType: 'movie',
            },
          ],
        }
        await route.fulfill({json})
      })

      await page.getByPlaceholder(/type anything/i).fill('matrix')
      await expect(page.getByRole('listitem')).toHaveCount(1)
    })

    test('matched items have an "add" button', async ({page}) => {
      await page.route('*/**/api/search*', async route => {
        const json = {
          data: [
            {
              tmdbId: 0,
              posterUrl:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5KGQEaE519pOD9DltmWBo6OcuH1.jpg',
              releaseYear: '2016',
              title: 'title',
              mediaType: 'movie',
            },
          ],
        }
        await route.fulfill({json})
      })

      await page.getByPlaceholder(/type anything/i).fill('matrix')
      const listItem = page.getByRole('listitem')
      await expect(listItem.getByRole('button', {name: /add/i})).toBeVisible()
    })

    test('clicking on "add" button adds the item to added list', ({page}) => {})
  })
})
