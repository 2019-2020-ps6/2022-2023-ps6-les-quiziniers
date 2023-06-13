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
    expect(imageElement).not.toBeNull();
    const transform = await imageElement.getAttribute('style');
    expect(transform).toBe('transform: scale(1) translateX(-50%); z-index: 10; width: 24%;');
    await imageElement.dispatchEvent('mouseenter');
    const transformAfterEnter = await imageElement.getAttribute('style');
    expect(transformAfterEnter).toBe('transform: scale(2) translateX(-25%); z-index: 11; width: 24%;');
    //wait 1500ms to add 1 to zoomCount
    await this.page.waitForTimeout(1500);
    await imageElement.dispatchEvent('mouseleave');
    const transformAfterLeave = await imageElement.getAttribute('style');
    expect(transformAfterLeave).toBe('transform: scale(1) translateX(-50%); z-index: 10; width: 24%;');
    // check if zoomable element is not void
    /*const imageStylesBeforeEnter = await imageElement.evaluate((element) =>
      getComputedStyle(element).getPropertyValue('transform')
    );
    expect(imageStylesBeforeEnter).toBe('scale(1) translate(-50%)');
    // Déclenchez l'événement mouseenter sur l'image
    await imageElement.dispatchEvent('mouseenter');
    // Vérifiez que le scale de l'image est passé à 2 et le translateX à -25% après mouseenter
    const imageStyleAfterEnter = await imageElement.evaluate((element) =>
      getComputedStyle(element).getPropertyValue('transform')
    );
    expect(imageStyleAfterEnter).toBe('scale(2) translate(-25%)');

    // Effectuez l'événement "mouseleave" sur l'élément image
    await imageElement.dispatchEvent('mouseleave');

    // Vérifiez le CSS après le "mouseleave"
    const ImageStyleAfterLeave = await imageElement.evaluate((element) =>
      getComputedStyle(element).getPropertyValue('transform')
    );
    expect(ImageStyleAfterLeave).toBe('scale(1) translateX(-50%)');*/
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


