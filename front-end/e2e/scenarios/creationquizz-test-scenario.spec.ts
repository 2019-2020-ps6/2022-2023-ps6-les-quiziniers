

/*import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Quiz test', () => {
  test('Create and verify quiz',
    async ({page}) => {
      await page.goto("http://localhost:4200/quiz-form");

      await test.step(`Quizz form is displayed`, async () => {
        // check if the page has a div from the class "card" with the text "Créer un nouveau quizz"
        const card = await page.$('div.card');
        const text = await card.innerText();
        expect(text).toContain('Créer un nouveau quizz');
      });
      await test.step(`Fill the quizz form`, async () => {
        // Créer un nouveau quiz
        await page.fill('input[id="name"]', 'Mon Quizz de Test');
        await page.selectOption('select[id="theme"]', {label: 'Géographie'});
        await page.fill('input[id="image"]', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/testing-logo-design-template-ce84480d61b3db9a8e1522a99875832f_screen.jpg?ts=1615794516');
        await page.click('button[type="submit"]');
      });

      await test.step(`Check if the quizz has been created by the form completion`, async () => {
        // Aller dans la page des thèmes
        const cards = await page.$$('div.card');
        // Vérifier chaque bouton dans les éléments 'div' avec la classe "card"
        for (const card of cards) {
          const button = await card.$('button');
          const text = await button.innerText();
          expect(text).not.toBe(' Un nom de quizz qui ne sera jamais utilisé ');
          if (text === ' Cliquez pour séléctionner : Mon Quizz de Test ') {
            expect(text).toBe(' Cliquez pour séléctionner : Mon Quizz de Test ');
            // Si le bouton est trouvé, le test réussit
            return;
          }
        }
      });
    });

    test('Create and verify question',
      args => {
        async ({page}) => {
          await page.goto("http://localhost:4200/app-quiz-theme");
          const cards = await page.$$('div.card');
          for (const card of cards) {
            // if card has the text "Mon Quizz de Test" then click on the "Modifier" button of this card
            const text = await card.innerText();
            if (text.includes('Mon Quizz de Test')) {
              const buttonmodifier = await card.$('button[class="button-card edit"]');
              expect(buttonmodifier).not.toBeNull();
              await card.click('button[class="button-card edit"]');
              break;
            }
          }
          // get into the div with the class "card" and the text "Créer une nouvelle question"
          const card = await page.$('div.card');
          const text = await card.innerText();
          expect(text).toContain('Créer une nouvelle question');
          // Fill the question form
          await page.fill('input[id="question"]', 'Quelle est la capitale de la France ?');
          await page.fill('input[id="image"]', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_105962596_stock-vector-paris-france-city-skyline-silhouette-vector-illustration.html&psig=AOvVaw0Q4Z4Z2Z4Z2Z4Z2Z4Z2Z4Z2&ust=1634178975761000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4Z7Xz_MCFQAAAAAdAAAAABAD');
          // click three times on the button "Ajouter une réponse"
          await page.click('button[id="add-answer"]');
          await page.click('button[id="add-answer"]');
          await page.click('button[id="add-answer"]');
          await page.fill('input[id="answer1"]', 'Paris');
          await page.fill('input[id="answer2"]', 'Lyon');
          await page.fill('input[id="answer3"]', 'Marseille');
          // check the correct answer (answer1) and submit the form to create the question and go back to the theme page
          await page.check('input[id="answer1"]');
          await page.click('button[type="submit"]');
          // check if the question has been created by the form completion
          const cards2 = await page.$$('div.card');
          for (const card2 of cards2) {
            const text2 = await card2.innerText();
            if (text2.includes('Quelle est la capitale de la France ?')) {
              expect(text2).toContain('Quelle est la capitale de la France ?');
              return;
            }
          }
        }
      });
});
*/
