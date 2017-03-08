import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { ShoppingCartService } from './shared/services';

@Component({
  selector: 'ngs-app',
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
      private shoppingCartService: ShoppingCartService,
      private domSanitizer: DomSanitizer,
      private iconRegistry: MdIconRegistry) {
    this.registerIcons(new Map<string, string>([
      [ 'logo', 'assets/ngshop-logo.svg' ]
    ]));
  }

  get cartTotalQuantity(): number {
    // null removes attribute from the element, so the badge is not displayed.
    return this.shoppingCartService.totalQuantity || null;
  }

  private registerIcons(icons: Map<string, string>) {
    icons.forEach((url, id) => {
      const safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
      this.iconRegistry.addSvgIconInNamespace('ngs', id, safeUrl);
    });
  }
}
