import { Route } from '@angular/router';

import { CartComponent, CartResolver } from './cart';
import { HomeComponent } from './home';
import { ProductComponent } from './product';
import { CheckoutComponent } from './checkout';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: HomeComponent },
    ]
  },
  { path: 'products/:productId', component: ProductComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart',
    component: CartComponent,
    resolve: {
      products: CartResolver
    }
  }
];
