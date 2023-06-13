import {test, expect, Locator} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

import {UserFixture} from "../../src/app/users/user/user.fixture";

// This file is here to test the playwright integration. Make the branch appear
test.describe('Initial test display', () => {
  test('testCreation User', async ({ page }) => {
    let e2=new UserFixture(page)
    let user:Locator ;
    await test.step("Verification de l'ajout de l'user ",async () => {
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
    });

    await test.step("Modification de l'user ",async () => {
      await page.goto(testUrl + "/user-list");
      await page.getByTestId('John Doe imageJohnDoe').click();
    })
    await test.step("Suppression de l'user crée",async () => {
      await page.selectOption('select[id="id"]', {label: 'John Doe'});
      await page.getByRole('button', {name: 'Supprimer le patient'}).click();
      await expect(user).toHaveCount(0)
    });
  });
});
