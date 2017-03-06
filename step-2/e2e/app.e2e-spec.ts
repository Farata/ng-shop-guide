import { NgShopPage } from './app.po';

describe('ng-shop App', () => {
  let page: NgShopPage;

  beforeEach(() => {
    page = new NgShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
