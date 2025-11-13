import { test, expect } from '@playwright/test'

test.describe('anecdotes', () => {
  test('page loads', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Create new anecdote')).toBeVisible()
    await expect(page.getByRole('button', { name: 'create' })).toBeVisible()
  })
})
