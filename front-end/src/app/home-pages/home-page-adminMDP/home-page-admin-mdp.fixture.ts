import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class homePageAdminMDPFixture extends E2EComponentFixture {

  async goToAdminPage(): Promise<void> {
    await this.page.click("button[data-test-id=ergotherapeute]");
    await this.page.click("button[data-test-id=ergotherapeute]");
    await this.page.fill("input[type=password]", "ssoi213");
    await this.page.fill("input[type=password]", "soi213");
    await this.page.click("button[data-testid=passwordbutton]");
    await this.page.click("button[data-testid=passwordbutton]");
  }
}
