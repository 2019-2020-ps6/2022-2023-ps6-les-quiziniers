import { test, expect } from '@playwright/test';
import { testUrl, homepageUrl, themeUrl } from 'e2e/e2e.config';
import {E2EComponentFixture} from "../e2e-component.fixture";
import {QuestionFixture} from "../../src/app/questions/question/question.fixture";
import {UserFixture} from "../../src/app/users/user/user.fixture";
import {homePageAdminMDPFixture} from "../../src/app/home-pages/home-page-adminMDP/home-page-admin-mdp.fixture";

test.describe('Quiz play test', () => {
  test('from choose user type to play quizz', async ({page}) => {
    let q1 = await new QuestionFixture(page);
    let u1 = await new UserFixture(page);
    let h1 = await new homePageAdminMDPFixture(page);
      await page.goto(homepageUrl);
      await test.step(`click patient`, async () => {
        await h1.goToPatientPage()
      });

      await test.step(`Check if list of patient is not empty`, async () => {
        // check if there is div with class name user-list
        const cards = await page.$$('.user-list');
        expect(cards).not.toBeNull();
      });

      await test.step(`Click on the first patient`, async () => {
        // check and click on the first patient (with class name user) of the list (with class name user-list)
        const userList = await page.$$(".user-list"); // Get the list of users
        const firstUser = await userList[0].$(".button-card"); // Get the button of the first user
        await firstUser.click(); // Click on the button to go to the home page
      });

      await test.step(`menu is displayed`, async () => {
        //check if the button "Configuration de la vision" is displayed and click on it
        await u1.clickButton("vision");
      });

      await test.step(`Click on the button with id stade 1"`, async () => {
        // click on the button with id stade 1"
        await u1.clickButton("stade2");
      });

      await test.step(`Click on the button valider"`, async () => {
        // click on the button valider
        await u1.clickButton("valider");
      });

      await test.step(`Click on the button "Accéder aux quizz"`, async () => {
        // click on the button "Accéder aux quizz"
        await u1.clickButton("quizz");
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

      let buttonNext = await page.$('button[id="suiv"]');

        await test.step(`Check if basics question elements are displayed for question `, async () => {
          const answer = await page.$$('p[id="yo"]');
          expect(answer).not.toBeNull();
          const button = await page.$$('button[id="prec"]');
          expect(button).not.toBeNull();
          const image = await page.$$('.questionImage');
          expect(image).not.toBeNull();
        });

        await test.step(`Check stade is good for question`, async () => {
          // get width property in the div "card" and check if it's 70%
          const card = await page.$('.card');
          expect(card).not.toBeNull();
          const width = await card.getAttribute('style');
          expect(width).toBe('width: 70%;');
        });

        await test.step(`Check if list of answers is not void`, async () => {
          const cards = await page.$$('.answer');
          expect(cards.length).toBeGreaterThan(0);
          expect(cards.length).toBe(3);
        });

        await test.step(`Click on first answer and check if its true or false`, async () => {
          // click on first answer and check if its true or false
          test.setTimeout(120000);
          await q1.allVerif(1,"Bonne");
          await buttonNext.click();
          await q1.allVerif(2,"Mauvaise");
          await buttonNext.click();
          await q1.allVerif(3,"Mauvaise");
          await buttonNext.click();
          await q1.allVerif(4,"Bonne");
          await buttonNext.click();
          await q1.allVerif(5,"Bonne");
          const buttonTerminer = await page.$('button[id="terminer"]');
          await buttonTerminer.click();
          await q1.verifZoomCount();
        });
    });
});

