import {test, expect, Locator} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

import {UserFixture} from "../../src/app/users/user/user.fixture";
import {homePageAdminMDPFixture} from "../../src/app/home-pages/home-page-adminMDP/home-page-admin-mdp.fixture";

// This file is here to test the playwright integration. Make the branch appear
test.describe('Initial test display', () => {
  test('testCreation User', async ({ page }) => {
    let e2=new UserFixture(page)
    let h2=new homePageAdminMDPFixture(page)

    let user:Locator ;
    await test.step("Verification de l'ajout de l'user ",async () => {
      await page.goto(testUrl+"/home-page-usertype")
      await h2.goToAdminPage()
      await page.goto(testUrl + "/user-list");
      await e2.fillForm("firstName", 'John');
      await e2.fillForm("lastName", 'Doe');
      await e2.fillForm("photoUrl", 'imageJohnDoe');
      await e2.clickCreate("btnCreate");
      await page.goto(testUrl + "/user-list");
      const user = await page.getByTestId('John Doe imageJohnDoe');
      const userFalse = await page.getByTestId('John Da imageJohnDoe');
      await expect(user).toHaveCount(1)
      await expect(userFalse).toHaveCount(0);
    });

    await test.step("Modification de l'user ",async () => {
      await page.goto(testUrl + "/user-list");
      await page.getByTestId('bouton John Doe imageJohnDoe').click();
      await e2.fillForm("photoUrl", 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg');
      await e2.clickCreate("btnModif")
      const user = await page.getByTestId('John Doe https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg');
      await expect(user).toHaveCount(1)
      const userFalse = await page.getByTestId('John Doe imageJohnDoe');
      await expect(userFalse).toHaveCount(0);
    })



    await test.step("Suppression de l'user crée",async () => {
      await page.selectOption('select[id="id"]', {label: 'John Doe'});
      await page.getByRole('button', {name: 'Supprimer le patient'}).click();
      await expect(user).toHaveCount(0)
    });
  });
});
