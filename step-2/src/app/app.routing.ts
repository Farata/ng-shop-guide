import { Route } from '@angular/router';

import { HomeComponent } from './home';
import { ProductComponent } from './product';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'products/:productId', component: ProductComponent }
];
