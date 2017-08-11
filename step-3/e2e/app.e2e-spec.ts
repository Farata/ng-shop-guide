import { NgShopPage } from './app.po';

describe('ng-shop App', () => {
  let page: NgShopPage;

  beforeEach(() => {
    page = new NgShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ngs!');
  });
});
