import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdToolbarModule, MdGridListModule, MdTabsModule,
  MdButtonModule, MdSelectModule, MdIconModule, MdInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {ProductService} from './shared/services';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent, ProductTileComponent  } from './home';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductComponent, ProductDetailsComponent } from './product';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShoppingCartService} from "./shared/services";
import { CartComponent, CartResolver } from './cart';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdGridListModule,
    MdTabsModule,
    MdToolbarModule,
    MdIconModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdSelectModule,
    MdInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, ShoppingCartService, CartResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
