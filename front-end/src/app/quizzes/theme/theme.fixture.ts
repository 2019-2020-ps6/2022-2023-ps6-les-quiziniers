import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import {homePageAdminMDPFixture} from "../../home-pages/home-page-adminMDP/home-page-admin-mdp.fixture";

export class themeFixture extends E2EComponentFixture{


  async clickButton(id: String): Promise<void> {
    await this.page.click("button[id="+id+"]")
  }

  async fillForm(id: string, value: string): Promise<void> {
    await this.page.fill("input[id=" + id + "]", value)
  }

  async goToPage(admin: string) {
    return this.page.goto("http://localhost:8080/"+admin);
  }

}
