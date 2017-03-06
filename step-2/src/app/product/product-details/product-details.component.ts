import { Component, Input } from '@angular/core';
import { Product } from '../../shared/services';

@Component({
  selector: 'ngs-product-details',
  styleUrls: [ './product-details.component.scss' ],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {

  @Input() product: Product;

  quantity: number;

  addItems() {
    console.log(`Quantity: ${this.quantity}`);
    this.quantity = null; // Reset selected number of items.
  }
}
