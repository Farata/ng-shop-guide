import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  // TODO: Make array items readonly after upgrading tp TypeScript >2.1
  // https://blogs.msdn.microsoft.com/typescript/2016/12/07/announcing-typescript-2-1/#partial-readonly-record-and-pick
  private readonly categories = [
    'all',
    'featured',
    'latest',
    'sport'
  ];

  products: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  onTabChange(tabIndex: number) {
    const category = this.categories[tabIndex];
    this.products = this.productService.getCategory(category);
  }
}
