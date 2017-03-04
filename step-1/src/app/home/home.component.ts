import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  products: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }
}
