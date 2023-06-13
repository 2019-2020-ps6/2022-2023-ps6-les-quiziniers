import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import {Page} from "@playwright/test";

export class homePageAdminMDPFixture extends E2EComponentFixture {

  constructor(page:Page) {
    super(page);
  }
  async goToAdminPage(): Promise<void> {
    await this.page.click("button[data-test-id=ergotherapeute]");
    await this.page.click("button[data-test-id=ergotherapeute]");
    await this.page.fill("input[type=password]", "ssoi213");
    await this.page.fill("input[type=password]", "soi213");
    await this.page.click("button[id=Entrez_le_mot_de_passe]");
    await this.page.click("button[id=Entrez_le_mot_de_passe]");
  }
}
