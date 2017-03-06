import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ProductService, ShoppingCartService } from './shared/services';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CartComponent, CartResolver } from './cart';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    ProductTileComponent,
    ProductDetailsComponent,
  ],
  providers: [
    CartResolver,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
