import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ShoppingCartService } from '../shared/services';

@Component({
  selector: 'ngs-cart',
  styleUrls: [ './cart.component.scss' ],
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  products: Product[];
  quantity: any;

  constructor(private cart: ShoppingCartService, route: ActivatedRoute) {
    this.products = route.snapshot.data['products'];
    this.quantity = this.cart.getItems();
  }

  get total() {
    const cartItems = this.cart.getItems();
    return Object.keys(cartItems).reduce((total, productId) => {
      const product = this.products.find(p => p.id === productId);
      const quantity = cartItems[productId];
      return total + product.price * quantity;
    }, 0);
  }

  removeItem(productId: string) {
    const index = this.products.findIndex(p => p.id === productId);
    this.cart.removeItem(productId);
    this.products.splice(index, 1);
  }

}
