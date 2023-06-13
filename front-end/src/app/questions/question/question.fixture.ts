import {expect, Page, test} from '@playwright/test';
import {E2EComponentFixture} from "../../../../e2e/e2e-component.fixture";
export class QuestionFixture {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async allVerif(i: number, value: string): Promise<void> {
    await this.verifAnswer(value);
    await this.verifQuestionCount(i);
    await this.verifZoom();
  }

  async verifAnswer(value: string): Promise<void> {
    const answerList = await this.page.$$('.answer');
    const firstAnswer = await answerList[0];
    await firstAnswer.click();
    const valider = await this.page.$('#confirmbutton');
    await valider.click();
    const checkAnswer = await this.page.$('p[data-testid="playerAnswer"]');
    const textContent = await checkAnswer.innerText();
    expect(textContent).toEqual(value + " réponse !");
  }

  async verifQuestionCount(i: number): Promise<void> {
    const points = await this.page.$('#points');
    // Récupérez le texte du paragraphe
    const textContent = await points.innerText();
    expect(textContent).not.toBeNull();
    // Extrayez la valeur de this.indexQuestion+1 du texte récupéré
    const matchResult = textContent.match(/Question\s+(\d+)/);
    expect(matchResult).not.toBeNull();
    const indexQuestionValue = matchResult ? matchResult[1] : null;
    // Vérifiez que la valeur extraite est égale à this.indexQuestion+1
    expect(indexQuestionValue).toBe(i.toString());
  }

  async verifZoom(): Promise<void> {
    // click on the zoom button
    const buttonSwitchOn = await this.page.$('button[id="switch"]');
    await buttonSwitchOn.click();
    const imageElement = await this.page.$('.questionImage');
    // check if zoomable element is not void
    const imageStylesBefore = await imageElement.evaluate((el) => {
      const {transform} = getComputedStyle(el);
      return {transform};
    });
    expect(imageStylesBefore.transform).toEqual('matrix(1, 0, 0, 1, -107.667, 0)');
    // Déclenchez l'événement mouseenter sur l'image
    await imageElement.dispatchEvent('mouseenter');
    // Vérifiez que le scale de l'image est passé à 2 et le translateX à -25% après mouseenter
    const imageStylesAfterMouseEnter = await imageElement.evaluate((el) => {
      const {transform} = getComputedStyle(el);
      return {transform};
    });
    expect(imageStylesAfterMouseEnter.transform).toEqual('matrix(2, 0, 0, 2, -107.667, 0)');
    await this.page.waitForTimeout(1500);
    // Déclenchez l'événement mouseleave sur l'image
    await imageElement.dispatchEvent('mouseleave');
    // Vérifiez que le scale de l'image est revenu à 1 et le translateX à -50% après mouseleave
    const imageStylesAfterMouseLeave = await imageElement.evaluate((el) => {
      const {transform} = getComputedStyle(el);
      return {transform};
    });
    expect(imageStylesAfterMouseLeave.transform).toEqual('matrix(1, 0, 0, 1, -107.667, 0)');
    // click on the zoom button
    const buttonSwitchOff = await this.page.$('button[id="switch"]');
    await buttonSwitchOff.click();
  }

  async verifZoomCount(): Promise<void> {
    const pZoom = await this.page.$('p[id="review5"]');
    const textContent = await pZoom.innerText();
    const ZoomCount = textContent.split("\n");
    console.log(ZoomCount);
    const count = ZoomCount[1].match(/Vous avez zoomé (\d+) fois\./);
    console.log(count);
    expect(count[1]).toBe("5");
  }
}


