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
      await page.route('*/**/api/tmdb/search', async route => {
        const data = {
          tmdb_id: 0,
          poster_path: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5KGQEaE519pOD9DltmWBo6OcuH1.jpg',
          release_date: '2016-12-31',
          title: 'title',
          media_type: 'tv|movie'
        }
        await route.fulfill({json: data})
      })

      await page.getByPlaceholder(/type anything/).fill('matrix')
      await expect(page.getByRole('listitem')).toHaveCount(4)
    })

    test('matched items have an "add" button', ({page}) => {})
    test('clicking on "add" button adds the item to added list', ({page}) => {})
  })
})
