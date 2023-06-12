import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import {serverUrl} from "../../src/configs/server.config";
import {User} from "../../src/models/user.model";
import {E2EComponentFixture} from "../e2e-component.fixture";

// This file is here to test the playwright integration. Make the branch appear
test.describe('Initial test display', () => {
  test('testCreation User', async ({ page }) => {
    let e2=new E2EComponentFixture(page)
    await page.goto(testUrl + "/user-list");
    await e2.fillForm("firstName", 'John');
    await e2.fillForm("lastName", 'Doe');
    await e2.fillForm("photoUrl", 'imageJohnDoe');
    await e2.clickCreate();
    await page.goto(testUrl + "/user-list");
    const user = await page.getByTestId('John Doe imageJohnDoe');
    const userFalse = await page.getByTestId('John Da imageJohnDoe');
    await expect(user).toHaveCount(1)
    await expect(userFalse).toHaveCount(0);
    await page.selectOption('select[id="id"]', {label: 'John Doe'});
    await page.getByRole('button', {name: 'Supprimer le patient'}).click();
    await expect(user).toHaveCount(0)




  });
});
