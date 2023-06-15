// noinspection BadExpressionStatementJS

import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { Browser, BrowserContext } from 'playwright';
import {homePageAdminMDPFixture} from "../../src/app/home-pages/home-page-adminMDP/home-page-admin-mdp.fixture";
import {E2EComponentFixture} from "../e2e-component.fixture";
import {UserFixture} from "../../src/app/users/user/user.fixture";
const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.
test.describe('Quiz test', () => {
  test('Create a quiz, add a question, edit then delete it',async ({page}) => {
    test.setTimeout(120000);
    let h2 = new homePageAdminMDPFixture(page);
    let e2 = new UserFixture(page);
    await test.step(`Create quiz`, async () => {
      await page.goto(testUrl + "/home-page-usertype");
      await h2.goToAdminPage();
      await e2.clickButton('createquizzbutton');
    });
    await test.step(`Fill the quizz form`, async () => {
        // Créer un nouveau quiz
        await page.fill('input[id="name"]', 'Mon Quizz de Test');
        await page.selectOption('select[id="theme"]', {label: 'Géographie'});
        await page.fill('input[id="image"]', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/testing-logo-design-template-ce84480d61b3db9a8e1522a99875832f_screen.jpg?ts=1615794516');
        await page.click('button[type="submit"]');
    });

    await test.step(`Check if the quizz has been created by the form completion`, async () => {
        await page.goto("http://localhost:8080/app-quiz-theme");
        await page.click('button:has-text(" Cliquez pour séléctionner : Géographie ")');
        const card = await page.$('div.card:has-text("Mon Quizz de Test")');
        expect(card).not.toBeNull();
    });
    await test.step(`Create question to a quizz`, async () => {
          let deserializedStorage = {};
          let context = await page.context();
          await context.addInitScript((deserializedStorage) => {
            for (const key in deserializedStorage) {
              localStorage.setItem(key, deserializedStorage[key]);
            }
          }, deserializedStorage);
          await page.goto("http://localhost:8080/home-page-adminmdp");
          await page.getByTestId('passwordinput').type("soi213");
          await page.getByTestId('passwordbutton').click();
          await page.getByRole('button', {name: 'Gestion des thèmes'}).click();
          await page.getByRole('button', {name: 'Cliquez pour séléctionner : Géographie'}).click();
          const div = page.getByText('Cliquez pour séléctionner : Mon Quizz de Test SupprimerModifier');
          await div.getByTestId('editquizbutton').click();
          await page.getByLabel('Intitulé').type("...Quelle est la capitale de la France ?");
          await page.getByTestId('questionformimage').type("https://www.thetrainline.com/cms/media/1360/france-eiffel-tower-paris.jpg?mode=crop&width=1080&height=1080&quality=70");
          await page.getByRole('button', {name: 'Ajouter une réponse'}).click();
          await page.fill('input[id="answer0"]', 'Paris');
          await page.fill('input[id="answer1"]', 'Lyon');
          await page.fill('input[id="answer2"]', 'Marseille');
          await page.fill('input[id="answer3"]', 'Toulouse');
          await page.getByRole('checkbox').first().check();
          await page.getByRole('button', {name: 'Créer la question'}).click();
    });
    await test.step(`Verify that question has been created`, async () => {
          await page.goto("http://localhost:8080/app-quiz-theme");
          await page.click('button:has-text(" Cliquez pour séléctionner : Géographie ")');
          await page.click('button:has-text(" Cliquez pour séléctionner : Mon Quizz de Test ")');
          // check if the question card
          const questionlabel = page.getByText('lle est la capitale de la France ?');
          expect(questionlabel).not.toBeNull();
          const firstanswer = page.getByText('Paris');
          expect(firstanswer).not.toBeNull();
    });

    await test.step(`Edit the quizz`, async () => {
        await page.goto("http://localhost:8080/home-page-admin");
        await page.getByRole('button', {name: 'Gestion des Quizzs'}).click();
        await page.getByRole('button', {name: 'Cliquez pour séléctionner : Géographie'}).click();
        const div = page.getByText('Cliquez pour séléctionner : Mon Quizz de Test SupprimerModifier');
        await div.getByTestId('editquizbutton').click();
        await page.fill('input[id="name"]', 'Nouveau nom de test');
        await page.selectOption('select[id="theme"]', {label: 'Musique'});
        await page.fill('input[id="image"]', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/testing-logo-design-template-ce84480d61b3db9a8e1522a99875832f_screen.jpg?ts=1615794516');
        await page.getByTestId("confirmereditquiz").click();
    });
    await test.step(`Verify that quizz has been edited`, async () => {
        await page.goto("http://localhost:8080/app-quiz-theme");
        await page.click('button:has-text(" Cliquez pour séléctionner : Musique ")');
        const card = await page.$('div.card:has-text("Nouveau nom de test")');
        expect(card).not.toBeNull();
    });

    await test.step(`Delete the quizz after check`, async () => {
        await page.goto("http://localhost:8080/home-page-adminmdp");
        await page.getByTestId('passwordinput').type("soi213");
        await page.getByTestId('passwordbutton').click();
        await page.getByTestId('managequizzbutton').click();
        await page.getByText("Cliquez pour séléctionner : Musique").click();
        // for each divs with class quiz in the page we check if the name of the quiz is the same as the one we want to delete and if it is we click on the delete button
        const div = page.getByText('Cliquez pour séléctionner : Nouveau nom de test SupprimerModifier');
        await div.getByTestId('deletequizbutton').click();
    });
    await test.step(`Verify that the quizz has been deleted`, async () => {
        await page.goto("http://localhost:8080/app-quiz-theme");
        await page.click('button:has-text(" Cliquez pour séléctionner : Musique ")');
        const isQuizzDeleted = !(await page.$(`button:has-text("${"Cliquez pour séléctionner : Nouveau nom de test"}")`));
        expect(isQuizzDeleted).toBe(true);
    });
  });
});
