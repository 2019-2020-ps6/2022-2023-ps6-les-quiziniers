import { test, expect } from '@playwright/test';
import {homepageUrl, testUrl} from 'e2e/e2e.config';
import {themeFixture} from "../../src/app/quizzes/theme/theme.fixture";
import {homePageAdminMDPFixture} from "../../src/app/home-pages/home-page-adminMDP/home-page-admin-mdp.fixture";

test.describe('theme', () => {
  test('theme creation', async ({page}) => {
    await page.goto(homepageUrl);
    //create all fixtures
    const themeFixture1 = new themeFixture(page);
    const homePageAdminMDPFixture1 = new homePageAdminMDPFixture(page);

    await test.step('create theme', async () => {

      await homePageAdminMDPFixture1.goToAdminPage();
      await themeFixture1.clickButton("Gestion_des_thèmes");
      await themeFixture1.fillForm("name", "Thème Test");
      await themeFixture1.fillForm("image", "https://aides-territoires-prod.s3.fr-par.scw.cloud/aides-territoires-prod/upload/Shutterstock_Lisa_Kolbasa.png");
      await themeFixture1.clickButton("Créer_le_thème");

      await themeFixture1.goToPage("theme-form");
      const createdTheme = await page.getByText("Cliquez pour séléctionner : Thème Test");
      expect(createdTheme).toBeVisible();
    });
    await test.step('delete theme', async () => {
      await page.selectOption('select[id="id"]', {label: 'Thème Test'});
      await page.getByRole("button", {name: "Supprimer le thème"}).click();

      const deletedTheme = await page.getByText("Cliquez pour séléctionner : Thème Test");
      expect(deletedTheme).not.toBeVisible();
    });

  });

});
