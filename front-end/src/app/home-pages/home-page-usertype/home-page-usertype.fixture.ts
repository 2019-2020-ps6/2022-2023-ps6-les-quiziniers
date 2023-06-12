import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import {Page} from "@playwright/test";

export class HomePageUserTypeFixture extends E2EComponentFixture {
  getHomePageUserType() {
    return this.page.waitForSelector('app-home-page-usertype');
  }

  getPatientButton() {
    return this.page.getByRole('button', { name: 'Patient' });
  }

  clickPatientButton() {
    return this.getPatientButton().click();
  }
}
