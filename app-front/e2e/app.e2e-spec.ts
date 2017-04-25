import { AppFrontPage } from './app.po';

describe('app-front App', () => {
  let page: AppFrontPage;

  beforeEach(() => {
    page = new AppFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
