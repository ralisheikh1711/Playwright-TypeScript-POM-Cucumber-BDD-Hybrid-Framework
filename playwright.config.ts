import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,            // max time per test (30 s). Underscore is just for readability
  retries: 1,                 // retry a failed test once
  reporter: 'html',

  use: {
    headless: true,           // false = show the browser
    baseURL: 'https://demo.playwright.dev',   // then page.goto('/todomvc') works
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});