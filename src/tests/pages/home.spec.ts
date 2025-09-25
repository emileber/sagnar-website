import { expect, test } from '@playwright/test'

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/SAGNAR - French Canadian Enduro Mountain Bike Team/)
  })
})
