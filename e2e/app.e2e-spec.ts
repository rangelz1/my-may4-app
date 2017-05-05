import { MyMay4AppPage } from './app.po';

describe('my-may4-app App', () => {
  let page: MyMay4AppPage;

  beforeEach(() => {
    page = new MyMay4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
