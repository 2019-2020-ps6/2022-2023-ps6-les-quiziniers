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

      //initialisation d'une variable pour compter le nombre de question
      let i = 1;
      let buttonNext = await page.$('button[id="suiv"]');
      while (await page.$('#prec') !== null) {
        await test.step(`Check if basics question elements are displayed for question `+ i, async () => {
          const question = await page.$$('.quest');
          expect(question).not.toBeNull();
          const answer = await page.$$('p[id="yo"]');
          expect(answer).not.toBeNull();
          const button = await page.$$('button[id="prec"]');
          expect(button).not.toBeNull();
          if(await page.$('#suiv') !== null){
            buttonNext = await page.$('button[id="suiv"]');
            expect(buttonNext).not.toBeNull();
          }
          else if(await page.$('#terminer') !== null){
            buttonNext = await page.$('button[id="terminer"]');
            expect(buttonNext).not.toBeNull();
          }
          const image = await page.$$('.questionImage');
          expect(image).not.toBeNull();
          const confirmbutton = await page.$$('button[id="confirmbutton"]');
          expect(confirmbutton).not.toBeNull();
        });

        await test.step(`Check stade is good for question `+i, async () => {
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

        await test.step(`Check if counter question works`, async () => {
          const points = await page.$('#points');
          // Récupérez le texte du paragraphe
          const textContent = await points.innerText();
          console.log(textContent);
          expect(textContent).not.toBeNull();
          // Extrayez la valeur de this.indexQuestion+1 du texte récupéré
          const matchResult = textContent.match(/Question\s+(\d+)/);
          console.log(matchResult[1]);
          expect(matchResult).not.toBeNull();
          const indexQuestionValue = matchResult ? matchResult[1] : null;
          console.log(indexQuestionValue);
          // Vérifiez que la valeur extraite est égale à this.indexQuestion+1
          expect(indexQuestionValue).toBe(i.toString());
        });

        await test.step(`Check and Click on to switch on zoom button for question `+i, async () => {
          // click on the zoom button
          const button = await page.$('button[id="switch"]');
          expect(button).not.toBeNull();
          await button.click();
        });

        await test.step(`Zoom on zoomable element`, async () => {
          const imageElement = await page.$('.questionImage');
          // check if zoomable element is not void
          const imageStylesBefore = await imageElement.evaluate((el) => {
            const { transform } = getComputedStyle(el);
            return { transform };
          });
          expect(imageStylesBefore.transform).toEqual('matrix(1, 0, 0, 1, -107.667, 0)');

          // Déclenchez l'événement mouseenter sur l'image
          await imageElement.dispatchEvent('mouseenter');

          // Vérifiez que le scale de l'image est passé à 2 et le translateX à -25% après mouseenter
          const imageStylesAfterMouseEnter = await imageElement.evaluate((el) => {
            const { transform } = getComputedStyle(el);
            return { transform };
          });
          expect(imageStylesAfterMouseEnter.transform).toEqual('matrix(2, 0, 0, 2, -107.667, 0)');

          // Déclenchez l'événement mouseleave sur l'image
          await imageElement.dispatchEvent('mouseleave');

          // Vérifiez que le scale de l'image est revenu à 1 et le translateX à -50% après mouseleave
          const imageStylesAfterMouseLeave = await imageElement.evaluate((el) => {
            const { transform } = getComputedStyle(el);
            return { transform };
          });
          expect(imageStylesAfterMouseLeave.transform).toEqual('matrix(1, 0, 0, 1, -107.667, 0)');
        });

        await test.step(`Check and Click to switch off zoom button for question `+i, async () => {
          // click on the zoom button
          const button = await page.$('button[id="switch"]');
          expect(button).not.toBeNull();
          await button.click();
        });

        await test.step(`Click on "suivant" ou "terminer" to pass to question `+i, async () => {
          // click on the button suivant
          await buttonNext.click();
        });

        i++;
      }
    });
});

