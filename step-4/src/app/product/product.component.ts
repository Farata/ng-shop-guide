import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Every module is responsible for importing RxJS operators it needs. Every
// operator contributes to the bundle size, so initially no operators are
// included.
import 'rxjs/add/operator/mergeMap';

import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-product',
  styleUrls: [ './product.component.scss' ],
  templateUrl: './product.component.html'
})
export class ProductComponent {

  product: Product;

  constructor(productService: ProductService, route: ActivatedRoute) {
    // Router reuses existing instance of ProductComponent when only productId
    // parameter changes. Subscribe to `ActivatedRoute.params` observable in
    // order to update page when productId changes.
    route.params
      .mergeMap(({productId}) => productService.getProductById(productId))
      .subscribe(product => this.product = product);
  }

}
