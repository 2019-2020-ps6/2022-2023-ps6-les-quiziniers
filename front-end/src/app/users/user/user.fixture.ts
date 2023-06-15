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

  async  clickButton(value:string): Promise<void> {
    await this.page.click("[data-testid="+value+"]");
  }

  async  searchBar(value: string): Promise<void> {
    const userList1 = await this.page.$$('.user-list');
    await this.page.fill("[id=inputText]", value);
    await this.page.click("[id=search]");
    const userList = await this.page.$$('.user-list');
    await expect(userList.length).toEqual(1);
    // get all h2 elements and check if the first one contains the value in parameter for each user
    const h2s = await userList[0].$$('h2');
    for (let i = 0; i < h2s.length; i++) {
      const h2 = h2s[i];
      const text = await h2.innerText();
      // split the text to get the first name and the last name
      const textSplit = text.split('\n');
      const firstName = textSplit[0];
      await expect(firstName.toLowerCase()).toContain(value.toLowerCase());
    }
  }
}
