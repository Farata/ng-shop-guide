import { Route } from '@angular/router';

import { HomeComponent } from './home';
import { ProductComponent } from './product';
import { CartComponent, CartResolver } from './cart';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: HomeComponent },
    ]
  },
  { path: 'products/:productId', component: ProductComponent },
  { path: 'cart', component: CartComponent,
           resolve: { products: CartResolver}
  }
];
