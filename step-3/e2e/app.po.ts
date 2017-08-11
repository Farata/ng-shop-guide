import { browser, by, element } from 'protractor';

export class NgShopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngs-root h1')).getText();
  }
}
