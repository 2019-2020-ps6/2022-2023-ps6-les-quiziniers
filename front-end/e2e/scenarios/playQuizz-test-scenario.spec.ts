import { test, expect } from '@playwright/test';
import { testUrl, homepageUrl } from 'e2e/e2e.config';

test.describe('Quiz play test', () => {
  test('choose user and config vision',
    async ({page}) => {
      await page.goto(homepageUrl);

      await test.step(`usertype displayed`, async () => {
        // check if the page has a div from the class "card" with two buttons
        const patientButton = await page.$('button[data-testid="patient"]');
        expect(patientButton).not.toBeNull();
      });
      await test.step(`Click patient button`, async () => {
        // Cliquer sur le bouton patient qui est dans une balise a avec l'id patient
        const patientButton = await page.$('button[data-testid="patient"]');
        expect(patientButton).not.toBeNull();
        await patientButton.click();
        await patientButton.click();
      });

      await test.step(`Check if list of patient is not void`, async () => {
        // check if list of patient is not void
        const userList = await page.$$('.user-list');
        expect(userList.length).toBeGreaterThan(0);
      });

      await test.step(`Click on the first patient`, async () => {
        // check and click on the first patient (with class name user) of the list (with class name user-list)
        const userList = await page.$$(".user-list"); // Get the list of users
        const firstUser = await userList[0].$(".button-card"); // Get the button of the first user
        await firstUser.click(); // Click on the button to go to the home page
      });

      await test.step(`menu is displayed`, async () => {
        //check if the button "Configuration de la vision" is displayed and click on it
        const button = await page.$('button[data-testid="vision"]');
        expect(button).not.toBeNull();
        await button.click();
      });

      await test.step(`Click on the button with id stade 1"`, async () => {
        // click on the button with id stade 1"
        const button = await page.$('a[data-testid="stade2"]');
        expect(button).not.toBeNull();
        await button.click();
      });

      await test.step(`Click on the button valider"`, async () => {
        // click on the button valider
        const button = await page.$('a[data-testid="valider"]');
        expect(button).not.toBeNull();
        await button.click();
      });

      await test.step(`Click on the button "Accéder aux quizz"`, async () => {
        // click on the button "Accéder aux quizz"
        const button = await page.$('button[data-testid="quizz"]');
        expect(button).not.toBeNull();
        await button.click();
      });

      await test.step(`Check if list of theme is not void`, async () => {
        // check if list of theme is not void
        const cards = await page.$$('.quiz-theme');
        expect(cards.length).toBeGreaterThan(0);
      });

      await test.step(`Click on the first theme`, async () => {
        // check and click on the first theme (with class name theme) of the list (with class name theme_list)
        const themeList = await page.$$(".theme_list"); // Get the list of themes
        const firstTheme = await themeList[0].$(".button-card"); // Get the button of the first theme
        await firstTheme.click(); // Click on the button to go to the quiz list
      });

      await test.step(`Check if list of quiz is not void`, async () => {
        // check if list of quiz is not void
        const cards = await page.$$('.quiz-list');
        expect(cards.length).toBeGreaterThan(0);
      });

      await test.step(`Click on the first quiz`, async () => {
        // click on the first quiz
        const quizList = await page.$$('div.quiz-list');
        const firstQuiz = await quizList[0].$(".button-card");
        await firstQuiz.click();
      });
    });
});

