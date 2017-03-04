import { Component } from '@angular/core';
import { ProductService } from './shared/services';

@Component({
  selector: 'ngs-app',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(productService: ProductService) {
    productService.getAll().subscribe(products => console.log(products));
  }
}
