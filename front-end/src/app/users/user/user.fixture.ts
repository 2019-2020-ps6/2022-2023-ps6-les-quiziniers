import { Page } from '@playwright/test';

export class UserFixture {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillForm(id: string, value: string): Promise<void> {
    await this.page.fill("input[id=" + id + "]", value)
  }

  async clickCreate(value:string): Promise<void> {
    await this.page.click("[data-testid="+value+"]");
  }
}
