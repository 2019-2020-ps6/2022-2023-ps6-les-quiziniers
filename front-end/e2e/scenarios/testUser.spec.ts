import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import {serverUrl} from "../../src/configs/server.config";
import {User} from "../../src/models/user.model";

// This file is here to test the playwright integration. Make the branch appear
test.describe('Initial test display', () => {
  test('testCreation User', async ({ page }) => {
    await page.goto(testUrl+"/user-list");
    await page.fill('input[id="firstName"]', 'John');
    await page.fill('input[id="lastName"]', 'Doe');
    await page.fill('input[id="photoUrl"]', 'imageJohnDoe');
    await page.click('button[type="submit"]');
    await page.goto(testUrl+"/user-list");
    const user = await page.getByTestId('John Doe imageJohnDoe');
    const userFalse = await page.getByTestId('John Da imageJohnDoe');
    expect(user).toHaveCount(1)
    expect(userFalse).toHaveCount(0)







    // Test case pass? Means the playwright setup is done! Congrats!
  });
});
