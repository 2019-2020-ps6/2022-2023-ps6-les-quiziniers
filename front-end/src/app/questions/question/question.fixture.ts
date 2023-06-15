import {expect, Page, test} from '@playwright/test';
import {E2EComponentFixture} from "../../../../e2e/e2e-component.fixture";
export class QuestionFixture {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async allVerif(i: number, value: string): Promise<void> {
    await this.verifQuestionCount(i);
    await this.verifZoom();
    await this.verifAnswer(value);
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
    const imageElement = await this.page.$('.questionImage');
    expect(imageElement).not.toBeNull();

    //check if image is zoomable when zoom button is switched off
    console.log(imageElement);
    const transformBeforeSwitchButton = await imageElement.getAttribute('style');
    console.log(transformBeforeSwitchButton);
    const matchResult4 = transformBeforeSwitchButton.match(/scale\((\d+)\)/);
    console.log(matchResult4);
    const scaleValueBeforeSwitchButton = matchResult4 ? matchResult4[1] : null;
    expect(scaleValueBeforeSwitchButton).not.toBeNull();
    expect(scaleValueBeforeSwitchButton).toBe('1');
    await imageElement.dispatchEvent('mouseleave');

    // click on the zoom button to switch it on
    const buttonSwitchOn = await this.page.$('button[id="switch"]');
    await buttonSwitchOn.click();

    //check if image is zoomable when zoom button is switched on but mouse is not on the image
    const transform = await imageElement.getAttribute('style');
    //recuperer la valeur dans le scale de transform avec un regex
    const matchResult = transform.match(/scale\((\d+)\)/);
    console.log(matchResult[1]);
    const scaleValueBeforeEnter = matchResult ? matchResult[1] : null;
    expect(scaleValueBeforeEnter).not.toBeNull();
    expect(scaleValueBeforeEnter).toBe('1');

    //check if image is zoomable when zoom button is switched on and mouse is on the image
    await imageElement.dispatchEvent('mouseenter');
    const transformAfterEnter = await imageElement.getAttribute('style');
    const matchResult2 = transformAfterEnter.match(/scale\((\d+)\)/);
    console.log(matchResult2[1]);
    const scaleValueAfterEnter = matchResult2 ? matchResult2[1] : null;
    expect(scaleValueAfterEnter).not.toBeNull();
    expect(scaleValueAfterEnter).toBe('2');

    //wait 1500ms to add 1 to zoomCount
    await this.page.waitForTimeout(1500);
    await imageElement.dispatchEvent('mouseleave');

    //check if image is zoomable when zoom button is switched on but mouse is not on the image
    const transformAfterLeave = await imageElement.getAttribute('style');
    const matchResult3 = transformAfterLeave.match(/scale\((\d+)\)/);
    console.log(matchResult3[1]);
    const scaleValueAfterLeave = matchResult3 ? matchResult3[1] : null;
    expect(scaleValueAfterLeave).not.toBeNull();
    expect(scaleValueAfterLeave).toBe('1');

    // click on the zoom button to switch it off
    const buttonSwitchOff = await this.page.$('button[id="switch"]');
    await buttonSwitchOff.click();
  }

  async verifZoomCount(): Promise<void> {
    const pZoom = await this.page.$('.review');
    const textContent = await pZoom.innerText();
    const ZoomCount = textContent.split("\n");
    console.log(ZoomCount);
    const count = ZoomCount[1].match(/Vous avez zoomé (\d+) fois\./);
    console.log(count);
    expect(count[1]).toBe("5");
  }
}


