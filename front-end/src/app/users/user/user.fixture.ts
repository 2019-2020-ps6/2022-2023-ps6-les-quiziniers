import {expect, Page} from '@playwright/test';

export class UserFixture {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async setPage(page:Page){
    this.page=page;
  }
  async fillForm(id: string, value: string): Promise<void> {
    await this.page.fill("input[id=" + id + "]", value)
  }
  async verifUser(prenom:string,nom:string,url:string,nb:number){
    const user = await this.page.getByTestId(prenom+" "+nom+" "+url);
    await expect(user).toHaveCount(nb)
  }

  async clickCreate(value:string): Promise<void> {
    await this.page.click("[data-testid="+value+"]");
  }
}
