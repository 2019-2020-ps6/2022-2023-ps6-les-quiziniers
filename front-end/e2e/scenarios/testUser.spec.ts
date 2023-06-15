import {test, expect, Locator} from '@playwright/test';
import {homepageUrl, testUrl} from 'e2e/e2e.config';

import {UserFixture} from "../../src/app/users/user/user.fixture";
import {homePageAdminMDPFixture} from "../../src/app/home-pages/home-page-adminMDP/home-page-admin-mdp.fixture";

// This file is here to test the playwright integration. Make the branch appear
test.describe('Initial test display', () => {
  test('testCreation User', async ({ page }) => {
    let e2=new UserFixture(page)
    let h2=new homePageAdminMDPFixture(page)

    let user:Locator ;
    await test.step("Verification de l'ajout de l'user ",async () => {
      await page.goto(testUrl+"/home-page-usertype");
      await h2.goToAdminPage();
      await e2.clickButton("manageUser");
      await e2.fillForm("firstName", 'John');
      await e2.fillForm("lastName", 'Doe');
      await e2.fillForm("photoUrl", 'imageJohnDoe');
      await e2.clickButton("btnCreate");
      await e2.clickButton("manageUser");
      await e2.verifUser("John","Doe","imageJohnDoe",1);
      await e2.verifUser("John","Da","imageJohnDoe",0);
    });

    await test.step("Modification de l'user ",async () => {
      await page.getByTestId('bouton John Doe imageJohnDoe').click();
      await e2.fillForm("photoUrl", 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg');
      await e2.clickButton("btnModif")
      await e2.clickButton("manageUser");
      await e2.verifUser("John","Doe","https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",1)
      await e2.verifUser("John","Doe","imageJohnDoe",0);
    })

    await test.step("Suppression de l'user crée",async () => {
      await page.selectOption('select[id="id"]', {label: 'John Doe'});
      await page.getByRole('button', {name: 'Supprimer le patient'}).click();
      await e2.clickButton("manageUser");
      await e2.verifUser("John","Doe","https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",0)
    });

    await test.step(`search a patient in the research bar`, async () => {
      await page.goto(homepageUrl);
      await h2.goToPatientPage();
      await e2.searchBar("michel")
    });
  });
});
