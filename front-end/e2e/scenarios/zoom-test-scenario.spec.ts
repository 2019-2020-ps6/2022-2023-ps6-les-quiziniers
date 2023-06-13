import { test, expect } from '@playwright/test';
import {homepageUrl, testUrl} from 'e2e/e2e.config';
import {timeout} from "rxjs/operators";
import {timer} from "rxjs";


/*test.describe('zoom', () => {

  test ('zoom', async ({ page }) => {
    await page.goto(testUrl+"/question/1685952572079");
    await page.click("button[data-test-id=zoom]");
    await page.hover("h1[data-test-id=question]", {force: true});

    /*const zoomCount = await page.getAttribute("h1[data-test-id=question]", "mouseenter");
    expect(zoomCount).toEqual("1");



  });

});*/
