import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdSelectModule,
  MdTabsModule,
  MdToolbarModule,
  MdGridListModule
} from '@angular/material';

import { ProductService, ShoppingCartService } from './shared/services';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CartComponent, CartResolver } from './cart';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    ProductTileComponent,
    ProductDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    MdButtonModule,
    MdGridListModule,
    MdSelectModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule,
    MdInputModule
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
